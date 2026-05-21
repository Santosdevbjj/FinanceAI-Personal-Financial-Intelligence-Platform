# Database Operations, Performance & Production Engineering - Parte 4 

Esta seção cobre a camada operacional do banco de dados do FinanceAI.

Inclui:

- Query optimization
- Index strategy
- Partitioning
- Read replicas
- Redis caching
- Backup
- Disaster Recovery
- Encryption
- Migration strategy
- Prisma guidelines
- Monitoring
- Sharding roadmap

---

# 25. PERFORMANCE STRATEGY

A plataforma FinanceAI foi desenhada para:

- baixa latência
- alta consistência
- alta disponibilidade
- crescimento horizontal
- analytics em tempo real
- workloads híbridos OLTP + OLAP

---

## Performance Targets

| Métrica | Target |
|---|---|
| Login | < 200ms |
| Dashboard load | < 500ms |
| Transaction insert | < 100ms |
| Balance calculation | < 300ms |
| AI insight query | < 1s |
| Report generation | < 3s |
| Search transactions | < 500ms |

---

# 26. INDEXING STRATEGY

Indexação é crítica para performance.

---

## Tipos usados

### B-Tree

Default para:

- IDs
- dates
- foreign keys
- ordering

---

### GIN

Usado para:

- JSONB
- tags
- AI payload
- metadata search

---

### Composite Indexes

Para queries reais de produção.

Ex:

```sql
(user_id, transaction_date DESC)
(account_id, transaction_date DESC)
(user_id, status)
(user_id, created_at DESC)
```

---

### Partial Indexes

Para performance em dados filtrados.

Exemplo:

```sql
CREATE INDEX idx_active_accounts
ON accounts(user_id)
WHERE is_active = true;
```

---

### Expression Indexes

Para analytics.

Exemplo:

```sql
CREATE INDEX idx_transaction_month
ON transactions (
    DATE_TRUNC('month', transaction_date)
);
```

---

# 27. PARTITIONING STRATEGY

Tabelas financeiras crescem rápido.

Particionamento evita degradação.

---

## Tabelas particionadas

### transactions

Partition by:

```text
YEAR(transaction_date)
```

ou em escala maior:

```text
MONTH(transaction_date)
```

---

### audit_logs

Partition by:

```text
MONTH(created_at)
```

---

### ledger_entries

Partition by:

```text
YEAR(entry_date)
```

---

### webhook_events

Partition by:

```text
MONTH(created_at)
```

---

## Exemplo

```sql
CREATE TABLE transactions_2025 PARTITION OF transactions
FOR VALUES FROM ('2025-01-01') TO ('2026-01-01');
```

---

## Benefícios

- query pruning
- vacuum menor
- index menor
- archival simples
- analytics melhor

---

# 28. QUERY OPTIMIZATION GUIDELINES

---

## Nunca fazer

```sql
SELECT * FROM transactions;
```

---

## Sempre fazer

```sql
SELECT
  id,
  amount,
  description,
  transaction_date
FROM transactions
WHERE user_id = $1
ORDER BY transaction_date DESC
LIMIT 50;
```

---

## Cursor-based pagination

Nunca usar OFFSET em grandes volumes.

---

### Errado

```sql
LIMIT 50 OFFSET 50000
```

---

### Certo

```sql
WHERE transaction_date < cursor
LIMIT 50
```

---

# 29. MATERIALIZED VIEWS

Para analytics pesados.

---

## monthly_spending_summary

```sql
CREATE MATERIALIZED VIEW monthly_spending_summary AS
SELECT
    user_id,
    DATE_TRUNC('month', transaction_date) as month,
    SUM(amount) as total
FROM transactions
WHERE type = 'expense'
GROUP BY user_id, month;
```

---

## category_spending_summary

```sql
CREATE MATERIALIZED VIEW category_spending_summary AS
SELECT
    user_id,
    category_id,
    SUM(amount) as total
FROM transactions
GROUP BY user_id, category_id;
```

---

## Refresh Strategy

```sql
REFRESH MATERIALIZED VIEW CONCURRENTLY ...
```

Agendado via:

- cron jobs
- queue workers
- event triggers

---

# 30. REDIS CACHING STRATEGY

Postgres é source of truth.

Redis é speed layer.

---

## Cache targets

### Dashboard

TTL:

```text
60 seconds
```

---

### User settings

TTL:

```text
15 minutes
```

---

### Category list

TTL:

```text
1 hour
```

---

### Reports

TTL:

```text
1 day
```

---

### AI insights

TTL:

```text
10 minutes
```

---

## Cache key convention

```text
user:{id}:dashboard
user:{id}:settings
user:{id}:reports:{period}
account:{id}:balance
```

---

## Cache invalidation

Evento:

```text
transaction.created
transaction.updated
budget.updated
goal.updated
```

---

# 31. READ REPLICA STRATEGY

Separação:

---

## Primary

Responsável por:

- INSERT
- UPDATE
- DELETE
- critical transactions

---

## Replicas

Responsáveis por:

- analytics
- dashboard reads
- reports
- exports
- BI queries

---

## Routing Strategy

```text
write → primary
read → replica
critical read-after-write → primary
```

---

# 32. CONNECTION POOLING

Usar:

```text
PgBouncer
```

---

## Config recomendado

```text
pool_mode = transaction
max_client_conn = 1000
default_pool_size = 100
```

---

## Benefícios

- reduz overhead
- protege Postgres
- melhora throughput

---

# 33. BACKUP STRATEGY

FinanceAI é sistema crítico.

Backup obrigatório.

---

## Tipos

### Full backup

Frequência:

```text
diário
```

---

### Incremental backup

Frequência:

```text
a cada hora
```

---

### WAL archiving

Frequência:

```text
contínuo
```

---

## Retention

| Tipo | Retenção |
|---|---|
| Diário | 30 dias |
| Semanal | 90 dias |
| Mensal | 1 ano |
| Compliance | 5 anos |

---

# 34. DISASTER RECOVERY

---

## Targets

| Métrica | Target |
|---|---|
| RPO | < 5 min |
| RTO | < 30 min |

---

## Estratégia

- WAL replay
- hot standby
- replica promotion
- infrastructure as code rebuild
- encrypted backup restore

---

## Failover

Automatizado com:

- Patroni
- Cloud managed failover
- health checks

---

# 35. ENCRYPTION STRATEGY

Banco financeiro exige criptografia forte.

---

## At Rest

Usar:

```text
AES-256
```

No:

- disk
- snapshot
- backup

---

## In Transit

Usar:

```text
TLS 1.3
```

Entre:

- app → db
- replica → primary
- backup → storage

---

## Field-level encryption

Campos críticos:

- refresh_token_hash
- provider tokens
- financial metadata sensível
- OCR documentos
- external IDs

---

# 36. DATA RETENTION POLICY

---

## audit_logs

```text
5 anos
```

---

## sessions expiradas

```text
90 dias
```

---

## webhook_events

```text
180 dias
```

---

## notifications

```text
1 ano
```

---

## reports

configurável

---

# 37. ARCHIVAL STRATEGY

Dados antigos:

movidos para:

```text
cold storage
```

ou

```text
analytics warehouse
```

---

## Exemplo

transactions > 5 anos:

- compressed archive
- read-only partition

---

# 38. MIGRATION STRATEGY

Usar:

```text
Prisma Migrate
```

com governança.

---

## Regras

---

### Nunca alterar em produção sem migration

---

### Toda migration deve ter:

- up
- rollback plan
- validation query

---

### Migrations perigosas

rodar:

- em maintenance windows
- por batches
- com monitoring

---

# 39. PRISMA ORM GUIDELINES

FinanceAI usa Prisma como ORM principal.

---

## Convenções

---

### DB

snake_case

Ex:

```text
created_at
updated_at
user_id
```

---

### Prisma

camelCase

Ex:

```text
createdAt
updatedAt
userId
```

---

## Exemplo mapping

```prisma
model User {
  id        String   @id @default(uuid())
  fullName  String   @map("full_name")
  createdAt DateTime @map("created_at")

  @@map("users")
}
```

---

# 40. TRANSACTION STRATEGY

Operações críticas usam:

```text
ACID transactions
```

---

## Exemplo

Criação de transação financeira:

deve atualizar:

- transactions
- account balance
- ledger_entries
- audit_logs
- cache invalidation event

Tudo dentro de:

```sql
BEGIN;
COMMIT;
```

---

# 41. LOCKING STRATEGY

---

## Row-level locking

Usar:

```sql
SELECT ... FOR UPDATE
```

Para:

- saldo
- budgets
- goal contributions

---

## Evitar

table locks

---

# 42. OBSERVABILITY

Banco precisa ser monitorado.

---

## Métricas

- query latency
- slow queries
- deadlocks
- connection count
- replication lag
- cache hit ratio
- WAL growth
- index usage
- vacuum health

---

## Ferramentas

- Prometheus
- Grafana
- pg_stat_statements
- OpenTelemetry

---

# 43. ALERTING

Alertas automáticos para:

---

## Critical

- replica lag alto
- disk > 85%
- connection saturation
- backup failed
- deadlocks
- long-running query
- WAL bloat

---

## Security

- suspicious query patterns
- privilege escalation
- failed login spikes

---

# 44. FUTURE SHARDING ROADMAP

Hoje:

```text
single Postgres cluster
```

---

## Fase futura

Shard por:

```text
user_id hash
```

ou:

```text
regional shard
```

---

## Separação futura

```text
core financial DB
analytics DB
AI feature store
audit archive
```

---

# 45. DATABASE SECURITY GOVERNANCE

---

## Least Privilege

Usuários separados:

- app_rw
- app_ro
- migration_admin
- analytics_ro
- backup_role

---

## Nunca usar

```text
superuser em app runtime
```

---

## Row-Level Security (futuro)

Exemplo:

```sql
CREATE POLICY user_isolation
ON transactions
USING (user_id = current_setting('app.user_id')::uuid);
```

---

# 46. DATABASE HEALTH CHECKS

Checks periódicos:

---

## Daily

- backup success
- replica lag
- dead tuple growth
- disk usage

---

## Weekly

- unused indexes
- bloat
- slow query analysis

---

## Monthly

- restore simulation
- DR test
- partition rotation

---

# 47. FINAL DATABASE PRINCIPLES

O banco do FinanceAI foi desenhado com princípios de:

---

## Integridade

- double-entry
- ACID
- reconciliation

---

## Segurança

- encryption
- least privilege
- auditability

---

## Performance

- indexing
- caching
- replicas
- partitioning

---

## Escalabilidade

- horizontal roadmap
- sharding ready
- event-driven ready

---

## Observabilidade

- tracing
- metrics
- alerting

---

## Compliance

- retention
- audit
- forensics
- DR

---

# Resultado Arquitetural

O banco deixa de ser:

```text
CRUD financeiro simples
```

e se torna:

```text
Financial Intelligence Data Platform
```

Pronta para:

- produção real
- milhões de usuários
- IA financeira
- analytics
- compliance
- enterprise scale
- arquitetura nível FAANG

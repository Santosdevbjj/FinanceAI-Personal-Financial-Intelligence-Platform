# Advanced Financial Domain (Enterprise Layer) - Parte 3 

Esta seção cobre a camada avançada do banco de dados da plataforma FinanceAI.

Essas tabelas suportam:

- Orçamento inteligente
- Planejamento financeiro
- Ledger contábil
- IA financeira
- Segurança
- Auditoria
- Compliance
- Risk detection
- Analytics
- Sessões autenticadas
- Event-driven architecture

---

# 11. BUDGETS

Representa orçamentos financeiros definidos pelo usuário.

Exemplos:

- Alimentação: R$ 1.500/mês
- Transporte: R$ 800/mês
- Lazer: R$ 500/mês

---

## Schema

```sql
CREATE TABLE budgets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL REFERENCES users(id),

    category_id UUID REFERENCES categories(id),

    name VARCHAR(255) NOT NULL,

    budget_amount DECIMAL(18,2) NOT NULL,

    period_type VARCHAR(30) NOT NULL,

    start_date DATE NOT NULL,
    end_date DATE,

    rollover_enabled BOOLEAN DEFAULT FALSE,

    alert_threshold_percent INTEGER DEFAULT 80,

    active BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
```

---

## period_type suportados

- monthly
- weekly
- quarterly
- yearly

---

## Índices

```sql
CREATE INDEX idx_budgets_user ON budgets(user_id);
CREATE INDEX idx_budgets_category ON budgets(category_id);
CREATE INDEX idx_budgets_active ON budgets(active);
```

---

# 12. BUDGET_EXECUTIONS

Snapshot histórico do consumo do orçamento.

---

## Schema

```sql
CREATE TABLE budget_executions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    budget_id UUID NOT NULL REFERENCES budgets(id),

    period_start DATE NOT NULL,
    period_end DATE NOT NULL,

    spent_amount DECIMAL(18,2) DEFAULT 0,
    remaining_amount DECIMAL(18,2) DEFAULT 0,

    utilization_percent DECIMAL(8,2),

    threshold_alert_triggered BOOLEAN DEFAULT FALSE,

    created_at TIMESTAMP DEFAULT NOW()
);
```

---

## Índices

```sql
CREATE INDEX idx_budget_exec_budget
ON budget_executions(budget_id);

CREATE INDEX idx_budget_exec_period
ON budget_executions(period_start, period_end);
```

---

# 13. FINANCIAL_GOALS

Metas financeiras do usuário.

Ex:

- Reserva de emergência
- Viagem
- Casa própria
- Aposentadoria
- Investimento

---

## Schema

```sql
CREATE TABLE financial_goals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL REFERENCES users(id),

    name VARCHAR(255) NOT NULL,

    description TEXT,

    target_amount DECIMAL(18,2) NOT NULL,
    current_amount DECIMAL(18,2) DEFAULT 0,

    target_date DATE,

    priority VARCHAR(20),

    goal_type VARCHAR(50),

    monthly_contribution DECIMAL(18,2),

    status VARCHAR(30) DEFAULT 'active',

    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
```

---

## priority suportados

- low
- medium
- high
- critical

---

## status

- active
- completed
- paused
- cancelled

---

## Índices

```sql
CREATE INDEX idx_goals_user ON financial_goals(user_id);
CREATE INDEX idx_goals_status ON financial_goals(status);
```

---

# 14. GOAL_CONTRIBUTIONS

Histórico de aportes em metas.

---

## Schema

```sql
CREATE TABLE goal_contributions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    goal_id UUID NOT NULL REFERENCES financial_goals(id),

    transaction_id UUID REFERENCES transactions(id),

    amount DECIMAL(18,2) NOT NULL,

    contribution_date DATE NOT NULL,

    notes TEXT,

    created_at TIMESTAMP DEFAULT NOW()
);
```

---

# 15. LEDGER_ACCOUNTS

Plano de contas interno (double-entry accounting).

---

## Finalidade

Permite:

- Integridade contábil
- Reconciliação
- Auditabilidade
- AI analytics
- Event sourcing

---

## Schema

```sql
CREATE TABLE ledger_accounts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    code VARCHAR(50) NOT NULL UNIQUE,

    name VARCHAR(255) NOT NULL,

    account_class VARCHAR(30) NOT NULL,

    account_subclass VARCHAR(50),

    active BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMP DEFAULT NOW()
);
```

---

## account_class

- asset
- liability
- equity
- income
- expense

---

# 16. LEDGER_ENTRIES

Cabeçalho do lançamento contábil.

---

## Schema

```sql
CREATE TABLE ledger_entries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID REFERENCES users(id),

    reference_transaction_id UUID REFERENCES transactions(id),

    entry_date TIMESTAMP NOT NULL,

    description TEXT NOT NULL,

    source VARCHAR(50),

    status VARCHAR(30) DEFAULT 'posted',

    created_at TIMESTAMP DEFAULT NOW()
);
```

---

# 17. LEDGER_LINES

Linhas do double-entry accounting.

---

## Regra

Todo lançamento precisa balancear:

```text
SUM(debits) = SUM(credits)
```

---

## Schema

```sql
CREATE TABLE ledger_lines (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    ledger_entry_id UUID NOT NULL REFERENCES ledger_entries(id),

    ledger_account_id UUID NOT NULL REFERENCES ledger_accounts(id),

    debit_amount DECIMAL(18,2) DEFAULT 0,
    credit_amount DECIMAL(18,2) DEFAULT 0,

    created_at TIMESTAMP DEFAULT NOW()
);
```

---

## Índices críticos

```sql
CREATE INDEX idx_ledger_lines_entry
ON ledger_lines(ledger_entry_id);

CREATE INDEX idx_ledger_lines_account
ON ledger_lines(ledger_account_id);
```

---

# 18. AUDIT_LOGS

Tabela crítica de auditoria.

Rastreia:

- Login
- Mudanças
- Exclusões
- Ações críticas
- IA actions
- Segurança

---

## Schema

```sql
CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID REFERENCES users(id),

    event_type VARCHAR(100) NOT NULL,

    entity_type VARCHAR(100),
    entity_id UUID,

    action VARCHAR(100) NOT NULL,

    old_values JSONB,
    new_values JSONB,

    ip_address INET,
    user_agent TEXT,

    request_id VARCHAR(255),

    created_at TIMESTAMP DEFAULT NOW()
);
```

---

## Índices

```sql
CREATE INDEX idx_audit_user ON audit_logs(user_id);
CREATE INDEX idx_audit_event_type ON audit_logs(event_type);
CREATE INDEX idx_audit_entity ON audit_logs(entity_type, entity_id);

CREATE INDEX idx_audit_jsonb_old
ON audit_logs USING GIN(old_values);

CREATE INDEX idx_audit_jsonb_new
ON audit_logs USING GIN(new_values);
```

---

# 19. AI_INSIGHTS

Insights produzidos pela IA.

Ex:

- Gasto acima da média
- Previsão de saldo negativo
- Categoria suspeita
- Oportunidade de economia

---

## Schema

```sql
CREATE TABLE ai_insights (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL REFERENCES users(id),

    insight_type VARCHAR(50) NOT NULL,

    title VARCHAR(255) NOT NULL,

    description TEXT NOT NULL,

    severity VARCHAR(20),

    confidence_score DECIMAL(5,2),

    related_entity_type VARCHAR(50),
    related_entity_id UUID,

    payload JSONB,

    viewed BOOLEAN DEFAULT FALSE,
    dismissed BOOLEAN DEFAULT FALSE,

    expires_at TIMESTAMP,

    created_at TIMESTAMP DEFAULT NOW()
);
```

---

## Índices

```sql
CREATE INDEX idx_ai_insights_user ON ai_insights(user_id);
CREATE INDEX idx_ai_insights_type ON ai_insights(insight_type);
CREATE INDEX idx_ai_insights_severity ON ai_insights(severity);

CREATE INDEX idx_ai_payload_gin
ON ai_insights USING GIN(payload);
```

---

# 20. REPORTS

Snapshots de relatórios financeiros.

---

## Schema

```sql
CREATE TABLE reports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL REFERENCES users(id),

    report_type VARCHAR(50) NOT NULL,

    title VARCHAR(255),

    period_start DATE,
    period_end DATE,

    report_payload JSONB,

    generated_by VARCHAR(30) DEFAULT 'system',

    created_at TIMESTAMP DEFAULT NOW()
);
```

---

## Índices

```sql
CREATE INDEX idx_reports_user ON reports(user_id);
CREATE INDEX idx_reports_type ON reports(report_type);

CREATE INDEX idx_reports_payload
ON reports USING GIN(report_payload);
```

---

# 21. NOTIFICATIONS

Sistema de notificações.

---

## Schema

```sql
CREATE TABLE notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL REFERENCES users(id),

    type VARCHAR(50) NOT NULL,

    title VARCHAR(255) NOT NULL,

    message TEXT NOT NULL,

    payload JSONB,

    read BOOLEAN DEFAULT FALSE,

    delivery_channel VARCHAR(30),

    sent_at TIMESTAMP,
    read_at TIMESTAMP,

    created_at TIMESTAMP DEFAULT NOW()
);
```

---

## delivery_channel

- push
- email
- in_app
- sms

---

# 22. USER_SESSIONS

Sessões autenticadas.

---

## Schema

```sql
CREATE TABLE user_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL REFERENCES users(id),

    refresh_token_hash TEXT NOT NULL,

    device_name VARCHAR(255),

    device_type VARCHAR(50),

    ip_address INET,

    user_agent TEXT,

    expires_at TIMESTAMP NOT NULL,

    revoked BOOLEAN DEFAULT FALSE,

    last_activity_at TIMESTAMP,

    created_at TIMESTAMP DEFAULT NOW()
);
```

---

## Índices

```sql
CREATE INDEX idx_sessions_user ON user_sessions(user_id);
CREATE INDEX idx_sessions_expires ON user_sessions(expires_at);
CREATE INDEX idx_sessions_revoked ON user_sessions(revoked);
```

---

# 23. RISK_EVENTS

Eventos de risco detectados.

Ex:

- Login suspeito
- Tentativa de fraude
- Transaction anomaly
- Credential stuffing
- MFA bypass attempt

---

## Schema

```sql
CREATE TABLE risk_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID REFERENCES users(id),

    risk_type VARCHAR(100) NOT NULL,

    severity VARCHAR(20) NOT NULL,

    description TEXT,

    event_payload JSONB,

    mitigated BOOLEAN DEFAULT FALSE,

    resolved_at TIMESTAMP,

    created_at TIMESTAMP DEFAULT NOW()
);
```

---

## Índices

```sql
CREATE INDEX idx_risk_user ON risk_events(user_id);
CREATE INDEX idx_risk_type ON risk_events(risk_type);
CREATE INDEX idx_risk_severity ON risk_events(severity);

CREATE INDEX idx_risk_payload
ON risk_events USING GIN(event_payload);
```

---

# 24. WEBHOOK_EVENTS

Event ingestion / async integrations.

---

## Schema

```sql
CREATE TABLE webhook_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    source VARCHAR(100) NOT NULL,

    event_type VARCHAR(100) NOT NULL,

    payload JSONB NOT NULL,

    processed BOOLEAN DEFAULT FALSE,

    retries INTEGER DEFAULT 0,

    processed_at TIMESTAMP,

    created_at TIMESTAMP DEFAULT NOW()
);
```

---

## Índices

```sql
CREATE INDEX idx_webhooks_source ON webhook_events(source);
CREATE INDEX idx_webhooks_processed ON webhook_events(processed);

CREATE INDEX idx_webhooks_payload
ON webhook_events USING GIN(payload);
```

---

# Relacionamento Enterprise Layer

```text
users
 ├── budgets
 │    └── budget_executions
 │
 ├── financial_goals
 │    └── goal_contributions
 │
 ├── ledger_entries
 │    └── ledger_lines
 │
 ├── ai_insights
 ├── reports
 ├── notifications
 ├── user_sessions
 ├── risk_events
 └── audit_logs
```

---

# Enterprise Design Decisions

## Por que ledger interno?

Porque permite:

- reconciliação contábil
- prevenção de inconsistências
- auditoria financeira
- IA baseada em fluxo real
- double-entry accounting

---

## Por que AI_INSIGHTS separado?

Porque IA precisa:

- histórico
- confidence
- dismiss logic
- feedback loop
- analytics

---

## Por que audit_logs JSONB?

Porque permite:

- before/after snapshots
- forensics
- debugging
- compliance

---

## Core Principles

Essa camada transforma o FinanceAI de:

```text
App financeiro simples
→ plataforma financeira enterprise
```

Com:

- observabilidade
- auditabilidade
- segurança
- IA
- compliance
- escalabilidade
- event-driven readiness

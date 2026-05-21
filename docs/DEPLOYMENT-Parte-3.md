## Parte 3 — Infraestrutura como Código (IaC)

# 31. Infraestrutura como Código (IaC)

---

# 31.1 Filosofia de IaC

Toda a infraestrutura do FinanceAI é gerenciada como código.

Nenhum recurso crítico pode ser criado manualmente em produção.

Isso inclui:

- compute
- networking
- databases
- secrets
- observability
- IAM
- Kubernetes
- storage
- security policies
- backup configs

---

## Objetivos

A estratégia de IaC existe para garantir:

- reproducibilidade
- auditabilidade
- versionamento
- rollback infra
- disaster recovery
- segurança
- compliance
- automação

---

# 31.2 Princípios

---

## Declarative Infrastructure

Infra declarada em código.

Exemplo:

```text
desired_state → apply → convergence
```

---

## Immutable Infrastructure

Infra não é alterada manualmente.

Mudanças exigem:

- PR
- review
- validation
- apply

---

## Reviewable Changes

Toda mudança em infra passa por:

- code review
- security review
- CI validation
- plan review

---

## Drift Detection

Mudanças fora do código devem ser detectadas.

Ferramentas:

- Terraform drift checks
- policy enforcement
- audit monitoring

---

# 32. Stack de IaC

---

# 32.1 Terraform

Ferramenta principal:

```text
Terraform
```

Uso:

- cloud resources
- networking
- IAM
- databases
- storage
- KMS
- Kubernetes infra
- DNS
- monitoring infra

---

# 32.2 Helm

Gerencia deploy Kubernetes.

Uso:

- application packaging
- release management
- templating
- versioning

---

# 32.3 Kubernetes Manifests

Usado para:

- low-level resources
- CRDs
- special configs

---

# 32.4 Policy as Code

Ferramentas:

- OPA Gatekeeper
- Kyverno
- Sentinel

---

# 32.5 Secret Management

Ferramentas:

- Vault
- AWS Secrets Manager
- KMS
- Sealed Secrets

---

# 33. Estrutura de Diretórios

---

## Estrutura recomendada

```text
infra/
 ├── terraform/
 │   ├── modules/
 │   ├── environments/
 │   │   ├── dev/
 │   │   ├── qa/
 │   │   ├── staging/
 │   │   └── production/
 │   └── shared/
 │
 ├── kubernetes/
 │   ├── base/
 │   ├── overlays/
 │   │   ├── dev/
 │   │   ├── staging/
 │   │   └── prod/
 │
 ├── helm/
 │   ├── financeai-web/
 │   ├── financeai-api/
 │   ├── financeai-workers/
 │   ├── financeai-ai/
 │
 ├── policies/
 │   ├── security/
 │   ├── networking/
 │   └── compliance/
 │
 └── scripts/
```

---

# 34. Terraform Architecture

---

# 34.1 Estrutura por módulos

Terraform deve usar módulos reutilizáveis.

---

## Core Modules

### networking

Responsável por:

- VPC
- subnets
- routing
- gateways
- firewall rules

---

### compute

Responsável por:

- Kubernetes cluster
- node groups
- autoscaling infra

---

### database

Responsável por:

- PostgreSQL
- replicas
- backups
- parameter groups

---

### cache

Responsável por:

- Redis
- HA config
- failover

---

### security

Responsável por:

- IAM
- KMS
- secrets
- policies

---

### observability

Responsável por:

- monitoring
- logging infra
- alert infra

---

### storage

Responsável por:

- object storage
- encryption
- lifecycle policies

---

# 34.2 Terraform State

---

## Remote State

Nunca local.

Armazenamento:

```text
encrypted remote backend
```

Exemplo AWS:

- S3 backend
- DynamoDB locking

---

## State Security

Proteções:

- encryption
- access control
- locking
- audit logs

---

## State Isolation

Cada ambiente possui state separado.

Exemplo:

```text
dev.tfstate
qa.tfstate
staging.tfstate
prod.tfstate
```

---

# 34.3 Terraform Workflow

---

## Fluxo

```text
PR
↓
terraform fmt
↓
terraform validate
↓
terraform plan
↓
security scan
↓
review
↓
apply
```

---

## Produção

Produção exige:

- approval
- plan review
- audit trail

---

# 35. Kubernetes Architecture

---

# 35.1 Cluster Strategy

Produção usa cluster dedicado.

Separação:

- dev cluster
- staging cluster
- production cluster

---

## Benefícios

- isolamento
- segurança
- custo controlado
- blast radius reduction

---

# 35.2 Namespace Strategy

Cada domínio isolado.

Exemplo:

```text
financeai-web
financeai-api
financeai-workers
financeai-ai
financeai-monitoring
financeai-security
financeai-system
```

---

# 35.3 Cluster Add-ons

Produção inclui:

- ingress controller
- cert manager
- metrics server
- cluster autoscaler
- external secrets
- service mesh
- policy engine
- logging agents

---

# 35.4 Node Pools

Separação por workload.

---

## Web Pool

Uso:

- frontend

Características:

- lightweight
- autoscaled

---

## API Pool

Uso:

- backend APIs

Características:

- balanced CPU/RAM

---

## Worker Pool

Uso:

- queue jobs

Características:

- burst scaling

---

## AI Pool

Uso:

- inference

Características:

- high memory
- GPU optional

---

## System Pool

Uso:

- cluster infra

Características:

- isolated

---

# 36. Helm Strategy

---

# 36.1 Helm como padrão

Cada serviço possui chart próprio.

---

## Exemplo

```text
financeai-web
financeai-api
financeai-worker
financeai-ai
```

---

# 36.2 Helm Structure

```text
Chart.yaml
values.yaml
templates/
```

---

# 36.3 Environment Overrides

Separação:

```text
values-dev.yaml
values-staging.yaml
values-prod.yaml
```

---

# 36.4 Helm Release Rules

Deploy deve permitir:

- install
- upgrade
- rollback
- version pinning

---

# 37. Secrets Management

---

# 37.1 Regra Principal

Secrets nunca ficam em:

- código
- git
- yaml plain-text
- env committed

---

# 37.2 Secret Sources

Fontes permitidas:

- Vault
- AWS Secrets Manager
- KMS
- sealed secrets

---

# 37.3 Tipos de Secrets

Inclui:

- DB credentials
- JWT keys
- API keys
- encryption keys
- AI provider keys
- SMTP secrets

---

# 37.4 Secret Rotation

Automática quando possível.

Política:

- regular rotation
- emergency rotation
- audit logging

---

# 38. Network Architecture

---

# 38.1 VPC Design

Arquitetura:

```text
Public Subnets
Private App Subnets
Private Data Subnets
```

---

# 38.2 Public Layer

Exposto:

- load balancers
- ingress endpoints

Nunca:

- DB
- Redis
- workers

---

# 38.3 Private App Layer

Contém:

- APIs
- workers
- AI services

Sem acesso público direto.

---

# 38.4 Private Data Layer

Contém:

- PostgreSQL
- Redis
- internal storage

Acesso restrito.

---

# 39. Network Security

---

# 39.1 Security Groups

Default:

```text
deny by default
```

---

# 39.2 East-West Traffic Control

Restrições entre serviços.

Só comunicação explícita.

---

# 39.3 Egress Control

Saída controlada para:

- APIs externas
- payment providers
- AI providers

---

# 39.4 Network Policies

Kubernetes network policies obrigatórias.

Controlam:

- pod-to-pod
- namespace-to-namespace
- egress

---

# 40. Service Mesh

---

# 40.1 Uso

Ferramenta recomendada:

```text
Istio
```

Alternativas:

- Linkerd

---

# 40.2 Funções

Permite:

- mTLS
- traffic shaping
- retries
- circuit breakers
- observability
- fault injection

---

# 40.3 Canary Support

Service mesh controla:

```text
10% → 50% → 100%
```

---

# 40.4 Security

Todos serviços usam:

```text
mutual TLS
```

Internamente.

---

# 41. Storage Provisioning

---

# 41.1 Tipos de Storage

---

## Object Storage

Uso:

- receipts
- exports
- reports
- backups

---

## Block Storage

Uso:

- DB
- stateful workloads

---

## Ephemeral Storage

Uso:

- pods
- cache temp

---

# 41.2 Storage Security

Obrigatório:

- encryption at rest
- encryption in transit
- access policies

---

# 41.3 Backup Storage

Isolado da produção.

Inclui:

- snapshots
- versioned backups
- DR replication

---

# 42. IAM Strategy

---

# 42.1 Least Privilege

Todo serviço recebe mínimo acesso necessário.

---

# 42.2 Service Accounts

Cada workload possui identidade própria.

---

# 42.3 Workload Identity

Evitar:

- static credentials

Preferir:

- federated auth
- IAM roles

---

# 42.4 Admin Access

Separado de runtime.

Com:

- MFA
- audit
- time-bound access

---

# 43. Policy as Code

---

# 43.1 Regras Obrigatórias

Bloquear deploy se:

- privileged containers
- root containers
- missing limits
- open ingress
- missing probes

---

# 43.2 Security Policies

Exigir:

- readOnlyRootFilesystem
- non-root
- resource limits
- signed images

---

# 43.3 Compliance Policies

Validar:

- encryption
- labels
- audit settings
- retention

---

# 44. Infra Observability

---

# 44.1 Infra Monitoring

Monitorar:

- nodes
- cluster
- storage
- network
- DNS
- IAM anomalies

---

# 44.2 Infra Alerts

Alertas:

- node pressure
- disk issues
- network errors
- failed backups
- scaling failures

---

# 45. Disaster Recovery Infra

---

# 45.1 Infra Replication

Produção replica:

- DB
- backups
- storage
- critical configs

---

# 45.2 Region Failover

Estratégia:

```text
Primary region
↓
Secondary region
```

---

# 45.3 Infra Rebuild

Infra pode ser recriada via:

```text
terraform apply
```

Com mínimo esforço manual.

---

# 46. Resumo Executivo

A estratégia de IaC do FinanceAI é baseada em:

- Terraform modular
- Kubernetes enterprise
- Helm releases
- Secrets centralizados
- Zero trust networking
- Service mesh
- Policy as Code
- Immutable infrastructure
- Secure IAM
- Infra observability
- Disaster recovery ready

Esse modelo garante uma infraestrutura moderna, segura, reproduzível e escalável.


---


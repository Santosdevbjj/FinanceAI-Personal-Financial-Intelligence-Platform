# 15. Estratégia de CI/CD

---

## 15.1 Filosofia de CI/CD

O FinanceAI utiliza uma estratégia de **Continuous Integration + Continuous Delivery (CI/CD)** com foco em:

- Automação máxima
- Segurança por padrão
- Feedback rápido
- Deploy sem downtime
- Release controlado
- Observabilidade integrada
- Rollback automatizado

O pipeline segue princípios enterprise usados em organizações de escala FAANG.

---

## 15.2 Objetivos do Pipeline

O pipeline deve garantir:

### Qualidade

Todo código passa por:

- lint
- type checking
- unit tests
- integration tests
- contract tests
- e2e tests

---

### Segurança

Todo build passa por:

- SAST
- dependency scanning
- secret scanning
- container scanning
- IaC scanning
- SBOM generation

---

### Confiabilidade

Todo deploy exige:

- health validation
- readiness validation
- observability validation
- rollback strategy

---

### Auditabilidade

Todo release gera:

- version
- commit SHA
- actor
- approval log
- pipeline ID
- artifact digest

---

# 16. Ferramenta Principal de CI/CD

---

## 16.1 GitHub Actions

CI/CD oficial do projeto:

```text
GitHub Actions
```

Motivos:

- Integração nativa com GitHub
- Secrets management
- Matrix builds
- Reusable workflows
- Self-hosted runners
- OIDC cloud auth
- Branch protection integration

---

## 16.2 Possível Evolução Futura

Compatível com:

- GitHub Actions
- ArgoCD
- Tekton
- Jenkins X
- GitLab CI

---

# 17. Pipeline de Alto Nível

---

## 17.1 Fluxo Geral

```text
Developer Push
   ↓
GitHub Actions Trigger
   ↓
Checkout
   ↓
Dependency Install
   ↓
Lint
   ↓
Type Check
   ↓
Unit Tests
   ↓
Build
   ↓
Security Scans
   ↓
Artifact Creation
   ↓
Container Publish
   ↓
Deploy Staging
   ↓
Integration Tests
   ↓
Approval Gate
   ↓
Canary Deploy
   ↓
Observability Validation
   ↓
Full Production Rollout
```

---

# 18. Workflows Oficiais

---

# 18.1 CI Workflow

Arquivo:

```text
.github/workflows/ci.yml
```

Trigger:

- pull_request
- push (develop)
- push (main)

Objetivo:

- validar código
- impedir regressões

---

### Stages

1. Checkout
2. Setup runtime
3. Cache deps
4. Install deps
5. Lint
6. Type check
7. Unit tests
8. Coverage
9. Build
10. Security scan

---

# 18.2 CD Workflow

Arquivo:

```text
.github/workflows/cd.yml
```

Trigger:

- merge develop
- merge main
- manual dispatch

Objetivo:

- deploy automatizado

---

### Stages

1. Build images
2. Publish artifacts
3. Deploy staging
4. Run validation
5. Await approval
6. Canary deploy
7. Full rollout

---

# 18.3 Security Workflow

Arquivo:

```text
.github/workflows/security.yml
```

Trigger:

- PR
- nightly
- release

Objetivo:

- detectar vulnerabilidades

---

### Security Checks

- CodeQL
- Trivy
- Snyk
- Secret scan
- IaC scan
- dependency audit

---

# 18.4 Release Workflow

Arquivo:

```text
.github/workflows/release.yml
```

Trigger:

- tag push

Objetivo:

- gerar release oficial

---

### Funções

- changelog
- version tagging
- artifact publish
- release notes
- signed release

---

# 19. Pipeline de Build

---

# 19.1 Frontend Build

Stack:

- Next.js
- TypeScript
- Tailwind

Pipeline:

```text
Install
→ Lint
→ Type Check
→ Unit Test
→ Build
→ Bundle Analysis
→ Static Optimization
→ Docker Build
```

---

### Checks

- Bundle size
- SSR validation
- Route generation
- Static export validation

---

# 19.2 Backend Build

Stack:

- FastAPI
- Python
- Pydantic

Pipeline:

```text
Install
→ Ruff
→ MyPy
→ Unit Tests
→ Coverage
→ Build package
→ Docker Build
```

---

### Checks

- API schema validation
- import validation
- dependency lock check

---

# 19.3 Worker Build

Pipeline:

```text
Worker tests
→ queue validation
→ build
→ containerize
```

---

# 19.4 AI Services Build

Pipeline:

```text
Model validation
→ inference tests
→ performance smoke
→ build
→ package
```

---

### AI Checks

- model load validation
- latency validation
- memory footprint
- inference correctness

---

# 20. Pipeline de Testes

---

# 20.1 Unit Tests

Obrigatórios em todo PR.

Frameworks:

Frontend:

- Vitest
- React Testing Library

Backend:

- Pytest

Workers:

- Pytest async

---

Meta:

```text
Coverage > 85%
```

---

# 20.2 Integration Tests

Validam:

- API + DB
- API + Redis
- API + Queue
- Auth flow
- Event flow

Executados em:

- PR critical
- develop
- staging

---

# 20.3 Contract Tests

Validam:

- request schema
- response schema
- backward compatibility

Inclui:

- OpenAPI contract validation

---

# 20.4 End-to-End Tests

Framework:

```text
Playwright
```

Fluxos:

- login
- onboarding
- add transaction
- budget creation
- AI insights
- reports
- notifications

---

# 20.5 Smoke Tests

Após deploy:

Executa:

- homepage
- auth
- health
- DB query
- AI endpoint
- queue processing

---

# 20.6 Load Tests

Framework:

```text
k6
```

Executa em:

- staging
- pre-release

Valida:

- throughput
- p95 latency
- error rate

---

# 21. Quality Gates

---

# 21.1 Código

Deploy bloqueado se:

- lint fail
- type fail
- tests fail
- build fail

---

# 21.2 Coverage

Deploy bloqueado se:

```text
Coverage < 85%
```

---

# 21.3 Complexity

Threshold:

- cyclomatic complexity
- cognitive complexity
- duplicated code

---

# 21.4 Performance

Frontend:

- bundle budget
- lighthouse budget

Backend:

- latency budget
- query budget

---

# 22. Security Gates

---

# 22.1 SAST

Ferramentas:

- CodeQL
- Semgrep

Bloqueia:

- injection risk
- insecure code
- unsafe patterns

---

# 22.2 Dependency Scan

Ferramentas:

- Snyk
- npm audit
- pip-audit

Bloqueia:

- critical vulns
- high severity issues

---

# 22.3 Secret Scan

Ferramentas:

- Gitleaks
- GitHub Secret Scanning

Bloqueia:

- API keys
- tokens
- secrets
- credentials

---

# 22.4 Container Scan

Ferramentas:

- Trivy
- Grype

Valida:

- OS vulnerabilities
- package vulns
- CVEs

---

# 22.5 IaC Security Scan

Ferramentas:

- Checkov
- tfsec

Valida:

- open ports
- insecure IAM
- public buckets
- encryption missing

---

# 22.6 SBOM Generation

Gera:

```text
Software Bill of Materials
```

Formato:

- SPDX
- CycloneDX

---

# 23. Artifact Management

---

# 23.1 Tipos de Artifacts

Gerados:

- frontend build
- backend package
- Docker images
- SBOM
- test reports
- coverage reports
- security reports

---

# 23.2 Registry

Container registry:

```text
GitHub Container Registry (GHCR)
```

Compatível:

- AWS ECR
- GCP GAR

---

# 23.3 Imutabilidade

Artifacts são:

- versionados
- assinados
- não mutáveis

---

# 23.4 Retention Policy

PR artifacts:

```text
15 dias
```

Release artifacts:

```text
1 ano+
```

Security reports:

```text
compliance retention
```

---

# 24. Docker Build Strategy

---

# 24.1 Build Rules

Todos containers:

- multi-stage build
- minimal base image
- non-root user
- signed image
- healthcheck

---

# 24.2 Build Optimization

Uso de:

- layer caching
- dependency caching
- parallel builds

---

# 24.3 Security Rules

Proibido:

- root containers
- debug packages em produção
- embedded secrets

---

# 25. Promotion Pipeline

---

# 25.1 Promotion Flow

```text
PR
↓
CI PASS
↓
Merge develop
↓
Deploy DEV
↓
QA PASS
↓
Deploy STAGING
↓
Approval
↓
Canary PROD
↓
Full PROD
```

---

# 25.2 Promotion Rule

Nenhuma promoção ocorre se:

- tests fail
- security fail
- smoke fail
- health fail

---

# 26. Approval Gates

---

# 26.1 Produção exige approval

Obrigatório:

- release manager
- engineering approval

---

# 26.2 Hotfix

Approval simplificado:

- incident commander
- engineer on-call

---

# 26.3 Audit Trail

Registra:

- quem aprovou
- quando
- versão
- motivo

---

# 27. Canary Release Pipeline

---

# 27.1 Estratégia

Deploy inicial:

```text
10% traffic
```

Valida:

- latency
- error rate
- CPU
- memory
- logs

Se OK:

```text
50%
→
100%
```

---

# 27.2 Canary Abort

Rollback automático se:

- error spike
- latency spike
- unhealthy pods
- anomaly detection

---

# 28. Rollback Pipeline

---

# 28.1 Tipos

Automático:

- failed health checks
- canary failure

Manual:

- business issue
- incident

---

# 28.2 Tempo Meta

Rollback:

```text
< 5 minutos
```

---

# 28.3 Rollback Mechanismo

- previous image
- previous config
- traffic switch

---

# 29. Pipeline Performance Targets

---

## CI Duration

Meta:

```text
< 10 min
```

---

## PR Feedback

Meta:

```text
< 5 min
```

---

## Staging Deploy

Meta:

```text
< 15 min
```

---

## Production Deploy

Meta:

```text
< 20 min
```

---

## Rollback

Meta:

```text
< 5 min
```

---

# 30. Resumo Executivo

O CI/CD do FinanceAI é baseado em:

- GitHub Actions
- Automated testing
- Security-first pipelines
- Artifact immutability
- Signed containers
- Quality gates
- Approval gates
- Progressive delivery
- Canary rollout
- Fast rollback
- Enterprise observability

Essa arquitetura garante releases seguros, rápidos e auditáveis.

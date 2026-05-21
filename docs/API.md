# API — FinanceAI Personal Financial Intelligence Platform

Versão: 1.0  
Status: Production API Specification  
Owner: Backend Engineering / Platform Engineering  
Repository: FinanceAI-Personal-Financial-Intelligence-Platform

---

# 1. Visão Geral

A API do FinanceAI é responsável por fornecer toda a camada de comunicação entre:

- Frontend Web
- Aplicativo Mobile (futuro)
- Serviços internos
- Camada de Inteligência Artificial
- Workers assíncronos
- Integrações externas (futuro)

A API segue padrão:

- RESTful
- JSON-based
- Stateless
- JWT Authentication
- Versionada
- Idempotente quando aplicável
- Secure-by-default

---

# 2. Base URL

## Desenvolvimento

```text
http://localhost:3001/api/v1
```

## Staging

```text
https://staging-api.financeai.com/api/v1
```

## Produção

```text
https://api.financeai.com/api/v1
```

---

# 3. Padrões da API

---

## Content-Type

Request:

```http
Content-Type: application/json
```

Response:

```http
Content-Type: application/json
```

---

## Encoding

UTF-8

---

## Timezone

Todos os timestamps:

- UTC (ISO 8601)

Exemplo:

```text
2025-05-14T13:45:00Z
```

---

# 4. Versionamento

Padrão:

```text
/api/v1
```

Exemplo:

```text
GET /api/v1/transactions
```

---

## Política de Versionamento

### Minor changes

Compatíveis com versões anteriores.

---

### Major changes

Nova versão:

```text
/api/v2
```

---

# 5. Autenticação (Authentication)

FinanceAI utiliza:

- JWT Access Token
- Refresh Token
- OAuth (future)

---

## Headers obrigatórios

```http
Authorization: Bearer <access_token>
```

---

## Token Expiration

Access Token:

```text
15 minutos
```

Refresh Token:

```text
30 dias
```

---

# 6. Formato padrão de resposta

---

## Success Response

```json
{
  "success": true,
  "data": {},
  "meta": {}
}
```

---

## Error Response

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Dados inválidos",
    "details": []
  }
}
```

---

# 7. Códigos HTTP

| Código | Significado |
|---|---|
| 200 | OK |
| 201 | Created |
| 204 | No Content |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 409 | Conflict |
| 422 | Unprocessable Entity |
| 429 | Too Many Requests |
| 500 | Internal Server Error |

---

# 8. Paginação (Pagination)

Padrão:

```text
?page=1&limit=20
```

---

## Exemplo

```http
GET /api/v1/transactions?page=1&limit=20
```

---

## Meta Response

```json
{
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 145,
    "totalPages": 8
  }
}
```

---

# 9. Filtros e Ordenação

---

## Filtros

Exemplo:

```http
GET /transactions?category=alimentacao
```

---

## Ordenação

Exemplo:

```http
GET /transactions?sort=createdAt:desc
```

---

# 10. Rate Limiting

Padrão inicial:

```text
100 requests/min por usuário
```

---

## Headers de Rate Limit

```http
X-RateLimit-Limit
X-RateLimit-Remaining
X-RateLimit-Reset
```

---

# 11. Auth API

Base:

```text
/api/v1/auth
```

---

## POST /auth/register

Criar conta

---

### Request

```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "SenhaForte123!"
}
```

---

### Response

```json
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid",
      "name": "João Silva",
      "email": "joao@email.com"
    },
    "tokens": {
      "accessToken": "jwt",
      "refreshToken": "jwt"
    }
  }
}
```

---

## POST /auth/login

Login

---

### Request

```json
{
  "email": "joao@email.com",
  "password": "SenhaForte123!"
}
```

---

### Response

```json
{
  "success": true,
  "data": {
    "user": {},
    "tokens": {}
  }
}
```

---

## POST /auth/refresh

Renovar token

---

### Request

```json
{
  "refreshToken": "jwt"
}
```

---

### Response

```json
{
  "success": true,
  "data": {
    "accessToken": "jwt"
  }
}
```

---

## POST /auth/logout

Logout

---

### Response

```json
{
  "success": true
}
```

---

## GET /auth/me

Dados do usuário autenticado

---

# 12. Users API

Base:

```text
/api/v1/users
```

---

## GET /users/profile

Retorna perfil do usuário

---

## PATCH /users/profile

Atualiza perfil

---

### Request

```json
{
  "name": "João Silva",
  "preferences": {
    "currency": "BRL",
    "locale": "pt-BR"
  }
}
```

---

# 13. Transactions API

Base:

```text
/api/v1/transactions
```

---

## POST /transactions

Criar transação manual

---

### Request

```json
{
  "amount": 45.90,
  "category": "transporte",
  "description": "Uber para trabalho",
  "transactionDate": "2025-05-14T13:45:00Z"
}
```

---

### Response

```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "amount": 45.90,
    "category": "transporte"
  }
}
```

---

## GET /transactions

Listar transações

Suporta:

- paginação
- filtros
- ordenação

---

## GET /transactions/:id

Retorna transação específica

---

## PATCH /transactions/:id

Atualiza transação

---

## DELETE /transactions/:id

Remove transação

---

## GET /transactions/summary

Resumo financeiro

---

### Response

```json
{
  "success": true,
  "data": {
    "income": 10000,
    "expenses": 6400,
    "balance": 3600
  }
}
```

---

# 14. Categorias API

Base:

```text
/api/v1/categories
```

---

## GET /categories

Lista categorias disponíveis

---

### Response

```json
{
  "success": true,
  "data": [
    "alimentacao",
    "transporte",
    "saude",
    "educacao",
    "lazer",
    "moradia",
    "assinaturas",
    "outros"
  ]
}
```

---

# 15. Goals API

Base:

```text
/api/v1/goals
```

---

## POST /goals

Criar meta financeira

---

### Request

```json
{
  "name": "Viagem para Europa",
  "targetAmount": 15000,
  "deadline": "2026-12-01"
}
```

---

## GET /goals

Lista metas

---

## GET /goals/:id

Detalhes de meta

---

## PATCH /goals/:id

Atualiza meta

---

## DELETE /goals/:id

Remove meta

---

## GET /goals/:id/progress

Progresso da meta

---

### Response

```json
{
  "success": true,
  "data": {
    "progress": 45,
    "savedAmount": 6750,
    "remainingAmount": 8250
  }
}
```

---

# 16. Reports API

Base:

```text
/api/v1/reports
```

---

## GET /reports/monthly

Resumo mensal

---

### Response

```json
{
  "success": true,
  "data": {
    "month": "2025-05",
    "income": 10000,
    "expenses": 6500,
    "topCategories": []
  }
}
```

---

## GET /reports/yearly

Resumo anual

---

## GET /reports/categories

Relatório por categoria

---

## GET /reports/trends

Tendências financeiras

---

# 17. AI Chat API

Base:

```text
/api/v1/chat
```

---

## POST /chat/message

Enviar mensagem para o Agente Financeiro

---

### Request

```json
{
  "message": "Gastei 45 reais no Uber"
}
```

---

### Response

```json
{
  "success": true,
  "data": {
    "intent": "expense_logging",
    "entities": {
      "amount": 45,
      "category": "transporte",
      "merchant": "Uber"
    },
    "reply": "Registrei seu gasto de R$ 45 em transporte."
  }
}
```

---

## GET /chat/history

Histórico de conversas

---

## DELETE /chat/history

Apagar histórico

---

# 18. Insights API

Base:

```text
/api/v1/insights
```

---

## GET /insights

Lista insights gerados

---

### Response

```json
{
  "success": true,
  "data": [
    {
      "type": "warning",
      "message": "Você gastou 22% acima da média com delivery."
    }
  ]
}
```

---

# 19. Notifications API

Base:

```text
/api/v1/notifications
```

---

## GET /notifications

Lista notificações

---

## PATCH /notifications/:id/read

Marca como lida

---

## DELETE /notifications/:id

Remove notificação

---

# 20. Upload API (Fase futura)

Base:

```text
/api/v1/uploads
```

---

## POST /uploads/receipt

Upload de comprovante

Suporte futuro:

- OCR
- parsing
- auto transaction generation

---

# 21. Open Finance API (Futuro)

Base:

```text
/api/v1/open-finance
```

---

## POST /open-finance/connect

Conectar conta bancária

---

## GET /open-finance/accounts

Listar contas conectadas

---

## GET /open-finance/transactions

Sincronizar transações

---

# 22. Validação (Validation Rules)

Todos os endpoints usam:

- DTO validation
- schema validation
- sanitização de inputs

---

## Exemplo de erros

---

### Campo obrigatório

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Campo email é obrigatório"
  }
}
```

---

### Recurso não encontrado

```json
{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "Transação não encontrada"
  }
}
```

---

# 23. Idempotência

Endpoints críticos devem suportar:

Header:

```http
Idempotency-Key: uuid
```

Aplicável:

- pagamentos futuros
- criação de transações
- integrações externas

---

# 24. Auditoria (Audit Logging)

Eventos auditáveis:

- login
- logout
- criação de transação
- edição de meta
- uso de AI
- falhas críticas

---

# 25. Segurança da API

---

## Proteções obrigatórias

- JWT validation
- rate limiting
- input sanitization
- SQL injection prevention
- XSS prevention
- CSRF protection
- secure headers
- audit logs

---

## Dados sensíveis

Nunca retornados:

- password_hash
- secrets
- internal tokens

---

# 26. Observabilidade

Todas as requests geram:

- request_id
- trace_id
- latency
- status_code
- error logs

---

# 27. Webhooks (Future)

Base:

```text
/api/v1/webhooks
```

---

## Eventos futuros

- transaction.created
- goal.updated
- report.generated

---

# 28. OpenAPI / Swagger

Documentação automática:

```text
/api/docs
```

---

## Deve incluir

- schemas
- DTOs
- examples
- auth flow
- response contracts

---

# 29. API Contract Testing

Obrigatório:

- unit tests
- integration tests
- schema validation
- consumer contract tests

---

# 30. Final API Statement

A API do FinanceAI foi projetada para ser:

- simples para clientes
- segura para dados financeiros
- escalável para crescimento
- preparada para IA
- observável em produção
- extensível para integrações futuras

Ela representa o contrato oficial entre produto, frontend, backend e inteligência artificial.

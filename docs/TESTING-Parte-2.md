## Parte 2 — Unit Tests & Integration Tests

# 14. UNIT TESTING

## 14.1 Objetivo

Unit tests validam unidades isoladas de comportamento.

Objetivo:

- validar regras de negócio
- detectar regressões cedo
- garantir previsibilidade
- permitir refactoring seguro

---

## 14.2 Escopo

Unit tests devem cobrir:

- funções puras
- business rules
- validators
- services isolados
- hooks
- reducers
- transformers
- formatters
- financial calculators
- AI scoring logic
- parsers
- guards

---

## 14.3 O que NÃO é Unit Test

Não deve depender de:

- banco real
- APIs reais
- Redis real
- queues reais
- filesystem real
- external providers
- LLM providers

Essas dependências devem ser mockadas.

---

## 14.4 Ferramentas

Stack recomendada:

### Frontend

- Vitest
- React Testing Library

---

### Backend

- Vitest / Jest

---

### Mocking

- MSW
- vi.mock
- jest.mock

---

### Coverage

- c8
- Istanbul

---

# 15. UNIT TEST DESIGN

## 15.1 Estrutura

Padrão:

Arrange
→ Act
→ Assert

---

## 15.2 Exemplo

```ts
describe("calculateBudgetStatus", () => {
  it("should detect over budget", () => {
    const result = calculateBudgetStatus({
      spent: 1200,
      budget: 1000
    });

    expect(result.status).toBe("OVER_BUDGET");
  });
});

```
---

## 15.3 Regras

Unit test deve ser:

rápido

determinístico

isolado

legível

pequeno



---

## 15.4 Naming Convention

### Formato:

```
should + expected behavior + condition

``` 

#### Exemplo:

should calculate remaining balance correctly

should reject invalid transaction

should trigger fallback when AI fails



---

## 16. BUSINESS LOGIC TESTING

### 16.1 Finance Rules

#### Testar:

budget calculations

balance calculations

recurring transactions

investment returns

debt projections

savings goals



---

## 16.2 Cenários Obrigatórios

Happy Path

Comportamento esperado


---

Edge Cases

Casos extremos


---

Invalid Input

Payload inválido


---

Boundary Cases

Limites matemáticos


---

Precision Cases

Valores monetários


---

## 16.3 Exemplo

### Testar:

``` 
0
negative values
very large numbers
currency precision
decimal rounding
overflow scenarios

``` 


---

## 17. FINANCIAL CALCULATION TESTING

### 17.1 Alta Criticidade

Financial logic exige:

cobertura máxima


---

## 17.2 Regras

### Testar:

decimal rounding

tax calculations

percentages

compounding

inflation adjustments

projections



---

## 17.3 Precisão

### Nunca usar:

floating point direto sem proteção

Usar:

Decimal.js

Big.js



---

## 17.4 Casos Obrigatórios

**Caso**	**Obrigatório**

zero	sim
decimal precision	sim
negative	sim
huge values	sim
rounding	sim



---

## 18. FRONTEND COMPONENT TESTING

### 18.1 Objetivo

#### Validar:

renderização

interações

estados

callbacks

accessibility



---

## 18.2 Ferramentas

React Testing Library

user-event

Vitest



---

## 18.3 Testar

Render

Componente renderiza corretamente


---

Interaction

Clique / input / seleção


---

State

Loading / error / success


---

Conditional Rendering

Elementos aparecem corretamente


---

Accessibility

roles / aria


---

## 18.4 Exemplo

```
it("should submit transaction form", async () => {
  render(<TransactionForm />);

  await user.type(screen.getByLabelText("Valor"), "100");

  await user.click(screen.getByText("Salvar"));

  expect(mockSubmit).toHaveBeenCalled();
});

```

---

## 19. HOOK TESTING

### 19.1 Testar

#### Custom hooks:

state transitions

async loading

cache logic

retries

fallback behavior



---

## 19.2 Ferramenta

renderHook()



---

## 19.3 Exemplo

```

const { result } = renderHook(() => useBudget());

expect(result.current.loading).toBe(true);

```

---

## 20. REPOSITORY TESTING

### 20.1 Objetivo

Validar camada de acesso a dados.


---

## 20.2 Testar

CRUD

mapping

query logic

filtering

pagination

ordering



---

## 20.3 Regras

#### Preferência:

DB isolado de teste

ou mock controlado


---

## 21. SERVICE TESTING

### 21.1 Objetivo

Testar serviços isolados.


---

## 21.2 Testar

orchestration

retries

fallbacks

business decisions

validation

transformations



---

## 21.3 Exemplo

### AI recommendation service:

#### testar:

provider success

provider timeout

fallback activation

invalid response

low confidence score



---

## 22. MOCKING STRATEGY

#### 22.1 Filosofia

Mockar apenas dependências externas.

Nunca mockar:

core business logic



---

## 22.2 Pode Mockar

APIs externas

auth provider

LLM provider

queues

filesystem

email provider

push provider



---

## 22.3 Não Deve Mockar

calculation logic

domain rules

validators

internal business decisions



---

## 22.4 Mock Rules

#### Mocks devem ser:

deterministic

reusable

explicit



---

## 23. TEST FIXTURES

### 23.1 Factory Pattern

#### Usar:

```
createUser()
createTransaction()
createBudget()

```



---

## 23.2 Benefícios

consistência

reutilização

menos duplicação



---

## 23.3 Faker

### Usar apenas quando:

dados randômicos forem úteis

#### Nunca para:

financial precision tests


---

## 24. INTEGRATION TESTING

### 24.1 Objetivo

Validar múltiplos componentes reais interagindo.


---

## 24.2 Escopo

### Testar:

API + DB

service + Redis

queue + worker

auth + API

AI orchestration + fallback

webhooks + persistence



---

## 24.3 Não é E2E

Integration testa parte integrada.

Não fluxo completo.


---

## 25. INTEGRATION ENVIRONMENT

25.1 Infra

#### Usar:

Docker containers

ephemeral DB

Redis real

queue real



---

## 25.2 Ferramentas

Testcontainers

Docker Compose test env



---

## 25.3 Dados

#### Cada teste:

setup → execute → teardown


---

## 26. API INTEGRATION TESTS

### 26.1 Validar

request parsing

validation

DB write

auth

business logic

response schema



---

## 26.2 Casos

#### Success

200 / 201


---

#### Invalid Input

400


---

#### Unauthorized

401


---

#### Forbidden

403


---

#### Not Found

404


---

#### Conflict

409


---

#### Server Failure

500


---

## 27. DATABASE INTEGRATION TESTS

### 27.1 Testar

insert

update

delete

transactions

rollback

constraints

unique violations



---

## 27.2 Migration Safety

### Testar:

schema compatibility

forward migration

rollback viability



---

## 27.3 Query Tests

#### Validar:

joins

indexes

filters

pagination



---

## 28. CACHE INTEGRATION TESTS

### 28.1 Redis

#### Validar:

read/write

expiration

invalidation

fallback



---

## 28.2 Casos

cache hit

cache miss

stale cache

Redis unavailable



---

## 29. QUEUE INTEGRATION TESTS

### 29.1 Validar

enqueue

dequeue

retries

dead letter

duplicate protection



---

## 29.2 Casos

success

fail + retry

poison message

timeout



---

## 30. WEBHOOK INTEGRATION TESTS

### 30.1 Testar

signature validation

payload parse

retries

idempotency

duplicate event handling



---

## 31. CONTRACT TESTING

### 31.1 Objetivo

Evitar breaking changes.


---

## 31.2 Validar

request schema

response schema

headers

event payloads



---

## 31.3 Ferramentas

Pact

schema validation

OpenAPI validation



---

## 31.4 Backward Compatibility

Mudanças devem ser:

backward compatible

Sempre que possível.


---

## 32. EVENT CONTRACT TESTING

### 32.1 Eventos

#### Validar:

schema

versioning

consumer expectations



---

## 32.2 Casos

missing field

extra field

version mismatch



---

## 33. MUTATION TESTING

### 33.1 Objetivo

Medir qualidade real dos testes.


---

## 33.2 Ferramenta

Stryker



---

## 33.3 Validar

Se testes falham quando lógica é alterada.


---

## 33.4 Mutation Score Targets

Área	Meta

Core logic	> 85%
Financial logic	> 90%
Security logic	> 90%



---

## 34. FLAKY TEST PREVENTION

### 34.1 Problema

Flaky tests reduzem confiança.


---

## 34.2 Causas comuns

race conditions

real timers

shared state

random data

async mal controlado



---

## 34.3 Prevenção

#### Usar:

fake timers

deterministic mocks

isolated state

retries apenas para infra



---

## 35. TEST PERFORMANCE

35.1 Unit Test Target

#### Tempo:

```
< 100ms por teste

```



---

## 35.2 Integration Test Target

#### Tempo:

```

< 2s por teste

```



---

## 35.3 CI Target

#### Tempo:

```

< 15 min total

```



---

## 36. COVERAGE ENFORCEMENT

### 36.1 Blocking Rules

PR falha se coverage abaixo do target.


---

### 36.2 Exemplo

```

coverage:
  branches: 90
  functions: 90
  lines: 90

```



---

## 36.3 Critical Modules

### Regras especiais:

financial modules:

```

95%+

```


---

## 37. CI EXECUTION STRATEGY

### 37.1 PR

#### Executar:

unit

integration

contract

coverage



---

## 37.2 Main Branch

### Executar:

full integration

mutation sample

extended suite



---

## 37.3 Nightly

### Executar:

full mutation

full regression



---

## 38. CONCLUSÃO

A estratégia de testes unitários e de integração do FinanceAI foi desenhada para:

detectar regressões cedo

proteger regras financeiras

validar integração real

garantir contratos estáveis

reduzir flaky tests

aumentar confiança de deploy


#### Princípios:

isolation first

deterministic testing

real integration where needed

strong coverage

mutation-driven quality


#### Padrão:

Level engineering quality

---


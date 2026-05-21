# Core Tables (Core Domain Model) - Parte 2

Esta seção descreve as tabelas centrais da plataforma FinanceAI.

## Objetivos:

- Modelagem financeira robusta
- Integridade transacional
- Multi-account support
- Multi-currency ready
- Event-driven compatibility
- Auditabilidade
- Escalabilidade horizontal futura

---

# 1. USERS

Tabela principal de identidade do usuário.

## Finalidade

Armazena:

- Dados cadastrais
- Configurações
- Status de conta
- Preferências financeiras
- Perfil para IA
- Flags de segurança

---

## Schema

```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    email VARCHAR(255) NOT NULL UNIQUE,
    email_verified BOOLEAN DEFAULT FALSE,

    password_hash TEXT,
    auth_provider VARCHAR(50) DEFAULT 'credentials',
    provider_id VARCHAR(255),

    full_name VARCHAR(255) NOT NULL,
    avatar_url TEXT,

    phone VARCHAR(30),
    phone_verified BOOLEAN DEFAULT FALSE,

    locale VARCHAR(10) DEFAULT 'pt-BR',
    timezone VARCHAR(50) DEFAULT 'America/Sao_Paulo',
    currency_code CHAR(3) DEFAULT 'BRL',

    onboarding_completed BOOLEAN DEFAULT FALSE,

    account_status VARCHAR(30) DEFAULT 'active',
    risk_profile VARCHAR(20),

    last_login_at TIMESTAMP,
    login_count INTEGER DEFAULT 0,

    mfa_enabled BOOLEAN DEFAULT FALSE,
    failed_login_attempts INTEGER DEFAULT 0,

    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    deleted_at TIMESTAMP
);
```

---

## Índices

CREATE UNIQUE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_status ON users(account_status);
CREATE INDEX idx_users_created_at ON users(created_at);


---

## Constraints

email obrigatório

email único

deleted_at para soft delete

auth_provider suporta expansão OAuth



---

## 2. USER_SETTINGS

Configurações financeiras e comportamentais do usuário.


---

## Schema

CREATE TABLE user_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL UNIQUE REFERENCES users(id),

    monthly_income DECIMAL(18,2),
    income_frequency VARCHAR(20),

    emergency_reserve_target DECIMAL(18,2),
    retirement_target DECIMAL(18,2),

    investment_profile VARCHAR(20),

    ai_assistant_enabled BOOLEAN DEFAULT TRUE,
    ai_auto_categorization BOOLEAN DEFAULT TRUE,
    ai_prediction_enabled BOOLEAN DEFAULT TRUE,

    push_notifications BOOLEAN DEFAULT TRUE,
    email_notifications BOOLEAN DEFAULT TRUE,

    dark_mode BOOLEAN DEFAULT FALSE,

    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);


---

## 3. FINANCIAL_INSTITUTIONS

Instituições financeiras integradas.

Ex:

Nubank

Itaú

Banco do Brasil

Bradesco

Inter

Santander



---

## Schema

CREATE TABLE financial_institutions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name VARCHAR(255) NOT NULL,
    code VARCHAR(50),
    country_code CHAR(2) DEFAULT 'BR',

    institution_type VARCHAR(50),

    logo_url TEXT,

    open_finance_supported BOOLEAN DEFAULT FALSE,
    active BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMP DEFAULT NOW()
);


---

## Índices

CREATE INDEX idx_financial_institutions_name ON financial_institutions(name);
CREATE INDEX idx_financial_institutions_active ON financial_institutions(active);


---

## 4. ACCOUNTS

Representa contas financeiras do usuário.

Tipos:

Conta corrente

Conta poupança

Cartão de crédito

Carteira

Conta investimento

Conta manual

Cripto (futuro)



---

## Schema

CREATE TABLE accounts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL REFERENCES users(id),

    institution_id UUID REFERENCES financial_institutions(id),

    name VARCHAR(255) NOT NULL,

    account_type VARCHAR(50) NOT NULL,

    currency_code CHAR(3) DEFAULT 'BRL',

    current_balance DECIMAL(18,2) DEFAULT 0,
    available_balance DECIMAL(18,2),

    credit_limit DECIMAL(18,2),
    closing_day INTEGER,
    due_day INTEGER,

    external_account_id VARCHAR(255),

    masked_account_number VARCHAR(50),

    is_manual BOOLEAN DEFAULT TRUE,
    is_active BOOLEAN DEFAULT TRUE,

    sync_status VARCHAR(30) DEFAULT 'pending',
    last_synced_at TIMESTAMP,

    display_order INTEGER DEFAULT 0,

    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    deleted_at TIMESTAMP
);


---

## Índices

CREATE INDEX idx_accounts_user_id ON accounts(user_id);
CREATE INDEX idx_accounts_type ON accounts(account_type);
CREATE INDEX idx_accounts_active ON accounts(is_active);
CREATE INDEX idx_accounts_sync_status ON accounts(sync_status);


---

## Constraints de Negócio

Conta pertence a 1 usuário

Pode ter instituição financeira opcional

Conta inativa não recebe sync

current_balance sempre reconciliável



---

## 5. ACCOUNT_BALANCE_HISTORY

Histórico de saldo para gráficos e analytics.


---

## Schema

CREATE TABLE account_balance_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    account_id UUID NOT NULL REFERENCES accounts(id),

    balance_date DATE NOT NULL,

    opening_balance DECIMAL(18,2),
    closing_balance DECIMAL(18,2),

    net_change DECIMAL(18,2),

    created_at TIMESTAMP DEFAULT NOW(),

    UNIQUE(account_id, balance_date)
);


---

## Índices

CREATE INDEX idx_balance_history_account_date
ON account_balance_history(account_id, balance_date DESC);


---

## 6. CATEGORIES

Categorias financeiras.

Ex:

Receita:

Salário

Freelance

Dividendos


## Despesas:

Alimentação

Transporte

Saúde

Moradia



---

## Schema

CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID REFERENCES users(id),

    parent_category_id UUID REFERENCES categories(id),

    name VARCHAR(255) NOT NULL,

    category_type VARCHAR(30) NOT NULL,

    icon VARCHAR(100),
    color VARCHAR(20),

    is_system BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,

    ai_confidence_score DECIMAL(5,2),

    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);


---

## Regras

Categorias do sistema: is_system = true

Categorias custom do usuário

Suporte hierarquia



---

## Índices

CREATE INDEX idx_categories_user ON categories(user_id);
CREATE INDEX idx_categories_type ON categories(category_type);
CREATE INDEX idx_categories_parent ON categories(parent_category_id);


---

## 7. TRANSACTIONS

Tabela mais crítica da plataforma.

Representa:

Receitas

Despesas

Transferências

Ajustes

Parcelamentos

Investimentos



---

## Schema

CREATE TABLE transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL REFERENCES users(id),

    account_id UUID NOT NULL REFERENCES accounts(id),

    category_id UUID REFERENCES categories(id),

    type VARCHAR(30) NOT NULL,

    amount DECIMAL(18,2) NOT NULL,

    description TEXT NOT NULL,

    merchant_name VARCHAR(255),

    transaction_date TIMESTAMP NOT NULL,
    posted_date TIMESTAMP,

    status VARCHAR(30) DEFAULT 'posted',

    installment_number INTEGER,
    total_installments INTEGER,

    is_recurring BOOLEAN DEFAULT FALSE,

    transfer_group_id UUID,

    external_transaction_id VARCHAR(255),

    ai_category_suggested UUID REFERENCES categories(id),
    ai_confidence_score DECIMAL(5,2),

    tags JSONB,

    metadata JSONB,

    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    deleted_at TIMESTAMP
);


---

## Índices Críticos

CREATE INDEX idx_transactions_user ON transactions(user_id);
CREATE INDEX idx_transactions_account ON transactions(account_id);
CREATE INDEX idx_transactions_category ON transactions(category_id);
CREATE INDEX idx_transactions_date ON transactions(transaction_date DESC);
CREATE INDEX idx_transactions_type ON transactions(type);

CREATE INDEX idx_transactions_user_date
ON transactions(user_id, transaction_date DESC);

CREATE INDEX idx_transactions_tags_gin
ON transactions USING GIN(tags);

CREATE INDEX idx_transactions_metadata_gin
ON transactions USING GIN(metadata);


---

## Constraints de negócio

amount

Sempre positivo

O tipo define semântica:

income

expense

transfer

adjustment



---

## transfer_group_id

Usado para ligar:

saída de conta A

entrada de conta B



---

## installment logic

Compra parcelada:

Parcela 1/12
Parcela 2/12
...
Parcela 12/12


---

## 8. TRANSACTION_ATTACHMENTS

Anexos da transação.

Ex:

Nota fiscal

Recibo

PDF

Imagem

OCR



---

## Schema

CREATE TABLE transaction_attachments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    transaction_id UUID NOT NULL REFERENCES transactions(id),

    file_url TEXT NOT NULL,
    file_type VARCHAR(50),

    extracted_text TEXT,

    ai_processed BOOLEAN DEFAULT FALSE,

    created_at TIMESTAMP DEFAULT NOW()
);


---

## 9. TRANSACTION_TAGS

Tags opcionais normalizadas (caso não usar JSONB puro).


---

## Schema

CREATE TABLE transaction_tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    transaction_id UUID NOT NULL REFERENCES transactions(id),

    tag VARCHAR(100) NOT NULL,

    created_at TIMESTAMP DEFAULT NOW()
);


---

## Índices

CREATE INDEX idx_transaction_tags_transaction
ON transaction_tags(transaction_id);

CREATE INDEX idx_transaction_tags_tag
ON transaction_tags(tag);


---

## 10. RECURRING_TRANSACTIONS

Motor de recorrência financeira.

Ex:

Aluguel

Netflix

Salário

Assinaturas



---

## Schema

CREATE TABLE recurring_transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL REFERENCES users(id),

    account_id UUID NOT NULL REFERENCES accounts(id),

    category_id UUID REFERENCES categories(id),

    type VARCHAR(30) NOT NULL,

    amount DECIMAL(18,2) NOT NULL,

    description TEXT NOT NULL,

    recurrence_type VARCHAR(30) NOT NULL,

    interval_value INTEGER DEFAULT 1,

    start_date DATE NOT NULL,
    end_date DATE,

    next_execution_date DATE,

    active BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);


---

## recurrence_type suportados

daily

weekly

monthly

quarterly

yearly



---

## Relacionamento Core (Resumo) 

<img width="724" height="652" alt="1000126107" src="https://github.com/user-attachments/assets/c513b6a7-5845-4998-a81b-4cee2b214137" />



---

## Design Decisions

Por que UUID?

Porque permite:

segurança

distribuição futura

APIs públicas

event sourcing compatibility



---

## Por que JSONB?

Porque permite:

AI metadata

tags flexíveis

OCR payloads

extensibilidade sem migrations frequentes



---

## Por que soft delete?

Porque sistemas financeiros exigem:

rastreabilidade

auditoria

compliance

rollback operacional



---

## Core Principles

A modelagem acima foi construída para:

produção real

escalabilidade

alta integridade

analytics

IA

compliance

observabilidade


---


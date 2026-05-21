# Core Tables (Core Domain Model) - Parte 2

Esta seção descreve as tabelas centrais da plataforma FinanceAI.

Objetivos:

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

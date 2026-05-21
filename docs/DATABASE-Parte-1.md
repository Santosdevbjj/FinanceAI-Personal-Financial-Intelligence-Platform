# DATABASE — FinanceAI Personal Financial Intelligence Platform - Parte 1

Version: 1.0  
Status: Production Database Specification  
Owner: Data Engineering / Backend Engineering / Platform Engineering  
Repository: FinanceAI-Personal-Financial-Intelligence-Platform

---

# 1. Database Philosophy

FinanceAI is a financial intelligence platform that handles:

- personal financial records
- transaction histories
- budgeting data
- goal tracking
- AI-generated financial insights
- user behavioral analytics
- audit and compliance data

Because of this, the database architecture must be designed as a **financial-grade system**, not as a simple CRUD database.

---

## Core Principles

---

### Source of Truth Integrity

Financial data must always preserve:

- consistency
- traceability
- auditability
- reproducibility

---

### Ledger-first thinking

Balances should **not** be stored as mutable truth.

Incorrect:

```text
users.balance = 1000
```

Correct:

```text
SUM(ledger_entries)
```

Derived financial state is always safer.

---

### Immutable history where necessary

Financial events should preserve:

- transaction history
- audit logs
- financial state transitions

Deletion should be restricted.

---

### Security by design

Sensitive data:

- encrypted where needed
- access-controlled
- audit-logged
- retention-controlled

---

### Query efficiency

Database must support:

- dashboard reads
- reporting
- analytics
- AI context generation
- real-time financial summaries

---

# 2. Database Architecture Overview

FinanceAI uses a hybrid data architecture.

---

## Primary OLTP Database

Technology:

```text
PostgreSQL
```

Responsibilities:

- users
- transactions
- budgets
- goals
- categories
- financial ledger
- AI data
- notifications
- audit logs
- reporting snapshots

---

## Cache Layer

Technology:

```text
Redis
```

Responsibilities:

- session cache
- dashboard cache
- AI short-lived context
- rate limiting
- temporary computations

---

## Future Analytical Layer (Phase 3+)

Potential:

```text
ClickHouse / BigQuery
```

Responsibilities:

- large-scale analytics
- user behavior analysis
- trend modeling
- AI training support
- BI workloads

---

# 3. Database Technology Decisions

---

## PostgreSQL chosen because:

Benefits:

- ACID transactions
- financial-grade consistency
- strong relational modeling
- JSONB support
- indexing flexibility
- partitioning
- audit-friendly
- mature ecosystem
- Prisma support
- advanced query planner

---

## Redis chosen because:

Benefits:

- high-speed cache
- ephemeral state
- rate limiting
- token/session storage
- pub/sub support
- low-latency dashboard optimization

---

# 4. Data Domains

Database divided into domains.

---

## Identity Domain

Responsible for:

- users
- sessions
- authentication metadata
- preferences
- MFA data (future)

---

## Financial Domain

Responsible for:

- transactions
- categories
- budgets
- goals
- recurring expenses
- financial summaries

---

## Ledger Domain

Responsible for:

- immutable financial accounting entries
- derived balances
- financial reconciliation

---

## AI Domain

Responsible for:

- AI conversations
- message history
- structured intents
- AI insights
- recommendation records

---

## Notification Domain

Responsible for:

- alerts
- reminders
- delivery status

---

## Audit Domain

Responsible for:

- security events
- financial changes
- compliance logs
- traceability

---

## Reporting Domain

Responsible for:

- snapshots
- aggregates
- trends
- materialized analytics

---

# 5. High-Level Logical Architecture

---

```text
Users
 ├── Sessions
 ├── Preferences
 ├── Accounts
 ├── Transactions
 │     ├── Categories
 │     ├── Ledger Entries
 │     └── Audit Events
 ├── Budgets
 ├── Goals
 ├── Reports
 ├── AI Conversations
 │     ├── Messages
 │     └── AI Insights
 ├── Notifications
 └── Security Logs
```

---

# 6. Database Design Principles

---

## UUID Primary Keys

All major entities use:

```text
UUID
```

Why:

- avoids predictable IDs
- better distributed systems compatibility
- safer external exposure
- easier federation

---

## Timestamps on all tables

Standard:

- created_at
- updated_at

Optional:

- deleted_at
- processed_at
- expires_at

---

## Soft Delete Strategy

Where business-safe:

```text
deleted_at timestamp
```

Avoid physical delete.

---

## Hard Delete Restricted

Only for:

- temporary cache-like records
- expired sessions
- ephemeral jobs

---

## Ownership Constraints

Every user-owned table includes:

```text
user_id
```

Required for:

- authorization
- partition filtering
- audit ownership

---

## Auditability

Critical state changes require:

- before state
- after state
- actor
- timestamp

---

# 7. Naming Conventions

---

## Tables

Pattern:

```text
snake_case plural
```

Examples:

```text
users
transactions
ledger_entries
audit_logs
ai_messages
```

---

## Columns

Pattern:

```text
snake_case
```

Examples:

```text
created_at
updated_at
user_id
target_amount
monthly_income
```

---

## Foreign Keys

Pattern:

```text
<entity>_id
```

Examples:

```text
user_id
goal_id
transaction_id
category_id
```

---

## Index Names

Pattern:

```text
idx_<table>_<column>
```

Example:

```text
idx_transactions_user_id
```

---

## Unique Constraints

Pattern:

```text
uq_<table>_<column>
```

---

# 8. Common Column Standards

Standard fields used across tables:

---

## ID

```sql
id UUID PRIMARY KEY
```

---

## Audit Timestamps

```sql
created_at TIMESTAMP NOT NULL
updated_at TIMESTAMP NOT NULL
```

---

## Optional Soft Delete

```sql
deleted_at TIMESTAMP NULL
```

---

## Ownership

```sql
user_id UUID NOT NULL
```

---

## Metadata (optional)

```sql
metadata JSONB
```

---

# 9. Currency Handling

FinanceAI must support multi-currency in future.

---

## Monetary columns must NEVER use FLOAT

Incorrect:

```sql
amount FLOAT
```

---

Correct:

```sql
amount NUMERIC(18,2)
```

---

## Currency code standard

ISO 4217:

Examples:

```text
BRL
USD
EUR
GBP
```

---

Schema:

```sql
currency_code VARCHAR(3)
```

---

# 10. Financial Ledger Philosophy

FinanceAI uses a simplified ledger-based architecture.

---

## Wrong financial model

Store mutable balance:

```text
accounts.balance
```

Problem:

- corruption risk
- race conditions
- reconciliation complexity

---

## Correct financial model

Store events:

```text
ledger_entries
```

Then derive:

```sql
SUM(credits - debits)
```

---

## Ledger principles

Must support:

- append-only financial events
- traceability
- reversals
- reconciliation
- derived balances

---

# 11. Data Relationships Overview

---

## Core User Relationships

```text
users
 ├── accounts
 ├── transactions
 ├── budgets
 ├── goals
 ├── sessions
 ├── notifications
 ├── ai_conversations
 ├── audit_logs
```

---

## Transaction Relationships

```text
transactions
 ├── category
 ├── ledger_entries
 ├── audit_logs
```

---

## AI Relationships

```text
ai_conversations
 ├── ai_messages
 ├── ai_insights
```

---

# 12. Logical ERD (Simplified)

---

```text
users
 ├── preferences
 ├── sessions
 ├── accounts
 │     ├── transactions
 │     │     ├── categories
 │     │     ├── ledger_entries
 │     │     └── audit_logs
 │
 ├── budgets
 ├── goals
 ├── reports
 ├── notifications
 ├── ai_conversations
 │     ├── ai_messages
 │     └── ai_insights
 │
 └── security_events
```

---

# 13. Read / Write Patterns

---

## Write-heavy workloads

Examples:

- transaction creation
- AI messages
- audit logs
- sessions

---

## Read-heavy workloads

Examples:

- dashboards
- monthly summaries
- category reports
- financial insights

---

## Optimization strategy

Use:

- indexes
- aggregates
- materialized views
- Redis cache

---

# 14. Data Integrity Principles

---

## Constraints required

Use:

- NOT NULL
- CHECK
- UNIQUE
- FK constraints

---

## Examples

Amount cannot be invalid:

```sql
CHECK (amount >= 0)
```

---

Currency must exist:

```sql
CHECK (char_length(currency_code) = 3)
```

---

# 15. Database Scalability Principles

Initial scale assumptions:

- 10k users
- 1M transactions
- 100M ledger entries (future scale)

---

Scaling design includes:

- indexing
- partition-ready tables
- caching
- async aggregates
- read optimization

---

# 16. Data Security Principles

Sensitive data protection:

- encryption at rest
- encrypted backups
- least privilege access
- audit logging
- restricted raw access

---

Financial tables treated as sensitive.

---

# 17. Backup Principles

Database backups must support:

- point-in-time recovery
- encrypted snapshots
- disaster recovery
- periodic restore tests

---

# 18. Migration Principles

All schema changes must be:

- versioned
- reviewed
- tested
- reversible when possible

---

Migration tool:

```text
Prisma Migrate
```

---

# 19. ORM Guidelines

Primary ORM:

```text
Prisma
```

Used for:

- schema management
- migrations
- type-safe access
- developer productivity

---

Raw SQL allowed only for:

- complex reports
- performance-critical queries
- bulk operations

---

# 20. Final Database Statement

The FinanceAI database architecture is designed to be:

- secure
- auditable
- scalable
- financial-grade
- AI-ready
- performance-optimized
- compliance-aware

It serves as the single source of truth for all financial, user, AI, and operational data in the platform.

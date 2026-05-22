Perfeito — vamos iniciar a Parte 1 do:

docs/TREASURY_ARCHITECTURE.md


---

1. Introduction

Tesouraria (Treasury) é a camada responsável pelo controle operacional e estratégico dos recursos financeiros reais da instituição.

Enquanto o ledger representa a verdade contábil, a tesouraria gerencia a realidade de caixa, liquidez, funding e exposição bancária.

Em fintechs modernas, treasury é uma das arquiteturas mais críticas porque controla:

disponibilidade de caixa

funding de pagamentos

liquidação com parceiros

segregação de recursos de clientes

reservas operacionais

risco de liquidez

continuidade financeira da plataforma



---

1.1 Treasury as Financial Control Layer

Treasury atua como a camada de controle entre:

Customer Money
Ledger Balances
Bank Accounts
Payment Rails
Settlement Partners
Liquidity Sources
Financial Risk Controls

Objetivos principais:

garantir solvência operacional

assegurar liquidez intraday

controlar funding

proteger fundos segregados

otimizar movimentação financeira

reduzir risco bancário e de settlement



---

1.2 Treasury vs Ledger vs Finance

Essas camadas são frequentemente confundidas, mas possuem responsabilidades diferentes.

Ledger

Responsável por:

registro contábil

double-entry accounting

balances internos

journals

audit trail


Pergunta que responde:

What should financially exist?


---

Treasury

Responsável por:

caixa real

contas bancárias

liquidez

funding

settlement money

safeguarding


Pergunta que responde:

What cash actually exists and where?


---

Finance / Accounting

Responsável por:

reporting

financial close

accounting statements

tax

capital treatment


Pergunta que responde:

How should this be reported externally?


---

1.3 Treasury Operating Objectives

Tesouraria enterprise deve garantir:

Liquidity Availability

Ter caixa disponível para:

pagamentos

saques

settlements

reservas

obrigações regulatórias



---

Cash Control

Saber em tempo real:

quanto caixa existe

onde está

se está disponível

se está restrito

se está comprometido



---

Funding Assurance

Garantir:

contas pré-fundadas

rails funded

PSP balances suficientes

reserve adequacy



---

Financial Risk Control

Mitigar:

liquidity shortfall

bank concentration

settlement delay

funding mismatch

reserve depletion



---

Regulatory Protection

Garantir:

safeguarding

segregation

liquidity evidence

reserve traceability

customer money protection



---

1.4 Why Treasury Is Complex in Fintech

Fintechs lidam com dinheiro distribuído em vários locais simultaneamente.

Exemplo:

Customer ledger balance = internal obligation
Bank account = real money
PSP reserve = operational locked cash
Settlement pending = in-transit cash
Chargeback reserve = restricted cash

Problemas surgem quando:

ledger ≠ bank

settlement atrasado

PSP não liquidou

reserve insuficiente

liquidity fragmentation

timing mismatch



---

1.5 Enterprise Treasury Principles


---

Principle 1 — Real Cash Visibility

Treasury deve saber:

cash by bank
cash by account
cash by currency
cash by restriction
cash by legal entity
cash by availability


---

Principle 2 — Liquidity Before Balance

Saldo contábil não significa liquidez.

Exemplo:

Customer balance = 100M
Available liquidity = 80M
Restricted = 20M

Treasury precisa operar sobre:

available cash reality


---

Principle 3 — Segregation Matters

Nem todo dinheiro pode ser usado livremente.

Tipos:

customer safeguarded funds

operational funds

reserve funds

restricted collateral

regulatory blocked funds



---

Principle 4 — Timing Creates Risk

Dinheiro em trânsito gera exposição.

Exemplo:

Payment initiated
Ledger posted
Settlement not completed
Cash not arrived

Treasury deve modelar:

timing risk


---

Principle 5 — Treasury Must Be Real-Time

Treasury não pode operar apenas com batch diário.

Precisa:

intraday visibility

real-time alerts

funding triggers

settlement monitoring



---

Principle 6 — Treasury Must Be Failure-Aware

Eventos críticos:

bank outage

PSP settlement delay

liquidity shortfall

reserve breach

funding failure


Treasury precisa responder automaticamente.


---

2. Treasury Core Architecture

Treasury architecture organiza o controle do caixa em domínios especializados.


---

2.1 Treasury Domains

Domínios principais:


---

Cash Position Domain

Responsável por:

saldo real por conta

intraday liquidity

available cash

restricted cash



---

Funding Domain

Responsável por:

pré-funding

top-up

liquidity lines

funding triggers



---

Settlement Domain

Responsável por:

settlement obligations

funding release

settlement reserves

payout cash control



---

Safeguarding Domain

Responsável por:

segregação de recursos

safeguarding pools

customer fund protection

regulatory evidence



---

Reserve Domain

Responsável por:

chargeback reserves

fraud reserves

liquidity reserves

operational reserve buffers



---

Forecasting Domain

Responsável por:

intraday cash forecast

settlement forecast

funding forecast

stress forecast



---

Treasury Risk Domain

Responsável por:

liquidity risk

concentration risk

counterparty risk

settlement risk



---

2.2 Treasury State Model

Treasury modela estados financeiros reais.


---

Available Cash

Immediately usable


---

Restricted Cash

Legally or operationally blocked


---

In-Transit Cash

Settlement in progress


---

Reserved Cash

Held for future obligation


---

Pending Cash

Expected but not confirmed


---

Contingent Liquidity

External funding available if needed


---

2.3 Treasury Balance Formula

Visão simplificada:

Total Cash
- Restricted Cash
- Reserved Cash
- Pending Settlement Exposure
= Available Liquidity


---

2.4 Treasury Control Boundaries

Treasury controla apenas recursos reais.

Não controla diretamente:

accounting reporting

product balances

pricing

fee logic


Mas recebe dados desses domínios.


---

2.5 Treasury Financial Asset Topology

Mapa típico:

Bank Accounts
PSP Balances
Settlement Reserves
Liquidity Facilities
Collateral Accounts
Reserve Pools
Cash In Transit


---

2.6 Treasury Control Objectives

Todo treasury architecture deve responder:

1. Where is cash?

Bank / PSP / In transit / Reserve

2. Is it usable?

Available / Restricted / Pending

3. Is it enough?

Funding sufficiency

4. Is it protected?

Safeguarding / reserve / legal segregation

5. Is it reconciled?

Bank = treasury = ledger


---

3. Bank Account Topology

Arquitetura de contas bancárias é um dos pilares da tesouraria.

Misturar tudo em uma conta única é um anti-pattern grave.


---

3.1 Operational Accounts

Usadas para:

despesas operacionais

fees

treasury movements

internal funding


Não devem misturar:

customer safeguarded money


---

3.2 Safeguarding Accounts

Contas segregadas para fundos de clientes.

Características:

legal segregation

protected cash

insolvency shielding

reconciliation required



---

3.3 Settlement Accounts

Usadas para:

card settlement

bank transfer settlement

PSP settlement

payout settlement



---

3.4 Reserve Accounts

Usadas para:

chargeback reserves

fraud reserves

liquidity reserves

operational reserve



---

3.5 Collection Accounts

Recebem:

inbound transfers

customer deposits

settlement receipts

payment inflows



---

3.6 Disbursement Accounts

Usadas para:

payouts

withdrawals

merchant settlement

external disbursement



---

3.7 Multi-Bank Topology

Modelo enterprise:

Bank A → primary operating
Bank B → redundancy
Bank C → safeguarding
Bank D → payout rails
Bank E → reserve / collateral

Reduz:

concentration risk

bank outage risk

liquidity fragmentation



---

Parte 1 concluída (seções 1–3).

No próximo passo eu gero a Parte 2 (Cash Position, Liquidity Management, Treasury Ledger Integration, Settlement Treasury Architecture, Safeguarding Architecture).

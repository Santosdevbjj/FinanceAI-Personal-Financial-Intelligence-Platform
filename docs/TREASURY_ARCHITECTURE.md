## 1. Introduction

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




Parte 2 do:

docs/TREASURY_ARCHITECTURE.md


---

4. Cash Position Management

Cash Position Management é a disciplina responsável por responder, em tempo real:

> Quanto caixa realmente existe, onde está e quanto pode ser usado agora?



Essa é uma das funções mais críticas da tesouraria enterprise.


---

4.1 Treasury Position Model

Tesouraria não trabalha apenas com “saldo bancário”.

Ela precisa decompor a posição financeira em múltiplas dimensões:

Gross Cash
Restricted Cash
Reserved Cash
In Transit Cash
Pending Settlement
Available Liquidity
Contingent Liquidity


---

4.2 Opening Position

Saldo inicial operacional do dia.

Composição:

Prior day closing balance
+ overnight settlement
+ funding receipts
- overnight obligations

Representação:

Opening Cash Position (T0)

Esse é o baseline do dia.


---

4.3 Intraday Position

Durante o dia treasury recalcula posição continuamente.

Inputs:

inbound settlements

payouts

customer withdrawals

reserve changes

PSP funding

bank transfers

payment rail activity


Modelo:

Opening Position
+ Intraday inflows
- Intraday outflows
± settlement adjustments
= Current Position


---

4.4 Available Liquidity

Nem todo caixa é usável.

Cálculo:

Gross Cash
- Restricted Cash
- Reserved Cash
- Pending Obligations
- Settlement Funding Commitments
= Available Liquidity


---

4.5 Restricted Liquidity

Liquidez indisponível.

Exemplos:

safeguarding funds

regulatory reserves

collateral accounts

frozen funds

legal restrictions

PSP blocked balances



---

4.6 Cash Visibility Architecture

Tesouraria enterprise precisa enxergar posição em várias dimensões.


---

By Bank

Bank A = 200M
Bank B = 150M
Bank C = 50M


---

By Currency

USD = 100M
EUR = 80M
BRL = 220M


---

By Legal Entity

Entity A
Entity B
Entity C


---

By Availability

Available
Restricted
Reserved
Pending


---

By Risk Exposure

High-risk exposure
Concentrated exposure
Counterparty dependent


---

4.7 Position Integrity Controls

Cash position precisa validar:

bank balance consistency

stale statement detection

delayed updates

duplicate movement prevention

missing confirmations

unexpected movement alerts



---

5. Liquidity Management Architecture

Liquidez é diferente de caixa.

Caixa = dinheiro existente
Liquidez = dinheiro utilizável no momento necessário


---

5.1 Liquidity Buckets

Separação típica:


---

Immediate Liquidity

Disponível agora.

Exemplo:

cash in accessible bank account


---

Near-Term Liquidity

Disponível em curto prazo.

Exemplo:

funds settling in next hours


---

Restricted Liquidity

Existe, mas não pode ser usado.


---

Contingent Liquidity

Disponível via:

credit lines

treasury facilities

emergency funding



---

Strategic Liquidity

Reservas para cenários extremos.


---

5.2 Real-Time Liquidity Engine

Motor que calcula:

Current cash
Projected outflows
Settlement obligations
Reserve requirements
Available funding
Liquidity coverage


---

5.3 Liquidity Sufficiency Formula

Modelo simplificado:

Available Liquidity
- Expected Outflows
- Reserve Requirements
- Settlement Exposure
= Net Liquidity Buffer


---

5.4 Liquidity Thresholds

Exemplo:

Green Zone

Liquidity > 150%

Normal.


---

Yellow Zone

Liquidity 110–150%

Attention.


---

Red Zone

Liquidity < 110%

Funding action required.


---

Critical Zone

Liquidity < minimum threshold

Emergency controls activate.


---

5.5 Liquidity Triggers

Eventos automáticos:

initiate funding

suspend payouts

increase reserve

reroute settlement

activate contingency lines



---

5.6 Intraday Liquidity Risk

Problemas típicos:

morning payout spikes

delayed settlement

payment rail congestion

bank cutoffs

FX funding delay


Treasury precisa prever isso antes da falha.


---

5.7 Liquidity Stress Testing

Cenários:

30% settlement delay
major PSP outage
bank cutoff failure
withdrawal spike
fraud reserve depletion

Outputs:

survivability horizon

liquidity gap

emergency funding need



---

6. Treasury Ledger Integration

Treasury e Ledger precisam operar sincronizados, mas não são a mesma coisa.


---

6.1 Conceptual Difference

Ledger

Representa:

financial obligation


---

Treasury

Representa:

real cash


---

Exemplo:

Customer balance = 100M
Bank cash = 98M
Pending settlement = 2M

Contabilmente correto, mas treasury precisa modelar a diferença.


---

6.2 Treasury Journal Events

Eventos treasury típicos:

bank funding

reserve movement

settlement release

interbank transfer

liquidity sweep

collateral movement



---

6.3 Treasury Position Journals

Modelo:

Bank A Cash ↓
Settlement Reserve ↑

Ou:

Operational Cash ↓
Safeguarding Account ↑


---

6.4 Treasury Reconciliation Formula

Sempre validar:

Ledger obligation
= Treasury position
± in-transit timing items


---

6.5 Position Drift Detection

Detecta:

bank mismatch

settlement mismatch

reserve mismatch

funding mismatch

stale statement mismatch



---

6.6 Treasury Balance Integrity Rules

Exemplos:

No negative treasury position
No reserve underfunding
No settlement without funding
No customer money leakage
No safeguarding deficit


---

7. Settlement Treasury Architecture

Settlement consome liquidez.

Por isso treasury precisa controlar funding antes de settlement.


---

7.1 Settlement Funding Model

Antes de liquidar:

Treasury verifica:

sufficient cash

reserve sufficiency

rail availability

bank cutoff timing

funding confirmation



---

7.2 Gross Settlement Model

Cada transação liquidada individualmente.

Características:

simpler exposure

higher liquidity requirement


Modelo:

Transaction by transaction


---

7.3 Net Settlement Model

Liquidação líquida.

Modelo:

Gross Inflows
- Gross Outflows
= Net Settlement

Reduz liquidez necessária.


---

7.4 Prefunding Controls

Rails frequentemente exigem pré-funding.

Exemplo:

PIX reserve
Card network reserve
Wallet payout reserve

Treasury precisa validar:

Prefunding sufficient?


---

7.5 Settlement Reserve Logic

Reserva específica para:

pending payouts

delayed settlement

failed rails

dispute exposure



---

7.6 Settlement Failure Scenarios

Eventos:

settlement rejected

funding missing

rail unavailable

cutoff missed

confirmation missing


Treasury respostas:

hold release

reroute

emergency funding

queue retry



---

8. Safeguarding Architecture

Safeguarding é obrigatório em muitos modelos fintech.

Objetivo:

> Fundos de clientes não podem se misturar ao caixa operacional.




---

8.1 Customer Money Segregation

Separação entre:

Customer Funds
Operational Funds
Reserve Funds
Corporate Funds


---

8.2 Safeguarding Pools

Modelo:

Pool A = Customer wallets
Pool B = Merchant settlement
Pool C = Client deposits

Cada pool reconciliado separadamente.


---

8.3 Ring-Fenced Accounts

Contas com proteção legal.

Características:

segregated ownership logic

operational restrictions

insolvency shielding

reconciliation evidence



---

8.4 Customer Money Formula

Controle:

Customer Ledger Liability
= Safeguarded Funds
± timing items


---

8.5 Safeguarding Deficit Detection

Detecta:

Liability > safeguarded cash

Evento crítico.

Respostas:

treasury funding

alert escalation

payout restrictions

regulatory evidence generation



---

8.6 Safeguarding Surplus Detection

Também precisa detectar:

Safeguarded cash > customer liability

Porque pode indicar:

duplicate funding

reconciliation error

settlement lag



---

8.7 Safeguarding Reconciliation

Comparações:

Ledger liability
vs
Bank safeguarded balance
vs
Settlement in transit
vs
Treasury records


---

8.8 Regulatory Safeguarding Controls

Controles típicos:

daily safeguarding proof

intraday deficit alerts

restricted use controls

payout blocking on deficit

evidence retention

regulatory reporting



---

8.9 Insolvency Protection Logic

Em caso de falha institucional:

Customer funds devem ser:

isolated
traceable
protected
recoverable


---

8.10 Safeguarding Architecture Reference Flow

Customer Deposit
    ↓
Ledger Liability Created
    ↓
Treasury Cash Received
    ↓
Safeguarding Pool Allocation
    ↓
Bank Segregated Account Funding
    ↓
Reconciliation
    ↓
Regulatory Evidence


---






Parte 3 completa do:

docs/TREASURY_ARCHITECTURE.md


---

9. Reserve Management

Reservas são buffers financeiros usados para absorver risco, volatilidade e obrigações futuras.

Sem arquitetura de reservas, a tesouraria fica vulnerável a:

chargebacks

fraudes

atrasos de settlement

choques de liquidez

perdas operacionais

eventos regulatórios



---

9.1 Reserve Architecture Principles

Reservas devem ser:

segregadas

rastreáveis

justificáveis

reconciliáveis

proporcionais ao risco

controladas por política



---

9.2 Reserve Types


---

Operational Reserve

Buffer para:

falhas operacionais

timing mismatch

settlement friction

payout delays



---

Chargeback Reserve

Buffer para:

card disputes

merchant clawbacks

payment reversals



---

Fraud Reserve

Protege contra:

fraudulent payouts

account takeover

mule losses

unauthorized transfers



---

Liquidity Reserve

Protege contra:

withdrawal spikes

settlement delays

intraday liquidity gaps



---

Regulatory Reserve

Exigências regulatórias:

prudential reserve

safeguarding reserve

capital interaction reserve



---

Counterparty Reserve

Proteção contra:

PSP exposure

bank exposure

settlement partner risk



---

9.3 Reserve Sizing Logic

Reservas podem ser calculadas por:


---

Static Model

Exemplo:

10M fixed reserve

Simples, mas pouco adaptativo.


---

Percentage Model

Exemplo:

2% of payout volume


---

Risk-Based Model

Exemplo:

reserve = probability × exposure × loss severity


---

Dynamic Model

Inputs:

fraud trend

settlement behavior

seasonality

withdrawal volatility

counterparty risk



---

9.4 Reserve State Model

Estados:

Allocated
Available
Consumed
Pending replenishment
Released
Restricted


---

9.5 Reserve Integrity Controls

Validações:

reserve cannot go negative

reserve funding source tracked

reserve usage authorized

reserve release auditable

reserve deficit alerts



---

9.6 Reserve Release Logic

Reservas não podem ficar presas indefinidamente.

Regras:

Exemplo:

Chargeback reserve released after risk window expires


---

9.7 Reserve Depletion Scenarios

Eventos:

fraud spike

chargeback wave

delayed settlement

payout surge


Respostas:

reserve top-up

payout throttling

funding activation

emergency escalation



---

10. Cash Forecasting Architecture

Tesouraria não pode operar apenas olhando o saldo atual.

Precisa prever o futuro.


---

10.1 Forecasting Objectives

Responder:

Will cash be sufficient later today?
Will funding be needed tomorrow?
Can settlement obligations be met this week?


---

10.2 Forecast Inputs

Inputs típicos:

historical transaction volume

payout schedules

settlement schedules

customer behavior

reserve requirements

bank cutoff windows

seasonality

fraud signals

product campaigns



---

10.3 Forecast Horizons


---

Intraday Forecast

Horizonte:

next hours

Usado para:

payout funding

rail capacity

settlement timing



---

T+1 Forecast

Horizonte:

next day

Usado para:

overnight liquidity

morning payouts

funding need



---

T+N Forecast

Horizonte:

days / weeks

Usado para:

strategic funding

treasury planning



---

Stress Forecast

Horizonte:

cenários extremos.


---

10.4 Forecasting Model Structure

Modelo simplificado:

Opening Cash
+ Expected Inflows
- Expected Outflows
- Reserve Consumption
- Settlement Obligations
= Forecasted Liquidity


---

10.5 Forecast Dimensions

Forecast deve existir por:

bank

currency

legal entity

payment rail

settlement partner

reserve class



---

10.6 Scenario Forecasting

Exemplos:


---

Normal Day

Baseline behavior.


---

Withdrawal Spike

+40% outflow


---

Settlement Delay

cash inflow postponed


---

Fraud Event

reserve usage surge


---

Bank Outage

cash trapped


---

10.7 Forecast Error Monitoring

Métricas:

forecast vs actual

Monitora:

model drift

liquidity surprise

forecasting bias

volume anomaly



---

11. Funding Architecture

Funding garante que rails e obrigações possam ser honrados.


---

11.1 Funding Sources


---

Internal Cash

Caixa disponível próprio.


---

Reserve Release

Uso controlado de reservas liberáveis.


---

Interbank Transfer

Movimento entre contas bancárias.


---

Credit Facilities

Linhas de crédito.


---

Emergency Liquidity

Funding de contingência.


---

External Treasury Facilities

Parceiros de funding.


---

11.2 Funding Trigger Logic

Funding é ativado quando:

Available Liquidity < threshold

Ou:

Settlement reserve insufficient


---

11.3 Automated Funding Rules

Exemplos:


---

Threshold Funding

if balance < X
→ top-up


---

Forecast Funding

if projected shortfall
→ pre-fund


---

Event Funding

large payout batch detected
→ reserve funding


---

11.4 Funding Priority Logic

Exemplo:

1. Internal liquidity
2. Reserve release
3. Interbank transfer
4. Credit line
5. Emergency facility


---

11.5 Funding Constraints

Funding pode ser bloqueado por:

bank cutoff

legal restrictions

reserve policy

counterparty limit

FX availability



---

11.6 Emergency Funding Controls

Eventos:

payout run

settlement failure

bank liquidity trap

systemic outage


Respostas:

contingency lines

emergency treasury approval

payment throttling



---

12. Sweep Architecture

Sweep é movimentação automática de caixa entre contas.

Objetivos:

centralizar liquidez

funding automático

otimizar caixa

reduzir risco



---

12.1 Sweep Types


---

End-of-Day Sweep

Executado após cutoff.

Exemplo:

branch balances → central treasury


---

Intraday Sweep

Durante o dia.

Usado para:

payout funding

liquidity balancing



---

Threshold Sweep

Exemplo:

if balance > X
→ sweep excess

Ou:

if balance < Y
→ top-up


---

Reserve Sweep

Move caixa para:

reserve accounts

safeguarding pools

collateral accounts



---

12.2 Multi-Bank Sweep Architecture

Modelo:

Bank A excess → Bank B deficit

Ou:

Regional bank → central treasury


---

12.3 Sweep Protection Rules

Sweep não pode violar:

safeguarding requirements

reserve minimums

legal entity boundaries

cutoff rules

operational liquidity minimums



---

12.4 Sweep Failure Handling

Eventos:

transfer failed

bank unavailable

confirmation missing


Respostas:

retry

alternate route

treasury alert



---

12.5 Sweep Audit Controls

Registrar:

reason

source

destination

authorization

confirmation

treasury impact



---

13. Treasury Risk Controls

Tesouraria é um domínio de risco.


---

13.1 Liquidity Risk

Risco:

Not enough cash when needed

Monitora:

liquidity coverage

funding gaps

withdrawal pressure



---

13.2 Concentration Risk

Risco:

Muito caixa em:

um banco

um PSP

uma rail

uma entidade


Controle:

Exemplo:

Bank exposure < 30%


---

13.3 Counterparty Risk

Risco:

Parceiro financeiro falhar.

Exemplos:

bank insolvency

PSP freeze

settlement delay


Controles:

limits

diversification

reserve overlays



---

13.4 Settlement Risk

Risco:

Ledger posted, cash not settled.

Controles:

reserve buffers

pending settlement monitoring

timeout triggers



---

13.5 Funding Risk

Risco:

Funding não chegar quando necessário.

Monitora:

bank cutoff

funding delay

line exhaustion



---

13.6 FX Liquidity Risk

Risco:

Cash existe em moeda errada.

Exemplo:

USD available
BRL required


---

13.7 Operational Treasury Risk

Risco:

Falhas de processo.

Exemplos:

missed sweep

failed funding

duplicate release

stale bank data



---

13.8 Risk Threshold Model

Thresholds:


---

Advisory

Monitor only.


---

Warning

Treasury attention.


---

Breach

Treasury action required.


---

Critical

Automatic controls activate.


---

13.9 Treasury Risk Triggers

Exemplos:

payout throttling

funding activation

reserve increase

settlement hold

executive escalation



---

13.10 Treasury Risk Dashboard

Monitoramento:

Available Liquidity
Reserve Coverage
Settlement Exposure
Bank Exposure
Counterparty Exposure
Funding Sufficiency
Forecast Gap
Stress Survival Horizon


---









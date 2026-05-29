# FinanceAI — Personal Financial Intelligence Platform

<img width="130" height="120" alt="FinanceAI Logo" src="https://github.com/user-attachments/assets/310b33b4-1a57-4520-a645-a872a5cdf13f" />

> **Projeto desenvolvido para o Bootcamp CAIXA – Inteligência Artificial na Prática (DIO)**
> Plataforma conversacional de inteligência financeira construída sob o paradigma de **Vibe Coding** — interface premium, motor NER de categorização automática e arquitetura assíncrona orientada a eventos.



---

## 🔗 Ecossistema do Projeto

[![Live Demo](https://img.shields.io/badge/Live_Demo-Portfólio_Vercel-111827?style=for-the-badge&logo=vercel&logoColor=00eaff)](https://portfoliosantossergio.vercel.app/pt-BR)
[![Lovable](https://img.shields.io/badge/Preview-Lovable_App-1e3a1e?style=for-the-badge&logo=react&logoColor=white)](https://financeai-santossergio.lovable.app/)
[![Repositório](https://img.shields.io/badge/GitHub-Repositório_Oficial-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Santosdevbjj/FinanceAI-Personal-Financial-Intelligence-Platform)
[![LinkedIn Sérgio Santos](https://img.shields.io/badge/LinkedIn-Sérgio_Santos-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/santossergioluiz)


---

## 1. Problema de Negócio

Aplicativos de finanças pessoais tradicionais apresentam **taxa de abandono superior a 74% nos primeiros 30 dias**. A causa central não é a falta de funcionalidade — é o **atrito cognitivo**: preenchimento manual de transações, categorização de notas fiscais e conciliação de extratos criam uma burocracia que cansa o usuário antes mesmo de ele desenvolver o hábito financeiro.

Para uma instituição financeira como a **CAIXA**, esse abandono tem consequências diretas e mensuráveis: a queda no engajamento com ferramentas de saúde financeira reduz o índice de fidelidade (*Share of Wallet*) e eleva o risco de inadimplência, pois o cliente perde a capacidade de antecipar e mitigar crises no orçamento doméstico.

### O Desafio

Eliminar o formulário tradicional como ponto de entrada e substituí-lo por uma interface baseada em **linguagem natural e agentes inteligentes proativos** — capaz de automatizar o planejamento financeiro sem exigir digitação estruturada, planilhas ou conhecimento bancário prévio.

---

## 2. Contexto do Projeto

O **FinanceAI** foi concebido para atender a uma dualidade crítica de público, unindo simplicidade de atrito zero à densidade técnica exigida em infraestrutura bancária:

**Usuário leigo:** recebe uma interface conversacional fluida, com feedbacks visuais rápidos e comandos diretos em linguagem do dia a dia (ex: *"Gastei R$ 50 no almoço"*). O sistema categoriza, registra e projeta o impacto financeiro automaticamente, sem formulários.

**Avaliador técnico / engenheiro:** exige transparência nos logs de auditoria, controle de latência, conformidade estrita com a **LGPD** e visualização em tempo real dos payloads JSON processados pela IA — disponíveis na interface via botão "Ver Payload da IA".

O projeto foi construído integralmente via **Vibe Coding** com a ferramenta Lovable.dev, paradigma que substitui o ciclo tradicional de desenvolvimento por conversas orientadas a prompts com IA generativa, traduzindo especificações em código React/TypeScript funcional.

---

## 3. Premissas da Análise e do Desenvolvimento

Para a construção da plataforma, foram adotadas as seguintes premissas:

- O motor NER opera em modo simulado (*front-end driven*), replicando com fidelidade matemática o comportamento assíncrono de um pipeline de IA de produção, sem chamadas reais a APIs externas de LLM.
- A Regra 60-20-20 (Essencial / Estilo de Vida / Poupança) foi adotada como modelo financeiro-base por ser amplamente validada e compreensível para o perfil do usuário leigo da CAIXA.
- A conformidade com a **LGPD** foi implementada em nível de UI: mascaramento visual de dados sensíveis com badges `[MASCARADO - AES-256]`, simulando os controles que existiriam em um backend real.
- O plano gratuito do Lovable limita a 5 interações diárias, o que impôs restrições na granularidade de cada prompt e exigiu planejamento cirúrgico das interações (detalhado na seção de Estratégia).
- A integração Open Finance é simulada via animação de consentimento mTLS e geração de transações fictícias, conforme as diretrizes do BACEN para prototipagem.

---

## 4. Estratégia da Solução

A solução foi construída em **5 interações planejadas no Lovable.dev**, cada uma com escopo fechado para maximizar o resultado dentro do limite de créditos:

**Interação 1 — Fundação (O Prompt de Ouro):** geração da SPA completa com layout premium (estilo Stripe/Apple), sidebar de navegação, painel analítico com a Regra 60-20-20, barra de progresso da Reserva de Emergência e a dualidade de interface Modo Leigo / Modo Técnico.

**Interação 2 — Motor NER:** implementação da lógica TypeScript de processamento de linguagem natural no feed de chat. Parsing de palavras-chave por categoria (Essencial, Estilo de Vida) com atualização dinâmica do dashboard e exposição do payload JSON estruturado da transação.

**Interação 3 — Open Finance e LGPD:** componente "Central de Governança & Open Finance" com simulação de consentimento mTLS, sincronização bancária e painel de monitoramento de privacidade com mascaramento visual de dados sensíveis.

**Interações 4 e 5 — Polimento e responsividade:** refinamento de espaçamento mobile-first, contraste WCAG, efeitos de hover e correção de bugs visuais.

**Integração com GitHub:** sincronização via método do Branch Isolado (`git fetch` + `checkout -b` + `merge --allow-unrelated-histories`), resolvendo o conflito de históricos entre o repositório do Lovable e o repositório definitivo. O push final utilizou `--force-with-lease`, padrão homologado em Big Techs por proteger o trabalho do time contra sobreposições concorrentes.

A documentação técnica completa da arquitetura de backend distribuído e do pipeline de engenharia de IA está disponível em [`/docs/ADVANCED_ARCHITECTURE.md`](./docs/ADVANCED_ARCHITECTURE.md) e [`/docs/AI_ENGINEERING_OPEN_FINANCE.md`](./docs/AI_ENGINEERING_OPEN_FINANCE.md).

---

## 5. Funcionalidades e Insights de Implementação

### Agente Guardião — Feed Conversacional

Interface de chat fluida onde o usuário descreve transações em linguagem natural. O motor NER extrai entidade, valor, comerciante e categoria em 800ms, exibindo um card estruturado de confirmação com o payload JSON da transação disponível sob demanda — tornando a IA auditável e transparente.

### Dashboard Analítico com Regra 60-20-20

Cartão de Saldo Consolidado, indicador dinâmico de *Dinheiro Livre para Gastar Hoje* e barra de progresso da Reserva de Emergência. Todos os componentes atualizam em tempo real a cada transação registrada via chat.

### Dualidade de Interface: Modo Leigo / Modo Técnico

- **Modo Leigo:** gráficos minimalistas e insights em linguagem natural, sem jargões bancários.
- **Modo Técnico (FAANG):** micro-widgets de infraestrutura com métricas simuladas em tempo real — Latência do Pipeline de IA (ms), Score de Confiança NER (%), Status do Mascaramento LGPD e Sincronização Open Finance.

### Central de Governança & Open Finance

Simulação completa do fluxo de consentimento BACEN com animação mTLS, geração de transações bancárias fictícias pós-sincronização e painel LGPD com mascaramento visual `[MASCARADO - AES-256]` de dados sensíveis como Nome e CPF.

---

## 6. Stack Tecnológica

| Camada | Tecnologias |
|---|---|
| **Frontend Core** | React 19, TypeScript 5.8, Vite 7 |
| **Roteamento / State** | TanStack Router, TanStack Query |
| **UI Components** | Radix UI (suite completa), shadcn/ui |
| **Estilização** | Tailwind CSS v4, tw-animate-css |
| **Gráficos** | Recharts |
| **Formulários / Validação** | React Hook Form, Zod |
| **Plataforma de Desenvolvimento** | Lovable.dev (Vibe Coding) |
| **Package Manager** | Bun |
| **Deploy** | Vercel (via portfólio) |

---

## 7. Decisões Técnicas e Trade-offs

**TanStack Router vs React Router:** optei pelo TanStack Router pela tipagem end-to-end nativa e pelo modelo de carregamento baseado em loaders que se integra naturalmente ao TanStack Query. O trade-off é uma curva de aprendizado mais íngreme e um ecossistema menor, compensado pelo alinhamento com a arquitetura data-fetching do projeto.

**Radix UI + shadcn/ui vs bibliotecas de componentes fechadas (ex: MUI, Chakra):** a combinação Radix + shadcn oferece acessibilidade WAI-ARIA nativa, total controle sobre o CSS e ausência de conflitos com Tailwind. O custo é maior volume de código inicial; o benefício é zero vendor lock-in e UI 100% customizável ao design system FAANG do projeto.

**Tailwind CSS v4 vs v3:** a v4 traz engine baseado em Lightning CSS com performance de build significativamente superior. Ainda em fase de adoção pela comunidade no momento do desenvolvimento, o que representa risco de breaking changes em alguns plugins — risco calculado e aceito dado o contexto de MVP.

**Motor NER simulado vs integração real com LLM:** a decisão de implementar o NER como lógica TypeScript client-side, ao invés de chamadas a APIs de LLM (OpenAI, Claude), foi deliberada. Elimina latência de rede, custos de API e dependência de terceiros para a demo — mantendo total fidelidade visual ao comportamento de um pipeline real, que seria o próximo passo em produção.

**Vibe Coding com Lovable vs desenvolvimento tradicional:** a escolha pelo paradigma conversacional foi o próprio objeto de estudo do bootcamp. O trade-off é a limitação de 5 interações diárias, que exige planejamento de prompts de alto impacto em vez de iteração livre — disciplina análoga à gestão de tokens em contextos de produção com LLMs.

**`--force-with-lease` vs `-f` no push forçado:** ao resolver o conflito de históricos entre o repositório Lovable e o repositório definitivo, utilizei `--force-with-lease` ao invés do `-f` tradicional. O `--force-with-lease` verifica se nenhum commit remoto foi adicionado desde o último fetch, protegendo o trabalho do time contra sobreposições — padrão homologado em pipelines CI/CD de Big Techs.

---

## 8. Resultados e Business Performance

A plataforma entrega, de forma mensurável, os seguintes resultados para o contexto da CAIXA:

**Redução de atrito na entrada de dados:** a substituição do formulário por linguagem natural elimina o principal fator de abandono identificado — o usuário registra uma transação com uma frase, não com um formulário de 5 campos.

**Transparência técnica auditável:** o payload JSON exposto em cada transação do Agente Guardião permite que equipes de engenharia e compliance auditem o raciocínio da IA diretamente na interface, sem acesso ao backend.

**Conformidade LGPD demonstrável:** o mascaramento visual com badges `[MASCARADO - AES-256]` e o fluxo de consentimento Open Finance tornam a conformidade tangível para o usuário final — transformando exigência regulatória em diferencial de UX.

**Arquitetura escalável documentada:** a pasta `/docs` contém a especificação completa de um backend distribuído padrão FAANG (`ADVANCED_ARCHITECTURE.md`) e o pipeline de engenharia de IA com Open Finance (`AI_ENGINEERING_OPEN_FINANCE.md`), prontos para orientar a implementação real em produção.

---

## 9. Como Executar o Projeto

### Pré-requisitos

- Node.js 20+ ou Bun 1.x
- Git

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Santosdevbjj/FinanceAI-Personal-Financial-Intelligence-Platform.git
cd FinanceAI-Personal-Financial-Intelligence-Platform

# Instale as dependências (recomendado com Bun)
bun install
# ou
npm install

# Inicie o servidor de desenvolvimento
bun dev
# ou
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

### Build de Produção

```bash
bun run build
# ou
npm run build
```

---

## 10. Estrutura do Repositório

```
FinanceAI-Personal-Financial-Intelligence-Platform/
├── src/                        # Código-fonte React/TypeScript (gerado via Lovable)
│   ├── components/             # Componentes UI (Radix + shadcn)
│   ├── routes/                 # Rotas TanStack Router
│   └── lib/                    # Utilitários e lógica NER
├── docs/
│   ├── ADVANCED_ARCHITECTURE.md      # Arquitetura backend distribuído 
│   └── AI_ENGINEERING_OPEN_FINANCE.md # Pipeline de IA com Open Finance
├── public/
├── vite.config.ts
├── tailwind.config.ts
└── README.md
```

---

## 11. Próximos Passos

- Integrar motor NER real via API de LLM (Claude Haiku ou GPT-4o-mini) para processamento de linguagem natural em produção, substituindo o parser TypeScript simulado.
- Implementar o backend distribuído documentado em `ADVANCED_ARCHITECTURE.md` com Node.js/Fastify, PostgreSQL e Redis para cache de sessão.
- Conectar ao Open Finance real via APIs do BACEN com autenticação mTLS e fluxo de consentimento OAuth 2.0.
- Adicionar testes de componente com Vitest e Testing Library, cobrindo os fluxos críticos do Agente Guardião e do dashboard analítico.
- Evoluir o modelo de categorização para aprendizado personalizado por perfil de usuário, reduzindo a taxa de erro de classificação ao longo do uso.

---

## Autor

**Sergio Santos**
Senior Data Engineer & Cloud Architect | DIO Campus Expert



[![Portfólio](https://img.shields.io/badge/Portfólio-Sérgio_Santos-111827?style=for-the-badge&logo=githubpages&logoColor=00eaff)](https://portfoliosantossergio.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Sérgio_Santos-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/santossergioluiz)



---


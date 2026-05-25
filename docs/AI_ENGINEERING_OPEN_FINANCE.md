🤖 docs/AI_ENGINEERING_OPEN_FINANCE.md
🏛️ 1. PROPÓSITO E ESCOPO DO DOCUMENTO
Este documento técnico define os padrões de Engenharia de Inteligência Artificial, processamento de linguagem natural (NLP), integração com o ecossistema nacional de Open Finance (Banco docs/AI_ENGINEERING_OPEN_FINANCE.mdFinanceAI.

O objetivo é complementar a arquitetura de sistemas distribuídos (ADVANCED_ARCHITECTURE.md), conectando os fluxos conversacionais gerados via Vibe Coding (Lovable.dev) a uma infraestrutura de backend resiliente, escalável e de nível FAANG/Stripe.

🧠 2. CAMADA DE ENGENHARIA DE IA & PROGESSAMENTO DE LINGUAGEM (NLP)
2.1 Arquitetura de Pipelines de IA (Mecanismo NER)
Para que a interface conversacional do FinanceAI elimine o atrito de inputs manuais, a plataforma utiliza um motor de Named Entity Recognition (NER) baseado em modelos de linguagem privados (como o GPT-4o implantado na infraestrutura corporativa do Azure OpenAI da CAIXA). O pipeline de processamento segue o fluxo abaixo:

Ingestão Multimodal: O chat recebe inputs de texto livre ou áudio transcrito via Whisper API (ex: "Gastei 150 reais no carrefour ontem à noite com compras").
Sanitização e Tokenização: Filtros de segurança removem PII (Informações Pessoais Identificáveis) desnecessárias antes do envio ao modelo.
Extração de Entidades Lógicas (JSON Estruturado): O modelo é forçado via Structured Outputs a retornar um payload JSON previsível contendo:
amount: Valor numérico normalizado em float.
currency: Código da moeda (padrão ISO 4217).
category: Categoria inferida com base na taxonomia financeira da plataforma.
timestamp: Data e hora normalizadas no padrão ISO 8601.
merchant: Nome do estabelecimento comercial limpo.
{
  "transaction_extracted": {
    "raw_input": "Gastei 150 reais no carrefour ontem à noite com compras",
    "amount": 150.00,
    "currency": "BRL",
    "category": "Alimentação",
    "subcategory": "Supermercado",
    "merchant": "Carrefour",
    "timestamp": "2026-05-24T20:00:00Z",
    "confidence_score": 0.98
  }
}
2.2 Tabela de Prompts de Sistema e Engenharia de Contexto
Para mitigar alucinações e garantir latência abaixo de 200ms na extração de entidades, os prompts de sistema seguem padrões rígidos de engenharia de contexto:

Componente	Prompt de Sistema (System Prompt)	Objetivo Técnico
Agente Extrator (NER)	Você é um analisador sintático financeiro de baixa latência. Seu único objetivo é ler uma string de texto livre e extrair: valor, estabelecimento, categoria (Baseado na Regra 60-20-20) e data. Responda estritamente em JSON válido, sem markdown corporativo adicionado ou tags em cascata.	Extração de entidades estruturadas com taxa zero de alucinação sintática.
Agente Guardião (Coach)	Você é o Agente Guardião do FinanceAI, um especialista em psicologia comportamental e finanças. Seu tom deve ser empático, preciso e educativo. Ao detectar uma violação no teto de despesas não essenciais, emita um alerta proativo contendo uma alternativa prática de economia.	Interação de engajamento baseada nas metodologias comportamentais do Banco Central.
🔀 3. MOTOR DE SINCRONIZAÇÃO OPEN FINANCE (PADRÃO BACEN)
3.1 Arquitetura de Integração Conversacional vs. Bancária
O FinanceAI opera em um modelo híbrido de conciliação. A inteligência artificial baseada em conversas atua no Write Path (entrada rápida pelo usuário), enquanto o motor de Open Finance atua no Read Path assíncrono para validar, auditar e conciliar os dados inseridos manualmente com os extratos consolidados dos bancos parceiros regulados pelo Banco Central do Brasil.

┌────────────────────────────────────────────────────────────────────────┐
│                        PIPELINE DE CONCILIAÇÃO                        │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  [Input de Texto] ──> (Motor NER / LLM) ──> [Transação Pendente]       │
│                                                     │                  │
│                                                     ▼                  │
│  [Banco do Brasil/CAIXA] ──> (Open Finance) ──> [Fato Bancário Real]    │
│                                                     │                  │
│                                                     ▼                  │
│                       (Motor de Match Eficiente) ─────────────────────┐│
│                                                                       ││
│                                                                       ▼│
│                                                       [Estado Consolidado]
└────────────────────────────────────────────────────────────────────────┘
3.2 Estrutura de Endpoints de APIs Open Finance (Fase 2 & Fase 3)
A sincronização consome os endpoints padronizados da Estrutura de Governança do Open Finance Brasil:

Autenticação mTLS: Canal seguro com certificados ICP-Brasil.
Consents API (/consents/v1): Criação e gerenciamento do consentimento do usuário para leitura de dados de saldo e extrato.
Personal Expenses API (/resources/v1/personal-expenses): Coleta automatizada de transações históricas de cartões de crédito e contas correntes para alimentar o motor de orçamentação da Regra 60-20-20.
🔒 4. SEGURANÇA, PRIVACIDADE E GOVERNANÇA DE DADOS (LGPD/BACEN)
4.1 Mascaramento, Anonimização e Criptografia
De acordo com as diretrizes da LGPD (Lei Geral de Proteção de Dados) e as resoluções de segurança cibernética do BACEN (Resolução CMN nº 4.893), dados financeiros e pessoais exigem isolamento criptográfico absoluto:

Criptografia em Trânsito (TLS 1.3) e em Repouso (AES-256-GCM): Todas as tabelas de banco de dados e partições do Apache Kafka que trafegam payloads lógicos de finanças possuem chaves gerenciadas em HSM (Hardware Security Module).
Pipeline de Mascaramento de Logs (PII Sanitizer): Antes de enviar qualquer payload para ferramentas de observabilidade (Datadog, Kibano, AWS CloudWatch) ou para auditoria de prompts de IA, uma camada intermediária limpa os dados identificáveis.
[Payload Original] ──> (Regex & NER PII Filter) ──> [Payload Mascarado para Logs]
Nome: João da Silva       -> [REDACTED]             Nome: USER_ANON_9831
CPF: 123.456.789-00       -> [HASH_SHA256]          CPF: e3b0c44298fc1c149...
Saldo: R$ 15.430,22       -> [ROUND_APPROX]         Saldo: R$ XX.XXX,XX
4.2 Matriz de Governança e Retenção de Dados Financeiros
Tipo de Dado	Tempo de Retenção	Nível de Acesso Interno	Método de Exclusão (Purge)
Prompts de Chat Brutos	30 Dias (Apenas para Tunning)	Nenhum (Isolamento por IA)	Sobrescrita criptográfica automatizada.
Transações Conciliadas	5 Anos (Exigência Regulatória)	Criptografado (Acesso restrito via RBAC)	Arquivamento em Cold Storage imutável.
Tokens de Acesso Open Finance	Enquanto durar o consentimento (Máx 12 meses)	Automatizado via microsserviço	Revogação de chaves e deleção física das tabelas de sessão.
🛠️ 5. ARQUITETURA CONVERSACIONAL NO LOVABLE: PASSO A PASSO TÉCNICO
Para materializar esta engenharia avançada de IA dentro dos limites do Lovable.dev (5 interações diárias), o desenvolvedor deve parametrizar a simulação lógica do chat com o seguinte passo a passo cirúrgico:

Passo 1: Construção do Mock Lógico do Extrator
No painel do Lovable, utilize o prompt estruturado abaixo para criar a lógica interna do front-end que simulará a extração de variáveis lógicas pela IA, sem queimar chamadas externas de API durante o desenvolvimento da UI:

Implemente uma função auxiliar TypeScript chamada 'simulateAIExtraction(input: string)' dentro do componente de chat do Lovable. Esta função deve usar mapeamentos estáticos baseados em palavras-chave para simular o motor NER da plataforma FinanceAI. Se o texto contiver 'mercado' ou 'carrefour', retorne uma transação mockada de categoria 'Alimentação' associada à fatia de 60% (Essenciais). Se contiver 'cinema' ou 'restaurante', classifique como 'Lazer' associada à fatia de 20% (Não Essenciais). Renderize o retorno na tela com um componente animado de 'IA Processando...' que dura exatamente 800ms antes de injetar o card estruturado no feed do chat.
Passo 2: Implementação do Switch de Visão de Dados (Dualidade do Usuário)
Garantir a utilidade da plataforma para ambos os públicos alvo (leigos e técnicos) exige uma interface limpa que transmita a densidade dos dados distribuídos de forma acessível. Use este comando estratégico no Lovable:

Adicione um Toggle Switch no cabeçalho do painel de controle principal chamado 'Modo de Visualização'. 
1. Quando ativado no 'Modo Leigo (Simplificado)', oculte dados de infraestrutura e exiba apenas o widget 'Dinheiro Disponível para Gastar Hoje' utilizando fontes grandes, cores verdes ou amarelas amigáveis e um insight motivacional gerado pelo Agente Guardião.
2. Quando alternado para o 'Modo Técnico (Analítico)', exiba uma tabela densa com paginação contendo os campos: ID da Transação, Hash de Sincronização Open Finance, Score de Confiança do Motor NER (ex: 98%), Tempo de Latência do Pipeline de IA (ex: 142ms) e o status do log de auditoria LGPD (Mascarado/Seguro).
Passo 3: Exportação e Vinculação ao Repositório GitHub
Com os componentes de IA e Open Finance devidamente simulados e estruturados visualmente na sandbox do Lovable:

Clique no botão de exportação e sincronização com o GitHub localizado no painel superior direito da ferramenta.
Selecione o repositório oficial atualizado do projeto: Santosdevbjj/FinanceAI-Personal-Financial-Intelligence-Platform.
Valide se a estrutura foi mesclada com sucesso e referencie este documento (AI_ENGINEERING_OPEN_FINANCE.md) no README.md master da aplicação para garantir a pontuação máxima no Bootcamp da CAIXA.

# 💸 App de Organização de Finanças Pessoais com Vibe Coding

> **Projeto desenvolvido para o Bootcamp CAIXA – Inteligência Artificial na Prática (DIO)**
> Avaliação Estratégica e MVP de Solução Inteligente com Foco em Engenharia de Prompts.

---

## ✨ O que é Vibe Coding?

**Vibe Coding** representa uma mudança de paradigma no desenvolvimento de software. Em vez de escrever códigos linha por linha de forma mecânica, o desenvolvedor atua como um **Arquiteto de Intenções**. Utilizando linguagem natural bem estruturada, contexto rico e restrições claras, guiamos agentes de Inteligência Artificial para gerar interfaces, fluxos lógicos e regras de negócio complexas. 

*   **A "Vibe":** Design elegante, acessibilidade extrema e inteligência proativa.
*   **O Código:** Delegado a ferramentas de última geração como o **Copilot** (lapidação de ideias) e o **Lovable** (geração do produto funcional).

---

## 🎯 O Desafio & Visão do Produto

Os aplicativos de finanças tradicionais falham pelo mesmo motivo: **atrito**. Exigir que o usuário abra um formulário para digitar o valor do pão na padaria gera cansaço e abandono.

A nossa solução elimina esse atrito por completo. Através de uma **interface conversacional baseada em IA**, o usuário registra gastos como se estivesse conversando com um amigo no WhatsApp. Por trás dessa simplicidade, agentes inteligentes automatizam a categorização, aplicam metodologias financeiras consagradas (como a Regra 60-20-20) e criam planos de economia proativos.

---

## 📝 PRD (Product Requirement Document) Refinado

Este documento serviu como o *briefing* mestre enviado às IAs para garantir consistência visual e funcional do ecossistema.

### 1. Visão Geral e Contexto
O aplicativo é um assistente financeiro pessoal conversacional focado em democratizar a gestão de dinheiro para usuários leigos e oferecer rapidez para usuários técnicos. 

### 2. Personas do Público-Alvo
*   **Usuário Leigo (Maria, 29 anos, Autônoma):** Tem pavor de planilhas. Precisa de feedback visual simples, tom de voz acolhedor e respostas automáticas que digam exatamente quanto ela pode gastar no dia.
*   **Usuário Técnico (Carlos, 34 anos, Dev):** Sabe o que é uma API. Quer rapidez para registrar coisas via comandos rápidos de chat e deseja ver relatórios analíticos limpos, sem distrações.

### 3. Requisitos Funcionais (Escopo do MVP)
*   **RF01 - Chat de Linguagem Natural (Vibe Input):** O usuário digita *"Gastei R$ 45 no almoço com o time"* e a IA processa o valor, a categoria e a data sem inputs manuais.
*   **RF02 - Mecanismo de Categorização Inteligente:** Separação automática usando heurísticas financeiras orientadas à realidade do mercado atual (Essenciais, Desejos, Poupança/Dívidas).
*   **RF03 - O Agente Guardião (IA Coach):** Um bot integrado que intervém amigavelmente caso o usuário tente gastar acima da meta da categoria da semana.
*   **RF04 - Dashboard de Visualização Simplificada:** Gráficos limpos que mostram o "Dinheiro Livre" restante ao invés de gráficos de pizza complexos e poluídos.

### 4. Tom de Voz da IA
Educativo, motivador, livre de termos bancários complexos e focado em psicologia comportamental positiva (celebrar economias, não apenas punir gastos).

---

## 🪄 Engenharia de Prompts: Da Ideia à Execução

Para extrair o melhor resultado das ferramentas sem estourar limites de tokens ou gerar alucinações, foi utilizada a metodologia **Role-Context-Task-Constraint (RCTC)**.

### Prompt de Refinamento (Utilizado no Microsoft Copilot)
```text
Atue como um Engenheiro de Prompt e Analista de Negócios Sênior. Revise o PRD simplificado de um App de Finanças Pessoais Conversacional. Melhore a estrutura dele adicionando restrições técnicas para evitar telas poluídas, defina as variáveis esperadas de entrada no chat (valor, descrição, tags) e estruture as saídas de modo que uma ferramenta de geração de código front-end (como o Lovable) possa interpretar perfeitamente a arquitetura de componentes. Retorne o prompt pronto e otimizado em português.






---
Estrutura do repositório 

app-financas-pessoais-com-Vibe-Coding/
├── .github/
│   └── workflows/
│       └── node.js.yml        # CI/CD básico se houver deploy posterior
├── docs/
│   ├── prd_refinado.md        # Documento de Requisitos de Produto Completo
│   ├── prompts_otimizados.md  # Biblioteca de Prompts utilizada
│   └── manual_lovable.md      # Guia passo a passo do Lovable para leigos
├── assets/
│   ├── interface-preview.png  # Print principal da tela gerada no Lovable
│   ├── interaction-chat.png   # Print do fluxo de conversa/agente
│   └── mvp-roadmap.png        # Gráfico ou fluxo de arquitetura
├── src/                       # Caso queira exportar o código gerado pelo Lovable
│   ├── components/
│   ├── context/
│   └── App.tsx
├── LICENSE                    # Licença MIT ou similar
└── README.md                  # Apresentação principal do projeto (conteúdo abaixo)


---

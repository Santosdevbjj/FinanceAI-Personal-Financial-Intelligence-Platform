




Desenvolvimento com as ferramentas Neo4j MCP › Sistemas Agentic e MCP
O que é MCP?

Sérgio
Desenvolvendo com as ferramentas Neo4j MCP

Sistemas Agéticos e MCP
O que é MCP?
Teste relâmpago MCP
Instalando um servidor MCP
Instalando o servidor Neo4j MCP
Clareza e exploração
(Opcional)
Utilizando as ferramentas Neo4j MCP
Utilizando o servidor Neo4j Cypher MCP
Leitura do Esquema do Grafo
Geração de declarações cifradas
Construindo aplicações com ferramentas MCP
(Opcional)
Resumo e próximos passos
Parabéns!

Português (Brasil)
Powered by Google TradutorTradutor
Lição
O que é MCP?
O Model Context Protocol (MCP) é um protocolo aberto desenvolvido pela Anthropic que permite que agentes e assistentes de IA acessem ferramentas e recursos de forma padronizada.

Para usar o MCP de forma eficaz, é importante entender o conceito de Agente .

O que são agentes?
Existem muitas definições de Agente, mas para o contexto deste curso, um Agente é um sistema que age de forma independente , utilizando chamadas de ferramentas para acessar informações e tomar ações para atingir um objetivo específico .

Uma estrutura comum para a construção de agentes é a estrutura ReAct (Raciocínio/Ação). Quando um agente ReAct recebe uma entrada, ele segue um ciclo contínuo de planejamento , raciocínio e ação até que o objetivo seja alcançado.

Loop ReAct
O processo começa com o planejamento , onde o LLM analisa a tarefa, a divide em subtarefas, extrai as informações e parâmetros necessários e pode obter detalhes adicionais do usuário. Durante essa fase, o agente determina quais ferramentas serão necessárias e em que sequência elas devem ser acionadas.

Em seguida, vem o raciocínio , onde o LLM usa as descrições das ferramentas disponíveis para selecionar a(s) ferramenta(s) correta(s) para cada subtarefa. O agente avalia quais ferramentas são mais apropriadas com base no contexto e nos requisitos atuais.

Por fim, o agente age acionando as ferramentas selecionadas, seja em sequência ou em paralelo, para coletar informações e executar as ações necessárias. Os resultados dessas acionamentos de ferramentas são então realimentados na fase de planejamento, criando um ciclo contínuo no qual o agente refina sua abordagem com base em novas informações.

Por exemplo, considere um agente de automação residencial inteligente que usa a previsão do tempo combinada com dados de sensores de temperatura locais para ajustar as persianas e ligar um aparelho de ar condicionado.

Onde se encaixa o MCP?
Embora os agentes possam ter acesso a ferramentas escritas diretamente em sua base de código, o MCP fornece uma maneira padronizada para o agente consumir ferramentas criadas por terceiros.

Um agente pode ser configurado para acessar um serviço de API meteorológica hospedado na nuvem ou para se conectar a uma ferramenta de banco de dados local em execução na mesma máquina por meio de entrada/saída padrão (stdio).

Neo4j’s MCP server provides a set of tools that allow agents to interact with a Neo4j database, enabling them to perform tasks such as querying the graph, updating data, and retrieving insights.

Architecture
The MCP protocol consists of the following elements:

Servers

Clients

Hosts

Servers
The protocol follows a client-server architecture, similar to microservices, where Servers provide capabilities through a list of tools. Each tool that the server hosts has additional metadata assigned to it, including a unique identifier, a description of when that tool can be used, and a list of parameters that the tool can receive. Servers describe the parameters that the tool can receive, and the expected output of the tool.

Along with tools, servers provide access to Resources, read-only data that can be consumed by the client. Each resource has its own unique URI, similar to an endpoint in a REST API, and can be used to provide direct access to specific objects with a fixed location.

MCP tools can also provide Prompt templates, allowing the client to use pre-written prompts that follow best practices.

Servers can be written in any programming language that can support the MCP protocol and can be hosted locally or remotely.

Clients
A Client is responsible for managing a one-to-one connection to a server.

When a client starts, it will connect to a server, and request a list of tools, resources, and prompt templates that the server provides access to.

This is a stateful connection, meaning the client maintains an ongoing connection to the server throughout its lifecycle. The connection can be established using different transport methods:

stdio - The client starts the server locally and communicates through standard input/output streams

HTTP - The client connects to a remotely hosted server using HTTP Server Sent Events (SSE) or HTTP streaming

You will learn more about transport methods in the next lesson.

Hosts
One or more clients are managed by a Host, an application or piece of software that maintains session state and context.

An example of a host may be Claude Desktop, Amazon Q, VS Code, or Cursor. Your agent applications are also examples of an MCP host.

The host determines which tool to use and provides the appropriate parameters to the tool. The client then executes the tool on behalf of the host.

Host applications also often manage the client connections.

Tools
Each tool will have a unique identifier, a description of when that tool can be used, and a list of parameters that the tool can receive.

For example, a tool for searching the web may be defined as:

id: search-web

description: Search the web for information

parameters: query, a string

As ferramentas podem gerar um resultado em formato de texto ou retornar imagens codificadas em Base64.

Marcar como concluído
14%
Sistemas Agéticos e MCP
Teste relâmpago MCP
Esta lição foi útil?SimNão






  ---


  






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

O servidor MCP do Neo4j fornece um conjunto de ferramentas que permitem que os agentes interajam com um banco de dados Neo4j, possibilitando a execução de tarefas como consultar o grafo, atualizar dados e obter insights.

Arquitetura
O protocolo MCP consiste nos seguintes elementos:

Servidores

Clientes

Anfitriões

Servidores
O protocolo segue uma arquitetura cliente-servidor, semelhante a microsserviços, onde os servidores fornecem funcionalidades por meio de uma lista de ferramentas . Cada ferramenta hospedada pelo servidor possui metadados adicionais atribuídos a ela, incluindo um identificador único, uma descrição de quando a ferramenta pode ser usada e uma lista de parâmetros que ela pode receber. Os servidores descrevem os parâmetros que a ferramenta pode receber e a saída esperada da ferramenta.

Juntamente com as ferramentas, os servidores fornecem acesso a recursos , dados somente leitura que podem ser consumidos pelo cliente. Cada recurso possui seu próprio URI exclusivo, semelhante a um endpoint em uma API REST, e pode ser usado para fornecer acesso direto a objetos específicos com uma localização fixa.

As ferramentas MCP também podem fornecer modelos de prompts , permitindo que o cliente utilize prompts pré-escritos que seguem as melhores práticas.

Os servidores podem ser escritos em qualquer linguagem de programação que suporte o protocolo MCP e podem ser hospedados localmente ou remotamente.

Clientes
Um cliente é responsável por gerenciar uma conexão individual com um servidor.

Quando um cliente é iniciado, ele se conecta a um servidor e solicita uma lista de ferramentas, recursos e modelos de prompts aos quais o servidor tem acesso.

Esta é uma conexão com estado , o que significa que o cliente mantém uma conexão contínua com o servidor durante todo o seu ciclo de vida. A conexão pode ser estabelecida usando diferentes métodos de transporte:

stdio - O cliente inicia o servidor localmente e se comunica através de fluxos de entrada/saída padrão.

HTTP - O cliente se conecta a um servidor hospedado remotamente usando HTTP Server Sent Events (SSE) ou HTTP streaming.

Você aprenderá mais sobre métodos de transporte na próxima lição.

Anfitriões
Um ou mais clientes são gerenciados por um Host , um aplicativo ou software que mantém o estado e o contexto da sessão.

Exemplos de hosts podem ser o Claude Desktop, o Amazon Q, o VS Code ou o Cursor. Seus aplicativos de agente também são exemplos de hosts MCP.

O host determina qual ferramenta usar e fornece os parâmetros apropriados para ela. O cliente, então, executa a ferramenta em nome do host.

Os aplicativos host também costumam gerenciar as conexões do cliente.

Ferramentas
Cada ferramenta terá um identificador único, uma descrição de quando essa ferramenta pode ser usada e uma lista de parâmetros que a ferramenta pode receber.

Por exemplo, uma ferramenta para pesquisar na web pode ser definida como:

id : pesquisa-web

Descrição : Pesquise na web por informações.

parâmetros : consulta, uma string

As ferramentas podem gerar um resultado em formato de texto ou retornar imagens codificadas em Base64.

Marcar como concluído
14%
Sistemas Agéticos e MCP
Teste relâmpago MCP
Esta lição foi útil?SimNão




---

O texto enviado é o conteúdo estruturado de uma lição técnica (provavelmente da Neo4j GraphAcademy) sobre o **Model Context Protocol (MCP)** e sua integração com sistemas agênticos e o banco de dados Neo4j.

Aqui está uma análise detalhada e organizada dos pontos centrais abordados no material:

---

## 1. O que é o MCP (Model Context Protocol)?

Desenvolvido pela Anthropic, o MCP é um **protocolo aberto** que resolve um dos maiores problemas atuais no desenvolvimento de IA: a fragmentação na integração de ferramentas. Em vez de escrever uma integração customizada para cada nova ferramenta que um Large Language Model (LLM) precisa usar, o MCP padroniza como os agentes de IA consomem recursos, ferramentas e prompts de terceiros.

## 2. Sistemas Agênticos e a Estrutura ReAct

O texto define um **Agente** como um sistema que opera de forma independente para alcançar um objetivo por meio de chamadas de ferramentas. O conteúdo destaca o framework **ReAct (Raciocínio + Ação)**, que funciona em um ciclo contínuo de três etapas:

* **Planejamento:** O LLM quebra a tarefa principal em subtarefas e decide quais ferramentas usar.
* **Raciocínio:** O agente avalia o contexto atual e seleciona a ferramenta ideal com base nas descrições de metadados.
* **Ação:** O agente executa a ferramenta (em paralelo ou sequência), recebe o resultado e o injeta de volta na fase de planejamento para refinar os próximos passos.

---

## 3. A Arquitetura do MCP

O protocolo adota um modelo descentralizado de três componentes principais:

| Componente | Função Principal | Exemplos Práticos |
| --- | --- | --- |
| **Host (Anfitrião)** | O aplicativo principal que gerencia a sessão, mantém o contexto e decide quando acionar as ferramentas. | Claude Desktop, VS Code, Cursor, ou uma aplicação própria. |
| **Cliente** | O conector intermediário que mantém uma conexão ativa (com estado) com o servidor. | Conexões via `stdio` (local) ou `HTTP/SSE` (remoto). |
| **Servidor** | O provedor das funcionalidades. Ele expõe **Ferramentas** (ações executáveis), **Recursos** (dados estáticos via URIs) e **Prompts prontos**. | Servidor MCP do Neo4j, APIs de clima, buscadores web. |

---

## 4. O Papel do Neo4j nesse Ecossistema

O grande valor prático desse curso é ensinar como o **servidor MCP do Neo4j** estende a capacidade dos agentes. Ele expõe ferramentas específicas que permitem ao LLM:

1. **Ler o esquema do Grafo:** Entender a estrutura de nós, relacionamentos e propriedades sem intervenção humana.
2. **Gerar e executar queries Cypher:** O agente pode criar código de consulta dinamicamente para buscar ou atualizar dados estruturados no Neo4j.

> **Resumo da Ópera:** O material prepara o desenvolvedor para criar assistentes de IA que não apenas conversam, mas que conseguem "plugar" de forma nativa e padronizada em um banco de dados de grafos para extrair conhecimento complexo em tempo real.

Você está planejando implementar o Neo4j com MCP em algum projeto específico ou deseja entender melhor como configurar a conexão de transporte (como o `stdio`) entre o cliente e o servidor?



---




Desenvolvimento com as ferramentas Neo4j MCP › Sistemas Agentic e MCP
Instalando um servidor MCP

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
Instalando um servidor MCP
Nas lições anteriores, você aprendeu que os servidores MCP fornecem ferramentas para hosts de IA e que esses servidores podem ser escritos em diferentes linguagens de programação.

Nesta lição, você aprenderá como instalar e configurar um servidor MCP para que sua IA possa acessar e utilizar as ferramentas que ele fornece.

Criação de arquivos de configuração
Para instalar um servidor MCP, você precisa informar ao seu provedor de hospedagem de IA onde encontrar o servidor e como se conectar a ele.

Os arquivos de configuração são documentos de instruções que informam ao seu host de IA como encontrar e iniciar um servidor MCP.

Para instalar o servidor Neo4j MCP, seu arquivo de configuração precisará especificar:

O nome do servidor e como executá-lo.

Como conectar-se ao seu banco de dados Neo4j

Suas credenciais de banco de dados

Configuração e instalação do servidor MCP

Na próxima lição, você instalará, configurará e executará o servidor Neo4j MCP.

A configuração é específica para o host de IA que você está usando. Por exemplo, no Claude Desktop, você pode criar um arquivo chamado .claude_desktop_config.json:

json
claude_desktop_config.json

Cópia
{
  "mcpServers": {
    "neo4j-mcp": { // (1)
      "command": "path/to/neo4j-mcp", // (2)
      "args": [ // (3)
        "--neo4j-read-only",
        "true",
        "--neo4j-transport-mode",
        "http"
      ],
      "env": { // (4)
        "NEO4J_URI": "bolt://localhost:7687",
        "NEO4J_USERNAME": "neo4j",
        "NEO4J_PASSWORD": "<your-password>",
        "NEO4J_DATABASE": "neo4j"
      }
    }
  }
}
Esta configuração informa ao Claude Desktop:

Nome do servidor : neo4j-mcp- um nome reconhecível para o servidor Neo4j MCP

Comando : neo4j-mcp- o comando para iniciar o servidor

Argumentos : Argumentos adicionais para configurar o servidor, como torná-lo somente leitura e definir o modo de transporte.

Credenciais do banco de dados : Os detalhes de conexão para o seu banco de dados Neo4j.

Definindo variáveis ​​de ambiente
Variáveis ​​de ambiente são configurações que são passadas para o servidor MCP quando ele é iniciado.

Para o servidor Neo4j Cypher, as variáveis ​​de ambiente incluem o local do banco de dados, o nome de usuário e a senha, para que o servidor possa acessar o banco de dados Neo4j.

"Pense neles como as chaves e senhas que o servidor precisa para funcionar."

A envseção na configuração acima define:

NEO4J_URIOnde encontrar seu banco de dados Neo4j (por exemplo, bolt://localhost:7687)

NEO4J_USERNAMEe NEO4J_PASSWORD: Suas credenciais de login do banco de dados

NEO4J_DATABASE: A qual banco de dados específico se conectar (ex.: neo4j)

Estrutura de comando

Sempre divida commandem pedaços separados. Em vez de fornecer um fio longo:

"path/to/neo4-mcp --neo4j-read-only true"

Utilize comandos e argumentos separados:

{"command": "path/to/neo4-mcp", "args": ["--neo4j-read-only", "true"]}

Onde isso se encaixa
A instalação de servidores MCP é a ponte entre ter um assistente de IA e dar-lhe acesso aos seus dados e ferramentas específicos.

Para bancos de dados Neo4j:

Sem MCP : Sua IA só pode discutir conceitos do Neo4j teoricamente.

Com o MCP : Sua IA pode executar consultas Cypher reais, explorar seus dados e ajudar você a criar e depurar consultas.

Esse processo de configuração ocorre uma vez por servidor, e então sua IA pode usar essas ferramentas de banco de dados em todas as conversas.

O que vem a seguir?
Agora que você entende como funciona a instalação do servidor MCP, você criará um ambiente de desenvolvimento e conectará o agente a um banco de dados Neo4j usando o servidor Neo4j MCP.

Marcar como concluído
29%
Teste relâmpago MCP
Instalando o servidor Neo4j MCP
Esta lição foi útil?SimNão



---
Este terceiro trecho apresenta a lição prática **"Instalando um servidor MCP"**. Ela foca em como criar a ponte de comunicação entre o Host de IA (neste exemplo, o Claude Desktop) e o servidor de ferramentas do Neo4j através de arquivos de configuração.

Aqui está uma análise detalhada e estruturada dos pontos mais importantes deste módulo:

---

## 1. O Papel dos Arquivos de Configuração

Como o Host (a interface da IA) não sabe nativamente onde as ferramentas externas estão, ele precisa de um roteiro. Esse roteiro é um arquivo de configuração (geralmente em formato **JSON**).

O texto destaca que para o **Claude Desktop**, esse arquivo se chama `.claude_desktop_config.json`. É nele que você registra o servidor MCP para que ele inicialize automaticamente junto com o aplicativo de IA.

---

## 2. Anatomia do JSON de Configuração (O Coração da Lição)

O exemplo prático fornecido detalha como o protocolo estrutura a inicialização:

```json
{
  "mcpServers": {
    "neo4j-mcp": { 
      "command": "path/to/neo4j-mcp", 
      "args": [ 
        "--neo4j-read-only", "true",
        "--neo4j-transport-mode", "http"
      ],
      "env": { 
        "NEO4J_URI": "bolt://localhost:7687",
        "NEO4J_USERNAME": "neo4j",
        "NEO4J_PASSWORD": "<your-password>",
        "NEO4J_DATABASE": "neo4j"
      }
    }
  }
}

```

O material divide essa anatomia em regras estritas que você deve seguir para evitar falhas:

* **`command` (Comando):** O caminho ou binário executável que inicia o servidor. **Regra de Ouro:** Nunca junte argumentos aqui. Em vez de passar `"path/to/neo4j-mcp --option true"`, isole apenas o executável.
* **`args` (Argumentos):** Uma lista de strings contendo as flags de inicialização (ex: definir se o servidor rodará em modo seguro/somente leitura com `--neo4j-read-only true`).
* **`env` (Variáveis de Ambiente):** Funcionam como o "chaveiro" de credenciais de segurança. É aqui que o servidor recebe o endereço do banco de dados Neo4j (`NEO4J_URI` usando o protocolo nativo `bolt`) e os dados de autenticação (`USERNAME`/`PASSWORD`).

---

## 3. O Impacto Prático: Teoria vs. Ação

A lição resume de forma perfeita o antes e o depois de realizar essa configuração:

| Cenário Sem MCP | Cenário Com MCP |
| --- | --- |
| O LLM apenas ajuda você de forma teórica (ex: *"Como eu escreveria uma query Cypher para buscar nós de usuários?"*). | O LLM age diretamente no ambiente (ex: *"Busque no meu banco se existem usuários duplicados agora"*). |
| A IA propõe códigos baseados no treinamento genérico dela. | A IA analisa o esquema real do seu grafo e executa queries reais em tempo real. |

---

## 🚀 Próximo Passo do Curso

O índice indica que a próxima lição será **"Instalando o servidor Neo4j MCP"**. Lá, você provavelmente substituirá o valor fictício `"path/to/neo4j-mcp"` pelo comando real de instalação do pacote (geralmente via `npx` ou instalador do ecossistema Node.js/Python).

Se você estiver seguindo esse laboratório prático, lembre-se de que a string `<your-password>` no arquivo JSON deve ser substituída pela senha que você definiu ao criar a sua instância do Neo4j (seja no Neo4j Desktop, AuraDB ou Docker). 

---

## INSTALAR 




Desenvolvimento com as ferramentas Neo4j MCP › Sistemas Agentic e MCP
Instalando o servidor Neo4j MCP

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
Desafio
Instalando o servidor Neo4j MCP
Na lição anterior, você aprendeu como configurar um servidor MCP.

Neste desafio, você criará um ambiente de desenvolvimento e conectará o VS Code ao seu banco de dados Neo4j usando o servidor Neo4j MCP.

Comece agora
O repositório neo4j-graphacademy/genai-mcp-neo4j-tools foi criado para este curso. Ele contém todo o código inicial e os recursos necessários.

Você pode usar um codespace do GitHub como um ambiente de desenvolvimento integrado (IDE) e espaço de trabalho online para este curso. Ele clonará automaticamente o repositório do curso e configurará seu ambiente.

Abrir no GitHub Codespace

Espaços de código do GitHub

Você precisará fazer login com uma conta do GitHub. O uso gratuito mensal do GitHub Codespaces cobrirá a duração deste curso.

O servidor Neo4j MCP é instalado automaticamente no seu Codespace. Você pode consultar as instruções completas de instalação abaixo ou a documentação do servidor Neo4j MCP .

Instalação do servidor Neo4j MCP
Você precisará:

Instale um host de servidor MCP, por exemplo, o VS Code .

Baixe o arquivo do servidor Neo4j MCP para o seu sistema operacional ^ do repositório github.com/neo4j/mcp .

Instale o servidor MCP extraindo o arquivo, copiando o executável para um local no seu sistema e adicionando esse local à variável de ambiente PATH do sistema.

Configure seu host para adicionar o servidor Neo4j MCP.

Por exemplo, no VS Code, adicione a seguinte configuração ao seu .vscode/mcp.jsonarquivo:

json
vscode/mcp.json

Cópia
{
    "servers": {
        "neo4j": {
            "type": "stdio",
            "command": "neo4j-mcp",
            "envFile": "${workspaceFolder}/.env"
        }
    }
}
Você pode encontrar instruções detalhadas na documentação de instalação .

Você não precisa criar um banco de dados Neo4j, pois usará a instância sandbox fornecida. Os detalhes de conexão estão descritos abaixo.

O ambiente de testes utiliza as funções GenAI do Neo4j. Você pode encontrar mais informações sobre como configurá-las na documentação de integração do Neo4j GenAI .

Configurando o servidor Neo4j MCP
O servidor MCP é configurado no arquivo de configuração do host (ex: .vscode/mcp.json):

json
.vscode/mcp.json

Cópia
{
    "servers": {
        "neo4j": {
            "type": "stdio",
            "command": "neo4j-mcp",
            "envFile": "${workspaceFolder}/.env"
        }
    }
}
Você pode identificar:

O nome do servidor -neo4j

O transporte type-stdio

Para commandiniciar o servidor -neo4j-mcp

As variáveis ​​de ambiente serão carregadas a partir de envFileum arquivo localizado .envna pasta raiz do espaço de trabalho.

Variáveis ​​ambientais
A conexão com o banco de dados Neo4j é configurada usando variáveis ​​de ambiente armazenadas em um .envarquivo.

Atualize o .envarquivo com os detalhes de conexão do seu banco de dados Neo4j:

Crie um arquivo .env

Cópia
NEO4J_URI="bolt://13.222.34.215:7687"
NEO4J_USERNAME="neo4j"
NEO4J_PASSWORD="paragraph-odor-legislation"
NEO4J_DATABASE="neo4j"
Interagindo com o Neo4j
Você pode usar o servidor MCP para interagir com seu banco de dados Neo4j. O servidor fornece acesso às seguintes ferramentas:

Ferramenta	Propósito
get-schema

Obtenha rótulos, tipos de relacionamento e chaves de propriedade do banco de dados Neo4j. Isso fornece um contexto valioso para clientes de IA.

read-cypher

Executa consultas Cypher em modo somente leitura. Rejeita gravações, operações de esquema/administração e consultas PROFILE.

write-cypher

Executar consultas Cypher com permissão de escrita (CREATE, MERGE, DELETE, SET, etc.). Pode ser desativado através de NEO4J_READ_ONLY=true.

list-gds-procedures

Lista os procedimentos de Ciência de Dados em Grafos disponíveis na instância do Neo4j. Ajuda os clientes de IA a entenderem as funcionalidades de GDS disponíveis.

Verifique sua instalação.
Para testar o servidor MCP, você precisará:

Inicie o servidor.

Usando o VS Code, você pode iniciar o servidor executando o comando MCP: List servers na Paleta de Comandos (Ctrl/Cmd + Shift + P).

MCP: Listar servidores
Selecione o neo4jservidor e clique em Iniciar Servidor .

Servidor neo4j-cypher listado na lista de servidores MCP
Inicie uma solicitação através do agente para chamar o servidor.

Abra um novo chat no modo Agente (Ctrl/Cmd + Shift + I).

Um novo bate-papo com agentes
Instrua o agente com a seguinte pergunta:

Which MCP tools are available? List their ID and description.

Você deverá ver o agente executar um processo de raciocínio para contatar o servidor MCP e listar as ferramentas disponíveis.

Lista de bate-papo com ferramentas MCP disponíveis
Modo agente

As ferramentas só estão disponíveis quando você usa o Chat no modo Agente .

Ferramentas disponíveis
Quais das seguintes ferramentas estão disponíveis através do servidor Neo4j Cypher MCP?

Selecione todas as opções aplicáveis:

 backup-neo4j-database
 get-schema
 list-gds-procedures
 read-cypher
 validate-cypher-syntax
 write-cypher
Confira a resposta
36%
Instalando um servidor MCP
Clareza e exploração
Esta página foi útil?SimNão


---



Desenvolvimento com as Ferramentas MCP do Neo4j › Utilizando as Ferramentas MCP do Neo4j
Utilizando o servidor Neo4j Cypher MCP

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
Utilizando o servidor Neo4j Cypher MCP
O servidor Neo4j MCP é uma ferramenta útil tanto para desenvolvedores quanto para usuários não técnicos. Ele fornece a um LLM a capacidade de inspecionar, ler e gravar dados em um banco de dados Neo4j.

Nesta lição, você aprenderá como usar as ferramentas fornecidas pelo servidor Neo4j Cypher MCP para interagir com bancos de dados Neo4j por meio de linguagem natural.

Entendendo o esquema do banco de dados
Inicie o servidor Neo4j MCP (caso ainda não esteja em execução) e abra uma nova janela de bate-papo para começar a usar as ferramentas.

Inicie o servidor MCP no VS Code.

Se precisar iniciar, parar ou reiniciar o servidor MCP, você pode usar os comandos do MCP na Paleta de Comandos:

Abra a Paleta de Comandos (Ctrl+Shift+P)

Selecione MCP: Listar servidores

Selecione o servidor Neo4j Cypher.

Selecione Iniciar Servidor

A primeira ferramenta que você usará é get-schema.

Esta ferramenta resolve um problema comum em consultas de banco de dados geradas por IA: sabe-se que os LLMs (Modelos de Aprendizado de Biblioteca) inventam nomes de rótulos, propriedades ou tipos de relacionamento que não existem no seu banco de dados real.

A get-schemaferramenta permite que a IA descubra o que realmente existe em seu banco de dados Neo4j antes de escrever consultas.

Você pode invocar a ferramenta fazendo uma pergunta sobre o esquema do banco de dados. Por exemplo:

Describe the Neo4j data model

What node labels and relationship types are available in the database?

How are <label 1> and <label 2> related?

O agente deve chamar a get-schemaferramenta e retornar uma descrição do esquema do banco de dados com base nos rótulos, tipos de relacionamento e chaves de propriedade do seu banco de dados.

Permitir acesso à ferramenta

Você será solicitado a permitir que o agente acesse qualquer nova ferramenta. Você pode optar por permitir o acesso para a sessão, para o espaço de trabalho ou permitir sempre.

Você pode expandir a saída da ferramenta na janela de bate-papo para ver a solicitação e a resposta.

A ferramenta get-schema sendo chamada em um chat de agente.
A ferramenta não recebe nenhum parâmetro de entrada e retorna um objeto JSON que descreve o esquema do banco de dados.

Exemplo de saída do esquema
json

Cópia
[
    {
        "label": "Movie",
        "attributes": {
            "budget": "INTEGER",
            "movieId": "STRING unique indexed",
            "tmdbId": "STRING unique indexed",
            "imdbVotes": "INTEGER",
            "runtime": "INTEGER",
            "countries": "LIST",
            "imdbId": "STRING indexed",
            "url": "STRING",
            "plot": "STRING",
            "released": "STRING indexed",
            "languages": "LIST",
            "imdbRating": "FLOAT indexed",
            "title": "STRING indexed",
            "poster": "STRING",
            "year": "INTEGER indexed",
            "revenue": "INTEGER"
        },
        "relationships": {
            "IN_GENRE": "Genre"
        }
    },
    {
        "label": "Genre",
        "attributes": {
            "name": "STRING unique indexed"
        },
        "relationships": {}
    },
    {
        "label": "User",
        "attributes": {
            "name": "STRING indexed",
            "userId": "STRING unique indexed"
        },
        "relationships": {
            "RATED": "Movie"
        }
    },
    {
        "label": "Actor",
        "attributes": {
            "born": "DATE",
            "bornIn": "STRING",
            "tmdbId": "STRING",
            "bio": "STRING",
            "died": "DATE",
            "name": "STRING",
            "poster": "STRING",
            "imdbId": "STRING",
            "url": "STRING"
        },
        "relationships": {
            "ACTED_IN": "Movie",
            "DIRECTED": "Movie"
        }
    },
    {
        "label": "Director",
        "attributes": {
            "born": "DATE",
            "bornIn": "STRING",
            "tmdbId": "STRING",
            "bio": "STRING",
            "died": "DATE",
            "name": "STRING",
            "poster": "STRING",
            "imdbId": "STRING",
            "url": "STRING"
        },
        "relationships": {
            "ACTED_IN": "Movie",
            "DIRECTED": "Movie"
        }
    },
    {
        "label": "Person",
        "attributes": {
            "born": "DATE",
            "bornIn": "STRING",
            "tmdbId": "STRING unique indexed",
            "bio": "STRING",
            "died": "DATE",
            "name": "STRING indexed",
            "poster": "STRING",
            "imdbId": "STRING",
            "url": "STRING"
        },
        "relationships": {
            "ACTED_IN": "Movie",
            "DIRECTED": "Movie"
        }
    }
]
Leitura segura de dados
A read-cypherferramenta é usada para ler dados do banco de dados. Ela não tem permissão para criar, atualizar ou excluir dados.

Você pode acionar a ferramenta fazendo uma pergunta sobre os dados no banco de dados. Por exemplo:

Quais são os 10 filmes de maior bilheteria?

Quem dirigiu o filme "Matrix"?

Execute a consulta

Observe o raciocínio e a resposta do agente.

Expanda a read-cyphersaída da ferramenta para visualizar a consulta Cypher gerada, os parâmetros e os resultados.

exemplo de saída da ferramenta read-cypher
A ferramenta read-cypher irá gerar uma consulta Cypher e retornar os resultados, por exemplo:

Entrada:

json

Cópia
{
  "query": "MATCH (m:Movie) WHERE m.revenue IS NOT NULL RETURN m.title AS title, m.revenue AS revenue ORDER BY m.revenue DESC LIMIT 10"
}
Saída:

texto

Cópia
The top 10 movies by revenue in your Neo4j database are:

1. Avatar
2. Titanic
3. Star Wars: Episode VII - The Force Awakens
4. Jurassic World
5. The Avengers
6. Furious 7
7. Avengers: Age of Ultron
8. Harry Potter and the Deathly Hallows: Part 2
9. Frozen
10. Iron Man 3
A ferramenta segue a política de roteamento do servidor Neo4j, direcionando as consultas entre os servidores em um cluster Neo4j. Além disso, como a consulta é executada dentro de uma transação de leitura , ela não é capaz de realizar ações potencialmente destrutivas.

Você pode autorizar a ferramenta a ser executada sempre sem permissão, sabendo que ela não excluirá nem modificará nenhum dado.

Redação de dados com aprovação
A write-cypherferramenta permite que um agente grave dados no banco de dados Neo4j.

Esta ferramenta permite criar, atualizar ou excluir dados em seu banco de dados. É perfeita para usuários sem conhecimento técnico que desejam modificar dados usando linguagem natural em vez de aprender Cypher.

Esta ferramenta será acionada com uma pergunta sobre a criação ou modificação de dados. Por exemplo:

Create a new user named Sarah

Add a 5-star rating from Sarah to The Godfather

Execute as consultas e observe o processo de raciocínio do agente. O agente pode usar a read-cypherferramenta primeiro para encontrar os nós relevantes e, em seguida, usá- write-cypherla para efetuar a alteração.

Exemplo de uso da ferramenta write-cypher
Ao solicitar que o agente execute uma operação de gravação, como " Adicionar uma avaliação de 5 estrelas de Sarah a O Poderoso Chefão" , você poderá constatar que o agente utiliza diversas ferramentas para concluir a tarefa, por exemplo:

Primeiro, vou verificar se existe um nó de Filme intitulado "O Poderoso Chefão" e identificar o nó de usuário de Sarah para que eu possa criar exatamente um relacionamento RATED correto.

Ran Read Cypher - neo4j (MCP Server)

texto

Cópia
Input:

{
  "query": "MATCH (m:Movie) WHERE toLower(m.title) CONTAINS 'godfather' RETURN m.title AS title, m.year AS year ORDER BY m.year"
}

Output:
[
  {
    "title": "Godfather, The",
    "year": 1972
  },
  {
    "title": "Godfather: Part II, The",
    "year": 1974
  },
  {
    "title": "Godfather: Part III, The",
    "year": 1990
  },
  {
    "title": "Tokyo Godfathers",
    "year": 2003
  }
]
Identifiquei os registros exatos (ID do usuário 672 e título do filme O Poderoso Chefão); agora vou criar ou atualizar a avaliação da Sarah para 5 estrelas e confirmá-la.

Ran Write Cypher - neo4j (MCP Server)

texto

Cópia
Input:
{
  "query": "MATCH (u:User {userId:'672'})\nMATCH (m:Movie {title:'Godfather, The'})\nMERGE (u)-[r:RATED]->(m)\nSET r.rating = 5.0,\n    r.timestamp = toInteger(datetime().epochSeconds)\nRETURN u.name AS user, m.title AS movie, r.rating AS rating, r.timestamp AS timestamp"
}

Output:
[
  {
    "movie": "Godfather, The",
    "rating": 5,
    "timestamp": 1775030009,
    "user": "Sarah"
  }
]
Adicionado com sucesso.

Sarah (userId 672) agora tem um relacionamento AVALIADO com O Poderoso Chefão, com classificação: 5, carimbo de data/hora: 1775030009.

Como as ferramentas funcionam juntas
As ferramentas do servidor Neo4j MCP trabalham em conjunto para criar uma experiência completa de interação com o banco de dados.

A ferramenta de esquema evita alucinações, a ferramenta de leitura explora os dados com segurança e a ferramenta de gravação faz alterações com a sua aprovação.

A combinação de ferramentas permite que qualquer pessoa trabalhe com bancos de dados Neo4j usando linguagem natural, mantendo a segurança e a precisão.

O que vem a seguir?
Agora que você entende como as ferramentas Neo4j MCP funcionam, está pronto para experimentá-las você mesmo.

Na próxima lição, você usará essas ferramentas para explorar e modificar um banco de dados de recomendação de filmes.

Verifique se você entendeu.
Segurança e permissões para o uso de ferramentas
Por que a read-cypherferramenta pode ser considerada mais segura para ser executada sem aprovação explícita em comparação com a write-cypherferramenta?

Selecione a resposta correta:

 A ferramenta de leitura possui melhor tratamento de erros do que a ferramenta de escrita.
 A ferramenta de leitura só funciona com conjuntos de dados pequenos.
 A ferramenta de leitura é executada dentro de transações de leitura e não pode modificar dados.
 A ferramenta de leitura requer autenticação, enquanto a ferramenta de gravação não.
 A ferramenta de leitura é mais rápida que a ferramenta de escrita.
Confira a resposta
57%
Utilizando as ferramentas Neo4j MCP
Leitura do Esquema do Grafo
Esta lição foi útil?SimNão




---



Desenvolvimento com as Ferramentas MCP do Neo4j › Utilizando as Ferramentas MCP do Neo4j
Construindo aplicações com ferramentas MCP

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
Desafio
Construindo aplicações com ferramentas MCP
Nas lições anteriores, você aprendeu como configurar e usar as ferramentas MCP do Neo4j para explorar bancos de dados e testar consultas. Agora é hora de juntar tudo e ver o verdadeiro poder das ferramentas MCP em ação.

Um dos aspectos mais interessantes da utilização de ferramentas MCP com agentes de IA é a sua capacidade de trabalhar em colaboração. O agente selecionará as ferramentas corretas em sequência, executando-as uma após a outra até que a tarefa esteja concluída.

Você pode usar isso a seu favor, fazendo com que o agente crie rapidamente aplicativos inteiros para você. Isso às vezes é chamado de "programação intuitiva" - onde você descreve o que deseja e a IA descobre como construir.

Seu objetivo é instruir o agente a construir um programa em Python que permita ao usuário inserir um gênero de filme e retorne os 5 melhores filmes desse gênero.

O desafio
Peça ao agente para criar este aplicativo usando o seguinte comando:

texto

Cópia
Create a simple command line application in python that:

1. Connects to Neo4j using the Neo4j Python driver using environment variables: NEO4J_URI, NEO4J_USERNAME, NEO4J_PASSWORD, NEO4j_DATABASE.
2. Accepts a Genre name as a text input
2. Runs a Cypher statement that produces a list of the top five movies ordered by their imdbRating in descending order.

Rules:

* The query must filer on non-null values
* You must use tools to understand the schema information
* You must validate your Cypher statement on real data from the database before you write it to the application.
O agente utilizará as ferramentas MCP para:

Explore o esquema do banco de dados para entender a estrutura de dados.

Escreva e teste uma consulta Cypher para garantir que ela funcione corretamente.

Gere a aplicação Python que utiliza o driver Python do Neo4j.

Valide a solução executando consultas de teste.

O poder da validação

Observe como a instrução orienta o agente a validar a declaração Cypher em dados reais antes de criar o aplicativo. Essa é uma prática fundamental: o agente usará a read-cypherferramenta para testar as consultas primeiro, garantindo que o aplicativo final funcione de fato.

Testando seu aplicativo
Depois que o agente criar seu aplicativo, teste-o executando o programa e inserindo os dados.Mysterycomo o gênero.

Se tudo funcionar corretamente, você terá tudo o que precisa para responder à pergunta e concluir o desafio.

Resultados probabilísticos

O resultado é probabilístico, portanto a estrutura da aplicação pode variar ligeiramente entre as execuções, mas você deve obter resultados consistentes das consultas ao banco de dados. Esse é o objetivo de qualquer boa aplicação de dados: resultados confiáveis ​​e precisos, independentemente da estrutura do código.

Crédito extra
Por que não pedir ao agente para escrever um teste unitário para o aplicativo?

Verifique se você entendeu.
Testando sua aplicação no gênero mistério
Ao executar sua aplicação Python e inserir "Mistério" como gênero, qual filme deverá aparecer como um dos filmes mais bem avaliados no gênero Mistério?

 Matrix
 Começo
 O Cavaleiro das Trevas
 Pulp Fiction
Confira a resposta
79%
Geração de declarações cifradas
Resumo e próximos passos
Esta página foi útil?SimNão



---



Desenvolvimento com as Ferramentas MCP do Neo4j › Utilizando as Ferramentas MCP do Neo4j
Resumo e próximos passos

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
Resumo e próximos passos
Parabéns! Você concluiu esta jornada abrangente pelo Protocolo de Contexto de Modelo (MCP) e pelas poderosas ferramentas MCP do Neo4j. Vamos refletir um pouco sobre o que você aprendeu e explorar os próximos passos.

O futuro do desenvolvimento chegou.
O Protocolo de Contexto de Modelo (MCP) representa um avanço significativo na forma como os desenvolvedores podem criar aplicações de IA. Ele fornece uma maneira padronizada de conectar sistemas de IA com ferramentas externas e fontes de dados.

O papel do desenvolvedor : O MCP permite que os desenvolvedores criem aplicativos de IA que podem acessar e interagir com diversas fontes de dados e ferramentas. Isso requer a compreensão tanto dos sistemas de IA quanto das ferramentas com as quais eles precisam interagir.

Simplificação da integração : O MCP reduz a complexidade da integração de múltiplas APIs e fontes de dados. Em vez de escrever integrações personalizadas para cada serviço, os desenvolvedores podem usar servidores MCP padronizados para conectar aplicativos de IA a recursos externos.

Sistemas baseados em agentes : O MCP oferece suporte ao desenvolvimento de agentes de IA capazes de executar fluxos de trabalho complexos, acessando múltiplas ferramentas e fontes de dados. Esses agentes podem executar tarefas que exigem coordenação entre diferentes sistemas.

Inteligência baseada em grafos : Grafos de conhecimento e GraphRAG oferecem maneiras práticas de aprimorar aplicações de IA com conhecimento estruturado. Os recursos de banco de dados de grafos do Neo4j, combinados com o MCP, permitem que os desenvolvedores criem aplicações capazes de raciocinar sobre dados interconectados.

Ecossistema da Comunidade : O ecossistema MCP inclui milhares de servidores criados por desenvolvedores do mundo todo. Contribuir para esse ecossistema, seja criando servidores, implementando melhorias ou fornecendo documentação, ajuda a expandir as ferramentas disponíveis para todos os desenvolvedores.

As habilidades que você aprendeu neste curso fornecem a base para a criação de aplicações de IA que podem ser integradas a diversas fontes de dados e ferramentas. Seja no desenvolvimento de ferramentas internas, produtos para clientes ou projetos de código aberto, essas capacidades possibilitam novos tipos de aplicações baseadas em IA.

Com o MCP e o Neo4j, você pode criar aplicativos que combinam recursos de IA com dados estruturados e ferramentas externas.

Advertências importantes

Analise o código do servidor : Sempre examine as implementações do servidor MCP antes da implantação, especialmente servidores contribuídos pela comunidade.

Compreenda as funcionalidades das ferramentas : Saiba exatamente o que cada ferramenta do MCP faz antes de conceder permissões de acesso.

Teste os resultados minuciosamente : as ferramentas MCP podem interagir com sistemas reais — valide todos os resultados primeiro em ambientes seguros.

Implemente controles de acesso : Utilize mecanismos adequados de autenticação e autorização, especialmente para implantações corporativas.

Monitorar o uso : Mantenha registros do uso da ferramenta MCP para fins de auditoria e segurança.

Você pode encontrar uma lista completa de recursos no resumo do curso .

Boa construção! 🚀

Marcar como concluído
86%
Construindo aplicações com ferramentas MCP
Parabéns!
Esta lição foi útil?SimNão


---



Desenvolvendo com as Ferramentas MCP do Neo4j ›
Resumo do curso

Sérgio

Português (Brasil)
Powered by Google TradutorTradutor
Resumo do curso
Parabéns por concluir o curso Desenvolvimento com as Ferramentas MCP do Neo4j!

Esperamos que o curso tenha sido útil e que agora você se sinta mais confiante ao usar o Neo4j.

Se você gostou do curso, que tal compartilhar seu certificado com seus amigos e colegas? Vamos recapitular o que você aprendeu e destacar alguns pontos-chave.
Ver certificado
Adicionar ao LinkedIn
Entendendo os Fundamentos do MCP
Agora você sabe como:

Compreenda o Protocolo de Contexto do Modelo e seu papel nas integrações de IA.

Configure o servidor Neo4j MCP e conecte-o aos clientes de IA.

Descubra e utilize as ferramentas MCP para interagir com bancos de dados Neo4j.

Crie aplicações que aproveitem as ferramentas MCP para inteligência baseada em grafos.

Dicas profissionais
Melhores práticas de segurança
Sempre revise o código do servidor MCP antes da implantação.

Implementar fluxos adequados de consentimento do usuário para acesso a dados.

Utilize variáveis ​​de ambiente para credenciais confidenciais.

Teste todas as ferramentas MCP em ambientes seguros antes do uso em produção.

Otimização do Desenvolvimento
Utilize o SDK Python do MCP para desenvolvimento rápido.

Utilize o MCP Inspector para testar e depurar servidores.

Implemente um sistema adequado de tratamento e registro de erros.

Projete servidores com funcionalidades focadas e de propósito único.

Implantação de Produção
Use OAuth 2.0 para autenticação segura de servidor remoto.

Implemente o controle de acesso baseado em funções (RBAC) para ambientes corporativos.

Monitorar o uso da ferramenta MCP para fins de auditoria e segurança.

Considere a inclusão de ferramentas MCP em listas de permissões em sistemas de produção.

Pronto para o seu próximo desafio?
O curso "Construindo ferramentas GraphRAG Python MCP" da GraphAcademy ensinará você a construir seu próprio servidor GraphRAG MCP com ferramentas e recursos baseados em grafos.

O curso "Construa um chatbot com suporte do Neo4j usando Python" ensinará você a criar um chatbot completo usando as técnicas do GraphRAG que você aprendeu.

Se você deseja se aprofundar em grafos de conhecimento, o curso Neo4j & LLM Fundamentals ampliará sua compreensão de como os grafos aprimoram as aplicações de IA.

Para aprender ciência de dados em grafos na prática, explore o curso Fundamentos da Ciência de Dados em Grafos e descubra análises avançadas em seus grafos de conhecimento.

Recursos adicionais
Confira estes recursos para aprofundar seus conhecimentos:

Repositório do servidor Neo4j MCP

Guia do desenvolvedor do Neo4j GraphRAG

Especificação oficial do MCP

Tudo sobre MCP - Blog do Neo4j

Registro de Servidor MCP - Smithery

 

Ou por que não experimentar uma destas recomendações com base no seu histórico de matrículas?

Utilizando Neo4j com LangChain
Aprenda como usar o Neo4j em suas aplicações GenAI com o Langchain.

Ver curso →


Construindo Grafos de Conhecimento com Neo4j GraphRAG para Python
Aprenda a usar Python e LLMs para converter dados não estruturados em grafos de conhecimento.

Ver curso →



---













  

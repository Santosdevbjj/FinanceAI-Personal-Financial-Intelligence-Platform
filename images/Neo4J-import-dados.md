
---


URL de conexão 6abd17b4.databases.neo4j.io:7687

Nome de usuário 6abd17b4

Senha MNr1p-NmukuRMm3c3MZhUO6Yocbu1gTlcniWSh_dbvI



---

https://data-importer.neo4j.io/?_gl=1*1bcqrfu*_gcl_aw*R0NMLjE3ODIyNDk3NTUuQ2p3S0NBanczZWpSQmhBZEVpd0FEa3FQbl9OMUdycUZNaURoLW1pelJoVXJhSWNTU2hKaDc2MXhVb0RrTzE0cnBFV21GMmNlb2ZPV1R4b0M5NzRRQXZEX0J3RQ..*_gcl_au*MTg5MDQ4MTQ0OC4xNzgxNTExMzU2*_ga*MzUyMTI4MDYxLjE3ODE1MTEzNTE.*_ga_DL38Q8KGQC*czE3ODI2MTUxMDkkbzEzJGcxJHQxNzgyNjM0ODEwJGo2MCRsMCRoMA..


https://sandbox.neo4j.com/

---



Fundamentos da Importação de Dados › Importando dados para o Neo4j
Começando

Sérgio
Fundamentos da Importação de Dados

Importando dados para o Neo4j
Começando
Como posso importar dados para o Neo4j?
Ferramentas
Importador de dados Neo4j
Importador de dados
Propriedades e Tipos
Adicionar nós de filme
IDs únicos e restrições
Criando relacionamentos
Adicionar relacionamento direcionado
Adicionar avaliações de usuários
Considerações sobre o Importador de Dados
Considerações sobre os dados de origem
Compreendendo os dados de origem
Desenvolvendo um modelo de dados
Importe seu arquivo CSV
(Opcional)
Parabéns e próximos passos

Português (Brasil)
Powered by Google TradutorTradutor
Lição
Começando
Bem-vindo(a) à seção "Importando dados para o Neo4j"!

Neste curso, você explorará algumas opções e abordagens para importar dados para o Neo4j:

Você aprenderá sobre ferramentas e técnicas para importar dados para o Neo4j.

Você usará o importador de dados Neo4j para criar um banco de dados gráfico de filmes a partir de arquivos CSV.

Por fim, você aprenderá como preparar os dados para importação e as considerações que deve levar em conta ao importar dados para o Neo4j.

Do que você precisa
Você não precisa de nada além de um navegador para acessar e concluir este curso.

Uma instância em branco do Neo4j Sandbox foi criada para você usar durante este curso.

Você pode abrir uma janela do navegador Neo4j ao longo deste curso clicando no Alternar Sandboxbotão no canto inferior direito da tela.

O que é o Neo4j Sandbox?
O Neo4j Sandbox é um serviço gratuito que permite criar instâncias do Neo4j pré-configuradas.

O Neo4j Sandbox é o ambiente perfeito para experimentar o Neo4j.

Você pode acessar o Neo4j Sandbox e criar um banco de dados com vários conjuntos de dados pré-populados visitando sandbox.neo4j.com .

Estendendo sua instância de sandbox

Por padrão, uma instância sandbox do Neo4j existe por 3 dias. Você pode estendê-la por mais 7 dias acessando o site do sandbox e estendendo-a nos detalhes (seta para baixo mais à direita) do sandbox vazio.

Como estender sua instância do Neo4j Sandbox
Estou pronto!
11%
Importando dados para o Neo4j
Como posso importar dados para o Neo4j?
Esta lição foi útil?SimNão




Texto original
Welcome to "Importing Data into Neo4j"!
Avalie a tradução
O feedback vai ser usado para ajudar a melhorar o Google Tradutor




---




Fundamentos da Importação de Dados › Importando dados para o Neo4j
Ferramentas

Sérgio
Fundamentos da Importação de Dados

Importando dados para o Neo4j
Começando
Como posso importar dados para o Neo4j?
Ferramentas
Importador de dados Neo4j
Importador de dados
Propriedades e Tipos
Adicionar nós de filme
IDs únicos e restrições
Criando relacionamentos
Adicionar relacionamento direcionado
Adicionar avaliações de usuários
Considerações sobre o Importador de Dados
Considerações sobre os dados de origem
Compreendendo os dados de origem
Desenvolvendo um modelo de dados
Importe seu arquivo CSV
(Opcional)
Parabéns e próximos passos

Português (Brasil)
Powered by Google TradutorTradutor
Lição
Ferramentas
Nesta lição, você explorará algumas ferramentas que podem ser usadas para importar dados para o Neo4j.

Você aprenderá sobre:

Importador de dados

Cifrar e CARREGAR CSV

neo4j-admin

Ferramentas ETL

Aplicação personalizada

Importador de dados
O Neo4j Data Importer é uma ferramenta "sem código" que facilita a importação de dados de fontes de dados relacionais para o Neo4j. Sua interface gráfica permite a conversão simples de dados em nós e relacionamentos.

Uma captura de tela da interface do usuário do Neo4j Data Importer.
O Data Importer permite que você:

Defina visualmente o modelo de dados em grafo, incluindo nós, relacionamentos e propriedades.

Carregar arquivos CSV e vinculá-los a bancos de dados relacionais.

Mapear campos para propriedades

Defina restrições e índices de ID exclusivos.

Se o seu banco de dados Neo4j estiver hospedado no Aura DB, você pode importar dados diretamente de vários bancos de dados relacionais hospedados na nuvem, incluindo:

PostgreSQL

MySQL

Servidor SQL

Oráculo

Floco de neve

O Data Importer é uma excelente ferramenta para importar dados para o Neo4j rapidamente, sem precisar escrever nenhum código.

Cifrar e CARREGAR CSV
O Cypher possui suporte integrado para importação de dados de arquivos CSV usando a LOAD CSVcláusula.

cifra
LOAD CSV WITH HEADERS FROM 'file:///transactions.csv' AS row

MERGE (t:Transactions {id: row.id})
SET
    t.reference = row.reference,
    t.amount = toInteger(row.amount),
    t.timestamp = datetime(row.timestamp)
Você pode controlar o processo de importação escrevendo consultas Cypher para:

Carregar dados de arquivos CSV

Crie o modelo de dados

Transformar e agregar dados

Transações de controle

Você pode aprender mais sobre como usar o Cypher LOAD CSVno curso " Importando dados CSV para o Neo4j " da GraphAcademy.

neo4j-admin
A neo4j-admin importinterface de linha de comando suporta a importação de grandes conjuntos de dados. neo4j-admin importEla converte arquivos CSV para o formato binário interno do Neo4j e pode importar milhões de linhas em poucos minutos.

O neo4j-admin importcomando espera que você formate os dados de uma maneira específica e exige que o banco de dados esteja offline durante o processo de importação.

Os dados devem, preferencialmente, estar limpos e transformados antes da importação, pois falhas nos dados reduzem o desempenho do processo de importação.

Esta neo4j-admin importé uma ferramenta de alto desempenho e altamente configurável, aplicável quando você precisa importar grandes conjuntos de dados muito rapidamente.

Você pode aprender mais sobre como usar neo4j-admin importo Neo4j no tutorial de importação do Neo4j-admin .

Ferramenta ETL (Extração, Transformação e Carga)
Uma ferramenta ETL, como o Apache Hop , é uma boa opção para importar dados de múltiplas fontes. As ferramentas ETL geralmente suportam diversas fontes de dados, podem transformar os dados para o formato desejado e possuem ferramentas de visualização.

Muitas organizações utilizam ferramentas ETL para importar dados para o Neo4j porque elas conseguem lidar com transformações e integrações de dados complexas.

Integração personalizada usando drivers Neo4j
Criar um aplicativo personalizado para carregar dados no banco de dados gráfico é uma boa opção se você tiver regras de negócios complexas ou precisar integrar com outros sistemas. Um aplicativo personalizado permitirá que você tenha controle total sobre o processo de importação e a integração com outros sistemas e fontes de dados.

Existem diversos cursos da GraphAcademy para desenvolvedores , onde você pode aprender a criar aplicativos usando os drivers do Neo4j.

abordagens mistas
Na prática, você pode usar uma combinação dessas ferramentas para importar dados para o Neo4j. Por exemplo, você pode usar o Data Importer para prototipagem rápida, o Cypher para conjuntos de dados pequenos e ferramentas ETL para transformações de dados complexas.

Você também pode optar por realizar importações em lote pontuais usando uma ferramenta e a ingestão de dados em tempo real usando outra ferramenta.

Continuar
21%
Como posso importar dados para o Neo4j?
Importador de dados Neo4j
Esta lição foi útil?SimNão




Texto original
In practice, you may use a combination of these tools to import data into Neo4j. For example, you may use Data Importer for quick prototyping, Cypher for small data sets, and ETL tools for complex data transformations.
Avalie a tradução
O feedback vai ser usado para ajudar a melhorar o Google Tradutor 


---




Fundamentos da Importação de Dados › Importador de Dados Neo4j
Importador de dados

Sérgio
Fundamentos da Importação de Dados

Importando dados para o Neo4j
Começando
Como posso importar dados para o Neo4j?
Ferramentas
Importador de dados Neo4j
Importador de dados
Propriedades e Tipos
Adicionar nós de filme
IDs únicos e restrições
Criando relacionamentos
Adicionar relacionamento direcionado
Adicionar avaliações de usuários
Considerações sobre o Importador de Dados
Considerações sobre os dados de origem
Compreendendo os dados de origem
Desenvolvendo um modelo de dados
Importe seu arquivo CSV
(Opcional)
Parabéns e próximos passos

Português (Brasil)
Powered by Google TradutorTradutor
Vídeo
Importador de dados
AssistirLer
Nesta lição, você conectará o Neo4j Data Importer ao seu ambiente de teste, carregará um arquivo CSV e criará Personnós.

Você pode acessar o Data Importer em https://workspace.neo4j.io .

Ao se inscrever neste curso, foi criada uma área de testes (sandbox) do Neo4j para você. Você precisará dos dados de conexão para conectar o Neo4j Data Importer à sua área de testes:

URL de conexão
6abd17b4.databases.neo4j.io:7687

Nome de usuário
6abd17b4

Senha
MNr1p-NmukuRMm3c3MZhUO6Yocbu1gTlcniWSh_dbvI

Você pode baixar o persons.csvarquivo data.neo4j.com/importing-fundamentals/persons.csv

Veja os dados
Você pode visualizar os dados no Neo4j usando este Cypher, que retorna os primeiros 25 Personnós:

cifra

Cópia

Correr
MATCH (p:Person) RETURN p LIMIT 25
Os resultados da consulta Cypher mostram um gráfico com 25 nós de Filme.
Faça backup do seu trabalho

O Data Importer salva as alterações automaticamente, mas você pode baixar seu modelo e dados de importação selecionando a Download model (with data)opção no menu …​.

A opção de download do modelo (com dados) no menu do importador de dados '…​'
Você pode restaurar seu modelo usando a Open model (with data)opção e selecionando o arquivo baixado.

Precisa baixar uma solução funcional?
Este modelo de Importador de Dados, person-import.zip , contém uma solução funcional para este exercício.

Baixe o modelo e abra-o usando a opção Open model (with data) buttonno …​menu.

O botão Abrir modelo (com dados) está destacado no menu.
Note que este substituirá o seu modelo atual.

Verifique se você entendeu
Criando nós com o importador de dados
O que você precisa fazer para criar nós usando o Importador de Dados? (Selecione todas as opções aplicáveis)

 Carregar arquivo de origem
 Criar um rótulo de nó
 Defina um identificador único para cada nó.
 Atualize o nome de pelo menos uma propriedade.
Confira a resposta
32%
Importador de dados Neo4j
Propriedades e Tipos
Esta lição foi útil?SimNão




---


URL de conexão
6abd17b4.databases.neo4j.io:7687

Nome de usuário
6abd17b4

Senha
MNr1p-NmukuRMm3c3MZhUO6Yocbu1gTlcniWSh_dbvI



---












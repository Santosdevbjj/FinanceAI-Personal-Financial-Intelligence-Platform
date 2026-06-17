Utilizando o Neo4j com Python

Aprenda como interagir com o Neo4j a partir do Python usando o driver Python do Neo4j

Descrição do curso
Neste curso, você aprenderá como integrar o Neo4j aos seus projetos Python.

Ao final deste curso, você terá adquirido um sólido conhecimento de como usar o Neo4j em uma aplicação Python para construir uma API prática e robusta. Você será capaz de usar seu novo conhecimento para criar suas próprias aplicações com suporte do Neo4j.

Pré-requisitos
Ao fazer este curso, pressupomos que você tenha conhecimento prático de Python e PIP. Também pressupomos que você tenha pelo menos um conhecimento básico de Neo4j.

Caso ainda não o tenha feito, recomendamos que também faça o curso Neo4j Fundamentals para obter uma compreensão básica do Neo4j e o curso Cypher Fundamentals para entender como consultar o Neo4j usando Cypher.

Duração
1 hora

O que você aprenderá
O ciclo de vida do driver Neo4j e sua relação com a sua aplicação.

Como instalar e instanciar o driver Python do Neo4j em seu projeto Python.

Como funcionam as transações de leitura e gravação com o Neo4j

Melhores práticas para usar o Neo4j em seu projeto Python.

Este curso inclui
7 lições

8 desafios

Obtenha suporte
Se você ficar preso em qualquer etapa, nossa comunidade amigável terá prazer em ajudar. Você pode buscar ajuda no site da comunidade Neo4j ou acessar o servidor Discord do Neo4j para discussões em tempo real.

Opinião
Se você tiver algum comentário ou feedback sobre este curso, pode nos enviar um e-mail para graphacademy@neo4j.com .

01. O Motorista




---


Neste módulo, você aprenderá os fundamentos do trabalho com o Neo4j em aplicações Python. Você começará aprendendo como instalar o driver Python do Neo4j e usá-lo para se conectar a uma instância do banco de dados Neo4j.

Ao longo deste módulo, você explorará:

Instalando o driver Python do Neo4j

Criando instâncias de driver e verificando a conectividade.

Executando suas primeiras consultas Cypher usando o execute_query()método

Entender o ciclo de vida do driver e como gerenciar conexões adequadamente.

Ao final deste módulo, você terá a base necessária para começar a construir aplicações Python com Neo4j.

Vá 


---



Build applications with Neo4j and Python
The Neo4j Python driver is the official library to interact with a Neo4j instance through a Python application.

At the hearth of Neo4j lies Cypher, the query language to interact with a Neo4j database. Although this guide does not require you to be a seasoned Cypher querier, it’s easier to focus on the Python-specific bits if you know some Cypher already. You will also get a gentle introduction to Cypher in these pages, but check out Getting started → Cypher for a more detailed walkthrough of graph databases modelling and querying if this is your first approach.

Install
Install the Neo4j Python driver with pip:

pip install neo4j
More info on installing the driver

Connect to the database
Connect to a database by creating a Driver object and providing a URL and an authentication token. Once you have a Driver instance, use the .verify_connectivity() method to ensure that a working connection can be established.

from neo4j import GraphDatabase

# URI examples: "neo4j://localhost", "neo4j+s://xxx.databases.neo4j.io"
URI = "<database-uri>"
AUTH = ("<username>", "<password>")

with GraphDatabase.driver(URI, auth=AUTH) as driver:
    driver.verify_connectivity()



Create an example graph
Run a Cypher query with the method Driver.execute_query(). Do not hardcode or concatenate parameters: use placeholders and specify the parameters as keyword arguments.

Create two Person nodes and a KNOWS relationship between them

summary = driver.execute_query("""
    CREATE (a:Person {name: $name})
    CREATE (b:Person {name: $friendName})
    CREATE (a)-[:KNOWS]->(b)
    """,
    name="Alice", friendName="David",
    database_="<database-name>",
).summary
print("Created {nodes_created} nodes in {time} ms.".format(
    nodes_created=summary.counters.nodes_created,
    time=summary.result_available_after
))
More info on querying the database

Query a graph
To retrieve information from the database, use the Cypher clause MATCH:

Retrieve all Person nodes who know other persons

records, summary, keys = driver.execute_query("""
    MATCH (p:Person)-[:KNOWS]->(:Person)
    RETURN p.name AS name
    """,
    database_="<database-name>",
)

# Loop through results and do something with them
for record in records:
    print(record.data())  # obtain record as dict

# Summary information
print("The query `{query}` returned {records_count} records in {time} ms.".format(
    query=summary.query, records_count=len(records),
    time=summary.result_available_after
))
More info on querying the database

Close connections and sessions
Unless you created them using the with statement, call the .close() method on all Driver and Session instances to release any resources still held by them.

from neo4j import GraphDatabase


driver = GraphDatabase.driver(URI, auth=AUTH)
session = driver.session(database="<database-name>")

# session/driver usage

session.close()
driver.close()


---


Installation
To start creating a Neo4j Python application, you first need to install the Python Driver and get a Neo4j database instance to connect to.

Server compatibility
The latest driver in the 6.x series supports connection to Neo4j instances version 4.4.x, 5.x, 2025.x, and 2026.x. It is also guaranteed to be forward-compatible with the next major release.
Install the driver
Use pip to install the Neo4j Python Driver (requires Python >= 3.10):

pip install neo4j
Activate Python’s development mode
The Rust extension to the Python driver is an alternative package that yields a 3x to 10x speedup compared to the regular driver. You can install it with pip install neo4j-rust-ext, either alongside the neo4j package or as a replacement to it. Usage-wise, the libraries are identical: everything in this guide applies to both.
To get the driver on an air-gapped machine, download the latest driver tarball and install it with pip install neo4j-<version>.tar.gz.
Get a Neo4j instance
You need a running Neo4j database in order to use the driver with it. The easiest way to spin up a local instance is through a Docker container (requires docker.io). The command below runs the latest Neo4j version in Docker, setting the admin username to neo4j and password to secretgraph:

docker run \
   -p7474:7474 \                       # forward port 7474 (HTTP)
   -p7687:7687 \                       # forward port 7687 (Bolt)
   -d \                                # run in background
   -e NEO4J_AUTH=neo4j/secretgraph \   # set login credentials
   neo4j:latest
Alternatively, you can obtain a free cloud instance through Aura.

You can also install Neo4j on your system, or use Neo4j Desktop to create a local development environment (not for production).






---


https://pypi.org/project/neo4j/


Descrição do projeto
This repository contains the official Neo4j driver for Python.

Driver upgrades within a major version will never contain breaking API changes.

For version compatibility with Neo4j server, please refer to: https://neo4j.com/developer/kb/neo4j-supported-versions/

Python 3.14 supported.

Python 3.13 supported.

Python 3.12 supported.

Python 3.11 supported.

Python 3.10 supported.

Installation
To install the latest stable version, use:

pip install neo4j
Note

neo4j-driver is the old name for this package. It is now deprecated and and will receive no further updates starting with 6.0.0. Make sure to install neo4j as shown above.

Alternative Installation for Better Performance
You may want to have a look at the available Rust extensions for this driver for better performance. The Rust extensions are not installed by default. For more information, see neo4j-rust-ext.

Quick Example
from neo4j import GraphDatabase, RoutingControl


URI = "neo4j://localhost:7687"
AUTH = ("neo4j", "password")


def add_friend(driver, name, friend_name):
    driver.execute_query(
        "MERGE (a:Person {name: $name}) "
        "MERGE (friend:Person {name: $friend_name}) "
        "MERGE (a)-[:KNOWS]->(friend)",
        name=name, friend_name=friend_name, database_="neo4j",
    )


def print_friends(driver, name):
    records, _, _ = driver.execute_query(
        "MATCH (a:Person)-[:KNOWS]->(friend) WHERE a.name = $name "
        "RETURN friend.name ORDER BY friend.name",
        name=name, database_="neo4j", routing_=RoutingControl.READ,
    )
    for record in records:
        print(record["friend.name"])


with GraphDatabase.driver(URI, auth=AUTH) as driver:
    add_friend(driver, "Arthur", "Guinevere")
    add_friend(driver, "Arthur", "Lancelot")
    add_friend(driver, "Arthur", "Merlin")
    print_friends(driver, "Arthur") 




    ---


Lição
Instalando o driver
No curso Fundamentos do Cypher , você aprendeu como consultar o Neo4j usando Cypher.

Para executar instruções Cypher em uma aplicação Python, você precisará do driver Python do Neo4j . O driver atua como uma ponte entre seu código Python e o Neo4j, gerenciando as conexões com o banco de dados e a execução de consultas Cypher.

Instalando o driver
Para instalar o driver, utilize o pipcomando:

concha

Cópia
pip install neo4j
Criando uma instância de driver
Você começa importando o driver e criando uma instância:

Python

Cópia
from neo4j import GraphDatabase
driver = GraphDatabase.driver(
  "neo4j://localhost:7687",       # (1)
  auth=("neo4j", "your-password") # (2)
)
A string de conexão para seu banco de dados Neo4j.

Seu nome de usuário e senha do Neo4j

Melhores práticas

Crie uma instância do Driver e compartilhe-a em toda a sua aplicação.

Verificando a conectividade
Você pode verificar se a conexão está correta chamando o verifyConnectivity()método.

Python

Cópia
driver.verify_connectivity()
Verificar conectividade

O verifyConnectivity()método lançará uma exceção caso a conexão não possa ser estabelecida.

Executando sua primeira consulta
O execute_query()método executa uma consulta Cypher e retorna os resultados.

Python

Cópia
records, summary, keys = driver.execute_query( # (1)
    "RETURN COUNT {()} AS count"
)
# Get the first record
first = records[0]      # (2)
# Print the count entry
print(first["count"])   # (3)
O que está acontecendo aqui?
execute_query()Executa uma consulta Cypher para obter a contagem de todos os nós no banco de dados.

recordsContém uma lista das linhas retornadas.

As chaves da RETURNcláusula são acessadas usando indexação no estilo de dicionário com colchetes ( []).

Ciclo de vida completo do condutor
Após concluir a interação com o motorista, ligue close()para liberar quaisquer recursos que ele esteja utilizando.

Python

Cópia
driver.close()
Você pode usar isso withpara criar uma solução completa que fechará automaticamente o driver quando o bloco for encerrado.

Python

Cópia
with GraphDatabase.driver(NEO4J_URI, auth=(NEO4J_USERNAME, NEO4J_PASSWORD)) as driver:
    result, summary, keys = driver.execute_query("RETURN COUNT {()} AS count")






---


Quiz
Criar uma instância de driver
Como instalar o Neo4j e criar uma nova instância de driver?

Instale o driver
Execute o comando no terminal para instalar o driver Python do Neo4j.

sh
pip install 
neo4j




---


Lição
Executando instruções Cypher
Introdução
Você pode usar esse execute_query()método para executar instruções Cypher pontuais ou instruções que retornam um pequeno número de registros. Esse método busca uma lista de registros e os carrega na memória.

Python

Cópia
cypher = """
MATCH (p:Person {name: $name})-[r:ACTED_IN]->(m:Movie)
RETURN m.title AS title, r.role AS role
"""
name = "Tom Hanks"
records, summary, keys = driver.execute_query( # (1)
    cypher,    # (2)
    name=name  # (3)
)
O método retorna uma tupla que pode ser desempacotada para acessar o resultado da consulta, o resumo e as chaves.

O método espera uma instrução Cypher em formato de string como primeiro argumento.

Quaisquer parâmetros nomeados que não tenham um sublinhado como sufixo podem ser acessados ​​na consulta prefixando o nome com um cifrão ($).

Utilizando parâmetros

É uma boa prática usar parâmetros em suas consultas para evitar a injeção de código malicioso em sua instrução Cypher.

Lidando com o resultado
O execute_query()método retorna uma tupla contendo três objetos:

Uma lista de Recordobjetos

Um resumo da execução da consulta.

Uma lista de chaves especificadas na RETURNcláusula

Python

Cópia
print(keys)  # ['title', 'role']
print(summary)  # A summary of the query execution
Acessando resultados
Cada linha retornada pela consulta é um Recordobjeto. O Recordobjeto é semelhante a um dicionário e fornece acesso aos dados retornados pela consulta.

Você pode acessar qualquer item na RETURNcláusula usando colchetes.

Python

Cópia
# RETURN m.title AS title, r.role AS role

for record in records:
    print(record["title"])  # Toy Story
    print(record["role"])  # "Woody"
Transformando resultados
O execute_query()método aceita um result_transformer_argumento que permite transformar o resultado em um formato alternativo.

Em vez de retornar a tupla, a consulta retornará o resultado da result_transformer_função.

Python

Cópia
result = driver.execute_query(
    cypher,
    name=name,
    result_transformer_= lambda result: [
        f"Tom Hanks played {record['role']} in {record['title']}"
        for record in result
    ]
)

print(result)  # ['Tom Hanks played Woody in Toy Story', ...]
Trabalhando com DataFrames
A Resultclasse fornece um to_df()método que pode ser usado para transformar o resultado em um pandas DataFrame.

Python

Cópia
from neo4j import Result

driver.execute_query(
    cypher,
    name=name,
    result_transformer_=Result.to_df
)
Leitura e escrita
Por padrão, execute_query()o programa é executado no modo WRITE . Em um ambiente clusterizado, isso envia todas as consultas para o líder do cluster, sobrecarregando-o desnecessariamente.

Quando você estiver apenas lendo dados, poderá otimizar o desempenho definindo o routing_parâmetro para o modo READ. Isso distribui suas consultas de leitura entre todos os membros do cluster.

Python

Cópia
from neo4j import Result, RoutingControl

driver.execute_query(
    cypher,
    name=name,
    result_transformer_=Result.to_df,
    routing_=RoutingControl.READ  # or simply "r"
)
Modos de roteamento explícitos

Você também pode passar o parâmetro rpara o modo de leitura e wpara invocar explicitamente o modo de escrita 




---


Execute a instrução Cypher.
Selecione o método correto para executar a instrução Cypher.

Python
driver = GraphDatabase.driver(NEO4J_URI,
    auth=(NEO4J_USER, NEO4J_PASSWORD)
)

cypher = """
MATCH (m:Movie {title: $title})<-[:ACTED_IN]-(p)
RETURN p.name AS actor
"""
params = {"title": "Toy Story"}

res, summary, keys = driver.
execute_query(

    cypher,
    **params
)



Imprima os nomes dos atores.
Atualize o código para imprimir o nome de cada ator.

Python
for record in res.records:
    print(
        
record["actor"]

    )


---



Você está trabalhando em um notebook Jupyter e deseja transformar o resultado de uma consulta em um objeto pandas DataFrame.

Transforme o resultado
Selecione o método correto para transformar o resultado de uma consulta em um objeto pandas DataFrame.

Python
from neo4j import Result
driver = GraphDatabase.driver(NEO4J_URI,
    auth=(NEO4J_USER, NEO4J_PASSWORD)
)

cypher = """
MATCH (m:Movie {title: $title})<-[:ACTED_IN]-(p)
RETURN p.name AS actor
"""
params = {"title": "Toy Story"}

res = driver.execute_query(
    query, params,
    result_transformer_=Result.
to_df

) 


Dica

A Resultclasse fornece um método para transformar resultados em um DataFrame do pandas. O nome do método segue a convenção comum do Python de usar "to_" seguido pelo formato de destino abreviado.
Parabéns! Você aprendeu como transformar os resultados em um DataFrame usando Result.to_df().

Agora você possui as ferramentas necessárias para executar instruções Cypher simples e transformar os resultados quando necessário.

No próximo módulo, você explorará como executar instruções Cypher mais complexas.



---


Lidar com resultados
No módulo anterior, você aprendeu como instalar o driver, conectar-se a uma instância e executar sua primeira consulta.

Neste módulo, você aprenderá como lidar com os resultados de uma consulta. O driver Python do Neo4j retorna dados em vários formatos, e entender como trabalhar com esses tipos é essencial para construir aplicações robustas.

Você aprenderá sobre:

Trabalhando com tipos de grafos (Nós, Relacionamentos e Caminhos)

Tratamento de tipos temporais (datas e horas)

Utilizando tipos espaciais (pontos e distâncias)

Transformar os resultados da consulta em diferentes formatos.

Ao final deste módulo, você será capaz de trabalhar com confiança com todos os tipos de dados retornados pelas consultas do Neo4j. 



---



Lição
Tipos de grafos
Vamos analisar os tipos de dados retornados por uma consulta Cypher.

A maioria dos tipos retornados por uma consulta Cypher são mapeados diretamente para tipos Python, mas alguns tipos mais complexos precisam de tratamento especial.

Tipos de grafos - Nós, Relacionamentos e Caminhos

Tipos temporais - Datas e horários

Tipos espaciais - Pontos e distâncias

Retornando tipos de grafo

Quando os tipos de grafo são retornados por uma consulta executada na janela de Consulta, eles são visualizados em um layout de grafo.

Aprenda como interagir com o Neo4j a partir do Python usando o mapeamento DriverDirect do Neo4j para Python.
Tipo Python	Tipo de cifra Neo4j
None

null

bool

Boolean

int

Integer

float

Float

str

String

bytearray

Bytes [1]

list

List

dict

Map

Tipos de grafos
O seguinte trecho de código encontra todos os filmes com o título especificado e retorna person, acted_ine movie.

Python
Nós e relacionamentos de retorno

Cópia
movie = "Toy Story"

records, summary, keys = driver.execute_query("""
MATCH path = (person:Person)-[actedIn:ACTED_IN]->(movie:Movie {title: $title})
RETURN path, person, actedIn, movie
""", title=movie)
Nós
Os nós são retornados como um Nodeobjeto.

Python

Cópia
for record in records:
    node = record["movie"]
Python
Trabalhando com objetos Node

Cópia
print(node.element_id)      # (1)
print(node.labels)          # (2)
print(node.items())         # (3)
# (4)
print(node["name"])
print(node.get("name", "N/A"))
A element_idpropriedade fornece acesso ao ID do elemento do nó,
por exemplo.4:97b72e9c-ae4d-427c-96ff-8858ecf16f88:0

A labelspropriedade é um conjunto congelado contendo uma matriz de rótulos atribuídos ao nó,
por exemplo.['Person', 'Actor']

O items()método fornece acesso às propriedades do nó como um iterável de todos os pares nome-valor.
Exemplo:{name: 'Tom Hanks', tmdbId: '31'}

Uma única propriedade pode ser recuperada usando []colchetes ou o get()método. O get()método também permite definir uma propriedade padrão caso nenhuma exista.

Relacionamentos
Os relacionamentos são retornados como um Relationshipobjeto.

Python

Cópia
acted_in = record["actedIn"]
print(acted_in.id)         # (1)
print(acted_in.type)       # (2)
print(acted_in.items())    # (3)
# 4
print(acted_in["roles"])
print(acted_in.get("roles", "(Unknown)"))
print(acted_in.start_node) # (5)
print(acted_in.end_node)   # (6)
id- ID interno do relacionamento (ex.: 9876)

type- Tipo de relacionamento (ex.: ACTED_IN)

items()- Retorna propriedades de relacionamento como pares nome-valor (ex.: {role: 'Woody'})

Acesse propriedades usando colchetes []ou get()método.

start_node- Nodeobjeto no início do relacionamento

end_node- Nodeobjeto no final do relacionamento

Caminhos
Um caminho é uma sequência de nós e relacionamentos e é retornado como um Pathobjeto.

Python

Cópia
path = record["path"]
print(path.start_node)  # (1)
print(path.end_node)    # (2)
print(len(path))  # (1)
print(path.relationships)  # (1)
start_node- Nodeobjeto no início do caminho

end_node- Nodeobjeto no final do caminho

len(path)- O número de relacionamentos dentro do caminho

relationships- Uma tupla de Relationshipobjetos dentro do caminho.

Os caminhos são iteráveis.

Utilize iter(path)para iterar sobre os relacionamentos em um caminho. 



---





Lidar com resultados
No módulo anterior, você aprendeu como instalar o driver, conectar-se a uma instância e executar sua primeira consulta.

Neste módulo, você aprenderá como lidar com os resultados de uma consulta. O driver Python do Neo4j retorna dados em vários formatos, e entender como trabalhar com esses tipos é essencial para construir aplicações robustas.

Você aprenderá sobre:

Trabalhando com tipos de grafos (Nós, Relacionamentos e Caminhos)

Tratamento de tipos temporais (datas e horas)

Utilizando tipos espaciais (pontos e distâncias)

Transformar os resultados da consulta em diferentes formatos.

Ao final deste módulo, você será capaz de trabalhar com confiança com todos os tipos de dados retornados pelas consultas do Neo4j. 



---



Instalando o driver
Para instalar o driver, utilize o pipcomando:

concha

Cópia
pip install neo4j
Criando uma instância de driver
Você começa importando o driver e criando uma instância:

Python

Cópia
from neo4j import GraphDatabase
driver = GraphDatabase.driver(
  "neo4j://localhost:7687",       # (1)
  auth=("neo4j", "your-password") # (2)
)
A string de conexão para seu banco de dados Neo4j.

Seu nome de usuário e senha do Neo4j

Melhores práticas

Crie uma instância do Driver e compartilhe-a em toda a sua aplicação.

Verificando a conectividade
Você pode verificar se a conexão está correta chamando o verifyConnectivity()método.

Python

Cópia
driver.verify_connectivity()
Verificar conectividade

O verifyConnectivity()método lançará uma exceção caso a conexão não possa ser estabelecida.

Executando sua primeira consulta
O execute_query()método executa uma consulta Cypher e retorna os resultados.

Python

Cópia
records, summary, keys = driver.execute_query( # (1)
    "RETURN COUNT {()} AS count"
)
# Get the first record
first = records[0]      # (2)
# Print the count entry
print(first["count"])   # (3)
O que está acontecendo aqui?
execute_query()Executa uma consulta Cypher para obter a contagem de todos os nós no banco de dados.

recordsContém uma lista das linhas retornadas.

As chaves da RETURNcláusula são acessadas usando indexação no estilo de dicionário com colchetes ( []).

Ciclo de vida completo do condutor
Após concluir a tarefa com o motorista, ligue close()para liberar quaisquer recursos que ele esteja utilizando.

Python

Cópia
driver.close()
Você pode usar isso withpara criar uma solução completa que fechará automaticamente o driver quando o bloco for encerrado.

Python

Cópia
with GraphDatabase.driver(NEO4J_URI, auth=(NEO4J_USERNAME, NEO4J_PASSWORD)) as driver:
    result, summary, keys = driver.execute_query("RETURN COUNT {()} AS count")


---



Criar uma instância de driver
Como instalar o Neo4j e criar uma nova instância de driver?

Instale o driver
Execute o comando no terminal para instalar o driver Python do Neo4j.

sh
pip install 
neo4j
Criar uma nova instância de driver
Excelente trabalho! Com o driver instalado, você agora pode criar uma nova instância do driver.

Complete o código abaixo para criar uma nova instância de driver.

Python
from neo4j import GraphDatabase

NEO4J_URI = "neo4j://localhost:7687"
NEO4J_USERNAME = "neo4j"
NEO4J_PASSWORD = "letmein"

driver = GraphDatabase.
driver(

    NEO4J_URI,
    auth=(NEO4J_USERNAME, NEO4J_PASSWORD)
) 



---



Executando instruções Cypher
Introdução
Você pode usar esse execute_query()método para executar instruções Cypher pontuais ou instruções que retornam um pequeno número de registros. Esse método busca uma lista de registros e os carrega na memória.

Python

Cópia
cypher = """
MATCH (p:Person {name: $name})-[r:ACTED_IN]->(m:Movie)
RETURN m.title AS title, r.role AS role
"""
name = "Tom Hanks"
records, summary, keys = driver.execute_query( # (1)
    cypher,    # (2)
    name=name  # (3)
)
O método retorna uma tupla que pode ser desempacotada para acessar o resultado da consulta, o resumo e as chaves.

O método espera uma instrução Cypher em formato de string como primeiro argumento.

Quaisquer parâmetros nomeados que não tenham um sublinhado como sufixo podem ser acessados ​​na consulta prefixando o nome com um cifrão ($).

Utilizando parâmetros

É uma boa prática usar parâmetros em suas consultas para evitar a injeção de código malicioso em sua instrução Cypher.

Lidando com o resultado
O execute_query()método retorna uma tupla contendo três objetos:

Uma lista de Recordobjetos

Um resumo da execução da consulta.

Uma lista de chaves especificadas na RETURNcláusula

Python

Cópia
print(keys)  # ['title', 'role']
print(summary)  # A summary of the query execution
Acessando resultados
Cada linha retornada pela consulta é um Recordobjeto. O Recordobjeto é semelhante a um dicionário e fornece acesso aos dados retornados pela consulta.

Você pode acessar qualquer item na RETURNcláusula usando colchetes.

Python

Cópia
# RETURN m.title AS title, r.role AS role

for record in records:
    print(record["title"])  # Toy Story
    print(record["role"])  # "Woody"
Transformando resultados
O execute_query()método aceita um result_transformer_argumento que permite transformar o resultado em um formato alternativo.

Em vez de retornar a tupla, a consulta retornará o resultado da result_transformer_função.

Python

Cópia
result = driver.execute_query(
    cypher,
    name=name,
    result_transformer_= lambda result: [
        f"Tom Hanks played {record['role']} in {record['title']}"
        for record in result
    ]
)

print(result)  # ['Tom Hanks played Woody in Toy Story', ...]
Trabalhando com DataFrames
A Resultclasse fornece um to_df()método que pode ser usado para transformar o resultado em um pandas DataFrame.

Python

Cópia
from neo4j import Result

driver.execute_query(
    cypher,
    name=name,
    result_transformer_=Result.to_df
)
Leitura e escrita
Por padrão, execute_query()o programa é executado no modo WRITE . Em um ambiente clusterizado, isso envia todas as consultas para o líder do cluster, sobrecarregando-o desnecessariamente.

Quando você estiver apenas lendo dados, poderá otimizar o desempenho definindo o routing_parâmetro para o modo READ. Isso distribui suas consultas de leitura entre todos os membros do cluster.

Python

Cópia
from neo4j import Result, RoutingControl

driver.execute_query(
    cypher,
    name=name,
    result_transformer_=Result.to_df,
    routing_=RoutingControl.READ  # or simply "r"
)
Modos de roteamento explícitos

Você também pode passar o parâmetro r para   o modo de leitura e wpara invocar explicitamente o modo de escrita. 



---


Sua primeira pergunta
Como executar uma instrução Cypher e acessar os resultados?

Execute a instrução Cypher.
Selecione o método correto para executar a instrução Cypher.

Python
driver = GraphDatabase.driver(NEO4J_URI,
    auth=(NEO4J_USER, NEO4J_PASSWORD)
)

cypher = """
MATCH (m:Movie {title: $title})<-[:ACTED_IN]-(p)
RETURN p.name AS actor
"""
params = {"title": "Toy Story"}

res, summary, keys = driver.
execute_query(

    cypher,
    **params
) 




---




Usando o Neo4j com Python › O Driver
Sua primeira pergunta

Sérgio
Utilizando o Neo4j com Python

O motorista
Instalando o driver
Criar uma instância de driver
Executando instruções Cypher
Sua primeira pergunta
Utilizando transformadores de resultados
Lidar com resultados
Tipos de grafos
Acessando Tipos de Grafos
Datas e horários
Trabalhando com datas e horários
Tipos espaciais
Utilizando tipos espaciais
Melhores práticas
Gestão de transações
Funções de transação
Tratamento de erros de banco de dados
Tratamento de erros

Português (Brasil)
Powered by Google TradutorTradutor
Quiz
Sua primeira pergunta
Como executar uma instrução Cypher e acessar os resultados?

Execute a instrução Cypher.
Selecione o método correto para executar a instrução Cypher.

Python
driver = GraphDatabase.driver(NEO4J_URI,
    auth=(NEO4J_USER, NEO4J_PASSWORD)
)

cypher = """
MATCH (m:Movie {title: $title})<-[:ACTED_IN]-(p)
RETURN p.name AS actor
"""
params = {"title": "Toy Story"}

res, summary, keys = driver.
execute_query(

    cypher,
    **params
)
Imprima os nomes dos atores.
Atualize o código para imprimir o nome de cada ator.

Python
for record in res.records:
    print(
        
record["actor"]

    )
26%
Executando instruções Cypher
Utilizando transformadores de resultados
Este questionário foi útil?SimNão

Você concluiu esta lição com sucesso!
Ótimo trabalho! Você aprendeu como executar uma instrução Cypher e acessar os resultados.

Na próxima lição, você verá como transformar os resultados.





---



Transforme o resultado
Selecione o método correto para transformar o resultado de uma consulta em um objeto pandas DataFrame.

Python
from neo4j import Result
driver = GraphDatabase.driver(NEO4J_URI,
    auth=(NEO4J_USER, NEO4J_PASSWORD)
)

cypher = """
MATCH (m:Movie {title: $title})<-[:ACTED_IN]-(p)
RETURN p.name AS actor
"""
params = {"title": "Toy Story"}

res = driver.execute_query(
    query, params,
    result_transformer_=Result.
to_df

) 





---




Lidar com resultados
No módulo anterior, você aprendeu como instalar o driver, conectar-se a uma instância e executar sua primeira consulta.

Neste módulo, você aprenderá como lidar com os resultados de uma consulta. O driver Python do Neo4j retorna dados em vários formatos, e entender como trabalhar com esses tipos é essencial para construir aplicações robustas.

Você aprenderá sobre:

Trabalhando com tipos de grafos (Nós, Relacionamentos e Caminhos)

Tratamento de tipos temporais (datas e horas)

Utilizando tipos espaciais (pontos e distâncias)

Transformar os resultados da consulta em diferentes formatos.

Ao final deste módulo, você será capaz de trabalhar com confiança com todos os tipos de dados retornados pelas consultas do Neo4j.  





---



Lição
Tipos de grafos
Vamos analisar os tipos de dados retornados por uma consulta Cypher.

A maioria dos tipos retornados por uma consulta Cypher são mapeados diretamente para tipos Python, mas alguns tipos mais complexos precisam de tratamento especial.

Tipos de grafos - Nós, Relacionamentos e Caminhos

Tipos temporais - Datas e horários

Tipos espaciais - Pontos e distâncias

Retornando tipos de grafo

Quando os tipos de grafo são retornados por uma consulta executada na janela de Consulta, eles são visualizados em um layout de grafo.

Aprenda como interagir com o Neo4j a partir do Python usando o mapeamento DriverDirect do Neo4j para Python.
Tipo Python	Tipo de cifra Neo4j
None

null

bool

Boolean

int

Integer

float

Float

str

String

bytearray

Bytes [1]

list

List

dict

Map

Tipos de grafos
O seguinte trecho de código encontra todos os filmes com o título especificado e retorna person, acted_ine movie.

Python
Nós e relacionamentos de retorno

Cópia
movie = "Toy Story"

records, summary, keys = driver.execute_query("""
MATCH path = (person:Person)-[actedIn:ACTED_IN]->(movie:Movie {title: $title})
RETURN path, person, actedIn, movie
""", title=movie)
Nós
Os nós são retornados como um Nodeobjeto.

Python

Cópia
for record in records:
    node = record["movie"]
Python
Trabalhando com objetos Node

Cópia
print(node.element_id)      # (1)
print(node.labels)          # (2)
print(node.items())         # (3)
# (4)
print(node["name"])
print(node.get("name", "N/A"))
A element_idpropriedade fornece acesso ao ID do elemento do nó,
por exemplo.4:97b72e9c-ae4d-427c-96ff-8858ecf16f88:0

A labelspropriedade é um conjunto congelado contendo uma matriz de rótulos atribuídos ao nó,
por exemplo.['Person', 'Actor']

O items()método fornece acesso às propriedades do nó como um iterável de todos os pares nome-valor.
Exemplo:{name: 'Tom Hanks', tmdbId: '31'}

Uma única propriedade pode ser recuperada usando []colchetes ou o get()método. O get()método também permite definir uma propriedade padrão caso nenhuma exista.

Relacionamentos
Os relacionamentos são retornados como um Relationshipobjeto.

Python

Cópia
acted_in = record["actedIn"]
print(acted_in.id)         # (1)
print(acted_in.type)       # (2)
print(acted_in.items())    # (3)
# 4
print(acted_in["roles"])
print(acted_in.get("roles", "(Unknown)"))
print(acted_in.start_node) # (5)
print(acted_in.end_node)   # (6)
id- ID interno do relacionamento (ex.: 9876)

type- Tipo de relacionamento (ex.: ACTED_IN)

items()- Retorna propriedades de relacionamento como pares nome-valor (ex.: {role: 'Woody'})

Acesse propriedades usando colchetes []ou get()método.

start_node- Nodeobjeto no início do relacionamento

end_node- Nodeobjeto no final do relacionamento

Caminhos
Um caminho é uma sequência de nós e relacionamentos e é retornado como um Pathobjeto.

Python

Cópia
path = record["path"]
print(path.start_node)  # (1)
print(path.end_node)    # (2)
print(len(path))  # (1)
print(path.relationships)  # (1)
start_node- Nodeobjeto no início do caminho

end_node- Nodeobjeto no final do caminho

len(path)- O número de relacionamentos dentro do caminho

relationships- Uma tupla de Relationshipobjetos dentro do caminho.

Os caminhos são iteráveis.

Utilize iter(path)para iterar sobre os relacionamentos em um caminho. 







---


Acessando Tipos de Grafos
Acessando as propriedades do nó
Selecione o método correto para acessar a namepropriedade de um nó com um valor padrão de `null` "Unknown"caso a propriedade não exista.

Python
node = result['person']
name = node.
get("name", "Unknown")




Acessando o tipo de relacionamento
Selecione a propriedade correta para acessar o tipo de relacionamento.

Python
relationship = result['acted_in']
rel_type = relationship.
type

print(f"Type: {rel_type}")  # prints: Type: ACTED_IN










---




Lição
Datas e horários
O neo4j.timemódulo fornece classes para trabalhar com datas e horas em Python.

Os tipos temporais no Neo4j são uma combinação de elementos de data, hora e fuso horário.

Aprenda como interagir com o Neo4j a partir do Python usando o driver Python do Neo4j e os tipos temporais.
Tipo	Descrição	Data?	Tempo?	Fuso horário?
Date

Uma tupla composta por Ano, Mês e Dia

Y

Time

A hora do dia com o deslocamento UTC.

Y

Y

LocalTime

Um tempo sem fuso horário.

Y

DateTime

Uma combinação de data e hora.

Y

Y

Y

LocalDateTime

Uma combinação de data e hora sem fuso horário.

Y

Y

Tipos temporais de escrita
Python

Cópia
from neo4j.time import DateTime
from datetime import timezone, timedelta
driver.execute_query("""
CREATE (e:Event {
  startsAt: $datetime,              // (1)
  createdAt: datetime($dtstring),   // (2)
  updatedAt: datetime()             // (3)
})
""",
    datetime=DateTime(
        2024, 5, 15, 14, 30, 0,
        tzinfo=timezone(timedelta(hours=2))
    ),  # (4)
    dtstring="2024-05-15T14:30:00+02:00"
)
Ao gravar tipos temporais no banco de dados, você pode passar o objeto como parâmetro para a consulta ou converter o valor dentro de uma instrução Cypher.

Este exemplo demonstra como:

Use um DateTimeobjeto como parâmetro para a consulta ( <4>)

Converter uma string no formato ISO 8601 dentro de uma instrução Cypher.

Obtenha a data e hora atuais usando a datetime()função.

Leitura de tipos temporais
Ao ler tipos temporais do banco de dados, você receberá uma instância do tipo Python correspondente, a menos que converta o valor dentro da sua consulta.

Python

Cópia
# Query returning temporal types
records, summary, keys = driver.execute_query("""
RETURN date() as date, time() as time, datetime() as datetime, toString(datetime()) as asString
""")

# Access the first record
for record in records:
    # Automatic conversion to Python driver types
    date = record["date"]           # neo4j.time.Date
    time = record["time"]           # neo4j.time.Time
    datetime = record["datetime"]   # neo4j.time.DateTime
    as_string = record["asString"]  # str
Trabalhando com durações
Python

Cópia
from neo4j.time import Duration, DateTime
starts_at = DateTime.now()
event_length = Duration(hours=1, minutes=30)
ends_at = starts_at + event_length
driver.execute_query("""
CREATE (e:Event {
  startsAt: $startsAt, endsAt: $endsAt,
  duration: $eventLength, // (1)
  interval: duration('P30M') // (2)
})
""",
    startsAt=starts_at, endsAt=ends_at, eventLength=event_length
)
Durações representam um período de tempo e podem ser usadas para cálculos com datas tanto em Python quanto em Cypher. Esses tipos também podem ser criados em Python ou convertidos dentro de uma instrução Cypher.

Passe uma instância para Durationa consulta.

Utilize a duration()função para criar um Durationobjeto a partir de uma string no formato ISO 8601.

Cálculo de durações

Você pode usar esse duration.between método para calcular a duração entre dois objetos de data ou hora. 









---




Trabalhando com datas e horários
Data e hora locais
Atualize o código para criar um objeto DateTime para 15 de maio de 2024 às 14h30 no fuso horário UTC+2 .

Python
dt = DateTime(2024, 5, 15, 14, 30, 0,
  
tzinfo=timezone(timedelta(hours=2))

) 







---



Lição
Tipos espaciais
O Neo4j possui suporte integrado para tipos de dados espaciais bidimensionais e tridimensionais. Estes são denominados pontos . Um ponto pode representar coordenadas geográficas (longitude, latitude) ou coordenadas cartesianas (x, y).

Dependendo dos valores usados ​​para criar o ponto, ele pode ser um ponto bidimensional CartesianPointou um ponto WGS84Pointbidimensional. Se você especificar três valores, esses pontos serão considerados tridimensionais. Caso contrário, serão considerados bidimensionais.

Em Python, esses valores são representados pelas classes `character` neo4j.spatial.CartesianPointe ` neo4j.spatial.WGS84Pointcharacter`, que são subclasses da neo4j.spatial.Pointclasse `character`.

Tipo de cifra	Tipo Python	SRID	SRID 3D
Ponto (Cartesiano)

neo4j.spatial.CartesianPoint

7203

9157

Ponto (WGS-84)

neo4j.spatial.WGS84Point

4326

4979

Ponto cartesiano
Um ponto cartesiano define um ponto com coordenadas x e y. Um valor z adicional pode ser fornecido para definir um ponto tridimensional.

Você pode criar um ponto cartesiano passando uma tupla de valores para o CartesianPointconstrutor ou passando os valores ` xx` ye `y` zpara a função `point` em Cypher.

Python
Ponto cartesiano

Cópia
from neo4j.spatial import CartesianPoint

two_d = CartesianPoint((x, y))
three_d = CartesianPoint((x, y, z))
O driver converterá pointos tipos de dados criados com valores x, y e z em uma instância da CartesianPointclasse.

Python

Cópia
records, summary, keys = driver.execute_query("""
RETURN point({x: 1.23, y: 4.56, z: 7.89}) AS threeD
""")

point = records[0]["threeD"]

# <1> Accessing attributes
print(point.x, point.y, point.z, point.srid) # 1.23, 4.56, 7.89, 9157

# <2> Destructuring
x, y, z = point
Os valores podem ser acessados ​​usando os atributos x, ye ou desestruturando o ponto .z<1><2>

WGS84Ponto
Um ponto WSG (Sistema Geodésico Mundial) consiste em um valor de x latitudee um longitudevalor de y. Um valor adicional heightpode ser fornecido para definir um ponto tridimensional e pode ser criado passando uma tupla de valores para o WGS84Pointconstrutor ou passando os valores de x longitude, latitudey e heightz para a função `point` em Cypher.

Python
WGS84Ponto

Cópia
from neo4j.spatial import WGS84Point

ldn = WGS84Point((-0.118092, 51.509865))
print(ldn.longitude, ldn.latitude, ldn.srid) # -0.118092, 51.509865, 4326

shard = WGS84Point((-0.086500, 51.504501, 310))
print(shard.longitude, shard.latitude, shard.height, shard.srid) # -0.0865, 51.504501, 310, 4979

# Using destructuring
longitude, latitude, height = shard
O driver retornará WGS84Pointobjetos quando pointtipos de dados forem criados com latitudevalores longitudeem Cypher. Os valores podem ser acessados ​​usando os atributos longitude`id` latitudee ` heightvalue` ou desestruturando o ponto.

Python
Usando ponto()

Cópia
records, summary, keys = driver.execute_query("""
RETURN point({
    latitude: 51.5,
    longitude: -0.118,
    height: 100
}) AS point
""")

point = records[0]["point"]
longitude, latitude, height = point
Distância
A point.distancefunção pode ser usada para calcular a distância entre dois pontos com o mesmo SRID. O resultado representa floata distância em linha reta entre os dois pontos.

Os SRIDs devem ser compatíveis.

Se os valores de SRID forem diferentes, a função retornará None.

Python

Cópia
# Create two points
point1 = CartesianPoint((1, 1))
point2 = CartesianPoint((10, 10))

# Query the distance using Cypher
records, summary, keys = driver.execute_query("""
RETURN point.distance($p1, $p2) AS distance
""", p1=point1, p2=point2)

# Print the distance from the result
distance = records[0]["distance"]
print(distance)  # 12.727922061357855 










---





https://neo4j.com/docs/cypher-manual/current/values-and-types/spatial/





Spatial values
Cypher® has built-in support for handling spatial values (POINT values), which can be stored as properties on nodes and relationships in Neo4j databases.

This section begins with an explanation of the POINT type. It then proceeds to discuss Cypher’s support of Coordinate Reference Systems, and how to work with spatial instants in Cypher, including how spatial point instants work with Cypher indexing. Finally, it briefly explains comparability and orderability with regard to spatial instants.

For more information about spatial functions, allowing for the creation and manipulation of spatial values, see the section on Spatial functions.

For more information about the comparison and ordering of spatial values, see the section on Ordering spatial and temporal values.

The POINT type
Neo4j supports the POINT type for values of spatial geometry.

Values with the POINT type have the following characteristics:

Each point can have either 2 or 3 dimensions. This means it contains either 2 or 3 64-bit FLOAT values, which together are called the Coordinate.

Each point will also be associated with a specific Coordinate Reference System (CRS) that determines the meaning of the values in the Coordinate.

Instances of POINT and LIST<POINT> can be assigned to node and relationship properties.

Nodes and relationships with POINT or LIST<POINT> properties can be indexed using a point index. This is true for all CRSs (and for both 2D and 3D).

The distance function will work on points in all CRS and in both 2D and 3D, but only if the two points have the same CRS (and therefore also same dimension).

Coordinate Reference Systems
Four Coordinate Reference Systems (CRS) are supported, each of which falls within one of two types: geographic coordinates, modeling points on the earth, or Cartesian coordinates, modeling points in euclidean space:

Data within different coordinate systems are entirely incomparable, and cannot be implicitly converted from one to the other. This is true even if they are both Cartesian or both geographic but of a different dimension. For example, if you search for 3D points using a 2D range, you will get no results. However, they can be ordered, as discussed in more detail in the section about Ordering spatial and temporal values.

Geographic coordinate reference systems
Two Geographic Coordinate Reference Systems (CRS) are supported, modeling points on the earth:

WGS 84 2D

A 2D geographic point in the WGS 84 CRS is specified in one of two ways:

longitude and latitude (if these are specified, and the crs is not, then the crs is assumed to be WGS-84).

x and y (in this case the crs must be specified, or will be assumed to be Cartesian).

Specifying this CRS can be done using either the name 'wgs-84' or the SRID 4326 as described in point() - WGS 84 2D.

WGS 84 3D

A 3D geographic point in the WGS 84 CRS is specified one of in two ways:

longitude, latitude and either height or z (if these are specified, and the crs is not, then the crs is assumed to be WGS-84-3D).

x, y and z (in this case the crs must be specified, or will be assumed to be Cartesian-3D).

Specifying this CRS can be done using either the name 'wgs-84-3d' or the SRID 4979 as described in point() - WGS 84 3D.

Converting coordinate units
The units of the latitude and longitude fields are in decimal degrees, and need to be specified as floating point numbers using Cypher literals. It is not possible to use any other format, such as 'degrees, minutes, seconds'. The units of the height field are in meters. When geographic points are passed to the distance function, the result will always be in meters. If the coordinates are in any other format or unit than those supported, it is necessary to explicitly convert them.

For example, if the incoming $height is a STRING field in kilometers, it would be necessary to add height: toFloat($height) * 1000 to the query. Likewise if the results of the distance function are expected to be returned in kilometers, an explicit conversion is required. The below query is an example of this conversion:

Query

WITH
  point({latitude: toFloat('13.43'), longitude: toFloat('56.21')}) AS p1,
  point({latitude: toFloat('13.10'), longitude: toFloat('56.41')}) AS p2
RETURN toInteger(point.distance(p1, p2)/1000) AS km
Result
km
42

Rows: 1

Cartesian coordinate reference systems
Two Cartesian Coordinate Reference Systems (CRS) are supported, modeling points in euclidean space:

Cartesian 2D

A 2D point in the Cartesian CRS is specified with a map containing x and y coordinate values

Specifying this CRS can be done using either the name 'cartesian' or the SRID 7203 as described in point() - Cartesian 2D

Cartesian 3D

A 3D point in the Cartesian CRS is specified with a map containing x, y and z coordinate values

Specifying this CRS can be done using either the name 'cartesian-3d' or the SRID 9157 as described in point() - Cartesian 3D)

The units of the x, y, and z fields are unspecified. This means that when two Cartesian points are passed to the distance function, the resulting value will be in the same units as the original coordinates. This is true for both 2D and 3D points, as the Pythagoras equation used is generalized to any number of dimensions. However, just as you cannot compare geographic points to Cartesian points, you cannot calculate the distance between a 2D point and a 3D point. If you need to do that, explicitly transform the one type into the other. For example:

Query

WITH
  point({x: 3, y: 0}) AS p2d,
  point({x: 0, y: 4, z: 1}) AS p3d
RETURN
  point.distance(p2d, p3d) AS bad,
  point.distance(p2d, point({x: p3d.x, y: p3d.y})) AS good
Result
bad	good
<null>

5.0

Rows: 1

Spatial instants
All POINT types are created from two components:

The Coordinate containing either 2 or 3 FLOAT values (64-bit).

The Coordinate Reference System (or CRS) defining the meaning (and possibly units) of the values in the Coordinate.

For most use cases, it is not necessary to specify the CRS explicitly as it will be deduced from the keys used to specify the coordinate. Two rules are applied to deduce the CRS from the coordinate:

Choice of keys:

If the coordinate is specified using the keys latitude and longitude the CRS will be assumed to be Geographic and therefor either WGS-84 or WGS-84-3D.

If instead x and y are used, then the default CRS would be Cartesian or Cartesian-3D.

Number of dimensions:

If there are 2 dimensions in the coordinate, x & y or longitude & latitude the CRS will be a 2D CRS.

If there is a third dimensions in the coordinate, z or height the CRS will be a 3D CRS.

All fields are provided to the point function in the form of a map of explicitly named arguments. Neo4j does not support an ordered list of coordinate fields because of the contradictory conventions between geographic and cartesian coordinates, where geographic coordinates normally list y before x (latitude before longitude).

The following query which returns points created in each of the four supported CRSs. Take particular note of the order and keys of the coordinates in the original point function, and how those values are displayed in the results:

Query

RETURN
  point({x: 3, y: 0}) AS cartesian_2d,
  point({x: 0, y: 4, z: 1}) AS cartesian_3d,
  point({latitude: 12, longitude: 56}) AS geo_2d,
  point({latitude: 12, longitude: 56, height: 1000}) AS geo_3d
Result
cartesian_2d	cartesian_3d	geo_2d	geo_3d
point({srid:7203, x: 3.0, y: 0.0})

point({srid:9157, x: 0.0, y: 4.0, z: 1.0})

point({srid:4326, x: 56.0, y: 12.0})

point({rid:4979, x: 56.0, y: 12.0, z: 1000.0})

Rows: 1

For the geographic coordinates, it is important to note that the latitude value should always lie in the interval [-90, 90]. Any other value outside this range will throw an exception. The longitude value should always lie in the interval [-180, 180]. Any other value outside this range will be wrapped around to fit in this range. The height value and any Cartesian coordinates are not explicitly restricted. Any value within the allowed range of the signed 64-bit floating point type will be accepted.

Components of points
Components of POINT values can be accessed as properties.

Components of POINT instances and where they are supported
Component	Description	Type	Range/Format	WGS-84	WGS-84-3D	Cartesian	Cartesian-3D
instant.x

The first element of the Coordinate

FLOAT

Number literal, range depends on CRS





instant.y

The second element of the Coordinate

FLOAT

Number literal, range depends on CRS





instant.z

The third element of the Coordinate

FLOAT

Number literal, range depends on CRS



instant.longitude

The first element of the Coordinate for geographic CRSs, degrees East of the prime meridian

FLOAT

Number literal, -180.0 to 180.0



instant.latitude

The second element of the Coordinate for geographic CRS, degrees North of the equator

FLOAT

Number literal, -90.0 to 90.0



instant.height

The third element of the Coordinate for geographic CRSs, meters above the ellipsoid defined by the datum (WGS-84)

FLOAT

Number literal, range limited only by the underlying 64-bit floating point type


instant.crs

The name of the CRS

STRING

One of wgs-84, wgs-84-3d, cartesian, cartesian-3d





instant.srid

The internal Neo4j ID for the CRS

INTEGER

One of 4326, 4979, 7203, 9157





Examples
The following query shows how to extract the components of a Cartesian 2D POINT value:

Query

WITH point({x: 3, y: 4}) AS p
RETURN
  p.x AS x,
  p.y AS y,
  p.crs AS crs,
  p.srid AS srid
Result
x	y	crs	srid
3.0

4.0

"cartesian"

7203

Rows: 1

The following query shows how to extract the components of a WGS-84 3D POINT value:

Query

WITH point({latitude: 3, longitude: 4, height: 4321}) AS p
RETURN
  p.latitude AS latitude,
  p.longitude AS longitude,
  p.height AS height,
  p.x AS x,
  p.y AS y,
  p.z AS z,
  p.crs AS crs,
  p.srid AS srid
Result
latitude	longitude	height	x	y	z	crs	srid
3.0

4.0

4321.0

4.0

3.0

4321.0

"wgs-84-3d"

4979

Rows: 1

Spatial values and indexes
If there is a range or point index on a particular node or relationship property, and a spatial point is assigned to that property on a node or relationship, the node or relationship will be indexed.

In a point index, Neo4j uses space filling curves in 2D or 3D over an underlying generalized B+Tree. Point indexes are optimized for distance and bounding box queries. For more information, see Create indexes → Point indexes.

In a range index, the points will be sorted according to their lexicographic ordering per coordinate reference system. For point values, this index has support for equality checks. For more information, see Create indexes → Range indexes.

Comparability and orderability
Cypher does not support comparing spatial values using the inequality operators, <, <=, >, and >=. Attempting to do so will return null.

To compare spatial points within a specific range, instead use the spatial functions point.distance or point.withinBBox. 











---




Dica

O construtor WGS84Point recebe coordenadas na ordem: longitude, latitude, height. O parâmetro de altura é opcional, mas o transforma em um ponto 3D.

Criação de pontos 3D
Complete o código a seguir para criar um ponto 3D que represente o Burj Khalifa em Dubai.

Python
from neo4j.spatial import WGS84Point

longitude = 55.296233
latitude = 25.276987
height = 828

point = WGS84Point(
  
(longitude, latitude, height)

) 









---







Melhores práticas
Até agora, você aprendeu como se conectar ao Neo4j, executar consultas Cypher e lidar com os resultados retornados.

Neste módulo, você aprenderá tudo o que precisa saber para colocar sua aplicação em produção. Você descobrirá como gerenciar transações de forma eficaz, lidar com erros de maneira adequada e implementar as melhores práticas que garantem a robustez e o alto desempenho da sua aplicação.

Este módulo abrange:

Gerenciando transações de banco de dados para melhor desempenho.

Elaboração de transações eficientes para modificações de dados

Lidar com erros de forma adequada em aplicações de produção

Implementando as melhores práticas para aplicações Neo4j robustas.

Ao final deste módulo, você terá o conhecimento e a confiança necessários para implantar seu aplicativo Neo4j Python em produção. 





---



Lição
Gestão de transações
No módulo anterior, você aprendeu como executar instruções Cypher pontuais usando o execute_query() método.

A desvantagem desse método é que o conjunto completo de registros só fica disponível após o retorno do resultado final. Para consultas demoradas ou conjuntos de dados grandes, isso pode consumir muita memória e exigir uma longa espera pelo resultado final.

Em uma aplicação de produção, você também pode precisar de um controle mais preciso das transações do banco de dados ou executar várias consultas relacionadas como parte de uma única transação.

As funções de transação permitem executar várias consultas em uma única transação, com acesso imediato aos resultados.

Entendendo as Transações

O Neo4j é um banco de dados transacional compatível com ACID, o que significa que as consultas são executadas como parte de uma única transação atômica. Isso garante que suas operações de dados sejam consistentes e confiáveis.

Sessões
Para executar transações, é necessário abrir uma sessão. O objeto de sessão gerencia as conexões subjacentes ao banco de dados e fornece métodos para executar transações.

Python

Cópia
with driver.session() as session:
    # Call transaction functions here
Consumir uma sessão dentro de um bloco de código withfechará automaticamente a sessão e liberará quaisquer conexões subjacentes quando o bloco for encerrado.

Especificando um banco de dados

Em uma instância com vários bancos de dados, você pode especificar o banco de dados a ser usado ao criar uma sessão usando o databaseparâmetro.

Funções de transação
O objeto de sessão fornece dois métodos para gerenciar transações:

Session.execute_read()

Session.execute_write()

Se toda a função for executada com sucesso, a transação será confirmada automaticamente. Se ocorrerem erros, toda a transação será revertida.

Erros transitórios

Essas funções também tentarão novamente se a transação falhar devido a um erro transitório, por exemplo, um problema de rede.

Unidades de trabalho
Uma unidade de trabalho é um padrão que agrupa operações relacionadas em uma única transação.

Python

Cópia
def create_person(tx, name, age): # (1)
    result = tx.run("""
    CREATE (p:Person {name: $name, age: $age})
    RETURN p
    """, name=name, age=age) # (2)
O primeiro argumento da função de transação é sempre um ManagedTransactionobjeto. Quaisquer argumentos adicionais são passados ​​da chamada para Session.execute_read/ Session.execute_write.

O run()método no ManagedTransactionobjeto é chamado para executar uma instrução Cypher.

Múltiplas consultas em uma única transação
Você pode executar várias consultas dentro da mesma função de transação para garantir que todas as operações sejam concluídas ou falhem como uma única unidade.

Python

Cópia
def transfer_funds(tx, from_account, to_account, amount):
    # Deduct from first account
    tx.run(
        "MATCH (a:Account {id: $from_}) SET a.balance = a.balance - $amount",
        from_=from_account, amount=amount
    )

    # Add to second account
    tx.run(
        "MATCH (a:Account {id: $to}) SET a.balance = a.balance + $amount",
        to=to_account, amount=amount
    )
Estado da transação
Estado da transação

O estado da transação é mantido na memória do SGBD, portanto, tenha cuidado ao executar muitas operações em uma única transação. Divida operações muito grandes em transações menores sempre que possível.

Tratamento de saídas
O ManagedTransaction.run()método retorna um Resultobjeto.

Os registros contidos no resultado serão iterados assim que estiverem disponíveis.

O resultado deve ser consumido dentro da função de transação.

O consume()método descarta quaisquer registros restantes e retorna um Summaryobjeto que pode ser usado para acessar metadados sobre a instrução Cypher.

A função Session.execute_read/ Session.execute_writeretornará o resultado da função de transação após a execução bem-sucedida.

Python
Consumindo resultados

Cópia
with driver.session() as session:
    def get_answer(tx, answer):
        result = tx.run("RETURN $answer AS answer", answer=answer)

        return result.consume()

    # Call the transaction function
    summary = session.execute_read(get_answer, answer=42)

    
    # Output the summary
    print(
        "Results available after", summary.result_available_after,
        "ms and consumed after", summary.result_consumed_after, "ms"
    )







---







Leia as transações
Selecione a função correta para executar a instrução Cypher em uma transação de leitura e transmitir os resultados para o cliente assim que estiverem disponíveis.

Python
from api import send_to_ui


with driver.session() as session:
    res = session.
execute_read(

        get_cheapest_flights,
        date="2024-01-01",
        origin="LAX",
        destination="SFO"
    )

    for row in res:
        send_to_ui(row)







---









Lição
Tratamento de erros de banco de dados
Ao trabalhar com o Neo4j, você pode encontrar vários erros de banco de dados que precisam ser tratados adequadamente em sua aplicação. O driver exporta uma Neo4jErrorclasse que é herdada por todas as exceções lançadas pelo banco de dados. Exceções relacionadas ao driver e à sua conexão são subclasses de DriverError.

CypherSyntaxError- Gerado quando a sintaxe Cypher é inválida.

ConstraintError- Gerado quando uma restrição, seja ela única ou de outra natureza, é violada.

AuthError- Acionado quando a autenticação falha

TransientError- Gerado quando o banco de dados não está acessível

Tratamento de erros
Quaisquer erros gerados pelo SGBD ( Neo4jError) terão codepropriedades messageque descrevem o erro.

Python

Cópia
from neo4j.exceptions import Neo4jError

try:
    # Run a Cypher statement
except Neo4jError as e:
    print(e.code)
    print(e.message)
    print(e.gql_status)
A gql_statuspropriedade contém um código de erro que corresponde a um erro na norma ISO GQL.

Uma lista completa dos códigos de erro pode ser encontrada em Códigos de Status para Erros e Notificações .

Exemplo: Tratamento de violações de restrições de unicidade
Um cenário comum é lidar com violações de restrições ao inserir dados. Uma restrição de unicidade garante que o valor de uma propriedade seja único em todos os nós com um rótulo específico.

A seguinte instrução Cypher cria uma restrição única chamada unique_emailpara garantir que a emailpropriedade seja única para o Userrótulo:

cifra

Cópia

Correr
CREATE CONSTRAINT unique_email IF NOT EXISTS
FOR (u:User) REQUIRE u.email IS UNIQUE
Se uma instrução Cypher violar essa restrição, o Neo4j lançará uma exceção ConstraintError.

Aqui está um exemplo de como lidar com uma violação de restrição de unicidade ao criar um novo usuário:

Python

Cópia
from neo4j.exceptions import ConstraintError

def create_user(tx, name, email):
    try:
        result = tx.run("""
            CREATE (u:User {name: $name, email: $email})
            RETURN u
        """, name=name, email=email)

    except ConstraintError as e:
        print(e.code)
        # Neo.ClientError.Schema.ConstraintValidationFailed
        print(e.message)
        # The value [email] for property [email] violates the constraint [unique_email]
        print(e.gql_status) # 22N41








Quiz
Funções de transação
Você criou um aplicativo que transmite os resultados de uma instrução Cypher de longa duração para o cliente.

Você escreveu uma função de transação chamada get_cheapest_flightspara executar uma consulta de leitura dentro de uma transação.

Veja a get_cheapest_flightsfunção
Em seguida, o aplicativo utiliza uma função externa chamada send_to_uipara enviar os resultados ao cliente.

Leia as transações
Selecione a função correta para executar a instrução Cypher em uma transação de leitura e transmitir os resultados para o cliente assim que estiverem disponíveis.

Python
from api import send_to_ui


with driver.session() as session:
    res = session.

        get_cheapest_flights,
        date="2024-01-01",
        origin="LAX",
        destination="SFO"
    )

    for row in res:
         send_to_ui(row)








def get_cheapest_flights(tx, date, origin, destination):
    """
    Return the cheapest flights between the origin and
    destination airports on a given date.
    """
    result = tx.run("""
        MATCH (origin:Airport)<-[:ORIGIN]-(f:Flight)-[:DESTINATION]->(destination:Airport),
            (f)-[:OPERATED_BY]->(operator:Airline)
        WHERE origin.name = $origin AND destination.name = $destination AND f.date = $date
        RETURN f.price AS price, operator.name AS operator
    """, date=date, origin=origin, destination=destination)
    return result.values()





   ---



Lição
Tratamento de erros de banco de dados
Ao trabalhar com o Neo4j, você pode encontrar vários erros de banco de dados que precisam ser tratados adequadamente em sua aplicação. O driver exporta uma Neo4jErrorclasse que é herdada por todas as exceções lançadas pelo banco de dados. Exceções relacionadas ao driver e à sua conexão são subclasses de DriverError.

CypherSyntaxError- Gerado quando a sintaxe Cypher é inválida.

ConstraintError- Gerado quando uma restrição, seja ela única ou de outra natureza, é violada.

AuthError- Acionado quando a autenticação falha

TransientError- Gerado quando o banco de dados não está acessível

Tratamento de erros
Quaisquer erros gerados pelo SGBD ( Neo4jError) terão codepropriedades messageque descrevem o erro.

Python

Cópia
from neo4j.exceptions import Neo4jError

try:
    # Run a Cypher statement
except Neo4jError as e:
    print(e.code)
    print(e.message)
    print(e.gql_status)
A gql_statuspropriedade contém um código de erro que corresponde a um erro na norma ISO GQL.

Uma lista completa dos códigos de erro pode ser encontrada em Códigos de Status para Erros e Notificações .

Exemplo: Tratamento de violações de restrições de unicidade
Um cenário comum é lidar com violações de restrições ao inserir dados. Uma restrição de unicidade garante que o valor de uma propriedade seja único em todos os nós com um rótulo específico.

A seguinte instrução Cypher cria uma restrição única chamada unique_emailpara garantir que a emailpropriedade seja única para o Userrótulo:

cifra

Cópia

Correr
CREATE CONSTRAINT unique_email IF NOT EXISTS
FOR (u:User) REQUIRE u.email IS UNIQUE
Se uma instrução Cypher violar essa restrição, o Neo4j lançará uma exceção ConstraintError.

Aqui está um exemplo de como lidar com uma violação de restrição de unicidade ao criar um novo usuário:

Python

Cópia
from neo4j.exceptions import ConstraintError

def create_user(tx, name, email):
    try:
        result = tx.run("""
            CREATE (u:User {name: $name, email: $email})
            RETURN u
        """, name=name, email=email)

    except ConstraintError as e:
        print(e.code)
        # Neo.ClientError.Schema.ConstraintValidationFailed
        print(e.message)
        # The value [email] for property [email] violates the constraint [unique_email]
        print(e.gql_status) # 22N41









---






Quiz
Tratamento de erros
Vamos praticar o tratamento de erros em um cenário do mundo real.

Você criou um aplicativo que inclui um formulário de cadastro para novos usuários. Como parte da configuração, você adicionou uma restrição de unicidade à emailpropriedade do Userrótulo.

cifra
Criar uma restrição única

Cópia

Correr
CREATE CONSTRAINT unique_email IF NOT EXISTS
FOR (u:User) REQUIRE u.email IS UNIQUE 





Seu aplicativo inclui uma função create_userque cria um novo usuário no banco de dados. Ela não verifica se já existem usuários com o mesmo endereço de e-mail e, em vez disso, depende do banco de dados para impor a restrição.

Lidar com o erro de restrição
Selecione a função correta para lidar com o erro de restrição.

Python
from neo4j.exceptions import ConstraintError

def add_user(tx, name, email):
    try:
        result = tx.run(
            "CREATE (u:User {name: $name, email: $email}) RETURN u",
            name=name, email=email
        )
        return {"success": True, "message": "User created successfully"}
    
except ConstraintError as e

        return {"success": False, "message": f"Email {email} already exists"}



---





Build applications with Neo4j and Python
The Neo4j Python driver is the official library to interact with a Neo4j instance through a Python application.

At the hearth of Neo4j lies Cypher, the query language to interact with a Neo4j database. Although this guide does not require you to be a seasoned Cypher querier, it’s easier to focus on the Python-specific bits if you know some Cypher already. You will also get a gentle introduction to Cypher in these pages, but check out Getting started → Cypher for a more detailed walkthrough of graph databases modelling and querying if this is your first approach.

Install
Install the Neo4j Python driver with pip:

pip install neo4j
More info on installing the driver

Connect to the database
Connect to a database by creating a Driver object and providing a URL and an authentication token. Once you have a Driver instance, use the .verify_connectivity() method to ensure that a working connection can be established.

from neo4j import GraphDatabase

# URI examples: "neo4j://localhost", "neo4j+s://xxx.databases.neo4j.io"
URI = "<database-uri>"
AUTH = ("<username>", "<password>")

with GraphDatabase.driver(URI, auth=AUTH) as driver:
    driver.verify_connectivity()
More info on connecting to a database

Create an example graph
Run a Cypher query with the method Driver.execute_query(). Do not hardcode or concatenate parameters: use placeholders and specify the parameters as keyword arguments.

Create two Person nodes and a KNOWS relationship between them

summary = driver.execute_query("""
    CREATE (a:Person {name: $name})
    CREATE (b:Person {name: $friendName})
    CREATE (a)-[:KNOWS]->(b)
    """,
    name="Alice", friendName="David",
    database_="<database-name>",
).summary
print("Created {nodes_created} nodes in {time} ms.".format(
    nodes_created=summary.counters.nodes_created,
    time=summary.result_available_after
))
More info on querying the database

Query a graph
To retrieve information from the database, use the Cypher clause MATCH:

Retrieve all Person nodes who know other persons

records, summary, keys = driver.execute_query("""
    MATCH (p:Person)-[:KNOWS]->(:Person)
    RETURN p.name AS name
    """,
    database_="<database-name>",
)

# Loop through results and do something with them
for record in records:
    print(record.data())  # obtain record as dict

# Summary information
print("The query `{query}` returned {records_count} records in {time} ms.".format(
    query=summary.query, records_count=len(records),
    time=summary.result_available_after
))
More info on querying the database

Close connections and sessions
Unless you created them using the with statement, call the .close() method on all Driver and Session instances to release any resources still held by them.

from neo4j import GraphDatabase


driver = GraphDatabase.driver(URI, auth=AUTH)
session = driver.session(database="<database-name>")

# session/driver usage

session.close()
driver.close() 







---





Parabéns por concluir o curso " Usando Neo4j com Python"!

Esperamos que o curso tenha sido útil e que agora você se sinta mais confiante ao usar o Neo4j.











   



























    






  

  






Fundamentos de Cypher 
Leitura de dados do Neo4j

Sérgio
Fundamentos de Cifra

Leitura de dados do Neo4j
Introdução à Criptografia
Recuperando nós
Encontrando relacionamentos
Atravessando Relacionamentos
Encontrando Emil
Filtrar consultas
Identificando atores específicos
Gravação de dados no Neo4j
Criando nós
Criando um nó
Criando relacionamentos
Criando um relacionamento
Atualizando propriedades
Adicionando propriedades a um filme
Processamento de mesclagem
Adicionar ou atualizar um filme
Exclusão de dados
Excluindo Emil
 



Powered by Google TradutorTradutor


Leitura de dados do Neo4j
Neste módulo, você aprenderá como escrever código Cypher para recuperar dados do grafo.

O que você aprenderá
Você aprenderá como:

Recuperar nós do grafo.

Recuperar nós com um rótulo específico.

Filtre os resultados por um valor de propriedade.

Retornar valores de propriedade.

Recupere nós e relacionamentos do grafo usando padrões presentes nele.

Consultas de filtro

Usando o conjunto de dados de exemplo "Filmes", você criará e executará código Cypher para encontrar atores e filmes em nosso grafo.

Modelo de domínio para este curso
Aqui está o modelo de dados usado neste curso. O grafo contém nós com os rótulos Pessoa e Filme . Os nós Pessoa têm vários tipos de relacionamentos com os nós Filme . Um nó Pessoa pode ter um relacionamento SEGUE com outro nó Pessoa .

imagem-esquema-de-filme
Preparados? Vamos lá →

5%
Introdução à Criptografia







--- 


Este é mais um desafio divertido do curso oficial da Neo4j GraphAcademy! Vamos resolver o código Cypher e apontar qual é a resposta correta para o questionário.

---

### Parte 1: Atualizando a Consulta Cypher

Para descobrir em qual filme o Emil Eifrem (co-fundador e CEO da Neo4j) foi inserido como ator, precisamos filtrar a propriedade `name` (nome) do nó `Person`.

Existem duas maneiras corretas de fazer isso no Cypher:

**Opção A (Inserindo a propriedade direto no nó do MATCH):**

```cypher
MATCH (p:Person {name: "Emil Eifrem"})-[:ACTED_IN]->(m:Movie)
RETURN m.title

```

**Opção B (Utilizando a cláusula WHERE):**

```cypher
MATCH (p:Person)-[:ACTED_IN]->(m:Movie)
WHERE p.name = "Emil Eifrem"
RETURN m.title

```

Ambas as consultas vão filtrar o gráfico para trazer exclusivamente o título do filme que contém a participação dele.

---

### Parte 2: Título do Filme (Resposta Correta)

No banco de dados de exemplo da Neo4j, o Emil incluiu a si mesmo como ator convidado no seu filme favorito.

A resposta correta para selecionar é:

* **✓ Matrix** *(The Matrix)*

Selecione a opção **Matrix** para concluir o desafio com sucesso! 


---



Fundamentos de Cypher › Leitura de dados do Neo4j
Filtrar consultas

Sérgio
Fundamentos de Cifra

Leitura de dados do Neo4j
Introdução à Criptografia
Recuperando nós
Encontrando relacionamentos
Atravessando Relacionamentos
Encontrando Emil
Filtrar consultas
Identificando atores específicos
Gravação de dados no Neo4j
Criando nós
Criando um nó
Criando relacionamentos
Criando um relacionamento
Atualizando propriedades
Adicionando propriedades a um filme
Processamento de mesclagem
Adicionar ou atualizar um filme
Exclusão de dados
Excluindo Emil

Português (Brasil)
Powered by Google TradutorTradutor
Vídeo
Filtrar consultas
AssistirLer
Filtrar por rótulos de nós
Você já viu esse tipo de consulta. Ela retorna os nomes de todas as pessoas que atuaram no filme Matrix .

cifra

Cópia

Correr
MATCH (p:Person)-[:ACTED_IN]->(m:Movie)
WHERE m.title='The Matrix'
RETURN p.name
Uma alternativa a esta consulta é a seguinte, onde testamos os rótulos dos nós na WHEREcláusula:

cifra

Cópia

Correr
MATCH (p)-[:ACTED_IN]->(m)
WHERE p:Person AND m:Movie AND m.title='The Matrix'
RETURN p.name
Ambas as consultas são executadas da mesma forma, mas você pode preferir usar um estilo de filtragem em vez de outro no seu código.

Filtragem usando intervalos
Você pode especificar um intervalo para filtrar uma consulta. Aqui, queremos recuperar os nós da classe Pessoa que representaram pessoas que atuaram em filmes lançados entre 2000 e 2003 :

cifra

Cópia

Correr
MATCH (p:Person)-[:ACTED_IN]->(m:Movie)
WHERE 2000 <= m.released <= 2003
RETURN p.name, m.title, m.released
Filtrar pela existência de uma propriedade
Lembre-se de que, por padrão, não há exigência de que um nó ou relacionamento possua uma determinada propriedade. Aqui está um exemplo de consulta em que queremos retornar apenas os nós do tipo "Filme" em que Jack Nicholson atuou e o filme possui a propriedade "slogan" .

cifra

Cópia

Correr
MATCH (p:Person)-[:ACTED_IN]->(m:Movie)
WHERE p.name='Jack Nicholson' AND m.tagline IS NOT NULL
RETURN m.title, m.tagline
Filtrar por strings parciais
O Cypher possui um conjunto de palavras-chave relacionadas a strings que você pode usar em suas WHEREcláusulas para testar valores de propriedades de string. Você pode especificar STARTS WITH, ENDS WITH, e CONTAINS.

Por exemplo, para encontrar todos os atores no grafo cujo primeiro nome seja Michael , você escreveria:

cifra

Cópia

Correr
MATCH (p:Person)-[:ACTED_IN]->()
WHERE p.name STARTS WITH 'Michael'
RETURN p.name
Os testes de string diferenciam maiúsculas de minúsculas, portanto, você pode precisar usar as funções toLower()`or` toUpper()para garantir que o teste produza os resultados corretos. Por exemplo:

cifra

Cópia

Correr
MATCH (p:Person)-[:ACTED_IN]->()
WHERE toLower(p.name) STARTS WITH 'michael'
RETURN p.name
Filtrar por padrões no gráfico
Suponha que você queira encontrar todas as pessoas que escreveram um filme, mas não o dirigiram. Veja como você faria a consulta:

cifra

Cópia

Correr
MATCH (p:Person)-[:WROTE]->(m:Movie)
WHERE NOT exists( (p)-[:DIRECTED]->(m) )
RETURN p.name, m.title
Filtrar usando listas
Se você tiver um conjunto de valores que deseja testar, pode colocá-los em uma lista ou testar com uma lista existente no grafo. Uma lista Cypher é um conjunto de valores separados por vírgulas e delimitados por colchetes.

Você pode definir a lista na WHEREcláusula. Durante a consulta, o mecanismo gráfico comparará cada propriedade com os valores INda lista.

Neste exemplo, queremos recuperar apenas os nós de Pessoa das pessoas nascidas em 1965 , 1970 ou 1975 :

cifra

Cópia

Correr
MATCH (p:Person)
WHERE p.born IN [1965, 1970, 1975]
RETURN p.name, p.born
Filtrar com listas existentes no gráfico
Você também pode comparar um valor a uma lista existente no gráfico.

Sabemos que o relacionamento `:ACTED_IN` possui uma propriedade, `roles`, que contém a lista de papéis que um ator desempenhou em um determinado filme em que atuou. Aqui está a consulta que escrevemos para retornar o nome do ator que interpretou Neo no filme Matrix :

cifra

Cópia

Correr
MATCH (p:Person)-[r:ACTED_IN]->(m:Movie)
WHERE  'Neo' IN r.roles AND m.title='The Matrix'
RETURN p.name, r.roles
Quais propriedades um nó ou relacionamento possui?
As propriedades de um nó com um determinado rótulo não precisam ser as mesmas. Uma maneira de descobrir as propriedades de um nó é usar a keys()função. Essa função retorna uma lista de todas as chaves de propriedade de um nó.

Descubra as chaves dos nós de Pessoa no grafo executando este código:

cifra

Cópia

Correr
MATCH (p:Person)
RETURN p.name, keys(p)
Os resultados retornados para cada linha incluem o nome da pessoa, seguido pela lista de chaves de propriedade para esse nó. Se você rolar para baixo no painel de resultados, notará que alguns nós de Pessoa não possuem uma propriedade "nascido".

Que propriedades existem no grafo?
De forma mais geral, você pode executar este código para retornar todas as chaves de propriedade definidas no grafo.

cifra

Cópia

Correr
CALL db.propertyKeys()
Note que uma chave de propriedade permanece no grafo, uma vez definida, mesmo que atualmente não existam nós ou relacionamentos que utilizem essa chave de propriedade.

Verifique se você entendeu.
1. Filtrar um valor em uma lista
Suponha que você queira recuperar todos os filmes que tenham um valor de propriedade ` released` igual a 2000, 2002, 2004, 2006 ou 2008. Aqui está um exemplo incompleto em Cypher para retornar os valores da propriedade `title` de todos os filmes lançados nesses anos. Qual palavra-chave você especificaria na WHEREcláusula?

Após selecionar a opção desejada, clique no botão "Verificar resultados" para continuar.

cifra
MATCH (m:Movie)
WHERE m.released 
 [2000, 2002, 2004, 2006, 2008]
RETURN m.title
2. Encontrar pessoas nascidas na década de setenta.
Desejamos escrever uma MATCHcláusula para recuperar todos os nós da classe Pessoa referentes a pessoas nascidas entre os anos de 1970 e 1979.

Cláusula "SELECT ALL" WHERE que filtrará esta consulta corretamente:

cifra
MATCH (a:Person)
// WHERE clause
RETURN a.name, a.born
 WHERE a.born >= 1970 AND a.born < 1980
 WHERE 1970 <= a.born < 1980
 WHERE a.born = 1970 OR a.born = 1979
 WHERE a.born IN [1970,1971,1972,1973,1974,1975,1976,1977,1978,1979]
Confira as respostas
35%
Encontrando Emil
Identificando atores específicos
Esta lição foi útil?SimNão



https://graphacademy.neo4j.com/courses/cypher-fundamentals/1-reading/6-filtering-queries/
---




Fundamentos de Cypher ›
Gravação de dados no Neo4j

Sérgio
Fundamentos de Cifra

Leitura de dados do Neo4j
Introdução à Criptografia
Recuperando nós
Encontrando relacionamentos
Atravessando Relacionamentos
Encontrando Emil
Filtrar consultas
Identificando atores específicos
Gravação de dados no Neo4j
Criando nós
Criando um nó
Criando relacionamentos
Criando um relacionamento
Atualizando propriedades
Adicionando propriedades a um filme
Processamento de mesclagem
Adicionar ou atualizar um filme
Exclusão de dados
Excluindo Emil

Português (Brasil)
Powered by Google TradutorTradutor
Gravação de dados no Neo4j
Neste módulo, você aprenderá como atualizar o grafo usando Cypher e o conjunto de dados de exemplo "Movies".

O que você aprenderá
Você aprenderá a:

Utilize MERGEpara criar nós no gráfico.

Utilize MERGEpara criar relações no gráfico.

Criar, atualizar e remover propriedades de nós e relacionamentos no grafo.

Realizar processamento condicional MERGE, dependendo do que estiver presente no grafo.

Exclua nós e relacionamentos do grafo.

Modelo de domínio para este curso
Aqui está novamente o modelo de domínio e como ele é representado em nosso gráfico:

Gráfico de filmes
Preparados? Vamos lá →

45%
Identificando atores específicos
Criando nós



Texto original
In this module you will learn how to update the graph using Cypher and the Movies example dataset.
Avalie a tradução
O feedback vai ser usado para ajudar a melhorar o Google Tradutor 



---


Fundamentos de Cypher › Gravação de dados no Neo4j
Adicionar ou atualizar um filme

Sérgio
Fundamentos de Cifra

Leitura de dados do Neo4j
Introdução à Criptografia
Recuperando nós
Encontrando relacionamentos
Atravessando Relacionamentos
Encontrando Emil
Filtrar consultas
Identificando atores específicos
Gravação de dados no Neo4j
Criando nós
Criando um nó
Criando relacionamentos
Criando um relacionamento
Atualizando propriedades
Adicionando propriedades a um filme
Processamento de mesclagem
Adicionar ou atualizar um filme
Exclusão de dados
Excluindo Emil

Português (Brasil)
Powered by Google TradutorTradutor
Desafio
Adicionar ou atualizar um filme
Neste desafio, você usará as cláusulas ` ON MATCHand` ON CREATEpara adicionar a data e a hora em que os nós são criados e atualizados.

Sua tarefa é criar um script Cypher que adicione createdAte updatedAtaos Movienós:

A createdAtpropriedade deve ser definida com a data e hora atuais no momento da criação do nó.

Se o nó já existir, a updatedAtpropriedade deverá ser definida.

Atualize esta declaração Cypher, substituindo a ????vírgula para usarON CREATEeON MATCHcláusulas para definir ocreatedAteupdatedAtpropriedades.

cifra

Cópia

Correr
MERGE (m:Movie {title: 'Rocketman'})
ON ????? SET m.????? = datetime()
ON ????? SET m.????? = datetime()
SET m.tagline = "The Only Way to Tell His Story is to live His Fantasy.",
    m.released = 2019
RETURN m
Na primeira vez que você executar o código, a createdAtpropriedade deverá estar definida. Na segunda vez, a updatedAtpropriedade também deverá estar definida.

Você pode verificar se os valores foram definidos corretamente executando a seguinte consulta:

cifra

Cópia

Correr
MATCH (m:Movie {title: 'Rocketman'})
RETURN m.title, m.createdAt, m.updatedAt
Validar resultados
Após executar a instrução MERGE duas vezes, clique no botão Verificar Banco de Dados e nós verificaremos o banco de dados para você.

Tente novamente...
Ops!
Parece que você não passou no teste. Por favor, verifique suas respostas e tente novamente. Se estiver com dificuldades, clique no botão "Mostrar Dica" .

Deveria haver um nó de Filme com o título 'Rocketman'.
O nó deve ter uma propriedade createdAt.
O nó deve ter uma propriedade updatedAt.
Redefinir banco de dados
85%
Processamento de mesclagem
Exclusão de dados
Esta página foi útil?SimNão

Você concluiu esta lição com sucesso!
Solução

A consulta a seguir usa uma MERGEcláusula para encontrar ou criar um :Movienó com o título Rocketman .

Ao ser criada inicialmente, a createdAtpropriedade será definida, mas updatedAtestará nula.

Se o nó já existir, a createdAtpropriedade não será definida, mas uma updatedAtpropriedade será definida.

cifra

Cópia

Correr
MERGE (m:Movie {title: 'Rocketman'})
ON CREATE SET m.createdAt = datetime()
ON MATCH SET m.updatedAt = datetime()
SET m.tagline = "The Only Way to Tell His Story is to live His Fantasy.",
    m.released = 2019
RETURN m
Você precisará executar essa consulta duas vezes para visualizar as createdAt and `updatedAtpropriedades.

Neste desafio, você demonstrou como adicionar ou atualizar propriedades quando um nó é criado ou encontrado no grafo. Na próxima lição, você aprenderá como excluir nós e relacionamentos do grafo.

Advance in
4
→

Consulta

















---
Neo4J Casos de uso
https://neo4j.com/use-cases/



---

Fundamentos do Neo4j ›
Pensamento gráfico

Sérgio
Fundamentos do Neo4j

Pensamento gráfico
O que é Neo4j?
Pensando em Gráficos
Gráficos estão por toda parte
Crie seu próprio modelo de dados em grafo
(Opcional)
Consultando Grafos
Leitura de gráficos
Reconhecimento de padrões
Criação de gráficos
Consultando seu modelo de dados
(Opcional)
Explorando o Neo4j
Obtenha o Neo4j
Ferramentas Neo4j
Parabéns e próximos passos

Português (Brasil)
Powered by Google TradutorTradutor

---


Pensamento gráfico
Bem-vindo(a) aos Fundamentos do Neo4j. Este é o seu ponto de partida para aprender sobre o Neo4j e bancos de dados de grafos.

Visão geral do módulo
Neste módulo, você aprenderá:

O que é o Neo4j e um banco de dados de grafos.

Os elementos de um banco de dados gráfico Neo4j.

As vantagens de usar um banco de dados gráfico.

Como os grafos resolvem problemas do mundo real.

Preparados? Vamos lá →

7%
O que é Neo4j?

---


https://en.wikipedia.org/wiki/Seven_Bridges_of_K%C3%B6nigsberg


WikipédiaA Enciclopédia Livre
Pesquisar na Wikipédia

Procurar
Doar
Criar uma conta
Conecte-se
Conteúdo esconder
(Principal)
Contexto e declaração do problema
Análise de Euler
Significado na história e filosofia da matemática
Estado atual das pontes
Veja também
Referências
Links externos
As Sete Pontes de Königsberg

Artigo
Falar
Ler
Editar
Ver histórico

Ferramentas
Aparência esconder
Texto

Pequeno

Padrão

Grande
Largura

Padrão

Largo
Cor

Automático

Luz

Escuro
Da Wikipédia, a enciclopédia livre

Mapa de Königsberg na época de Euler, mostrando a disposição real das sete pontes, com destaque para o rio Pregel e as próprias pontes.
As Sete Pontes de Königsberg são um enigma histórico que propõe um passeio a pé pelas pontes da cidade de Königsberg (atual Kaliningrado, na Rússia), formando um circuito que termina onde começou. Sua formalização matemática e prova de impossibilidade por Leonhard Euler , em 1736, [ 1 ] lançaram as bases da teoria dos grafos e anteciparam a ideia de topologia . [ 2 ]

Contexto e declaração do problema
A cidade de Königsberg, na Prússia (atual Kaliningrado , Rússia ), situava-se em ambas as margens do rio Pregel e incluía duas grandes ilhas — Kneiphof e Lomse — que eram interligadas entre si e às duas partes continentais da cidade — Altstadt e Vorstadt — por sete pontes. O desafio era criar um percurso a pé pela cidade que cruzasse cada uma dessas pontes apenas uma vez.

Para especificar a tarefa lógica de forma inequívoca, soluções que envolvam qualquer um dos seguintes elementos:

alcançar uma ilha ou margem continental por um meio que não seja uma das pontes, ou
acessar qualquer ponte sem atravessá-la até sua outra extremidade.
são explicitamente inaceitáveis.

Euler provou que o problema não tem solução. A dificuldade que enfrentou foi o desenvolvimento de uma técnica de análise adequada e de testes subsequentes que estabelecessem essa afirmação com rigor matemático.

Análise de Euler
Euler foi o primeiro a apontar que a escolha da rota dentro de cada massa de terra é irrelevante e que a única característica importante de uma rota é a sequência de pontes atravessadas. Isso permitiu que ele reformulasse o problema em termos abstratos (lançando as bases da teoria dos grafos ), eliminando todas as características, exceto a lista de massas de terra e as pontes que as conectam. Em termos modernos, substitui-se cada massa de terra por um " vértice " ou nó abstrato, e cada ponte por uma conexão abstrata, uma " aresta ", que serve apenas para registrar qual par de vértices (massas de terra) está conectado por aquela ponte. A estrutura matemática resultante é um grafo .

→ → 

Como apenas as informações de conexão são relevantes, a forma das representações pictóricas de um grafo pode ser distorcida de qualquer maneira, sem alterar o próprio grafo. Apenas o número de arestas (possivelmente zero) entre cada par de nós é significativo. Não importa, por exemplo, se as arestas desenhadas são retas ou curvas, ou se um nó está à esquerda ou à direita de outro.

Em seguida, Euler observou que (exceto nos pontos finais do percurso), sempre que se entra em um vértice por uma ponte, sai-se do vértice também por uma ponte. Em outras palavras, durante qualquer percurso no grafo, o número de vezes que se entra em um vértice não terminal é igual ao número de vezes que se sai dele. Ora, se cada ponte foi percorrida exatamente uma vez, segue-se que, para cada massa de terra (exceto as escolhidas para início e fim), o número de pontes que tocam essa massa de terra deve ser par (metade delas, no percurso específico, será percorrida "em direção" à massa de terra; a outra metade, "na direção oposta"). Contudo, todas as quatro massas de terra no problema original são tocadas por um número ímpar de pontes (uma é tocada por 5 pontes e cada uma das outras três é tocada por 3). Visto que, no máximo, duas massas de terra podem servir como pontos finais de um percurso, a proposição de um percurso que atravessa cada ponte uma vez leva a uma contradição.

Em linguagem moderna, Euler demonstra que a possibilidade de um percurso em um grafo, atravessando cada aresta exatamente uma vez, depende dos graus dos nós. O grau de um nó é o número de arestas que o tocam. O argumento de Euler mostra que uma condição necessária para o percurso na forma desejada é que o grafo seja conexo e tenha exatamente zero ou dois nós de grau ímpar. Essa condição também se mostra suficiente — um resultado enunciado por Euler e posteriormente provado por Carl Hierholzer . Tal percurso é agora chamado de trilha euleriana ou caminhada euleriana em sua homenagem. Além disso, se houver nós de grau ímpar, qualquer caminho euleriano começará em um deles e terminará no outro. Como o grafo correspondente ao grafo histórico de Königsberg possui quatro nós de grau ímpar, ele não pode ter um caminho euleriano.

Uma forma alternativa do problema pede um caminho que atravesse todas as pontes e que também tenha o mesmo ponto de partida e de chegada. Tal percurso é chamado de circuito euleriano ou ciclo euleriano . Um circuito desse tipo existe se, e somente se, o grafo for conexo e todos os nós tiverem grau par. Todos os circuitos eulerianos são também caminhos eulerianos, mas nem todos os caminhos eulerianos são circuitos eulerianos.

O trabalho de Euler foi apresentado à Academia de São Petersburgo em 26 de agosto de 1735 e publicado como Solutio problematis ad geometriam situs pertinentis (A solução de um problema relacionado à geometria da posição) no periódico Commentarii academiae scientiarum Petropolitanae em 1741. [ 3 ] Está disponível em tradução para o inglês em The World of Mathematics de James R. Newman .

Significado na história e filosofia da matemática
Na história da matemática , a solução de Euler para o problema da ponte de Königsberg é considerada o primeiro teorema da teoria dos grafos e a primeira prova verdadeira na teoria das redes , [ 4 ] um assunto agora geralmente considerado como um ramo da combinatória . Problemas combinatórios de outros tipos, como a enumeração de permutações e combinações, foram considerados desde a antiguidade.

O reconhecimento por Euler de que a informação essencial era o número de pontes e a lista de seus pontos finais (e não suas posições exatas) prenunciou o desenvolvimento da topologia . A diferença entre o layout real e o esquema do grafo é um bom exemplo da ideia de que a topologia não se preocupa com a forma rígida dos objetos.

Portanto, como Euler reconheceu, a "geometria da posição" não se refere a "medições e cálculos", mas a algo mais geral. Isso colocou em questão a visão aristotélica tradicional de que a matemática é a "ciência da quantidade ". Embora essa visão se encaixe na aritmética e na geometria euclidiana, ela não se encaixa na topologia e nas características estruturais mais abstratas estudadas na matemática moderna. [ 5 ]

Os filósofos observaram que a prova de Euler não se refere a uma abstração ou a um modelo da realidade, mas sim diretamente à disposição real das pontes. Portanto, a certeza da prova matemática pode ser aplicada diretamente à realidade. [ 6 ] A prova também é explicativa, fornecendo informações sobre por que o resultado deve ser verdadeiro. [ 7 ]

Estado atual das pontes

Mapa moderno de Kaliningrado. A localização das pontes restantes está destacada em verde, enquanto as destruídas estão destacadas em vermelho.

Nesta imagem da Catedral de Königsberg , a ponte à direita é uma das duas pontes remanescentes da época de Euler.
Duas das sete pontes originais não sobreviveram ao bombardeio de Königsberg na Segunda Guerra Mundial . Outras duas foram posteriormente demolidas e substituídas por uma rodovia. As outras três pontes permanecem, embora apenas duas delas sejam da época de Euler (uma foi reconstruída em 1935). [ 8 ] Essas mudanças deixam cinco pontes existentes nos mesmos locais que estavam envolvidos no problema de Euler. Em termos de teoria dos grafos, dois dos nós agora têm grau 2 e os outros dois têm grau 3. Portanto, um caminho euleriano agora é possível, mas deve começar em uma ilha e terminar na outra. [ 9 ]

A Universidade de Canterbury, em Christchurch, incorporou uma maquete das pontes em uma área gramada entre a antiga Biblioteca de Ciências Físicas e o Edifício Erskine, que abriga os Departamentos de Matemática, Estatística e Ciência da Computação. [ 10 ] Os rios foram substituídos por arbustos baixos e a ilha central exibe um tōrō de pedra . O Instituto de Tecnologia de Rochester incorporou o quebra-cabeça no pavimento em frente ao Gene Polisseni Center , uma arena de hóquei no gelo inaugurada em 2014, [ 11 ] e o Instituto de Tecnologia da Geórgia também instalou uma maquete de arte paisagística das sete pontes em 2018. [ 12 ]

Uma variante popular do enigma é o Passeio das Pontes de Bristol . [ 13 ] Tal como a histórica Königsberg, Bristol ocupa duas margens de rio e duas ilhas fluviais. [ 14 ] No entanto, a configuração das 45 principais pontes de Bristol é tal que existe um circuito euleriano. [ 15 ] Este ciclo foi popularizado por um livro [ 15 ] e cobertura jornalística [ 16 ] [ 17 ] e foi apresentado em diferentes eventos de caridade. [ 18 ]


Comparação dos grafos das Sete Pontes de Königsberg (acima) e do Quebra-Cabeça dos Cinco Quartos (abaixo). Os números indicam a quantidade de arestas conectadas a cada nó. Nós com um número ímpar de arestas estão sombreados em laranja.
Veja também
caminho euleriano
Quebra-cabeça de cinco salas
Glossário de teoria dos grafos
caminho hamiltoniano
Jogo Icosiano
problema do caixeiro-viajante
Problema das três concessionárias
Referências
Euler, Leonhard (1741). "Solutio problematis ad geometriam situs pertinentes" . Commentarii Academiae Scientiarum Petropolitanae : 128–140 . Recuperado em 21 de setembro de 2024 .Tradução para o inglês disponível em https://www.cantab.net/users/michael.behrend/repubs/maze_maths/pages/euler.html
 Shields, Rob (dezembro de 2012). "Topologia Cultural: As Sete Pontes de Königsburg 1736". Theory, Culture & Society . 29 ( 4–5 ): 43–57 . doi : 10.1177/0263276412451161 . S2CID 146875675 . Shields discute o significado social do envolvimento de Euler com esse problema popular e sua importância como um exemplo de compreensão (proto)topológica aplicada à vida cotidiana.
 O Arquivo Euler , comentários sobre a publicação e texto original, em latim.
 Newman, MEJ A estrutura e a função de redes complexas (PDF) . Departamento de Física, Universidade de Michigan.
Franklin, James (2014). Uma filosofia realista aristotélica da matemática . Basingstoke: Palgrave Macmillan. p. 48-49, 96, 215, 225. ISBN 978-1-349-48618-2.
 Franklin, James (1994). "As ciências formais descobrem a pedra filosofal" (PDF) . Estudos em História e Filosofia da Ciência . 25 (4): 513– 533. Bibcode : 1994SHPSA..25..513F . doi : 10.1016/0039-3681(94)90045-0 . Consultado em 30 de junho de 2021 .
 Räz, Tim (2018). "O Königsberg de Euler: o poder explicativo da matemática" . European Journal for Philosophy of Science . 8 (3): 331– 346. doi : 10.1007/s13194-017-0189-x . S2CID 125194454. Consultado em 30 de junho de 2021 . 
 Taylor, Peter (dezembro de 2000). "O que aconteceu com aquelas pontes?" . Australian Mathematics Trust. Arquivado do original em 19 de março de 2012. Consultado em 11 de novembro de 2006 .
 Stallmann, Matthias (julho de 2006). "As 7/5 pontes de Koenigsberg/Kaliningrad" . Consultado em 11 de novembro de 2006 .
"Sobre – Matemática e Estatística – Universidade de Canterbury" . math.canterbury.ac.nz . Arquivado do original em 28 de novembro de 2016. Consultado em 4 de novembro de 2010 .
 RIT Womens Hockey [@RITWHKY] (19 de agosto de 2014). "@OnlyAtRIT colocamos o problema matemático da ponte 7 no cimento em frente à nova arena de hóquei @PolisseniCenter #ROC" ( Tweet ) – via Twitter .
"As Sete Pontes de Königsberg" . Georgia Tech . Consultado em 24 de março de 2022 .
 Thilo Gross (1 de julho de 2014) "Resolvendo o problema da Ponte de Bristol" Em: Sam Parc (Ed.) "50 Visões da Matemática", Oxford University Press , Oxford, ISBN 978-0-19-870181-1
 AllTrails, Caminhada pelas Pontes de Bristol , Consultado em: 22/11/2023
Lucas e Thilo Gross (6 de junho de 2019) "De Brycgstow a Bristol em 45 pontes", Bristol Books, Bristol ISBN 978-1-909446-18-2.
 David Clency (1 a 3 de março de 2013) "As 42 travessias de Bristol - Nenhuma ponte longe demais para um gênio da matemática", Bristol Post , pp. 28-29.
 Pamela Parkes (3 de fevereiro de 2015) "Enfrentando o desafio das pontes de Bristol." Bristol24/7 , publicado online , acessado em: 22 de novembro de 2023.
 Andrew McQuarrie (2 de outubro de 2019) "É por isso que as pessoas pagarão £1 ao atravessar as pontes em Bristol na próxima semana", Bristol Post , pp. 22-23.
Links externos
Logotipo do Wikimedia Commons
O Wikimedia Commons possui conteúdo multimídia relacionado às Sete Pontes de Königsberg .
Kaliningrado e o Problema da Ponte de Königsberg na Convergência. Arquivado em 8 de agosto de 2013 no Wayback Machine.
Publicação original de Euler (em latim)
As Pontes de Königsberg
Como as pontes de Königsberg ajudam a compreender o cérebro
Problema das Pontes de Königsberg de Euler no Departamento de Matemática do Contra Costa College
Pregel – uma ferramenta de gráficos do Google que recebeu esse nome em homenagem a esse problema.
[1] Problema gráfico atual
Li, Wenda. O Problema da Ponte de Königsberg e o Teorema da Amizade (Desenvolvimento de Provas Formais em Isabelle/HOL, Arquivo de Provas Formais)
Categorias :1735 na ciênciaPontesTeoria dos grafosKönigsbergLeonhard EulerProblemas matemáticosQuebra-cabeçasTopologiaEnigmas insolúveis
Esta página foi editada pela última vez em 22 de junho de 2026, às 20h18  (UTC) .
O texto está disponível sob a Licença Creative Commons Atribuição-CompartilhaIgual 4.0 ; termos adicionais podem ser aplicados. Ao usar este site, você concorda com os Termos de Uso e a Política de Privacidade . Wikipedia® é uma marca registrada da Wikimedia Foundation, Inc. , uma organização sem fins lucrativos.
Política de PrivacidadeSobre a WikipédiaAvisos legaisContate a WikipédiaContatos jurídicos e de segurançaCódigo de CondutaDesenvolvedoresEstatísticasDeclaração de cookiesVisualização em dispositivos móveis
Fundação Wikimedia
Com tecnologia MediaWiki



---

Neo4J Casos de uso
https://neo4j.com/use-cases/


Skip to content
Neo4j to acquire GraphAware, launch new open-standards intelligence analysis solutions | Read more

Neo4j logo

Products
Products: submenu

Solutions
Solutions: submenu

Why Neo4j
Why Neo4j: submenu

Developers
Developers: submenu

Resources
Resources: submenu
Pricing

Contact
Aura login
Get started free



Next-Gen Application Use Cases
Transform data into knowledge to build reliable AI, detect fraud, optimize CX, boost supply chain resilience, and more. The sky’s the limit.

Business Use Cases
Industry Use Cases
Technical Use Cases
Get Started
Enterprise Graphs

Business Use Cases
AI Systems
Model and manage context to build production-grade AI Systems with ease.

Learn More 
Generative AI
Unify vector search, knowledge graph, and data science to build breakthrough GenAI apps that deliver highly accurate responses, rich context, and deep explainability.

Learn More 
Fraud Detection & Analytics
Detect sophisticated scams like money laundering, credit fraud, claims fraud, and more.

Learn More 
Supply Chain Management
Gain real-time visibility, drive resilience, and improve supply chain planning.

Learn More 
Real-Time Recommendations
Make relevant recommendations based on purchase history, similar customers, grouped items, and more.

Learn More 
Optimize Customer Experiences
Deepen your understanding of customers to personalize experiences and know the next best action to take.

Learn More 
Identity & Access Management
Track users, assets, relationships, and authorizations to ensure only trusted users can access your systems.

Learn More 
Data Privacy, Risk, & Compliance
Ensure compliance and data privacy to reduce security risks..

Learn More 
Network & IT Operations
Make sense of the complex interdependencies central to managing your network and IT infrastructure.

Learn More 
Industry Use Cases
Financial Services
Manage risk, stay agile, comply with regulations, and protect against fraud.

Learn More 
US Federal Government
Improve citizen services, make operations more efficient, and achieve mission outcomes.

Learn More 
Healthcare & Life Sciences
Accelerate drug discovery, improve health outcomes, manufacturing, and affiliation management.

Learn More 
Retail
Personalize experiences, make better product recommendations, optimize supply chains, and more.

Learn More 
Telecommunications
Manage complex networks and boost customer satisfaction.

Learn More 

Technical Use Cases
Knowledge Graphs
Connect and map your data for more meaningful integration, querying, and analysis.

Learn More 
Pattern Matching
Find meaningful patterns, such as shapes, trends, and recurring relationships, in raw or semi-structured data.

Learn More 
Digital Twin
Create a model of a real-world product, process, or system to increase visibility, improve efficiency, and reduce risk.

Learn More 
Metadata Management
Organize data about data to improve data discovery, understanding, and usability.

Learn More 


Get Started With Graph Intelligence
Build Apps Faster with AuraDB
Build with a fully managed database, 1,000 faster queries, a flexible schema, and enterprise-grade security. No JOINs required.

Start Building
Take Free, Hands-on Courses at GraphAcademy
Sharpen your skills in building knowledge graphs, applications, and AI on a graph database, no matter your current level of experience.

opens in new tabTake Courses


Model Your Data Like Your Business
Build a knowledge graph to mirror each key business area and interconnect them for deep contextual insights to help you build AI, optimize operations, and more.

Get Insights
Products
AuraDB
Aura Graph Analytics
Aura Agent
Enterprise Studio
Community Edition
Cypher Query Language
Fleet Manager
Graph Database
Graph Data Science
GraphQL
Knowledge layer
Pricing
Virtual Graph
Solutions
AI systems
Case studies
GenAI
GraphRAG
Industries & use cases
Knowledge graphs
Model context protocol (MCP)
Pattern matching
Developers
AI + graph
Agent memory
opens in new tabCommunity
Developer home
Documentation
Deployment Center
Developer blog
opens in new tabGraphAcademy
Release notes
Data Scientists
opens in new tabData science community
Data science documentation
Get started with graph data science
Graph data science home
opens in new tabGraphAcademy for data science
For Executives
opens in new tabCustomer success stories
Executive insights
IDC business value whitepaper
Resources
Blog
Events hub
opens in new tabGraphAcademy
GraphSummit
NODES
NODES AI
Resource library
Research center
Video hub
Webinars
Partners
Become a partner
Find a partner
OEM partners
opens in new tabPartner portal login
Solution partners
Technology partners
Company
About Us
Awards and honors
Careers
Culture
Graphs4Good
Leadership
Newsroom
opens in new tabSupport
opens in new tabTrust center
Contact Us ❯
US: 1-855-636-4532
Sweden: +46 171 480 113
UK: +44 20 3868 3223
France: +33 (0) 1 88 46 13 20
Singapore: +65 6859 0336
Australia: +61 2 8395 2895
India: +91 6827 521 210
Social Networks
opens in new tab
 opens in new tab
 opens in new tab
 opens in new tab
 opens in new tab
 opens in new tab
© 2026 Neo4j, Inc.
Terms | Privacy Notice | Sitemap
opens in new tabAnti-Corruption Policy
©2026 Neo4j, Inc., Neo Technology®, Neo4j®, Cypher®, Neo4j Bloom™, Neo4j Graph Data Science Library™, Neo4j® Aura™, and Neo4j® AuraDB™ are registered trademarks or a trademark of Neo4j, Inc. All other marks are owned by their respective companies.

Neomi, AI Agent


Neomi
Neomi
AI Assistant
Hi, I'm Neomi an AI Assistant here to assist you. How can I help you?

Podemos conversar em Português se você preferir

Message input
Support
Book a Meeting
Ask Neomi a question

By engaging with this chat, I confirm that I have read and understood Neo4j’s Privacy Policy. 



---


https://neo4j.com/customer-stories/transport-for-london/

Skip to content
Neo4j to acquire GraphAware, launch new open-standards intelligence analysis solutions | Read more

Neo4j logo

Products
Products: submenu

Solutions
Solutions: submenu

Why Neo4j
Why Neo4j: submenu

Developers
Developers: submenu

Resources
Resources: submenu
Pricing

Contact
Aura login
Get started free
All customer stories
Transport For London Cuts Congestion by 10% with a Digital Twin Powered by Neo4j
How a digital twin of the world’s most intricate transport network, built on Neo4j’s graph solution, boosts incident response time, improves journeys for millions and lays the groundwork for the metropolis of the future.

10%

estimated congestion reduction

$750M

estimated annual economic savings

$1,500

annual time savings value for every driver


Transport for London (TfL) is in charge of running and maintaining London’s transport network of road, rail, and underground, one of the largest and most complex in the world. Its mission: to ensure that nine million residents and almost twenty million annual visitors can travel safely and easily, moving London forward in a healthy, inclusive and sustainable way. 

That’s no small feat when you consider that around 80% of journeys in London take place on roads, equating to over 3.7 billion trips per year. 

As one of the most visited capital cities on the planet, transport lines are also a vital lifeline for London and the wider country. Managing this network is a deeply complex, intricate challenge; monitoring it alone is a technical feat when you consider there are 65,000 roads alone.

Reacting to incidents on those roads is even harder – but essential. London experiences 20,000 unplanned transport incidents yearly, and each passing minute left unaddressed means traffic jams build exponentially. Congestion in the city costs London $7.5 billion per year in lost labor alone, on top of the stress and inconvenience for road users.

What if you could bring together real-time data on all those roads and spot an incident before someone picks it up on CCTV? Breaking a traffic jam within seconds rather than minutes could save the city countless hours and cut the pollution created by stationary vehicles.

That was what one pioneer at TfL set out to do – with the help of Neo4j.

Using graph to power a digital transport twin
“For a long time, TfL took a totally reactive approach to data,” says Andy Emmonds, Chief Transport Analyst at TfL. 

One of the main challenges to using a digital solution to solve London’s congestion problem was the prevalence of low-quality and disparate travel data.

Many journeys are private and multi-modal (you might drive or cycle, then catch a train, then walk), making them hard to track. Meanwhile, TfL’s historical approach was to collect distinct data sets, which meant they could only answer a fraction of the questions the team wanted to ask. 

TfL collects terabytes of data every week, but because of how that data is stored and analyzed – separately – no meaningful conclusions can be drawn based on the relationships between datasets. Insufficient sensors to gather fresh data, like cameras and telematics, often means that TfL only gets insight into traffic incidents once they’ve been visually spotted as well.

“We were effectively using this disparate data through Excel sheets. None of this data was aligned or real-time, and what we needed was to be a real-time operator – to do that, we needed a digital twin.”

Andy Emmonds

Chief Transport Analyst, TfL


A digital twin is a computer replication of physical phenomena – in this case, of London’s transport network – in which if/then scenarios can be tested before the system is deployed in the real world. And it’s exactly what Andy identified that TfL needed to deal with its congestion challenge. 

He quickly understood that using a graph would be the most efficient, cost-effective, and performant way to power such a model. TfL needed a way to uncover hidden relationships and patterns across billions of data connections to make the decisions needed to predict and handle traffic incidents. Graphs enable people to store and examine the connections between data points as data itself, much in the same way commuters think about the routes and connections in their daily travel. 

“We found that real-time data can only be solved by a graph database because a graph database is an agile and adaptive way to interpret granular data at scale,” says Andy. 

A road link is a node – it’s a route from A to B that has many properties, intrinsically suited to graph for this reason, compared to those cumbersome spreadsheets TfL previously relied on.

“Trips and routing can only be efficiently managed through such a database,” adds Andy. For his team, Neo4j’s graph solution was the way forward.

When every minute is worth $14,000
TfL’s goal is to dramatically improve its ability to detect and address incidents on London’s road network in as close to real-time as possible, which has massive financial implications – every minute of delay creates negative outcomes. 

Currently, it takes TfL between 14 and 17 minutes to detect an incident. By the time it’s spotted and interventions put in place, an average of 27 minutes have been lost in terms of traffic buildup. That means every minute of delay from an incident’s occurrence is worth $14,000.

“What we’re trying to do here is reduce that intervention curve. If we can bring that intervention window back to a minute or two minutes, then that delay curve for the whole incident is much, much reduced,” says Andy.

“Congestion costs London £6 billion ($7.5bn) a year, we can make a big dent in that through managing this operation in real-time.”

Making real-world decisions in a virtual environment
So what does TfL’s transport digital twin look like, and how exactly does graph power it? The twin consists of five layers:

Digital twin data: the first level of the model, where input data is aligned with the business challenge
Framework: the data is organized to solve the challenge
Graph database: the data is set up so it mirrors the physical network it is modeling 
Visual layer: The data is sent to TfL’s control room for interpretation
Plug and play layer: The data is used to solve different road problems
With Neo4j’s graph solution, TfL could connect and feed those data sets into the digital twin. To try out its new solution and to see what real-time insights it would provide them, TfL set up a stage rehearsal – which yielded results almost immediately. 

Says Andy: “We set up a test product which was fed data powered by graph that could tell us in near real-time if there was a problem on the road. On the day of the test, the system detected five incidents that the control room didn’t pick up. That was the proof in the pudding for us.”

What was working with Neo4j like for Andy and his team? “We worked really closely with the Neo4j team, and they became close collaborators. Ultimately, what we’ve created is a holistic product. It has enabled us to go back to the drawing board, establish new networks and new ways of thinking, and unlock efficiencies.”


How TfL will cut congestion costs by $750 million
TfL hopes its digital twin will also play a crucial role in its vision to cut congestion by 10% – a result worth $750 million per year to the capital and over $1,500 in time back per driver per year according to its own estimates.

Andy and his team are looking to the future too. Using the new solution, Andy hopes to build an optimizer for peak traffic days, for example, when a stadium event is happening, to best plan and control routes across the network driven by data from the digital twin.

Further down the line, Andy and his team expect to use their solution to build emission reduction strategies for London and even lay the foundation for an autonomous vehicle network. 

“The great thing about a solution like this is that the architecture is open and agile,” explains Andy. “There’s nothing stopping us from using it to build and understand the metropolis of the future, and to me, that next step is making London’s roads autonomous and green.”

Get in touch
Uncover hidden insights with Neo4j’s graph database and analytics. Let’s talk.


Read a complimentary Gartner® report on knowledge graphs for AI
Read the report

Partners


Microsoft Azure
Use Cases

Recommendations
Industry

Government & municipality
Transportation
opens in new tabtfl.gov.uk
Europe
Explore More

Audience Acuity Accelerates Identity Resolution to Under 24 Hours with Neo4j Graph Analytics for Snowflake
Read Case Study 

Syngenta Transforms Chemical Intuition into Digital Precision with Neo4j
Read Case Study 

IndyKite Helps Enterprises Build Trust in AI and Data with Neo4j
Read Case Study 

Build intelligent apps easily
Transform your data into knowledge to build smart, accurate, and adaptive applications.

Start Building
Products
AuraDB
Aura Graph Analytics
Aura Agent
Enterprise Studio
Community Edition
Cypher Query Language
Fleet Manager
Graph Database
Graph Data Science
GraphQL
Knowledge layer
Pricing
Virtual Graph
Solutions
AI systems
Case studies
GenAI
GraphRAG
Industries & use cases
Knowledge graphs
Model context protocol (MCP)
Pattern matching
Developers
AI + graph
Agent memory
opens in new tabCommunity
Developer home
Documentation
Deployment Center
Developer blog
opens in new tabGraphAcademy
Release notes
Data Scientists
opens in new tabData science community
Data science documentation
Get started with graph data science
Graph data science home
opens in new tabGraphAcademy for data science
For Executives
opens in new tabCustomer success stories
Executive insights
IDC business value whitepaper
Resources
Blog
Events hub
opens in new tabGraphAcademy
GraphSummit
NODES
NODES AI
Resource library
Research center
Video hub
Webinars
Partners
Become a partner
Find a partner
OEM partners
opens in new tabPartner portal login
Solution partners
Technology partners
Company
About Us
Awards and honors
Careers
Culture
Graphs4Good
Leadership
Newsroom
opens in new tabSupport
opens in new tabTrust center
Contact Us ❯
US: 1-855-636-4532
Sweden: +46 171 480 113
UK: +44 20 3868 3223
France: +33 (0) 1 88 46 13 20
Singapore: +65 6859 0336
Australia: +61 2 8395 2895
India: +91 6827 521 210
Social Networks
opens in new tab
 opens in new tab
 opens in new tab
 opens in new tab
 opens in new tab
 opens in new tab
© 2026 Neo4j, Inc.
Terms | Privacy Notice | Sitemap
opens in new tabAnti-Corruption Policy
©2026 Neo4j, Inc., Neo Technology®, Neo4j®, Cypher®, Neo4j Bloom™, Neo4j Graph Data Science Library™, Neo4j® Aura™, and Neo4j® AuraDB™ are registered trademarks or a trademark of Neo4j, Inc. All other marks are owned by their respective companies.

Neomi, AI Agent


Neomi
Neomi
AI Assistant
Hi, I'm Neomi an AI Assistant here to assist you. How can I help you?

Podemos conversar em Português se você preferir

Message input
Support
Book a Meeting
Ask Neomi a question

By engaging with this chat, I confirm that I have read and understood Neo4j’s Privacy Policy. 




---





Fundamentos do Neo4j › Pensamento em Grafos
Gráficos estão por toda parte

Sérgio
Fundamentos do Neo4j

Pensamento gráfico
O que é Neo4j?
Pensando em Gráficos
Gráficos estão por toda parte
Crie seu próprio modelo de dados em grafo
(Opcional)
Consultando Grafos
Leitura de gráficos
Reconhecimento de padrões
Criação de gráficos
Consultando seu modelo de dados
(Opcional)
Explorando o Neo4j
Obtenha o Neo4j
Ferramentas Neo4j
Parabéns e próximos passos

Português (Brasil)
Powered by Google TradutorTradutor
Lição
Gráficos estão por toda parte
1736 até os dias atuais
Os bancos de dados de grafos têm origem na teoria dos grafos , um conceito criado na Prússia da década de 1730.

O problema das Sete Pontes de Königsberg questionava se era possível atravessar a cidade a pé, cruzando cada uma de suas sete pontes exatamente uma vez, sem refazer o caminho.

O processo de abstração necessário para resolver
Euler resolveu isso representando as massas de terra como vértices (nós) e as pontes como arestas (relações), formando um grafo.

Ele provou que tal caminho era impossível porque o grafo exigia que todos os nós tivessem um número par de arestas, o que não era o caso, lançando assim as bases da teoria dos grafos.

Os gráficos permitem encontrar novas informações e comprovar hipóteses.

Descubra padrões em seus dados.
Os gráficos permitem descobrir padrões nos seus dados, sejam eles:

Cliente : utilização de dados do cliente para recomendações, prevenção de cancelamentos, ofertas personalizadas e anúncios direcionados, aprimorando a retenção de clientes e o crescimento da receita.

Rede e Segurança : análise de dados de ativos de TI para oferecer suporte a um monitoramento de segurança abrangente e uma resposta proativa a ameaças.

Funcionário : armazenamento de dados de funcionários para apoiar o desenvolvimento de talentos, a gestão de carreira e a alocação de recursos, ajudando a alinhar as capacidades da força de trabalho com as necessidades do negócio.

Transações : captura de dados transacionais para detectar atividades ilegais, apoiando o combate à lavagem de dinheiro, a detecção de fraudes, a avaliação de risco de crédito e a detecção de fraudes em crédito, revelando padrões ocultos, anomalias e conexões.

Produto : centralizar os dados do produto para oferecer recomendações personalizadas, otimizar o lançamento de novos produtos, aprimorar a personalização, gerenciar o estoque e refinar as estratégias de preços.

Fornecedores : armazenamento de dados sobre desempenho, estoque, custos, logística e conformidade dos fornecedores para otimizar a gestão da cadeia de suprimentos, dando suporte a programas como planejamento de rotas, visibilidade em tempo real, planejamento de estoque e análise de riscos.

Processo : a criação de um gráfico de dados relacionados ao processo pode identificar gargalos, melhorar a eficiência, automatizar tarefas e monitorar o desempenho por meio da análise de dados operacionais, de recursos, de qualidade e de custos.

Você pode ler mais casos de uso do Neo4j em diversos setores e para clientes em neo4j.com/use-cases .

Grafos de conhecimento e IA generativa
Os grafos tornaram-se uma parte importante no desenvolvimento de aplicações de Inteligência Artificial Generativa (GenAI). As aplicações de GenAI precisam acessar o significado dos dados, e os grafos de conhecimento podem fornecer esse contexto.

Os grafos de conhecimento fornecem uma maneira estruturada de representar entidades, seus atributos e seus relacionamentos, permitindo uma compreensão abrangente e interconectada das informações.

Os grafos de conhecimento podem decompor fontes de informação e integrá-las, permitindo visualizar as relações entre os dados.

Você pode não estar familiarizado com o termo "grafo de conhecimento", mas provavelmente já usou um. Os mecanismos de busca normalmente utilizam grafos de conhecimento para fornecer informações sobre pessoas, lugares e coisas.

O seguinte grafo de conhecimento poderia representar o Neo4j:

Um exemplo de um grafo de conhecimento do Neo4j mostrando as relações entre pessoas.
Existem muitos casos de uso para Neo4j e GenAI, incluindo busca vetorial, grafos de conhecimento e ciência de dados.

Roteamento
Os gráficos são fáceis de visualizar no planejamento de rotas e no transporte.

Ao navegar em uma rede de transporte público, você utiliza conceitos da teoria dos grafos, tratando estações ou paradas como nós e rotas ou conexões como arestas.

A rede do metrô de Londres
Ao encontrar os caminhos mais curtos ou mais eficientes nessa rede, você está resolvendo um problema semelhante à busca em grafos, otimizando sua rota para chegar ao seu destino de forma eficiente.

Um grafo de nível superior pode conter relações ponderadas entre paradas para representar as linhas, enquanto um grafo de nível inferior pode modelar plataformas dentro de estações e serviços como nós no grafo.

A Transport for London (TfL) utiliza o Neo4j para armazenar uma representação digital da sua rede de transportes , o que lhe permite identificar gargalos e reduzir o congestionamento na rede.

Continuar
27%
Pensando em Gráficos
Crie seu próprio modelo de dados em grafo
Esta lição foi útil?SimNão




---

Aqui está uma análise estruturada e resumida da lição **"Gráficos estão por toda parte"** do curso de Fundamentos do Neo4j.

Esta lição conecta a origem histórica da matemática dos grafos com as suas aplicações modernas mais poderosas, como Inteligência Artificial e otimização de rotas.

---

## 1. A Origem Histórica: As Sete Pontes de Königsberg (1736)

A lição começa explicando que a origem dos bancos de dados de grafos está na matemática do século XVIII, quando o matemático **Leonhard Euler** resolveu o famoso problema da cidade de Königsberg.

* **O Problema:** Era possível caminhar pela cidade cruzando as 7 pontes sobre o rio Prególia exatamente uma vez e voltar ao início?
* **A Solução de Euler:** Ele simplificou o mapa físico transformando os pedaços de terra em **Vértices (Nós)** e as pontes em **Arestas (Relacionamentos)**. Ele provou matematicamente que o caminho era impossível (pois os nós precisariam ter um número par de conexões). Ali nascia a **Teoria dos Grafos**.

---

## 2. Padrões de Dados no Mundo Real

O texto destaca que os grafos são a melhor ferramenta para encontrar padrões ocultos onde os dados são altamente conectados. Os principais casos de uso práticos citados são:

* **Fraudes e Transações:** Detectar lavagem de dinheiro, fraudes em cartões e anomalias rastreando o caminho do dinheiro entre contas conectadas.
* **Clientes e Produtos:** Sistemas de recomendação (ex: *"quem comprou X também comprou Y"*), personalização e prevenção de cancelamentos (*churn*).
* **Cadeia de Suprimentos (Logística):** Gerenciamento de fornecedores, estoques e rotas em tempo real.
* **Segurança de TI:** Monitoramento de ativos de rede para prever e mitigar ameaças cibernéticas de forma proativa.

---

## 3. Grafos de Conhecimento e IA Generativa (GenAI)

Um dos pontos mais modernos da lição é a conexão dos grafos com a Inteligência Artificial:

* **Contexto para a IA:** Modelos de linguagem (LLMs) são ótimos em gerar texto, mas falham em lógica factual. Os **Grafos de Conhecimento (Knowledge Graphs)** estruturam entidades e atributos de forma interconectada, dando à IA o "contexto" real e estruturado que ela precisa para não alucinar.
* **Uso no dia a dia:** Os grandes motores de busca (como o Google) já usam grafos de conhecimento há anos para exibir aqueles painéis informativos quando você pesquisa por pessoas, lugares ou fatos.

---

## 4. Roteamento e Cidades Inteligentes

Por fim, a lição aborda a aplicação mais intuitiva dos grafos: redes de transporte público e mapas.

* As estações ou paradas são os **Nós**.
* As linhas de metrô, ônibus ou ruas são as **Arestas** (que podem ter "pesos", como a distância ou o tempo de viagem).
* **Estudo de Caso Prático:** O texto cita a **Transport for London (TfL)**, que mapeou toda a complexa rede de transportes de Londres usando o Neo4j para criar um gêmeo digital e prever congestionamentos em tempo real.


---

















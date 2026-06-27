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










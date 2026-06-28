

---


https://graphacademy.neo4j.com/courses/llm-vectors-unstructured/

https://graphacademy.neo4j.com/courses/llm-knowledge-graph-construction/

https://graphacademy.neo4j.com/courses/llm-chatbot-python/

https://graphacademy.neo4j.com/courses/genai-integration-langchain/

https://graphacademy.neo4j.com/courses/importing-fundamentals/?ref=recommendation







---



Fundamentos de Neo4j e IA Generativa › IA Generativa
O que é IA generativa?

Sérgio
Fundamentos do Neo4j e IA Generativa

IA generativa
O que é IA generativa?
Considerações
Contexto
Geração Aumentada de Recuperação (RAG)
O que é RAG?
Vetor RAG
Índices vetoriais
GraphRAG
Grafos de conhecimento
O que é um grafo de conhecimento?
Criação de Grafos de Conhecimento
Integrando o Neo4j com IA Generativa
GraphRAG para Python
Recuperador de vetores
Gasoduto RAG
Recuperador de vetores aprimorado por grafos
Recuperador de texto para código cifrado
Estruturas GenAI

Português (Brasil)
Powered by Google TradutorTradutor
Lição
O que é IA generativa?
GenAI
A Inteligência Artificial Generativa (ou GenAI) refere-se a sistemas de inteligência artificial projetados para criar novos conteúdos que se assemelham a dados produzidos por humanos. Os dados podem ser texto, imagens, áudio ou código.

Esses modelos, como o GPT (para texto) ou o DALL-E (para imagens), são treinados em grandes conjuntos de dados e usam padrões aprendidos a partir desses dados para gerar novas saídas.

Um diagrama que mostra o processo de IA Generativa.
A IA generativa é amplamente utilizada em aplicações como chatbots, criação de conteúdo, síntese de imagens e geração de código.

Os modelos de IA generativa não são "inteligentes" da mesma forma que os humanos:

Eles não entendem nem compreendem o conteúdo que geram.

Eles se baseiam em padrões estatísticos e correlações aprendidas a partir de seus dados de treinamento.

Embora os modelos de IA generativa possam produzir resultados coerentes e contextualmente relevantes, eles carecem de compreensão.

Modelos de Linguagem de Grande Porte (LLMs)
Este curso se concentrará em modelos de geração de texto, especificamente em Modelos de Linguagem de Grande Porte (LLMs).

Os LLMs são um tipo de modelo de IA generativa projetado para entender e gerar textos semelhantes aos humanos.

Esses modelos são treinados com grandes quantidades de dados textuais e podem executar diversas tarefas, incluindo responder a perguntas, resumir dados e analisar textos.

A resposta gerada por um LLM é uma continuação probabilística das instruções que recebe.

O LLM fornece a resposta mais provável com base nos padrões que aprendeu a partir de seus dados de treinamento.

Caso lhe seja apresentada a instrução:

"Continue esta sequência - AB C"
Um mestre em Direito (LLM) poderia responder:

"DE F"
Instruções
Para que um profissional com mestrado em direito (LLM) execute uma tarefa, você fornece uma instrução .

O enunciado deve especificar suas necessidades e fornecer instruções claras sobre como responder.

Um usuário pergunta a um especialista em Direito (LLM): "O que é um LLM? Responda usando linguagem simples, evitando jargões." O especialista responde com uma definição simples de LLM.
A precisão na descrição da tarefa, potencialmente combinada com exemplos ou contexto, garante que o modelo compreenda a intenção e produza resultados relevantes e precisos.

Um exemplo de pergunta pode ser uma questão simples.

Qual é a capital do Japão?
Ou, poderia ser mais descritivo:

Você é um agente de viagens amigável que ajuda um cliente a escolher um pacote de viagem.
destino de férias. Seus leitores podem ter o inglês como segunda língua.
Portanto, use uma linguagem simples e evite expressões coloquiais.
Evite jargões a todo custo.
Fale-me sobre a capital do Japão.
O LLM interpretará essas instruções e retornará uma resposta com base nos padrões que aprendeu a partir de seus dados de treinamento.

Verifique se você entendeu
IA generativa
Quais das seguintes afirmações sobre IA Generativa são verdadeiras? (Selecione todas as que se aplicam.)

 Os modelos de IA generativa podem gerar novos conteúdos, como texto, imagens ou código.
 Os Modelos de Linguagem de Grande Porte (LLMs, na sigla em inglês) geram texto com base em padrões aprendidos a partir de dados de treinamento.
 A qualidade do estímulo pode afetar a relevância e a precisão da resposta do modelo.
 Os modelos de IA generativa sempre compreendem o significado do conteúdo que produzem.
Confira a resposta
10%
IA generativa
Considerações
Esta lição foi útil?SimNão



---





Fundamentos do Neo4j e IA Generativa › Geração Aumentada por Recuperação (RAG)
Vetor RAG

Sérgio
Fundamentos do Neo4j e IA Generativa

IA generativa
O que é IA generativa?
Considerações
Contexto
Geração Aumentada de Recuperação (RAG)
O que é RAG?
Vetor RAG
Índices vetoriais
GraphRAG
Grafos de conhecimento
O que é um grafo de conhecimento?
Criação de Grafos de Conhecimento
Integrando o Neo4j com IA Generativa
GraphRAG para Python
Recuperador de vetores
Gasoduto RAG
Recuperador de vetores aprimorado por grafos
Recuperador de texto para código cifrado
Estruturas GenAI

Português (Brasil)
Powered by Google TradutorTradutor
Lição
Vetor RAG
Na última lição, você aprendeu sobre Geração Aumentada por Recuperação (RAG) e o papel dos mecanismos de recuperação na busca de informações relevantes.

Um dos desafios do RAG é entender o que o usuário está solicitando e encontrar as informações corretas para passar para o LLM.

Nesta lição, você aprenderá sobre busca semântica e como os índices vetoriais podem ajudá-lo a encontrar informações relevantes a partir da pergunta de um usuário.

Busca Semântica
A busca semântica visa compreender a intenção e o significado contextual das frases de busca, em vez de se concentrar em palavras-chave individuais.

A busca tradicional por palavras-chave geralmente depende de palavras-chave de correspondência exata ou de algoritmos baseados em proximidade que encontram palavras semelhantes.

Por exemplo, se você digitar "maçã" em uma busca tradicional, poderá obter predominantemente resultados relacionados à fruta.

No entanto, em uma busca semântica, o mecanismo tenta avaliar o contexto: você está pesquisando sobre a fruta, a empresa de tecnologia ou algo mais?

Os resultados são personalizados com base no termo e na intenção percebida.

Vetores
Você pode representar dados como vetores para realizar buscas semânticas.

Vetores são simplesmente uma lista de números. Por exemplo, um vetor [1, 2, 3]é uma lista de três números e pode representar um ponto no espaço tridimensional.

Você pode usar vetores para representar muitos tipos diferentes de dados, incluindo texto, imagens e áudio.

O número de dimensões em um vetor é chamado de dimensionalidade do vetor. Um vetor com três números tem dimensionalidade 3. Dimensionalidades mais altas capturam significados mais sutis, mas são computacionalmente mais custosas e, similarmente, dimensionalidades mais baixas são mais rápidas e baratas de calcular, mas oferecem menos nuances.

Um diagrama mostrando uma representação 3D das coordenadas x, y, z 1, 1, 1 e 1, 2, 3.
Incorporações
Ao se referir a vetores no contexto de aprendizado de máquina e PNL (Processamento de Linguagem Natural), o termo "embedding" é geralmente usado. Embeddings são traduções numéricas de objetos de dados, como imagens, texto ou áudio, representados como vetores. Dessa forma, os algoritmos de LLM (Aprendizado de Máquina e Processamento de Linguagem Natural) conseguem comparar dois parágrafos de texto diferentes comparando suas representações numéricas.

Cada dimensão em um vetor pode representar um aspecto semântico específico da palavra ou frase. Quando múltiplas dimensões são combinadas, elas podem transmitir o significado geral da palavra ou frase.

Por exemplo, a palavra "maçã" poderia ser representada por uma incorporação com as seguintes dimensões:

fruta

tecnologia

cor

gosto

forma

Quando aplicado em um contexto de busca, o vetor para "maçã" pode ser comparado aos vetores de outras palavras ou frases para determinar os resultados mais relevantes.

Você pode criar embeddings de várias maneiras, mas um dos métodos mais comuns é usar um modelo de embedding .

Por exemplo, a representação gráfica da palavra "maçã" é 0.0077788467, -0.02306925, -0.007360777, -0.027743412, -0.0045747845, 0.01289164, -0.021863015, -0.008587573, 0.01892967, -0.029854324, -0.0027962727, 0.020108491, -0.004530236, 0.009129008,... e assim por diante.

Revele os embeddings completos para a palavra "maçã"!

Cópia
`0.0077788467, -0.02306925, -0.007360777, -0.027743412, -0.0045747845, 0.01289164, -0.021863015, -0.008587573, 0.01892967, -0.029854324, -0.0027962727, 0.020108491, -0.004530236, 0.009129008, -0.021451797, 0.002030382, 0.030813828, 9.744976e-05, 0.0019172973, -0.02568733, -0.020985752, -0.008066699, 0.02134214, -0.01222684, 0.0009980568, 0.005105939, 0.009999417, -0.000107408916, 0.015845545, -0.012980737, 0.020574536, -0.016160812, -0.018518453, 0.005263572, -0.019286057, -0.009293495, -0.012096621, -0.008854863, -0.005753605, -0.006157968, 0.010540851, 0.007724018, -0.0065554776, 0.00052944134, -0.023453051, 0.011089141, -0.021671113, -0.00061425474, -0.012754567, 0.015489157, -0.0054520466, -0.0020355221, -0.015050527, -0.0052944133, -0.0028082666, 0.0027431573, -0.019450543, 0.0063807103, -0.010725899, 0.0049243183, 0.005266999, 0.01513277, -0.027921606, 0.0055754115, -0.009183837, 0.00380718, -0.013624975, -0.0084710615, 0.012905347, 0.015667351, 0.033363372, 0.013268588, 0.014036193, 0.0063464423, 0.004454846, 0.0014820931, -0.03396649, -0.0062779062, -0.00314238, 0.01818948, 0.0075389706, -0.02637269, 0.009574492, 0.024974553, 0.024823774, 0.009882905, -0.021657405, 0.010109074, -0.007970748, 0.0028887964, 0.011849891, 0.0054726074, 0.0078336755, 0.016448664, -0.026975807, 0.016599443, -0.012713445, 0.026345275, 0.004667308, -0.03736588, 0.0009834929, 0.006089432, -0.028730331, -0.011198798, -0.020396343, 0.0019738395, 0.012459862, -0.003738644, 0.015448036, -0.019902883, 0.0064389664, 0.00926608, 0.021945259, -0.051648803, -0.016448664, -0.01744929, -0.009499103, 0.0021743076, -0.022795105, -0.035556525, 0.034021318, 0.025892938, 0.038407627, -0.008752059, 0.013446782, -0.0032640316, -0.01779197, -0.009567639, -0.0011205651, -0.013947096, 0.04707059, 0.008100967, 0.019491665, 0.016448664, -0.017846799, 0.019573908, -0.02223311, 0.015489157, -0.0057433248, -0.033445615, 0.010554559, 0.014694139, -0.01239818, 0.0070660715, -0.011226213, 0.023686076, 0.02360383, 0.022753984, -0.005215597, 0.0070866323, 0.010753313, -0.024110999, -0.003909984, 0.005462327, 0.0017459571, 0.0057981536, -0.016983245, -0.0021777344, -0.0039373985, 0.003772912, -0.006634294, 0.008614987, -0.006579465, -0.008841156, 0.0017699447, 0.024412557, 0.011856745, 0.013522171, -0.016051153, -0.00951281, -0.016133398, 0.004177275, -0.010691631, 0.01296703, 0.00886857, 0.016078569, 0.004434285, 0.012734006, -0.0067850733, 0.0006545197, 0.0011317023, -0.0046090526, 0.023096664, 0.01946425, -0.016640564, 0.014899747, 0.004701576, -0.010568266, 0.005530863, -0.019231228, 0.032047477, 0.02041005, -0.00397852, -0.014419994, -0.684703, -0.020643072, 0.00603803, -0.00033582686, 0.033993904, 0.03188299, 0.022287939, -0.0012739147, -0.018381381, -0.010396926, 0.0018042127, 0.0032863058, 0.00886857, 0.009519664, 5.9969083e-05, -0.022287939, 0.016284177, -0.023658661, -0.010431194, 0.02489231, -0.012261108, -0.014351458, -0.008841156, -0.029717252, 0.0036564006, 0.019628737, 0.019957712, -0.014022485, -0.019560201, 0.021767065, -0.008238039, -0.00048146606, 0.027291073, 0.0060140425, 0.037393294, 0.0072031436, -0.04416466, 0.013940242, 0.009663589, 0.03415839, -0.02065678, -0.020423757, 0.013563293, -0.0065246364, -0.015872959, -0.0009278074, 0.013254881, 0.005637094, -0.00071491714, -0.025344647, 0.03484375, 4.8269758e-05, 0.010787581, 0.008409379, 0.021780772, 0.008738352, 0.023124078, -0.008745206, -0.001522358, 0.016448664, -0.022370182, -0.0034011037, -0.034734093, -0.02523499, -0.020547122, 0.010636802, -0.009190691, 0.0076417746, 0.005434912, -0.01951908, 0.021492919, 0.022438718, -0.02306925, -0.007059218, -0.0031115387, 0.01705178, 0.023576416, -0.00148809, -0.027071757, 0.0047461246, -0.0023867695, -0.009389445, 0.0049414523, -0.027537804, 0.03158143, 0.0054246318, -0.024042463, -0.011301602, 0.013926535, -0.02371349, 0.034130976, 0.023932805, 0.0028682356, -0.019148985, -0.014570774, -0.0053423885, -0.032376453, -0.019244935, -0.0021434664, -0.019930298, 0.016530907, -0.0056302403, 0.00943742, 0.0067679393, 0.024028756, 0.013474196, -0.019477958, 0.014570774, 0.03673535, -0.020437464, -0.0076623354, -0.012631202, 0.008587573, -0.00869723, 0.025824402, -0.03125246, 0.010629948, -0.00761436, 0.021067996, -0.032952156, 0.025399476, -0.00438631, 0.011863599, 0.003027582, -0.01059568, 0.018463625, -0.0045405165, -0.030978315, -0.0034884873, -0.0059420797, 0.008018723, 0.0052190237, 0.007299094, -0.006250492, 0.02390539, 0.0004050055, 0.009965149, -0.020670487, 0.011993817, -0.02508421, -0.016969537, 0.007991308, 0.000463047, -0.00052258774, 0.0012704879, -0.01232279, -0.028511016, -0.016887294, -0.010862971, 0.0052361577, -0.008861717, 0.005530863, -0.0017579509, 0.021506626, 0.022589497, -0.015900373, 0.0028596686, -0.0233571, 0.0009406579, 0.016229348, 0.010205025, 0.028182043, -0.009026204, 0.0042218235, 0.0150368195, -0.035803255, 0.0068193413, 0.0018727488, -0.017846799, -0.029251205, 0.01340566, -0.016887294, -0.008190064, 0.008286014, -0.014748968, 0.0039888006, -0.0149682835, 0.007477288, 0.01015705, 0.002385056, 0.0054314854, 0.008861717, 0.0021023448, 0.0016602869, 0.030896071, 0.020053662, 0.0016157385, 0.04767371, -0.020218149, 0.0008228615, -0.013467343, 0.019820638, 0.0053252545, 0.0016525766, -0.013816877, -0.008477915, -0.0059592137, 0.013398807, -0.0009586486, 0.01150721, 0.023973927, -0.0029007902, 0.011246773, -0.0022873923, 0.013775756, -0.03292474, 0.003995654, -0.005369803, 0.011294749, 0.03459702, -0.0022771119, -0.028593259, -0.0066068796, -0.020451171, 0.012357058, 0.034185804, 0.002359355, 0.012185718, 0.0009329476, -0.007984455, 0.0016688539, -0.0047666854, 0.00047204236, -0.0036769616, -0.0074567273, 0.0034833471, 0.010115928, 0.03328113, -0.003368549, -0.026071131, -0.0035535966, -0.004986001, -0.00934147, -0.0125215445, 0.004143007, 0.014872333, 0.004146434, -0.010979483, 0.02223311, -0.0009552218, -0.0140499, 0.014502238, 0.026687955, -0.0020286685, 0.007621214, -0.0132617345, 0.045946598, 0.008169503, -0.004143007, -0.0022634047, -0.003240044, -0.025769573, -0.030759, 0.010479169, -0.00090467645, -0.024618166, 0.02350788, 0.022397596, 0.022877349, 0.0408201, 0.0032965862, -0.0034679265, -0.012946469, 0.0059763477, -0.020286685, -0.00019372156, -0.001281625, -0.013672951, 0.0028082666, 0.004146434, 0.013316563, -0.0002972753, 0.024933431, -0.010218732, 0.0067473785, 0.00096807233, -0.017600069, 0.0047495514, 0.0053458153, -0.012453008, -0.021698527, -0.02745556, 0.009060472, 0.003961386, -0.006867317, 0.008950814, -0.028949646, -0.0059455065, -0.005777593, 0.014748968, -0.0032948728, 0.021629991, 0.008320282, 0.020094784, 0.020423757, -0.01380317, 0.031362116, -0.0109863365, 0.005198463, -0.0062025166, 0.00017980016, 0.004968867, -0.019477958, -0.003947679, 0.03942196, -0.0048317946, -0.00595236, -0.024357729, 0.012679177, -0.002345648, -0.025413183, 0.0046227598, -0.015996324, -0.01809353, -0.0029864605, 0.016558321, -0.0055034487, -0.017161438, 0.04071044, -0.0025855242, -0.012644909, -0.01788792, -0.014255508, 0.007943333, 0.06513671, 0.02542689, -0.0109520685, 0.023727197, -0.0055925455, 0.027674876, -0.011945842, -0.006791927, 0.029059304, -0.00075818057, -0.0014101302, -0.008806888, 0.014776383, -0.018449917, 0.023891684, 0.011294749, -0.002393623, -0.020135906, -0.0056816423, -0.008203771, 0.00051230734, -0.014598188, 0.010650509, 0.0055205827, 0.01720256, 0.0057638856, 0.018751476, 0.029196376, -0.005195036, -0.024535922, -0.0060825786, -0.006243638, 0.015297256, -0.006226504, -0.001954992, 0.022301646, 0.017161438, 0.015955202, 0.0059489333, 0.0052601453, 0.012178864, 0.010616241, -0.0037249369, -0.02637269, 0.007792554, -0.011459235, -0.014611895, 0.032568354, -0.0012088054, -0.013810024, 0.024672994, 0.01627047, 0.0050511104, -0.0055891187, -0.00022102891, 0.026729077, -0.0074704345, 0.0031526603, 0.010307829, -0.025659915, -0.0055377167, -0.019998834, 0.0032880192, 0.014502238, -0.0012936188, -0.005650801, -0.011376992, -0.018669233, -0.0068536093, -0.011616868, -0.000986063, -0.026358983, -0.011390699, 0.0077308714, 0.033144057, 0.008217478, 0.020889802, 0.0057261907, 0.0069838283, 0.03489858, -0.008306575, -0.014803797, 0.004742698, -0.014474823, -0.022973299, 0.019094156, -0.001972126, -0.013145223, 0.011671697, 0.008649255, 0.013755195, -0.0060448837, 0.02958018, 0.0045028217, -0.0120897675, -0.00046004856, 0.017833091, 0.011986963, -0.019327179, -0.011829331, 0.00795704, -0.010410633, -0.0026334994, -0.008005016, 0.014666725, 0.014653017, 0.019738395, 0.012535252, -0.025276111, 0.0037146565, 0.02760634, -0.004441139, 0.014831211, -0.0109863365, 0.01222684, 0.0138305845, -0.008786327, -0.0074156057, -0.0052190237, -0.015900373, -0.02099946, -0.04997652, 0.014255508, 0.02094463, -0.014104729, 0.020464879, -0.004986001, -0.007970748, -0.020889802, 0.012219986, -0.008710938, -0.0025820974, -0.0013553012, -0.013857999, -0.033555273, -0.027016928, -0.01646237, 0.020862387, 0.0009629321, -0.017435582, -0.020272978, 0.018271724, 0.008155796, -0.024878602, -0.02834653, -0.049181502, 0.011431821, 0.003176648, 0.0035056213, 0.02952535, -0.015283549, 0.017572654, -0.006905012, 0.014214386, -0.026208203, -0.022164574, -0.028428772, 0.00012647052, 0.03829797, 0.018258017, 0.020423757, 0.014077314, 0.016640564, -0.00020646499, 0.0044616996, -0.008587573, 0.0029898873, 0.012219986, -0.018518453, 0.013679804, 0.014557066, 0.015859252, 0.0027071757, 0.012919054, -0.0039750934, 0.012788836, 0.0042560915, -0.0023353675, -0.027990142, -0.005404071, -0.004451419, -0.009444274, -0.019848052, 0.01008166, 0.0092455195, -0.024316607, 0.019162692, 0.009087887, 0.0017819385, -0.02922379, 0.025043089, -0.009972002, 0.021328432, 0.01141126, 0.0053903637, -0.026701663, -0.006685696, 0.008827449, -0.007477288, 0.015146477, -0.0068775974, 0.007792554, -0.014515945, -0.0074361665, 0.0058358484, 0.041149072, -0.025591379, -0.022356475, 0.0068570366, -0.04188926, -0.0053766565, -0.006411552, -0.009663589, -0.016092276, 0.001164257, 0.013556439, 9.952459e-06, 0.0003868006, -0.0058358484, -0.017367046, 0.0061682486, 0.020135906, 0.029991396, 0.0025769572, 0.035227552, 0.021602577, -0.0034576461, -0.019573908, 0.0022548377, -0.009533371, -0.011610014, 0.026454933, 0.01488604, 0.012315936, -0.007209997, -0.0028511016, 0.0045370897, -0.010239293, -0.0096430285, 0.035008237, 0.01769602, 0.016188227, -0.027976435, -0.031115387, -0.01946425, 0.026729077, -0.0048352215, -0.002503281, -0.015091648, -0.03829797, -0.01116453, 0.026331568, -0.01232279, 0.019505372, 0.004180702, -0.013912828, 0.01513277, -0.011849891, -0.02489231, 0.00088068884, -0.0026095118, 0.02740073, -0.02405617, 0.018203188, -0.0012859085, 0.005318401, -0.006349869, -0.007758286, 0.004674162, 0.03169109, -0.02785307, -0.0008571296, 0.0026369262, 0.015077941, 0.010623095, -0.012103475, -0.022260524, -0.009204398, -0.0028733758, -0.027976435, 0.010013124, 0.0077788467, -0.021013167, -0.011150823, 0.008244893, -0.006247065, -0.0062402114, 0.0027979861, 0.01372778, -0.0007671759, -0.013426221, 0.016928416, -0.0016191653, 0.0033668356, 0.026975807, -0.0121240355, -0.010705338, 0.023768319, -0.020793851, 0.00081129605, 0.0079022115, 0.0023096665, -0.024028756, 0.009937734, -0.0037592049, -0.0038483017, 0.020204442, -0.019546494, -0.012267961, -0.004338335, 0.0074361665, 0.016201934, 0.0024775798, 0.0061339806, 0.013248027, -0.008532744, -0.0019669859, -0.012713445, -0.030183297, 7.549679e-05, -0.012473569, -0.002210289, 0.02075273, -0.003116679, -0.0025872376, -0.003793473, 0.007299094, 0.0136592435, -0.024522215, -0.03391166, -0.021410676, 0.020506, -0.01463931, 0.00017551666, -0.020643072, -0.002201722, -0.022109745, 0.003632413, -0.0009286641, 0.00044891142, 0.0027191697, 0.014666725, 0.013391953, 0.02386427, -0.009039911, 0.0021348994, -0.013837438, -0.021410676, -0.021602577, -0.0059146653, 0.0048729163, 0.017983872, 0.01961503, -0.021917844, -0.028839989, -0.00808726, -0.03983318, -0.03254094, -0.005739898, 0.013248027, -0.00070206664, 0.006140834, 0.010013124, 0.0055411435, 0.0063841376, 0.016791344, -0.047564052, -0.0010725899, 0.004989428, -0.020917216, 0.022370182, -0.022959592, -0.020451171, -0.023233736, 0.001032325, 0.008094113, 0.0010777301, 0.01116453, 0.00038637224, -0.0033188604, -0.00886857, 0.022150867, 0.006394418, -0.00013310995, 0.009300348, -0.01883372, -0.009553932, 0.0032109162, -0.0007637491, -0.023727197, 0.0063258815, 0.009122155, 0.008327136, 0.008066699, 0.0013090394, -0.0051539144, 0.00975954, -0.020026248, -0.005873543, -0.011308456, -0.018765183, 0.014310337, -0.024412557, -0.017942749, -0.012535252, 0.010342097, -0.0243029, -0.010198171, 0.026838735, -0.0081078205, -0.0144337015, -0.010568266, 0.022301646, -0.03489858, -0.008066699, -0.0028802294, -0.023110371, -0.024193242, 0.03829797, 0.0029898873, -0.008361404, -0.0076280674, 0.014611895, 0.009560785, -0.0039716666, -0.004297213, 0.013446782, -0.022507254, -0.013337124, 0.008423086, -0.018600697, -0.023850562, 0.003947679, 0.0113838455, -0.0022788253, -0.0041909823, 0.20747247, -0.007059218, 0.016599443, 0.03988801, -0.0005011702, -0.0007568955, 0.015543986, 0.013145223, -0.0038825697, 0.0050339764, -0.014817504, 0.011767647, -0.015242428, 0.007299094, 0.010890386, -0.007580092, -0.03489858, -0.0089713745, -0.016393835, -0.0060825786, 0.023658661, -0.011459235, -0.011610014, -0.011514064, 0.02897706, 0.003108112, -0.02927862, 0.009889758, 0.018641818, 0.010150196, -0.00020453741, -0.004146434, -0.0039339717, -0.002090351, -0.008361404, -0.0001941499, -0.0075389706, 0.024165828, 0.02745556, 0.026920978, -0.0015789003, -0.00090638985, -0.007888504, -0.0035570234, -0.028127214, 0.0142966295, -0.008457354, -0.007360777, 0.023041835, 0.021753358, -0.047838196, -0.003755778, 0.025221283, 0.025111625, 0.0014692425, 0.0071346075, 0.0026900417, 0.012727153, -0.00223599, -0.0020423757, -0.00744302, 0.018998206, 0.0012841951, 0.019094156, -0.024330314, -0.0043074936, -0.034240633, 0.005839275, -0.009300348, -0.008738352, 0.0038654357, -0.020739023, -0.007545824, 0.00035017662, -0.030128468, -0.0408201, 0.024083585, 0.026098546, 0.014598188, 0.022493547, -0.006867317, 0.009252373, -0.006140834, -0.0022942459, -0.006147688, -0.016667979, 0.03223938, -0.00544862, -0.0058872504, -0.003844875, -0.005582265, -0.015448036, 0.004454846, -0.02603001, 0.0056987763, 0.017421875, -0.015790716, 0.01946425, -0.01042434, -0.00070120994, -0.0040641907, -0.017956456, 0.01769602, -0.010095367, -0.008080406, 0.024069877, 0.0029898873, 0.009403152, 0.0057913, 0.006870744, -0.012809397, -0.011424967, 0.01256952, -0.011178237, 0.033829417, 0.009725272, -0.002683188, -0.029086718, 0.017956456, -0.0010940074, 0.0075526778, -0.01868294, 0.0020612231, 0.017517826, -0.01439258, -0.021150239, -0.020780144, 0.00021256898, 0.0167091, -0.028483601, -0.003478207, -0.0048043802, 0.004454846, 0.0034936275, 0.008752059, 0.0024930006, 0.004828368, -0.017654898, -0.0015009405, -0.009320909, 0.0013458775, 0.013816877, 0.020560829, 0.007319655, 0.0035433162, -0.0028168336, 0.002784279, -0.00032833073, -0.023343394, -0.021314725, -0.018792598, 4.789495e-05, -0.018792598, -0.006689123, 0.04213599, -0.01769602, -0.034076147, -0.027592633, -0.01084241, 0.013734634, -0.022753984, -0.01479009, 0.023110371, -0.011795062, -0.04150546, -0.007340216, -0.18016769, 0.027565219, -0.0068775974, 0.0007757429, 0.018299138, 0.0038003265, 0.01676393, 0.009807515, -0.0063601495, 0.0019224375, 0.021259896, 0.0033102934, -0.028922232, -0.011054873, 0.024015049, -0.011596307, -0.004824941, 0.015996324, 0.025166454, 0.011123409, 0.01642125, -0.010047392, 0.01414585, -0.019957712, 0.009999417, 0.023453051, -0.025673622, 0.0014469683, -0.012007524, -0.016284177, -0.014159557, -0.015297256, 0.011260481, 0.0115826, 0.0128299575, -0.007621214, -0.014022485, -0.012363912, 0.0014512518, 0.023644954, 0.02158887, 0.01971098, 0.0078336755, 0.004705003, 0.0062607722, 0.020190734, 0.02006737, -0.019107863, 0.011952695, -0.019327179, 0.019628737, -0.013556439, -0.0066137332, 0.027825655, 0.00047289906, 0.009649882, -0.015406914, -0.0034216645, -0.020684194, -0.0065554776, -0.01266547, -0.010753313, 0.02016332, -0.018806305, -0.0072579724, -0.016818758, -0.013762048, -0.0081078205, -0.032952156, 0.01661315, -0.012219986, -0.011514064, 0.03169109, -0.024261778, 0.0005153058, -0.0007594656, -0.01818948, 0.026098546, 0.007648628, -0.0021006314, -0.005918092, 0.02143809, -0.017380754, -0.00031376682, -0.0059455065, 0.012219986, -0.0068604634, 0.004283506, -0.027291073, -0.030238125, 0.017750848, -0.019327179, -0.003810607, -0.021602577, 0.021465505, 0.036707934, 0.011801915, 0.004382883, -0.0028151202, 0.0036461202, -0.0018761756, -0.0021880148, -0.030046225, 0.015763301, 0.03563877, -0.0028408212, -0.006127127, 0.01971098, 0.018902255, -0.0025152748, -0.002325087, 0.020889802, 0.031142801, 0.028894817, -0.007429313, 0.0017313932, 0.011438674, -0.025509134, 0.005842702, -0.011856745, 0.025056796, 0.0007873084, 0.019546494, 0.014611895, -0.005088805, -0.011116555, -0.09907578, -0.04421949, 0.009972002, 0.0136935115, 0.015297256, 0.025015675, -0.005164195, 0.022959592, -0.012487276, 0.038709186, 0.0028562418, -0.021396969, -0.00061596814, 0.0077308714, 0.0115826, -0.00037137998, -0.027674876, -0.011555186, -0.022630619, 0.013638683, -0.013851145, -0.016873587, -0.010444901, -0.019217521, -8.918393e-07, 0.00072348415, -0.035254966, 0.028894817, 0.03662569, 0.007038657, 0.030238125, -0.02153404, 0.021301018, -0.038078655, 0.0019464251, 0.007991308, -0.018724062, 0.00628476, 0.019930298, -0.028593259, -0.001396423, 0.0003814462, 0.015516572, -0.03001881, 0.010773874, -0.02213716, 0.00027500108, 0.0010991476, 0.012007524, -0.013241174, -0.013097248, 0.018710354, -0.0021211922, -0.014735261, 0.0070146695, -0.020862387, -0.014063607, 0.0059832013, -0.018737769, 0.004228677, 0.006229931, -0.019628737, -0.00041314415, 0.013556439, 0.022260524, 0.0019738395, -0.0149682835, -0.001852188, 0.004776966, -0.018614404, -0.0011445528, -0.012219986, -0.02681132, 0.0461385, -0.021136532, -0.0007084919, -0.019724688, -0.020204442, 0.01365239, -0.032869913, -0.0044308584, -0.030594513, 0.0014675291, -0.008190064, 0.012377619, -0.0052258773, -0.003896277, 0.0078062615, 0.0057124835, -0.034624435, 0.03328113, 0.0022394168, 0.025892938, -0.011925281, -0.025097918, -0.002141753, -0.011445528, -0.0019190107, 0.032020062, -0.01739446, -0.0038174605, -0.0042526647, -0.08059845, 0.021109117, -0.002631786, -0.0049071843, 0.0144337015, 0.0035673038, 0.015982617, -0.036762763, -0.0062402114, -0.0041361535, -0.022041209, 0.010760167, -0.0057810196, -0.010019978, -0.00223599, -0.024878602, 0.019532787, 0.005465754, 0.030621927, 0.016010031, 0.012761421, 0.011308456, 0.019286057, -0.001992687, -0.013028712, 0.00768975, -0.016654272, 0.0029367716, 0.0019464251, -0.020423757, 0.00803243, -0.006428686, -0.014419994, 0.04268428, -0.0003623846, -0.008190064, -0.0047975266, 0.0011676837, -0.00454737, 0.006805634, -0.0066582817, -0.01710661, 0.01788792, -0.018011287, -0.011013751, -0.012014378, -0.011246773, 0.011692258, 0.016476078, -0.013056126, 0.015955202, 0.025796987, -0.016325299, -0.017682312, -0.017983872, -0.054691803, 0.023987634, -0.0020166747, -0.0060311765, -0.016476078, -0.0011616868, 0.033198886, 0.015763301, -0.0074498737, 0.008251746, -0.008477915, -0.016489785, -0.015173892, 0.03234904, -0.019985126, 0.000744045, -0.021410676, 0.016791344, -0.015242428, -0.002912784, -0.0014058467, -0.004824941, -0.0035673038, -0.008320282, 0.025344647, 0.013076687, -0.004735844, -0.034130976, 0.017312218, 0.016832465, 0.017380754, -0.02508421, -0.00808726, 0.013522171, 0.012439301, 0.014707847, 0.017147731, 0.006517783, -0.0010854404, 0.013782609, 0.008512183, -0.009451128, -0.014378873, 0.010636802, 0.023891684, 0.01809353, -0.012946469, -0.014337751, -0.011644282, -0.0018453344, 0.012069207, 0.0038585821, -0.020478586, -0.011843038, 0.02208233, 0.022109745, 0.005753605, -0.005650801, 0.022904763, -0.02119136, 0.017462997, -0.0059283725, -0.008662962, -0.015585108, 0.035227552, 0.05249865, 0.007634921, 0.015489157, -0.012781982, 0.021026874, 0.013741488, 0.0053423885, -0.024330314, 0.018724062, -0.008450501, 0.008025576, -0.01824431, -0.014762675, -0.014173265, -0.020793851, -0.0004604769, 0.014214386, 0.020670487, -0.019656152, 0.072593436, -0.0074224593, -0.0040539103, 0.00272431, 0.006336162, 0.021013167, 0.006805634, 0.016681686, -0.019203814, -0.009848637, 0.012857372, 0.015077941, 0.011959549, -0.017929042, -0.009320909, -0.0033120068, -0.023192614, 0.008985083, -0.022603204, 0.0060003353, 0.025207575, 0.02445368, 0.008827449, -0.006007189, -0.027647462, -0.010602534, 0.011150823, -0.0067131105, -0.0045884917, -0.041286144, 0.019395715, -0.006212797, -0.053293668, -0.01912157, 0.018326553, -0.016530907, -0.011198798, 0.0027448707, 0.027784534, -0.0013390239, -0.024508508, 0.023754612, -0.021259896, -0.017257389, 0.022027502, -0.012103475, -0.013535879, -0.015667351, 0.0061511146
Modelos de incorporação

O modelo de incorporação da OpenAI text-embedding-ada-002criou essa incorporação - um vetor de 1.536 dimensões.

Os provedores de LLM geralmente expõem endpoints de API que convertem um trecho de texto em um vetor incorporado. Dependendo do provedor, o formato e o tamanho do vetor podem variar.

Embora seja possível criar representações vetoriais para palavras individuais, é mais comum incorporar frases ou parágrafos inteiros, já que o significado de uma palavra pode mudar dependendo do contexto.

Por exemplo, a palavra "bank" terá um vetor diferente em "river bank" do que em "saving bank" .

Os sistemas de busca semântica podem usar essas representações contextuais para entender a intenção do usuário.

Os embeddings podem representar mais do que apenas texto. Eles também podem representar documentos inteiros, imagens, áudio ou outros tipos de dados.

Como os vetores são usados ​​na busca semântica?
Você pode usar a distância ou o ângulo entre vetores para avaliar a similaridade semântica entre palavras ou frases.

Palavras com significados ou contextos semelhantes terão vetores próximos uns dos outros, enquanto palavras não relacionadas estarão mais distantes.

Um gráfico tridimensional ilustrando a distância entre vetores. Os vetores representam as palavras "maçã" e "fruta".
TRAPO
A busca semântica é empregada em algoritmos RAG baseados em vetores para encontrar resultados contextualmente relevantes para a pergunta de um usuário.

Um modelo de incorporação é usado para criar uma representação vetorial dos dados de origem.

Um diagrama mostrando os dados sendo processados ​​por um modelo de incorporação para criar uma representação vetorial dos dados. Os dados são então armazenados em um índice vetorial.
Quando um usuário envia uma pergunta, o sistema:

Cria uma representação incorporada da pergunta.

Compara o vetor da pergunta com os vetores dos dados indexados.

Os resultados são pontuados com base em sua similaridade.

Os resultados mais relevantes são usados ​​como contexto para o LLM.

Um diagrama mostrando uma pergunta do usuário sendo processada por um modelo de incorporação para criar uma representação vetorial da pergunta. O vetor da pergunta é então comparado aos vetores dos dados indexados. Os resultados mais relevantes são usados ​​como contexto para o modelo de aprendizado de máquina (LLM).
Saiba mais sobre vetores e incorporações.

Você pode aprender mais sobre vetores, embeddings e busca semântica no curso da GraphAcademy " Introdução a Índices Vetoriais e Dados Não Estruturados".
Verifique se você entendeu
Qual das seguintes opções descreve melhor um embedding no contexto de aprendizado de máquina?
 Uma lista de palavras-chave usadas para etiquetar documentos.
 Uma tabela de banco de dados que armazena dados de texto.
 Uma série de números (vetor) que representam os dados.
 Um tipo de rede neural usada para reconhecimento de imagens.
Confira a resposta
35%
O que é RAG?
Índices vetoriais
Esta lição foi útil?SimNão




---



Fundamentos do Neo4j e IA Generativa ›
Grafos de conhecimento

Sérgio
Fundamentos do Neo4j e IA Generativa

IA generativa
O que é IA generativa?
Considerações
Contexto
Geração Aumentada de Recuperação (RAG)
O que é RAG?
Vetor RAG
Índices vetoriais
GraphRAG
Grafos de conhecimento
O que é um grafo de conhecimento?
Criação de Grafos de Conhecimento
Integrando o Neo4j com IA Generativa
GraphRAG para Python
Recuperador de vetores
Gasoduto RAG
Recuperador de vetores aprimorado por grafos
Recuperador de texto para código cifrado
Estruturas GenAI

Português (Brasil)
Powered by Google TradutorTradutor
Grafos de conhecimento
Visão geral do módulo
Neste módulo, você aprenderá:

O que são grafos de conhecimento e como eles representam entidades do mundo real e seus relacionamentos.

O processo de construção de grafos de conhecimento a partir de fontes de dados estruturados e não estruturados.

Como identificar entidades, atributos e relacionamentos em seus dados e mapeá-los para um esquema de grafo.

As vantagens de usar grafos de conhecimento para organizar, integrar e consultar informações complexas.

Se você estiver pronto, vamos começar!

Preparados? Vamos lá →

50%
GraphRAG
O que é um grafo de conhecimento?


---



Fundamentos do Neo4j e IA Generativa ›
Integrando o Neo4j com IA Generativa

Sérgio
Fundamentos do Neo4j e IA Generativa

IA generativa
O que é IA generativa?
Considerações
Contexto
Geração Aumentada de Recuperação (RAG)
O que é RAG?
Vetor RAG
Índices vetoriais
GraphRAG
Grafos de conhecimento
O que é um grafo de conhecimento?
Criação de Grafos de Conhecimento
Integrando o Neo4j com IA Generativa
GraphRAG para Python
Recuperador de vetores
Gasoduto RAG
Recuperador de vetores aprimorado por grafos
Recuperador de texto para código cifrado
Estruturas GenAI

Português (Brasil)
Powered by Google TradutorTradutor
Integrando o Neo4j com IA Generativa
Visão geral do módulo
Neste módulo, você irá configurar e usar o pacote Neo4j GraphRAG para Python para:

Crie e configure um recuperador de vetores.

Realize uma busca semântica usando um índice vetorial.

Construa um pipeline GraphRAG que utilize retrievers para fornecer contexto a um LLM.

Utilize a busca em grafos em combinação com a busca vetorial para uma recuperação aprimorada.

Implementar a recuperação de texto para criptografia para consultas em linguagem natural.

Além disso, você explorará frameworks populares do GenAI para integração com o Neo4j, como LangChain e LlamaIndex.

Se você estiver pronto, vamos começar!

Preparados? Vamos lá →

65%
Criação de Grafos de Conhecimento
GraphRAG para Python



---



Fundamentos do Neo4j e IA Generativa › Integrando o Neo4j com IA Generativa
GraphRAG para Python

Sérgio
Fundamentos do Neo4j e IA Generativa

IA generativa
O que é IA generativa?
Considerações
Contexto
Geração Aumentada de Recuperação (RAG)
O que é RAG?
Vetor RAG
Índices vetoriais
GraphRAG
Grafos de conhecimento
O que é um grafo de conhecimento?
Criação de Grafos de Conhecimento
Integrando o Neo4j com IA Generativa
GraphRAG para Python
Recuperador de vetores
Gasoduto RAG
Recuperador de vetores aprimorado por grafos
Recuperador de texto para código cifrado
Estruturas GenAI

Português (Brasil)
Powered by Google TradutorTradutor
Lição
GraphRAG para Python
O pacote GraphRAG para Pythonneo4j-graphrag ( ) permite acessar funções de IA generativa do Neo4j, incluindo:

Retrievers

Pipelines GraphRAG

Construção de grafo de conhecimento

O objetivo é fornecer um pacote completo para desenvolvedores, onde o Neo4j possa garantir compromisso e manutenção a longo prazo, além de lançar rapidamente novos recursos e padrões e métodos de alto desempenho.

Você usará o neo4j-graphragpacote para criar funções de recuperação e implementar aplicações simples que utilizam o GraphRAG para fornecer contexto às consultas LLM.

Você precisa configurar um ambiente de desenvolvimento para executar os exemplos de código e os exercícios.

Comece agora
O repositório neo4j-graphacademy/genai-fundamentals foi criado para este curso. Ele contém todo o código inicial e os recursos necessários.

Você pode usar um codespace do GitHub como um ambiente de desenvolvimento integrado (IDE) e espaço de trabalho online para este curso. Ele clonará automaticamente o repositório do curso e configurará seu ambiente.

Abrir no GitHub Codespace

Espaços de código do GitHub

Você precisará fazer login com uma conta do GitHub. O uso gratuito mensal do GitHub Codespaces cobrirá a duração deste curso.

Desenvolva em sua máquina local.
Configure o ambiente
Crie uma cópia do .env.examplearquivo e dê um nome a ela .env. Preencha os valores necessários.

Crie um arquivo .env

Cópia
OPENAI_API_KEY="sk-..."
NEO4J_URI="bolt://13.222.34.215:7687"
NEO4J_USERNAME="neo4j"
NEO4J_PASSWORD="paragraph-odor-legislation"
NEO4J_DATABASE="neo4j"
Adicione sua chave de API OpenAI ( OPENAI_API_KEY), que você pode obter em platform.openai.com .

Teste sua configuração
Você pode testar sua configuração executando o seguinte comando genai-fundamentals/test_environment.py: `npm test`. Este comando tentará conectar-se ao ambiente de testes (sandbox) do Neo4j e à API da OpenAI.

Você verá uma OKmensagem se tiver configurado seu ambiente corretamente. Se algum teste falhar, verifique o conteúdo do .envarquivo.

Continuar
Quando estiver pronto, você poderá passar para a próxima tarefa.

Sucesso! Vamos começar!
70%
Integrando o Neo4j com IA Generativa
Recuperador de vetores
Esta lição foi útil?SimNão




Texto original
You must set up a development environment to run the code examples and exercises.
Avalie a tradução
O feedback vai ser usado para ajudar a melhorar o Google Tradutor  



---



Fundamentos do Neo4j e IA Generativa › Integrando o Neo4j com IA Generativa
GraphRAG para Python

Sérgio
Fundamentos do Neo4j e IA Generativa

IA generativa
O que é IA generativa?
Considerações
Contexto
Geração Aumentada de Recuperação (RAG)
O que é RAG?
Vetor RAG
Índices vetoriais
GraphRAG
Grafos de conhecimento
O que é um grafo de conhecimento?
Criação de Grafos de Conhecimento
Integrando o Neo4j com IA Generativa
GraphRAG para Python
Recuperador de vetores
Gasoduto RAG
Recuperador de vetores aprimorado por grafos
Recuperador de texto para código cifrado
Estruturas GenAI

Português (Brasil)
Powered by Google TradutorTradutor
Lição
GraphRAG para Python
O pacote GraphRAG para Pythonneo4j-graphrag ( ) permite acessar funções de IA generativa do Neo4j, incluindo:

Retrievers

Pipelines GraphRAG

Construção de grafo de conhecimento

O objetivo é fornecer um pacote completo para desenvolvedores, onde o Neo4j possa garantir compromisso e manutenção a longo prazo, além de lançar rapidamente novos recursos e padrões e métodos de alto desempenho.

Você usará o neo4j-graphragpacote para criar funções de recuperação e implementar aplicações simples que utilizam o GraphRAG para fornecer contexto às consultas LLM.

Você precisa configurar um ambiente de desenvolvimento para executar os exemplos de código e os exercícios.

Comece agora
O repositório neo4j-graphacademy/genai-fundamentals foi criado para este curso. Ele contém todo o código inicial e os recursos necessários.

Você pode usar um codespace do GitHub como um ambiente de desenvolvimento integrado (IDE) e espaço de trabalho online para este curso. Ele clonará automaticamente o repositório do curso e configurará seu ambiente.

Abrir no GitHub Codespace

Espaços de código do GitHub

Você precisará fazer login com uma conta do GitHub. O uso gratuito mensal do GitHub Codespaces cobrirá a duração deste curso.

Desenvolva em sua máquina local.
Configure o ambiente
Crie uma cópia do .env.examplearquivo e dê um nome a ela .env. Preencha os valores necessários.

Crie um arquivo .env

Cópia
OPENAI_API_KEY="sk-..."
NEO4J_URI="bolt://13.222.34.215:7687"
NEO4J_USERNAME="neo4j"
NEO4J_PASSWORD="paragraph-odor-legislation"
NEO4J_DATABASE="neo4j"
Adicione sua chave de API OpenAI ( OPENAI_API_KEY), que você pode obter em platform.openai.com .

Teste sua configuração
Você pode testar sua configuração executando o seguinte comando genai-fundamentals/test_environment.py: `npm test`. Este comando tentará conectar-se ao ambiente de testes (sandbox) do Neo4j e à API da OpenAI.

Você verá uma OKmensagem se tiver configurado seu ambiente corretamente. Se algum teste falhar, verifique o conteúdo do .envarquivo.

Continuar
Quando estiver pronto, você poderá passar para a próxima tarefa.

Sucesso! Vamos começar!
70%
Integrando o Neo4j com IA Generativa
Recuperador de vetores
Esta lição foi útil?SimNão




Texto original
The GraphRAG for Python package () allows you to access Neo4j Generative AI functions including:
Avalie a tradução
O feedback vai ser usado para ajudar a melhorar o Google Tradutor

Neo4j Graph Data Science Client API Reference
Graph Data Science Client API Reference
Contents:

Introduction
User Guide: RAG
User Guide: Knowledge Graph Builder
User Guide: Pipeline
API Documentation
Types
Quick search
 
Index
Alphabetical
Tree
GraphRAG for Python
This package contains the official Neo4j GraphRAG features for Python.

The purpose of this package is to provide a first party package to developers, where Neo4j can guarantee long term commitment and maintenance as well as being fast to ship new features and high performing patterns and methods.

⚠️ This package is a renamed continuation of neo4j-genai. The package neo4j-genai is deprecated and will no longer be maintained. We encourage all users to migrate to this new package to continue receiving updates and support.

Neo4j versions supported:

Neo4j >=5.18.1

Neo4j Aura >=5.18.0

Neo4j 2026.01+ (enables SEARCH clause with in-index filtering)

Python versions supported:

Python 3.14

Python 3.13

Python 3.12

Python 3.11

Python 3.10

Topics
User Guide: RAG

User Guide: Knowledge Graph Builder

User Guide: Pipeline

API Documentation

Types

Usage
Installation
This package requires Python (>=3.10).

To install the latest stable version, use:

pip install neo4j-graphrag
Note It is always recommended to install python packages for user space in a virtual environment.
Optional Dependencies
Extra dependencies can be installed with:

pip install "neo4j-graphrag[openai]"
List of extra dependencies:

LLM providers (at least one is required for RAG and KG Builder Pipeline):
ollama: LLMs from Ollama

openai: LLMs from OpenAI (including AzureOpenAI)

google: LLMs from Vertex AI

cohere: LLMs from Cohere

anthropic: LLMs from Anthropic

mistralai: LLMs from MistralAI

sentence-transformers : to use embeddings from the sentence-transformers Python package

Vector database (to use External Retrievers):
weaviate: store vectors in Weaviate

pinecone: store vectors in Pinecone

qdrant: store vectors in Qdrant

experimental: experimental features mainly from the Knowledge Graph creation pipelines.

nlp: installs spaCy for nlp pipelines, used by SpaCySemanticMatchResolver component from the Knowledge Graph creation pipelines.

fuzzy-matching: installs rapidfuzz to fuzzy matching using string similarity, used by FuzzyMatchResolver component from the Knowledge Graph creation pipelines.

Note The `nlp` extra (spaCy) is currently not supported on Python 3.14 due to an upstream spaCy import-time issue (see spaCy #13895). Use Python 3.13 or earlier for spaCy-based features until that is resolved upstream.
Examples
Creating a vector index
When creating a vector index, make sure you match the number of dimensions in the index with the number of dimensions the embeddings have.

See the API documentation for more details.

from neo4j import GraphDatabase
from neo4j_graphrag.indexes import create_vector_index

URI = "neo4j://localhost:7687"
AUTH = ("neo4j", "password")

INDEX_NAME = "vector-index-name"

# Connect to Neo4j database
driver = GraphDatabase.driver(URI, auth=AUTH)

# Creating the index
create_vector_index(
    driver,
    INDEX_NAME,
    label="Document",
    embedding_property="vectorProperty",
    dimensions=1536,
    similarity_fn="euclidean",
)
Note Assumed Neo4j is running
On Neo4j 2026.01+, you can also specify filterable_properties to enable in-index filtering with the SEARCH clause. See Create a Vector Index with Filterable Properties for details.

Populating the Neo4j Vector Index
Note that the below example is not the only way you can upsert data into your Neo4j database. For example, you could also leverage the Neo4j Python driver.

from neo4j import GraphDatabase
from neo4j_graphrag.indexes import upsert_vectors
from neo4j_graphrag.types import EntityType

URI = "neo4j://localhost:7687"
AUTH = ("neo4j", "password")

# Connect to Neo4j database
driver = GraphDatabase.driver(URI, auth=AUTH)

# Upsert the vector
vector = ...
upsert_vectors(
    driver,
    ids=["1234"],
    embedding_property="vectorProperty",
    embeddings=[vector],
    entity_type=EntityType.NODE,
)
Note Assumed Neo4j is running with a defined vector index
Performing a similarity search
While the library has more retrievers than shown here, the following examples should be able to get you started.

from neo4j import GraphDatabase
from neo4j_graphrag.embeddings.openai import OpenAIEmbeddings
from neo4j_graphrag.retrievers import VectorRetriever

URI = "neo4j://localhost:7687"
AUTH = ("neo4j", "password")

INDEX_NAME = "vector-index-name"

# Connect to Neo4j database
driver = GraphDatabase.driver(URI, auth=AUTH)

# Create Embedder object
# Note: An OPENAI_API_KEY environment variable is required here
embedder = OpenAIEmbeddings(model="text-embedding-3-large")

# Initialize the retriever
retriever = VectorRetriever(driver, INDEX_NAME, embedder)

# Run the similarity search
query_text = "How do I do similarity search in Neo4j?"
response = retriever.search(query_text=query_text, top_k=5)
Note Assumed Neo4j is running with populated vector index in place.
Limitations
The query over the vector index is an approximate nearest neighbor search and may not give exact results. See this reference for more details.

Development
Install dependencies
uv sync --all-extras
Getting started
Issues
If you have a bug to report or feature to request, first search to see if an issue already exists. If a related issue doesn’t exist, please raise a new issue using the relevant issue form.

If you’re a Neo4j Enterprise customer, you can also reach out to Customer Support.

If you don’t have a bug to report or feature request, but you need a hand with the library; community support is available via Neo4j Online Community and/or Discord.

Make changes
Fork the repository.

Install Python and uv.

Create a working branch from main and start with your changes!

Pull request
When you’re finished with your changes, create a pull request, also known as a PR.

Ensure that you have signed the CLA.

Ensure that the base of your PR is set to main.

Don’t forget to link your PR to an issue if you are solving one.

Enable the checkbox to allow maintainer edits so that maintainers can make any necessary tweaks and update your branch for merge.

Reviewers may ask for changes to be made before a PR can be merged, either using suggested changes or normal pull request comments. You can apply suggested changes directly through the UI, and any other changes can be made in your fork and committed to the PR branch.

As you update your PR and apply changes, mark each conversation as resolved.

Run tests
Run the tests using uv.

uv run pytest
Unit tests
This should run out of the box once the dependencies are installed.

uv run pytest tests/unit
E2E tests
To run e2e tests you’d need to have some services running locally:

neo4j

weaviate

weaviate-text2vec-transformers

The easiest way to get it up and running is via Docker compose:

docker compose -f tests/e2e/docker-compose.yml up
Note If you suspect something in the databases are cached, run docker compose -f tests/e2e/docker-compose.yml down to remove them completely
Once the services are running, execute the following command to run the e2e tests.

uv run pytest tests/e2e
Further information
The official Neo4j Python driver

Neo4j GenAI integrations

© Neo4j, Inc.
Terms | Privacy | Sitemap

Neo4j®, Neo Technology®, Cypher®, Neo4j® Bloom™ and Neo4j® Aura™ are registered trademarks of Neo4j, Inc. All other marks are owned by their respective companies.

Contact Us →
US: 1-855-636-4532
Sweden +46 171 480 113
UK: +44 20 3868 3223
France: +33 (0) 1 88 46 13 20

Learn
 Sandbox
 Neo4j Community Site
 Neo4j Developer Blog
 Neo4j Videos
 GraphAcademy
 Neo4j Labs
Social
 Twitter
 Meetups
 Github
 Stack Overflow
Want to Speak?



---

https://github.com/codespaces

---




Fundamentos do Neo4j e IA Generativa › Integrando o Neo4j com IA Generativa
Recuperador de vetores

Sérgio
Fundamentos do Neo4j e IA Generativa

IA generativa
O que é IA generativa?
Considerações
Contexto
Geração Aumentada de Recuperação (RAG)
O que é RAG?
Vetor RAG
Índices vetoriais
GraphRAG
Grafos de conhecimento
O que é um grafo de conhecimento?
Criação de Grafos de Conhecimento
Integrando o Neo4j com IA Generativa
GraphRAG para Python
Recuperador de vetores
Gasoduto RAG
Recuperador de vetores aprimorado por grafos
Recuperador de texto para código cifrado
Estruturas GenAI

Português (Brasil)
Powered by Google TradutorTradutor
Lição
Recuperador de vetores
Nesta lição, você criará um recuperador vetorial para obter dados relevantes do Neo4j.

Um recuperador é um componente que recebe dados não estruturados (normalmente uma consulta do usuário) e recupera os dados relevantes.

Você criará um recuperador vetorial que encontrará filmes semelhantes com base na sinopse. O recuperador usará o moviePlotsíndice vetorial que você utilizou para buscar filmes semelhantes usando Cypher.

Para encontrar filmes semelhantes usando um mecanismo de busca, você precisa:

Conecte-se a um banco de dados Neo4j

Crie um componente incorporador para converter as consultas dos usuários em vetores.

Crie um recuperador que utilize o moviePlotsíndice vetorial.

Use o recuperador para pesquisar filmes semelhantes usando a consulta do usuário.

Analise os resultados

Abra o genai-fundamentals/vector_retriever.pyarquivo e revise o programa:

Python
vector_retriever.py

Cópia
import os
from dotenv import load_dotenv
load_dotenv()

from neo4j import GraphDatabase

# Connect to Neo4j database
driver = GraphDatabase.driver(
    os.getenv("NEO4J_URI"), 
    auth=(
        os.getenv("NEO4J_USERNAME"), 
        os.getenv("NEO4J_PASSWORD")
    )
)

# Create embedder

# Create retriever

# Search for similar items

# Parse results

# CLose the database connection
driver.close()
O programa inclui o código para conectar-se ao banco de dados Neo4j usando o driver Python do Neo4j .

Saiba mais sobre o driver Python do Neo4j

Você pode aprender mais sobre o driver Python do Neo4j no curso " Usando o Neo4j com Python" da Graph Academy .
Incorporador
Crie o componente incorporador que converterá a consulta do usuário em um vetor:

Python

Cópia
from neo4j_graphrag.embeddings.openai import OpenAIEmbeddings

# Create embedder
embedder = OpenAIEmbeddings(model="text-embedding-ada-002")
Use o mesmo modelo de incorporação

Você deve usar o mesmo modelo de incorporação usado para criar as incorporações dos gráficos do filme, text-embedding-ada-002para garantir que os vetores sejam compatíveis.

O neo4j-graphragpacote suporta múltiplos modelos de incorporação e a possibilidade de criar sua própria interface.

Retriever
Crie o recuperador que utilizará o moviePlotsíndice vetorial:

Python

Cópia
from neo4j_graphrag.retrievers import VectorRetriever

# Create retriever
retriever = VectorRetriever(
    driver,
    neo4j_database=os.getenv("NEO4J_DATABASE"),
    index_name="moviePlots",
    embedder=embedder,
    return_properties=["title", "plot"],
)
O recuperador permite especificar quais propriedades devem ser retornadas dos nós que correspondem à consulta.

Procurar
Você pode usar o recuperador para pesquisar o índice vetorial, passando uma consulta e o número de resultados a serem retornados. O recuperador usará o incorporador para converter a consulta em um vetor a ser usado na pesquisa.

Procure filmes semelhantes:

Python

Cópia
# Search for similar items
result = retriever.search(query_text="Toys coming alive", top_k=5)
O searchmétodo retorna uma lista de resultados itemsque correspondem à consulta.

Percorra os itens e imprima os resultados:

Python

Cópia
# Parse results
for item in result.items:
    print(item.content, item.metadata["score"])
Clique para visualizar o código completo.
Execute o programa para buscar filmes semelhantes com base em uma consulta.

Você deveria assistir ao filme titles, plotse observar a semelhança scorenos horários encontrados.

Clique para revelar um exemplo típico.
Experimente com diferentes consultas para encontrar filmes diferentes.

Verifique se você entendeu
Papel dos Incorporadores
Por que você precisa de um embender ao pesquisar em um índice vetorial?

 Converter a consulta do usuário em um vetor.
 Para armazenar os resultados da pesquisa.
 Exibir os resultados da pesquisa para o usuário.
 Para criar o índice vetorial no banco de dados.
Confira a resposta
75%
GraphRAG para Python
Gasoduto RAG
Esta lição foi útil?SimNão




---



Fundamentos do Neo4j e IA Generativa › Integrando o Neo4j com IA Generativa
Gasoduto RAG

Sérgio
Fundamentos do Neo4j e IA Generativa

IA generativa
O que é IA generativa?
Considerações
Contexto
Geração Aumentada de Recuperação (RAG)
O que é RAG?
Vetor RAG
Índices vetoriais
GraphRAG
Grafos de conhecimento
O que é um grafo de conhecimento?
Criação de Grafos de Conhecimento
Integrando o Neo4j com IA Generativa
GraphRAG para Python
Recuperador de vetores
Gasoduto RAG
Recuperador de vetores aprimorado por grafos
Recuperador de texto para código cifrado
Estruturas GenAI

Português (Brasil)
Powered by Google TradutorTradutor
Lição
Gasoduto RAG
Você pode usar um mecanismo de recuperação como parte de um pipeline RAG (Geração Aumentada por Recuperação) para fornecer contexto a um LLM.

Nesta lição, você usará o recuperador de vetores que criou para passar contexto adicional para um modelo de aprendizagem de linguagem (LLM), permitindo que ele gere respostas mais precisas e relevantes.

Abra o genai-fundamentals/vector_rag.pyarquivo e revise o programa:

Python
vector_rag.py

Cópia
import os
from dotenv import load_dotenv
load_dotenv()

from neo4j import GraphDatabase
from neo4j_graphrag.embeddings.openai import OpenAIEmbeddings
from neo4j_graphrag.retrievers import VectorRetriever

# Connect to Neo4j database
driver = GraphDatabase.driver(
    os.getenv("NEO4J_URI"), 
    auth=(
        os.getenv("NEO4J_USERNAME"), 
        os.getenv("NEO4J_PASSWORD")
    )
)

# Create embedder
embedder = OpenAIEmbeddings(model="text-embedding-ada-002")

# Create retriever
retriever = VectorRetriever(
    driver,
    neo4j_database=os.getenv("NEO4J_DATABASE"),
    index_name="moviePlots",
    embedder=embedder,
    return_properties=["title", "plot"],
)

# Create the LLM

# Create GraphRAG pipeline

# Search 

# CLose the database connection
driver.close()
O programa inclui o código para conectar-se ao Neo4j e criar o recuperador de vetores.

Você adicionará o código a:

Criar e configurar o LLM

Crie o pipeline GraphRAG para usar o recuperador de vetores.

Envie uma consulta ao pipeline RAG.

Analise os resultados

Mestrado em Direito
Você precisará de um LLM para gerar a resposta com base na consulta do usuário e no contexto fornecido pelo recuperador de vetores.

Crie o LLM usando a OpenAILLMclasse do neo4j_graphragpacote:

Python

Cópia
from neo4j_graphrag.llm import OpenAILLM

# Create the LLM
llm = OpenAILLM(model_name="gpt-5.2")
O LLM está configurado para usar gpt-5.2. Você pode alterar a configuração para outro modelo da OpenAI alterando o modelparâmetro.

Você também pode alterar parâmetros model_paramscomo o `render` reasoning_effortpara controlar a quantidade de raciocínio que o LLM realizará ao gerar uma resposta. Um lowesforço de raciocínio elevado resultará em uma resposta mais rápida, porém possivelmente menos precisa, enquanto um highesforço de raciocínio insuficiente resultará em uma resposta mais lenta, porém possivelmente mais precisa.

Python

Cópia
# Modify the LLM configuration if needed
llm=OpenAILLM(
    model_name="gpt-5-mini",
    model_params={
        "reasoning_effort": "low"
    }
)
Suporte ao modelo LLM

O neo4j-graphragpacote suporta múltiplos modelos LLM e a possibilidade de criar sua própria interface.
Pipeline GraphRAG
A GraphRAGclasse permite criar um pipeline RAG, incluindo um recuperador e um LLM.

Crie o GraphRAGpipeline usando o retrievere o que llmvocê criou:

Python

Cópia
from neo4j_graphrag.generation import GraphRAG

# Create GraphRAG pipeline
rag = GraphRAG(retriever=retriever, llm=llm)
O GraphRAGgasoduto irá:

Utilize o mecanismo de recuperação para encontrar o contexto relevante com base na consulta do usuário.

Passe a consulta do usuário e o contexto de recuperação para o LLM.

Procurar
Você pode usar esse searchmétodo para enviar uma consulta.

Python

Cópia
# Search
query_text = "Find me movies about toys coming alive"

response = rag.search(
    query_text=query_text, 
    retriever_config={"top_k": 5}
)

print(response.answer)
O searchmétodo recebe a consulta do usuário e retorna a resposta gerada pelo LLM. Você também pode especificar parâmetros adicionais retriever_config, como o número de resultados a serem retornados.

Clique para visualizar o código completo.
Execute o programa para buscar filmes semelhantes com base no enredo.

Contexto de retorno
Você também pode retornar o contexto usado para gerar a resposta. Isso pode ser útil para entender como o modelo de lógica de aprendizado de máquina (LLM) gerou a resposta.

Adicione o return_context=Trueparâmetro ao searchmétodo:

Python

Cópia
# Search
query_text = "Find me movies about toys coming alive"

response = rag.search(
    query_text=query_text, 
    retriever_config={"top_k": 5},
    return_context=True
)

print(response.answer)
print("CONTEXT:", response.retriever_result.items)
O valor retriever_resulté retornado juntamente com a resposta gerada.

Experimente com diferentes consultas e veja como o LLM gera respostas com base no contexto fornecido pelo recuperador de vetores.

Aleatoriedade

As respostas do LLM não serão consistentes e podem variar a cada execução do programa. Experimente com o temperatureparâmetro na configuração do LLM para ver como ele afeta a aleatoriedade da resposta gerada.

Verifique se você entendeu
Contexto
Verdadeiro ou falso: Usando o GraphRAGpipeline, o LLM gera uma resposta sem usar nenhum contexto do recuperador.

 Verdadeiro
 Falso
Confira a resposta
80%
Recuperador de vetores
Recuperador de vetores aprimorado por grafos
Esta lição foi útil?SimNão




Texto original
You can use a retriever as part of a RAG (Retrieval-Augmented Generation) pipeline to provide context to a LLM.
Avalie a tradução
O feedback vai ser usado para ajudar a melhorar o Google Tradutor 


---



Fundamentos do Neo4j e IA Generativa › Integrando o Neo4j com IA Generativa
Recuperador de vetores aprimorado por grafos

Sérgio
Fundamentos do Neo4j e IA Generativa

IA generativa
O que é IA generativa?
Considerações
Contexto
Geração Aumentada de Recuperação (RAG)
O que é RAG?
Vetor RAG
Índices vetoriais
GraphRAG
Grafos de conhecimento
O que é um grafo de conhecimento?
Criação de Grafos de Conhecimento
Integrando o Neo4j com IA Generativa
GraphRAG para Python
Recuperador de vetores
Gasoduto RAG
Recuperador de vetores aprimorado por grafos
Recuperador de texto para código cifrado
Estruturas GenAI

Português (Brasil)
Powered by Google TradutorTradutor
Lição
Recuperador de vetores aprimorado por grafos
Para tirar proveito das relações no grafo, você pode criar um mecanismo de recuperação que utilize tanto a busca vetorial quanto a travessia do grafo para encontrar dados relevantes.

Isso VectorCypherRetrieverpermite realizar buscas vetoriais e, em seguida, percorrer o grafo para encontrar nós ou entidades relacionadas.

Abra o genai_fundamentals/vector_cypher_rag.pyarquivo e revise o código:

Python
vector_cypher_rag.py

Cópia
import os
from dotenv import load_dotenv
load_dotenv()

from neo4j import GraphDatabase
from neo4j_graphrag.embeddings.openai import OpenAIEmbeddings
from neo4j_graphrag.llm import OpenAILLM
from neo4j_graphrag.generation import GraphRAG

# Connect to Neo4j database
driver = GraphDatabase.driver(
    os.getenv("NEO4J_URI"), 
    auth=(
        os.getenv("NEO4J_USERNAME"), 
        os.getenv("NEO4J_PASSWORD")
    )
)

# Create embedder
embedder = OpenAIEmbeddings(model="text-embedding-ada-002")

# Define retrieval query
retrieval_query =

# Create retriever
retriever = 

#  Create the LLM
llm = OpenAILLM(model_name="gpt-5.2")

# Create GraphRAG pipeline
rag = GraphRAG(retriever=retriever, llm=llm)

# Search
query_text = "Find the highest rated action movie about travelling to other planets"

response = rag.search(
    query_text=query_text, 
    retriever_config={"top_k": 5},
    return_context=True
)

print(response.answer)
print("CONTEXT:", response.retriever_result.items)

# Close the database connection
driver.close()
O programa inclui todo o código necessário para conectar-se ao Neo4j, criar o embedderpipeline llme GraphRAGo pipeline de dados.

Sua tarefa é:

Configure a consulta de recuperação Cypher que percorrerá o grafo.

Crie o VectorCypherRetrieverrecuperador.

Consulta de recuperação
A consulta de recuperação é uma consulta Cypher que será usada para obter dados do grafo após os nós serem retornados pela busca vetorial.

A consulta recebe as variáveis node​​`and` scoreobtidas pela busca vetorial.

Adicione esta consulta de recuperação ao código:

Python

Cópia
# Define retrieval query
retrieval_query = """
MATCH (node)<-[r:RATED]-()
RETURN 
  node.title AS title, node.plot AS plot, score AS similarityScore, 
  collect { MATCH (node)-[:IN_GENRE]->(g) RETURN g.name } as genres, 
  collect { MATCH (node)<-[:ACTED_IN]->(a) RETURN a.name } as actors, 
  avg(r.rating) as userRating
ORDER BY userRating DESC
"""
A consulta percorre o grafo para encontrar nós relacionados a gêneros e atores, além de classificar os resultados pela avaliação do usuário.

Retriever
Agora você pode usar a VectorCypherRetrieverclasse para criar um recuperador que realizará a busca vetorial e, em seguida, percorrerá o grafo:

Python

Cópia
from neo4j_graphrag.retrievers import VectorCypherRetriever

# Create retriever
retriever = VectorCypherRetriever(
    driver,
    neo4j_database=os.getenv("NEO4J_DATABASE"),
    index_name="moviePlots",
    embedder=embedder,
    retrieval_query=retrieval_query,
)
O recuperador requer o nome do índice do vetor ( moviePlots), a consulta de recuperação e o embedderpara codificar a consulta.

Clique para visualizar o código completo.
Contexto
Ao executar o código, ele realizará uma busca vetorial para a consulta fornecida e, em seguida, percorrerá o grafo para encontrar nós relacionados.

O contexto adicional permite que o LLM gere respostas mais precisas com base nos dados adicionais presentes no gráfico.

Transparência

O contexto é retornado após a resposta, permitindo que você veja quais dados foram usados ​​para gerar a resposta.

Essa transparência é importante para entender como o LLM chegou à sua resposta e para fins de depuração.

Ao receber a consulta "Encontre o filme de ação mais bem avaliado sobre viagens a outros planetas" , o pipeline GraphRAG seguirá os seguintes passos:

Realize uma busca vetorial por enredos de filmes relacionados a viagens para outros planetas .

Execute a consulta de recuperação para encontrar atores, gêneros e avaliações de usuários relacionados.

Passe os dados recuperados para o LLM para gerar uma resposta.

Você pode esperar uma resposta baseada em:

Viajar para outros planetas.

O gênero de ação.

Com a classificação mais alta dos usuários (não a pontuação de similaridade vetorial).

Uma resposta típica seria: "O filme de ação mais bem avaliado sobre viagens a outros planetas é 'Aliens', com uma classificação de 3,92 dos usuários."

Teste o código com diferentes consultas relacionadas a filmes, atores e gêneros, como:

Procure um filme de comédia sobre vampiros.

Quem atua em filmes dramáticos sobre romance e amor?

Quais são os gêneros cinematográficos representados em filmes nos quais o herói falha em sua missão?

Desafio opcional
Modifique a consulta de recuperação para incluir os diretores dos filmes no contexto.

Os diretores podem ser encontrados usando o padrão (node)←[:DIRECTED]-(director).

Experimente buscas relacionadas a diretores, como "Quem dirigiu filmes sobre casamentos?".

Continuar
Quando estiver pronto, continue para a próxima lição.

Continuar
85%
Gasoduto RAG
Recuperador de texto para código cifrado
Esta lição foi útil?SimNão




---

# Consulta de recuperação modificada para o desafio
retrieval_query = """
MATCH (node)<-[r:RATED]-()
RETURN 
  node.title AS title, 
  node.plot AS plot, 
  score AS similarityScore, 
  collect { MATCH (node)-[:IN_GENRE]->(g) RETURN g.name } as genres, 
  collect { MATCH (node)<-[:ACTED_IN]->(a) RETURN a.name } as actors, 
  collect { MATCH (node)<-[:DIRECTED]-(d) RETURN d.name } as directors, // <- Linha adicionada para o desafio
  avg(r.rating) as userRating
ORDER BY userRating DESC
"""






---



Fundamentos do Neo4j e IA Generativa › Integrando o Neo4j com IA Generativa
Recuperador de vetores aprimorado por grafos

Sérgio
Fundamentos do Neo4j e IA Generativa

IA generativa
O que é IA generativa?
Considerações
Contexto
Geração Aumentada de Recuperação (RAG)
O que é RAG?
Vetor RAG
Índices vetoriais
GraphRAG
Grafos de conhecimento
O que é um grafo de conhecimento?
Criação de Grafos de Conhecimento
Integrando o Neo4j com IA Generativa
GraphRAG para Python
Recuperador de vetores
Gasoduto RAG
Recuperador de vetores aprimorado por grafos
Recuperador de texto para código cifrado
Estruturas GenAI

Português (Brasil)
Powered by Google TradutorTradutor
Lição
Recuperador de vetores aprimorado por grafos
Para tirar proveito das relações no grafo, você pode criar um mecanismo de recuperação que utilize tanto a busca vetorial quanto a travessia do grafo para encontrar dados relevantes.

Isso VectorCypherRetrieverpermite realizar buscas vetoriais e, em seguida, percorrer o grafo para encontrar nós ou entidades relacionadas.

Abra o genai_fundamentals/vector_cypher_rag.pyarquivo e revise o código:

Python
vector_cypher_rag.py

Cópia
import os
from dotenv import load_dotenv
load_dotenv()

from neo4j import GraphDatabase
from neo4j_graphrag.embeddings.openai import OpenAIEmbeddings
from neo4j_graphrag.llm import OpenAILLM
from neo4j_graphrag.generation import GraphRAG

# Connect to Neo4j database
driver = GraphDatabase.driver(
    os.getenv("NEO4J_URI"), 
    auth=(
        os.getenv("NEO4J_USERNAME"), 
        os.getenv("NEO4J_PASSWORD")
    )
)

# Create embedder
embedder = OpenAIEmbeddings(model="text-embedding-ada-002")

# Define retrieval query
retrieval_query =

# Create retriever
retriever = 

#  Create the LLM
llm = OpenAILLM(model_name="gpt-5.2")

# Create GraphRAG pipeline
rag = GraphRAG(retriever=retriever, llm=llm)

# Search
query_text = "Find the highest rated action movie about travelling to other planets"

response = rag.search(
    query_text=query_text, 
    retriever_config={"top_k": 5},
    return_context=True
)

print(response.answer)
print("CONTEXT:", response.retriever_result.items)

# Close the database connection
driver.close()
O programa inclui todo o código necessário para conectar-se ao Neo4j, criar o embedderpipeline llme GraphRAGo pipeline de dados.

Sua tarefa é:

Configure a consulta de recuperação Cypher que percorrerá o grafo.

Crie o VectorCypherRetrieverrecuperador.

Consulta de recuperação
A consulta de recuperação é uma consulta Cypher que será usada para obter dados do grafo após os nós serem retornados pela busca vetorial.

A consulta recebe as variáveis node​​`and` scoreobtidas pela busca vetorial.

Adicione esta consulta de recuperação ao código:

Python

Cópia
# Define retrieval query
retrieval_query = """
MATCH (node)<-[r:RATED]-()
RETURN 
  node.title AS title, node.plot AS plot, score AS similarityScore, 
  collect { MATCH (node)-[:IN_GENRE]->(g) RETURN g.name } as genres, 
  collect { MATCH (node)<-[:ACTED_IN]->(a) RETURN a.name } as actors, 
  avg(r.rating) as userRating
ORDER BY userRating DESC
"""
A consulta percorre o grafo para encontrar nós relacionados a gêneros e atores, além de classificar os resultados pela avaliação do usuário.

Retriever
Agora você pode usar a VectorCypherRetrieverclasse para criar um recuperador que realizará a busca vetorial e, em seguida, percorrerá o grafo:

Python

Cópia
from neo4j_graphrag.retrievers import VectorCypherRetriever

# Create retriever
retriever = VectorCypherRetriever(
    driver,
    neo4j_database=os.getenv("NEO4J_DATABASE"),
    index_name="moviePlots",
    embedder=embedder,
    retrieval_query=retrieval_query,
)
O recuperador requer o nome do índice do vetor ( moviePlots), a consulta de recuperação e o embedderpara codificar a consulta.

Clique para visualizar o código completo.
Python

Cópia
import os
from dotenv import load_dotenv
load_dotenv()

from neo4j import GraphDatabase
from neo4j_graphrag.embeddings.openai import OpenAIEmbeddings
from neo4j_graphrag.retrievers import VectorCypherRetriever
from neo4j_graphrag.llm import OpenAILLM
from neo4j_graphrag.generation import GraphRAG

# Connect to Neo4j database
driver = GraphDatabase.driver(
    os.getenv("NEO4J_URI"), 
    auth=(
        os.getenv("NEO4J_USERNAME"), 
        os.getenv("NEO4J_PASSWORD")
    )
)

# Create embedder
embedder = OpenAIEmbeddings(model="text-embedding-ada-002")

# Define retrieval query
retrieval_query = """
MATCH (node)<-[r:RATED]-()
RETURN 
  node.title AS title, node.plot AS plot, score AS similarityScore, 
  collect { MATCH (node)-[:IN_GENRE]->(g) RETURN g.name } as genres, 
  collect { MATCH (node)<-[:ACTED_IN]->(a) RETURN a.name } as actors, 
  avg(r.rating) as userRating
ORDER BY userRating DESC
"""

# Create retriever
retriever = VectorCypherRetriever(
    driver,
    neo4j_database=os.getenv("NEO4J_DATABASE"),
    index_name="moviePlots",
    embedder=embedder,
    retrieval_query=retrieval_query,
)

#  Create the LLM
llm = OpenAILLM(model_name="gpt-5.2")

# Create GraphRAG pipeline
rag = GraphRAG(retriever=retriever, llm=llm)

# Search
query_text = "Find the highest rated action movie about travelling to other planets"

response = rag.search(
    query_text=query_text, 
    retriever_config={"top_k": 5},
    return_context=True
)

print(response.answer)
print("CONTEXT:", response.retriever_result.items)

# Close the database connection
driver.close()
Contexto
Ao executar o código, ele realizará uma busca vetorial para a consulta fornecida e, em seguida, percorrerá o grafo para encontrar nós relacionados.

O contexto adicional permite que o LLM gere respostas mais precisas com base nos dados adicionais presentes no gráfico.

Transparência

O contexto é retornado após a resposta, permitindo que você veja quais dados foram usados ​​para gerar a resposta.

Essa transparência é importante para entender como o LLM chegou à sua resposta e para fins de depuração.

Ao receber a consulta "Encontre o filme de ação mais bem avaliado sobre viagens a outros planetas" , o pipeline GraphRAG seguirá os seguintes passos:

Realize uma busca vetorial por enredos de filmes relacionados a viagens para outros planetas .

Execute a consulta de recuperação para encontrar atores, gêneros e avaliações de usuários relacionados.

Passe os dados recuperados para o LLM para gerar uma resposta.

Você pode esperar uma resposta baseada em:

Viajar para outros planetas.

O gênero de ação.

Com a classificação mais alta dos usuários (não a pontuação de similaridade vetorial).

Uma resposta típica seria: "O filme de ação mais bem avaliado sobre viagens a outros planetas é 'Aliens', com uma classificação de 3,92 dos usuários."

Teste o código com diferentes consultas relacionadas a filmes, atores e gêneros, como:

Procure um filme de comédia sobre vampiros.

Quem atua em filmes dramáticos sobre romance e amor?

Quais são os gêneros cinematográficos representados em filmes nos quais o herói falha em sua missão?

Desafio opcional
Modifique a consulta de recuperação para incluir os diretores dos filmes no contexto.

Os diretores podem ser encontrados usando o padrão (node)←[:DIRECTED]-(director).

Experimente buscas relacionadas a diretores, como "Quem dirigiu filmes sobre casamentos?".

Continuar
Quando estiver pronto, continue para a próxima lição.

Continuar
85%
Gasoduto RAG
Recuperador de texto para código cifrado
Esta lição foi útil?SimNão


---




Fundamentos do Neo4j e IA Generativa › Integrando o Neo4j com IA Generativa
Recuperador de texto para código cifrado

Sérgio
Fundamentos do Neo4j e IA Generativa

IA generativa
O que é IA generativa?
Considerações
Contexto
Geração Aumentada de Recuperação (RAG)
O que é RAG?
Vetor RAG
Índices vetoriais
GraphRAG
Grafos de conhecimento
O que é um grafo de conhecimento?
Criação de Grafos de Conhecimento
Integrando o Neo4j com IA Generativa
GraphRAG para Python
Recuperador de vetores
Gasoduto RAG
Recuperador de vetores aprimorado por grafos
Recuperador de texto para código cifrado
Estruturas GenAI

Português (Brasil)
Powered by Google TradutorTradutor
Lição
Recuperador de texto para código cifrado
Os mecanismos de recuperação de texto vetorial e completo são ótimos para encontrar dados relevantes com base na similaridade semântica ou na correspondência de palavras-chave.

Para responder a perguntas mais específicas, pode ser necessário realizar consultas mais complexas para encontrar dados relacionados a nós, relacionamentos ou propriedades específicos.

Por exemplo, você deseja encontrar:

A idade de um ator.

Quem atuou em um filme.

Recomendações de filmes com base na classificação.

Os mecanismos de conversão de texto em Cypher permitem converter consultas em linguagem natural em consultas Cypher que podem ser executadas no grafo.

[Consulta do usuário]
"Em que ano foi lançado o filme Babe?"
[Consulta Cypher gerada]
PARTIDA (m:Filme)
ONDE m.title = 'Babe'
RETORNO m.liberado
[Resultado da criptografia]
1995
[Resposta da LLM]
"O filme Babe foi lançado em 1995."
Nesta lição, você criará um recuperador de texto para Cypher que gerará contexto com base na consulta do usuário e no esquema do grafo.

Retriever
Abra o genai_fundamentals/text2cypher_rag.pyarquivo e revise o código:

Python
text2cypher_rag.py

Cópia
import os
from dotenv import load_dotenv
load_dotenv()

from neo4j import GraphDatabase
from neo4j_graphrag.llm import OpenAILLM
from neo4j_graphrag.generation import GraphRAG

# Connect to Neo4j database
driver = GraphDatabase.driver(
    os.getenv("NEO4J_URI"), 
    auth=(
        os.getenv("NEO4J_USERNAME"), 
        os.getenv("NEO4J_PASSWORD")
    )
)

# Create LLM 
t2c_llm =


# Build the retriever
retriever = 

llm = OpenAILLM(model_name="gpt-5.2")
rag = GraphRAG(retriever=retriever, llm=llm)

query_text = "Which movies did Hugo Weaving star in?"

response = rag.search(
    query_text=query_text,
    return_context=True
    )

print(response.answer)
print("CYPHER :", response.retriever_result.metadata["cypher"])
print("CONTEXT:", response.retriever_result.items)

driver.close()
O programa inclui todo o código necessário para conectar ao Neo4j, criar o embedderpipeline llme GraphRAGdefinir o fluxo de dados.

Você precisará criar o TextToCypherRetrieverrecuperador que irá gerar consultas Cypher e retornar os resultados.

É TextToCypherRetrievernecessário um LLM para gerar as consultas Cypher:

Python
text2cypher_rag.py

Cópia
# Create Cypher LLM 
t2c_llm=OpenAILLM(
    model_name="gpt-5-mini",
    model_params={
        "reasoning_effort": "high"
    }
)
Escolha do modelo

O modelo correto dependerá do seu caso de uso, da complexidade das consultas que você deseja gerar e do tamanho do seu esquema de grafo.

Neste exemplo, um modelo menor com alto esforço de raciocínio oferece uma opção mais rápida e econômica.

Criar o TextToCypherRetrieverrecuperador:

Python

Cópia
from neo4j_graphrag.retrievers import Text2CypherRetriever

# Build the retriever
retriever = Text2CypherRetriever(
    driver=driver,
    neo4j_database=os.getenv("NEO4J_DATABASE"),
    llm=t2c_llm,
)
O mecanismo de recuperação lerá automaticamente o esquema do grafo do banco de dados quando for utilizado.

Clique para visualizar o código completo.
Python

Cópia
import os
from dotenv import load_dotenv
load_dotenv()

from neo4j import GraphDatabase
from neo4j_graphrag.llm import OpenAILLM
from neo4j_graphrag.generation import GraphRAG
from neo4j_graphrag.retrievers import Text2CypherRetriever

# Connect to Neo4j database
driver = GraphDatabase.driver(
    os.getenv("NEO4J_URI"), 
    auth=(
        os.getenv("NEO4J_USERNAME"), 
        os.getenv("NEO4J_PASSWORD")
    )
)

# Create Cypher LLM 
t2c_llm=OpenAILLM(
    model_name="gpt-5-mini",
    model_params={
        "reasoning_effort": "high"
    }
)

# Build the retriever
retriever = Text2CypherRetriever(
    driver=driver,
    neo4j_database=os.getenv("NEO4J_DATABASE"),
    llm=t2c_llm,
)

llm = OpenAILLM(model_name="gpt-5.2")
rag = GraphRAG(retriever=retriever, llm=llm)

query_text = "Which movies did Hugo Weaving acted in?"
query_text = "What are examples of Action movies?"

response = rag.search(
    query_text=query_text,
    return_context=True
    )

print(response.answer)
print("CYPHER :", response.retriever_result.metadata["cypher"])
print("CONTEXT:", response.retriever_result.items)

driver.close()
Execute o programa; os resultados da recuperação e o código Cypher gerado serão exibidos quando você enviar uma consulta.

Experimente com algumas consultas e analise os resultados, por exemplo:

Quem dirigiu o filme Superman?

Quantos filmes existem no gênero ficção científica?

Quais são alguns exemplos de filmes de ação?

Validação de consulta

Não há garantia de que a consulta Cypher gerada retornará resultados ou que estará sintaticamente correta.

Em cenários de uso em produção, você deve garantir que as exceções sejam tratadas e que as consultas Cypher geradas sejam validadas antes da execução.

Consultas de exemplo
Para melhorar a precisão das consultas Cypher geradas, você pode fornecer exemplos de consultas e uma consulta Cypher apropriada.

Se você quisesse encontrar dados relacionados a avaliações de filmes, poderia fornecer uma consulta de exemplo que demonstrasse como recuperar as avaliações do grafo:

PEDIDO DO USUÁRIO: 'Obter avaliações de usuários para um filme?'
CONSULTA: CORRESPONDÊNCIA ()-[r:CLASSIFICADO]->(m:Filme)
       ONDE m.title = 'Título do Filme'
       RETORNAR r.classificação
Crie uma lista de exemplos de consultas:

Python

Cópia
# Cypher examples as input/query pairs
examples = [
    "USER INPUT: 'Get user ratings for a movie?' QUERY: MATCH (u:User)-[r:RATED]->(m:Movie) WHERE m.title = 'Movie Title' RETURN r.rating"
]
Atualize TextToCypherRetrieverpara incluir examples:

Python

Cópia
# Build the retriever
retriever = Text2CypherRetriever(
    driver=driver,
    neo4j_database=os.getenv("NEO4J_DATABASE"),
    llm=t2c_llm,
    examples=examples,
)
Clique para visualizar o código completo.
Execute o programa e experimente com consultas relacionadas à classificação de filmes, como:

Qual é a classificação mais alta para Os Bons Companheiros?

Qual é a avaliação média dos usuários para o filme Toy Story?

Qual usuário deu as avaliações mais baixas?

Você pode especificar vários exemplos para ajudar o LLM a entender o contexto e gerar consultas Cypher mais precisas.

Esquema
O TextToCypherRetrieverprograma lerá automaticamente todo o esquema do grafo do banco de dados.

Você pode fornecer um esquema personalizado ao recuperador se desejar limitar os nós, relacionamentos e propriedades usados ​​para gerar consultas Cypher. Limitar o escopo do esquema pode ajudar a melhorar a precisão das consultas Cypher geradas, principalmente se o grafo contiver muitos nós e relacionamentos.

Crie uma representação textual do esquema do grafo:

Python

Cópia
# Specify your own Neo4j schema
neo4j_schema = """
Node properties:
Person {name: STRING, born: INTEGER}
Movie {tagline: STRING, title: STRING, released: INTEGER}
Genre {name: STRING}
User {name: STRING}

Relationship properties:
ACTED_IN {role: STRING}
RATED {rating: INTEGER}

The relationships:
(:Person)-[:ACTED_IN]->(:Movie)
(:Person)-[:DIRECTED]->(:Movie)
(:User)-[:RATED]->(:Movie)
(:Movie)-[:IN_GENRE]->(:Genre)
"""
Adicione o seguinte schemaao TextToCypherRetriever:

Python

Cópia
# Build the retriever
retriever = Text2CypherRetriever(
    driver=driver,
    neo4j_database=os.getenv("NEO4J_DATABASE"),
    llm=t2c_llm,
    neo4j_schema=neo4j_schema,
    examples=examples,
)
Clique para visualizar o código completo.
Python

Cópia
import os
from dotenv import load_dotenv
load_dotenv()

from neo4j import GraphDatabase
from neo4j_graphrag.llm import OpenAILLM
from neo4j_graphrag.generation import GraphRAG
from neo4j_graphrag.retrievers import Text2CypherRetriever

# Connect to Neo4j database
driver = GraphDatabase.driver(
    os.getenv("NEO4J_URI"), 
    auth=(
        os.getenv("NEO4J_USERNAME"), 
        os.getenv("NEO4J_PASSWORD")
    )
)

# Create Cypher LLM 
t2c_llm=OpenAILLM(
    model_name="gpt-5-mini",
    model_params={
        "reasoning_effort": "high"
    }
)

# Specify your own Neo4j schema
neo4j_schema = """
Node properties:
Person {name: STRING, born: INTEGER}
Movie {tagline: STRING, title: STRING, released: INTEGER}
Genre {name: STRING}
User {name: STRING}

Relationship properties:
ACTED_IN {role: STRING}
RATED {rating: INTEGER}

The relationships:
(:Person)-[:ACTED_IN]->(:Movie)
(:Person)-[:DIRECTED]->(:Movie)
(:User)-[:RATED]->(:Movie)
(:Movie)-[:IN_GENRE]->(:Genre)
"""

# Cypher examples as input/query pairs
examples = [
    "USER INPUT: 'Get user ratings for a movie?' QUERY: MATCH (u:User)-[r:RATED]->(m:Movie) WHERE m.title = 'Movie Title' RETURN r.rating"
]

# Build the retriever
retriever = Text2CypherRetriever(
    driver=driver,
    neo4j_database=os.getenv("NEO4J_DATABASE"),
    llm=t2c_llm,
    neo4j_schema=neo4j_schema,
    examples=examples,
)

llm = OpenAILLM(model_name="gpt-5.2")
rag = GraphRAG(retriever=retriever, llm=llm)

query_text = "Which movies did Hugo Weaving star in?"
query_text = "How many movies are in the Sci-Fi genre?"
query_text = "What is the highest rating for Goodfellas?"
query_text = "What is the averaging user rating for the movie Toy Story?"
query_text = "What year was the movie Babe released?"

response = rag.search(
    query_text=query_text,
    return_context=True
    )

print(response.answer)
print("CYPHER :", response.retriever_result.metadata["cypher"])
print("CONTEXT:", response.retriever_result.items)

driver.close()
Experimentar
Experimente enviando consultas complexas, observando as consultas Cypher geradas e adaptando os exemplos e o esquema para melhorar a precisão das consultas geradas.

Continuar
Quando estiver pronto, continue para a próxima lição.

Continuar
90%
Recuperador de vetores aprimorado por grafos
Estruturas GenAI
Esta lição foi útil?SimNão



---
Com base no texto fornecido, aqui está uma análise estruturada e detalhada da lição **"Recuperador de texto para código cifrado"** (`Text2CypherRetriever`), um componente crítico para permitir consultas analíticas e exatas em aplicações GraphRAG.

---

### **Resumo da Lição: O Mecanismo do `Text2CypherRetriever**`

Enquanto os buscadores vetoriais funcionam por similaridade semântica (conceitos parecidos), o `Text2CypherRetriever` resolve outro problema fundamental: **responder a perguntas factuais e estruturadas** (ex: *"Em que ano o filme Babe foi lançado?"* ou *"Qual usuário deu as notas mais baixas?"*).

Em vez de comparar vetores, este componente utiliza um LLM intermediário para **traduzir a pergunta em linguagem natural do usuário diretamente em uma consulta Cypher** executável no banco de dados Neo4j.

---

### **Os Três Pilares de Otimização do Text-to-Cypher**

O texto destaca que gerar código Cypher dinamicamente pode falhar ou gerar erros de sintaxe. Para mitigar isso em ambientes de produção, a biblioteca fornece três estratégias cruciais:

#### **1. Configuração Inteligente do LLM Dedicado (`t2c_llm`)**

A lição mostra que não precisamos usar o modelo mais caro para gerar a consulta de banco de dados. Um modelo menor e mais econômico (como o `gpt-5-mini`), configurado com um esforço de raciocínio alto (`"reasoning_effort": "high"`), é excelente para entender a estrutura lógica e criar o código Cypher correto com baixo custo e boa velocidade.

#### **2. Aprendizado por Poucos Exemplos (*Few-Shot Prompting*)**

Para ensinar o LLM a mapear corretamente os relacionamentos complexos (como o relacionamento de notas `:RATED`), podemos passar o parâmetro `examples`. O LLM usará essa lista como um guia de estilo e estrutura:

```python
examples = [
    "USER INPUT: 'Get user ratings for a movie?' QUERY: MATCH (u:User)-[r:RATED]->(m:Movie) WHERE m.title = 'Movie Title' RETURN r.rating"
]

```

#### **3. Restrição e Fornecimento de Esquema Customizado (`neo4j_schema`)**

Por padrão, o `Text2CypherRetriever` lê todo o esquema do Neo4j automaticamente. No entanto, se o seu banco de dados for gigantesco, o LLM pode se confundir com excesso de tabelas/rótulos. A lição ensina a passar uma string textual contendo apenas as propriedades de nós, relacionamentos e conexões que importam para a aplicação, aumentando drasticamente a acurácia da conversão.

---

### **Análise do Fluxo de Execução Completo**

Ao avaliar o código final unificado apresentado na lição:

1. **Configuração do Recuperador:** O `Text2CypherRetriever` é instanciado recebendo o driver do banco, o LLM de tradução (`t2c_llm`), o esquema customizado e os exemplos estruturados.
2. **Orquestração RAG:** A classe principal `GraphRAG` combina esse recuperador analítico com o LLM principal (`gpt-5.2`), encarregado de conversar com o usuário.
3. **Execução da Busca:** Quando o usuário faz a pergunta analítica (ex: *"What is the averaging user rating for the movie Toy Story?"*):
* O `Text2CypherRetriever` gera internamente algo como:
`MATCH (:User)-[r:RATED]->(m:Movie WHERE m.title = 'Toy Story') RETURN avg(r.rating)`
* O Neo4j roda a query e extrai a média matemática exata diretamente do grafo.
* O resultado exato (Contexto) é enviado ao LLM principal.
* A IA responde de forma natural e precisa, sem alucinações matemáticas.



Ao habilitar o parâmetro `return_context=True`, o sistema permite imprimir em tela o código gerado em `response.retriever_result.metadata["cypher"]`, garantindo total transparência e auditabilidade para o desenvolvedor.


---



Fundamentos do Neo4j e IA Generativa › Integrando o Neo4j com IA Generativa
Estruturas GenAI

Sérgio
Fundamentos do Neo4j e IA Generativa

IA generativa
O que é IA generativa?
Considerações
Contexto
Geração Aumentada de Recuperação (RAG)
O que é RAG?
Vetor RAG
Índices vetoriais
GraphRAG
Grafos de conhecimento
O que é um grafo de conhecimento?
Criação de Grafos de Conhecimento
Integrando o Neo4j com IA Generativa
GraphRAG para Python
Recuperador de vetores
Gasoduto RAG
Recuperador de vetores aprimorado por grafos
Recuperador de texto para código cifrado
Estruturas GenAI

Português (Brasil)
Powered by Google TradutorTradutor
Lição
Estruturas GenAI
Existem diversas estruturas de código aberto e com suporte da comunidade disponíveis para ajudar você a integrar o Neo4j com IA generativa e grandes modelos de linguagem (LLMs).

Essas estruturas suportam casos de uso como:

Geração aumentada por recuperação (RAG).

Fluxos de trabalho agentivos.

Construção de grafos de conhecimento.

Normalmente, essas estruturas incluem:

Utilização, instruções e gestão de resultados do LLM.

Integração do modelo de incorporação.

Integração vetorial e de banco de dados (incluindo Neo4j).

Fluxos de trabalho RAG (Geração Aumentada por Recuperação).

Fluxos de trabalho e orquestração baseados em agentes.

Ferramentas de monitoramento, observabilidade e implantação.

Frameworks populares de GenAI para Neo4j
LangChain (Python) - Uma das principais estruturas de código aberto para a construção de aplicações baseadas em LLM, com forte suporte para Neo4j como armazenamento de vetores e grafo de conhecimento.

LangChainJS - A versão em JavaScript/TypeScript do LangChain, que permite fluxos de trabalho GenAI em ambientes Node.js e navegadores.

LlamaIndex - Uma estrutura de dados para conectar LLMs a dados externos, com conectores para Neo4j para suportar casos de uso de RAG e grafos de conhecimento.

Spring AI - Um projeto do ecossistema Spring para integrar recursos de IA em aplicações Java, incluindo suporte ao Neo4j.

Langchain4j – Uma versão Java do LangChain, suportando integração Neo4j para fluxos de trabalho LLM e RAG.

Haystack - Uma estrutura de código aberto para a construção de sistemas de busca e resposta a perguntas, com integração ao Neo4j para recuperação baseada em grafos.

Semantic Kernel - Uma biblioteca de orquestração de código aberto da Microsoft para fluxos de trabalho de IA, com suporte para Neo4j como fonte de dados.

DSPy - Uma estrutura para programação e otimização de pipelines LLM, com conectores Neo4j.

Você pode aprender mais na documentação do Neo4j GenAI Frameworks .

Os frameworks dão suporte ao desenvolvimento de suas aplicações GenAI e ajudam você a criar fluxos de trabalho complexos que integram o Neo4j com LLMs e outros componentes de IA.

Verifique se você entendeu
Características dos frameworks GenAI
Quais das seguintes opções são características típicas das estruturas GenAI? (Selecione todas as que se aplicam)

 Integração do modelo de incorporação
 Fluxos de trabalho RAG (Geração Aumentada por Recuperação)
 Fluxos de trabalho e orquestração de agentes
 Linguagem de armazenamento e consulta de dados
Confira a resposta
95%
Recuperador de texto para código cifrado
Esta lição foi útil?SimNão



---


https://neo4j.com/labs/genai-ecosystem/genai-frameworks/

---









Fundamentos do Neo4j e IA Generativa ›
Resumo do curso

Sérgio

Português (Brasil)
Powered by Google TradutorTradutor
Resumo do curso
Parabéns por concluir o curso Fundamentos de Neo4j e IA Generativa!

Esperamos que o curso tenha sido útil e que agora você se sinta mais confiante ao usar o Neo4j.

Se você gostou do curso, que tal compartilhar seu certificado com seus amigos e colegas? Vamos recapitular o que você aprendeu e destacar alguns pontos-chave.
Ver certificado
Adicionar ao LinkedIn
Parabéns por concluir o curso "Fundamentos de Neo4j e GenAI".

Você iniciou sua jornada para entender como a IA generativa e o Neo4j podem trabalhar juntos.

Você aprendeu:

Os fundamentos da IA ​​generativa, os Grandes Modelos de Linguagem (LLMs) e suas limitações.

Como fornecer contexto melhora a precisão das respostas da IA ​​generativa.

Sobre a Geração Aumentada por Recuperação (RAG) e como ela combina recuperação e geração para obter melhores respostas.

Como vetores e embeddings possibilitam a busca semântica e a recuperação contextual no Neo4j.

Habilidades práticas na construção e consulta de grafos de conhecimento a partir de dados estruturados e não estruturados.

Como usar o pacote Neo4j GraphRAG para Python para integrar busca vetorial, percurso em grafos e consulta em linguagem natural para aplicações de IA aprimoradas.

Você pode continuar seus estudos na GraphAcademy com o programa de aprendizagem GraphRAG .

Você também pode querer explorar alguns dos tópicos abordados neste curso com mais detalhes, nos seguintes cursos:

Introdução a índices vetoriais e dados não estruturados

Construindo Grafos de Conhecimento com LLMs

Crie um chatbot com suporte do Neo4j usando Python.

Utilizando Neo4j com LangChain

Próximos passos
Após concluir este curso, recomendamos que você faça o seguinte curso:

Introdução a índices vetoriais e dados não estruturados
Compreenda e pesquise dados não estruturados usando índices vetoriais.

Ver curso →


 

Ou por que não experimentar uma destas recomendações com base no seu histórico de matrículas?

Fundamentos da Importação de Dados
Aprenda como importar dados para o Neo4j.

Mais de 1000 alunos que concluíram o curso Fundamentos de Neo4j e IA Generativa também concluíram o curso Fundamentos de Importação de Dados .

Ver curso →


Introdução a índices vetoriais e dados não estruturados
Compreenda e pesquise dados não estruturados usando índices vetoriais.

Ver curso →















---
https://console.neo4j.io/graphacademy?_gl=1*1vh18m5*_gcl_aw*R0NMLjE3ODIyNDk3NTUuQ2p3S0NBanczZWpSQmhBZEVpd0FEa3FQbl9OMUdycUZNaURoLW1pelJoVXJhSWNTU2hKaDc2MXhVb0RrTzE0cnBFV21GMmNlb2ZPV1R4b0M5NzRRQXZEX0J3RQ..*_gcl_au*MTg5MDQ4MTQ0OC4xNzgxNTExMzU2*_ga*MzUyMTI4MDYxLjE3ODE1MTEzNTE.*_ga_DL38Q8KGQC*czE3ODI2NzA5NDUkbzE0JGcxJHQxNzgyNjcxNzAzJGo1OSRsMCRoMA..




---


Fundamentos do AuraDB ›
Introdução ao Neo4j Aura

Sérgio
Fundamentos do AuraDB

Introdução ao Neo4j Aura
Sobre a Aura
Níveis do AuraDB
Inscreva-se no Aura
(Opcional)
Entendendo os custos
Começando
Explorando o console Aura
Criar uma instância
Gerenciar uma instância
Backup e restauração
Restaurando a partir de backups
Conectando-se à sua instância
Ferramentas
Importar dados
Ferramenta de consulta
Execute e verifique a importação.
Explorar dados
Criação de dashboards
Comparando e escolhendo a ferramenta certa
Operações
Responsabilidade Compartilhada
Segurança e registros
Próximos passos

Português (Brasil)
Powered by Google TradutorTradutor
Introdução ao Neo4j Aura
Visão geral do módulo
Este módulo explica os principais conceitos do Neo4j Aura, incluindo seus benefícios, casos de uso e como ele simplifica a implantação e o gerenciamento de bancos de dados de grafos na nuvem.

Você aprenderá como:

Diferencie entre Neo4j autogerenciado e Aura.

Escolha o plano certo para as necessidades da sua empresa.

Gerencie seus custos de instância de forma eficaz.

Preparados? Vamos lá →

4%
Sobre a Aura




  ---



Fundamentos do AuraDB › Introdução ao Neo4j Aura
Sobre a Aura

Sérgio
Fundamentos do AuraDB

Introdução ao Neo4j Aura
Sobre a Aura
Níveis do AuraDB
Inscreva-se no Aura
(Opcional)
Entendendo os custos
Começando
Explorando o console Aura
Criar uma instância
Gerenciar uma instância
Backup e restauração
Restaurando a partir de backups
Conectando-se à sua instância
Ferramentas
Importar dados
Ferramenta de consulta
Execute e verifique a importação.
Explorar dados
Criação de dashboards
Comparando e escolhendo a ferramenta certa
Operações
Responsabilidade Compartilhada
Segurança e registros
Próximos passos

Português (Brasil)
Powered by Google TradutorTradutor
Lição
Sobre a Aura
Neste curso, você aprenderá a usar o Neo4j AuraDB, um serviço de banco de dados gráfico totalmente gerenciado na nuvem. Você aprenderá a criar instâncias, importar dados, consultar seu grafo e visualizar insights.

Ao longo deste curso, você usará o conjunto de dados Movies como exemplo para praticar os recursos do AuraDB. O conjunto de dados Movies contém filmes, atores, diretores e os relacionamentos entre eles.

Modelo de dados de filmes mostrando nós de Pessoa e Filme conectados por relacionamentos ACTED_IN.
Ao final deste curso, você entenderá como gerenciar instâncias do AuraDB, importar dados, escrever consultas, explorar seu grafo visualmente e criar painéis.

Antes de começarmos, é importante entender onde o AuraDB se encaixa nas ofertas de nuvem da Neo4j e o que o torna adequado para cargas de trabalho de banco de dados de grafos.

Onde o AuraDB se encaixa nisso?
O Neo4j Aura é um banco de dados como serviço (DBaaS) totalmente gerenciado, no qual a Neo4j administra a infraestrutura de nuvem no provedor de sua escolha (AWS, GCP ou Azure). O Aura oferece dois produtos:

AuraDB — Um banco de dados gráfico gerenciado para cargas de trabalho transacionais (OLTP). Este curso se concentra no AuraDB.

AuraDS — Um ambiente gerenciado para ciência de dados em grafos, incluindo algoritmos de grafos e pipelines de aprendizado de máquina.

Entendendo o OLTP (Processamento de Transações Online):

OLTP (Processamento de Transações Online) refere-se a sistemas de banco de dados otimizados para lidar com muitas transações pequenas e rápidas em tempo real. O AuraDB é otimizado para cargas de trabalho OLTP, o que significa:

Leituras e gravações rápidas : O banco de dados percorre rapidamente os relacionamentos para recuperar dados.

Operações simultâneas : Vários usuários podem consultar o banco de dados simultaneamente sem se bloquearem mutuamente.

Conformidade com ACID : Cada consulta é atômica, consistente, isolada e durável, garantindo a integridade dos dados.

Respostas em tempo real : as consultas retornam resultados em milissegundos, o que é essencial para aplicações interativas.

Entendendo OLTP e OLAP (Processamento Analítico Online):

AuraDB (OLTP) : Otimizado para cargas de trabalho transacionais — navegação rápida em relacionamentos, consultas em tempo real e acesso simultâneo de usuários. Use o AuraDB para aplicações que precisam de respostas imediatas às consultas.

AuraDS (OLAP) : Otimizado para cargas de trabalho analíticas — execução de algoritmos de grafos, pipelines de aprendizado de máquina e análise em lote em grandes conjuntos de dados. Use o AuraDS quando precisar analisar padrões em todo o seu conjunto de dados.

Para a maioria das aplicações que necessitam de respostas a consultas em tempo real, utiliza-se o AuraDB (OLTP). Se precisar executar algoritmos analíticos ou aprendizado de máquina em seus dados de grafo, utiliza-se o AuraDS.

A família de produtos Neo4j Aura inclui AuraDB e AuraDS.
O que é AuraDB?
O AuraDB é um banco de dados como serviço (DBaaS) hospedado na nuvem para bancos de dados de grafos. O Neo4j gerencia a infraestrutura subjacente — servidores, armazenamento, rede, backups e patches de segurança — enquanto você interage com o banco de dados por meio do Console Aura ou do código do seu aplicativo.

O AuraDB permite que você se concentre nos seus dados, não na infraestrutura:

A Aura oferece um serviço de banco de dados Neo4j totalmente gerenciado (Banco de Dados como Serviço, DBaaS), o que significa que você não precisa se preocupar com a infraestrutura subjacente, a manutenção ou as operações.

O que acontece ao criar uma instância?
Ao criar uma instância do Aura, o Neo4j provisiona:

Balanceador de carga : encaminha as consultas do seu aplicativo para o banco de dados. O balanceador de carga garante que as consultas cheguem a uma instância de banco de dados disponível.

Computação e armazenamento : os recursos da nuvem são alocados com base no tamanho selecionado. Você precisa de memória suficiente na RAM para manter seu grafo em alta velocidade de navegação, além de espaço para armazenar todos os seus nós e relacionamentos.

Cópias de segurança : Instantâneos automáticos são criados em intervalos definidos pelo seu plano. Se você excluir dados acidentalmente ou precisar restaurar um estado anterior, as cópias de segurança protegem seus dados.

Segurança : A criptografia TLS garante que as consultas e os resultados sejam criptografados durante a transmissão. Os controles de acesso impedem o acesso não autorizado aos seus dados.

Esse provisionamento geralmente é concluído em menos de um minuto, para que você possa começar a carregar seus dados rapidamente.

Arquitetura Aura mostrando as camadas de infraestrutura gerenciadas pelo Neo4j.
Quando usar AuraDB ou Neo4j autogerenciado?
O AuraDB é ideal para cargas de trabalho de produção, bem como para aprendizado e prototipagem, onde você prefere não gerenciar a infraestrutura. O Neo4j executa e mantém a infraestrutura; você se concentra em seus dados e aplicativos.

O AuraDB permite que você se concentre em trabalhar com seus dados de grafo em vez de gerenciar servidores. Isso é especialmente valioso quando você está aprendendo como funcionam os bancos de dados de grafos.

Infraestrutura : Serviço totalmente gerenciado, sem necessidade de manutenção da sua parte.

Infraestrutura : Serviço totalmente gerenciado, sem necessidade de manutenção da sua parte.

Acordos de Nível de Serviço ( SLA): É fornecido um SLA de disponibilidade de 99,95%, com tolerância a falhas e alta disponibilidade.

Alta disponibilidade : Dependendo do nível, o Aura oferece arquiteturas de cluster de instância única ou de múltiplas zonas de disponibilidade.

Segurança : Criptografia em repouso e em trânsito, além de isolamento de rede e controles de acesso.

Cópias de segurança : Cópias de segurança automatizadas são realizadas regularmente, permitindo que você restaure seu banco de dados para um estado anterior, se necessário.

Cópias de segurança diárias para os planos Professional, Business Critical e Virtual Dedicated Cloud.

O AuraDB Free permite que você faça backups sob demanda a cada hora.

Empresas: Retenção de até 90 dias.

Atualizações : O Aura gerencia todas as atualizações e correções de software, garantindo que você esteja sempre executando a versão mais recente e segura do Neo4j.

Verifique se você entendeu.
Onde as instâncias do Aura são executadas?
Qual das seguintes opções descreve onde as instâncias do Aura são executadas?

 Em infraestrutura que você mesmo gerencia.
 Em infraestrutura de nuvem gerenciada pelo Neo4j.
 Somente offline, como bancos de dados Neo4j autogerenciados.
Confira a resposta
8%
Introdução ao Neo4j Aura
Níveis do AuraDB
Esta lição foi útil?SimNão




---




Fundamentos do AuraDB › Introdução ao Neo4j Aura
Inscreva-se no Aura

Sérgio
Fundamentos do AuraDB

Introdução ao Neo4j Aura
Sobre a Aura
Níveis do AuraDB
Inscreva-se no Aura
(Opcional)
Entendendo os custos
Começando
Explorando o console Aura
Criar uma instância
Gerenciar uma instância
Backup e restauração
Restaurando a partir de backups
Conectando-se à sua instância
Ferramentas
Importar dados
Ferramenta de consulta
Execute e verifique a importação.
Explorar dados
Criação de dashboards
Comparando e escolhendo a ferramenta certa
Operações
Responsabilidade Compartilhada
Segurança e registros
Próximos passos

Português (Brasil)
Powered by Google TradutorTradutor
Lição
Inscreva-se no Aura
Primeiros passos com o Aura
A inscrição no Neo4j Aura é um processo simples que permite começar a usar um banco de dados gráfico totalmente gerenciado na nuvem.

Nesta lição você aprenderá como:

Crie uma conta Neo4j Aura

Configure sua primeira instância do AuraDB Professional (recomendado)

Passo 1: Visite o site do Neo4j Aura
Acesse console.neo4j.io no seu navegador, o portal oficial para gerenciamento de bancos de dados Neo4j Aura.

Nesta página, você encontrará opções para criar uma nova conta ou fazer login, caso já possua uma.

Use o botão "Cadastrar" para criar uma nova conta.

Passo 2: Crie sua conta
Após clicar no botão "Cadastrar-se" , você será direcionado para o formulário de inscrição.

Insira seu endereço de e-mail e conclua a verificação de identidade. Um código de confirmação será enviado para o seu endereço de e-mail. Insira esse código para verificar se o e-mail é válido e pertence a você.

Etapa 2b: Crie uma senha
Após a verificação do seu e-mail, crie uma senha para sua conta:

Etapa 2c: Integração
Após definir sua senha, você deverá fornecer algumas informações adicionais, como seu nome e empresa (se aplicável). Preencha os campos obrigatórios e clique em Avançar .

Etapa 3: Personalize sua experiência
Após criar sua conta, você será solicitado a personalizar sua experiência, selecionando seus interesses e como pretende usar o Neo4j Aura. Isso ajuda o Neo4j a adaptar a experiência às suas necessidades.

Escolha sua função
Após escolher sua função, você deverá selecionar seus objetivos no Neo4j Aura, como: criar um aplicativo, analisar dados usando grafos, aprender Neo4j ou outras opções.

Ao selecionar seus interesses, você verá um gráfico sendo gerado, indicando o progresso do processo de configuração, em vez de uma barra de progresso. Após fazer suas seleções, clique em Avançar para prosseguir.

Selecionar o local certo
Ao criar uma nova instância de banco de dados, selecione o local apropriado para sua instância.

Para os planos pagos do Aura, escolha entre vários provedores de nuvem (AWS, GCP, Azure) e regiões dentro desses provedores. O AuraDB Free está limitado ao Google Cloud Platform (GCP) na região us-central1.

Fatores de localização a considerar
Ao selecionar uma região, considere os seguintes fatores:

Proximidade da aplicação : Onde sua aplicação está sendo executada? Selecione a mesma região para minimizar a latência da rede.

Alinhamento com o provedor de nuvem : Combine o provedor do seu banco de dados com o provedor de nuvem do seu aplicativo para obter melhor desempenho de rede e faturamento simplificado.

Requisitos de residência de dados : Algumas regulamentações exigem que os dados permaneçam dentro de limites geográficos específicos (por exemplo, o RGPD para dados da UE).

Considerações sobre latência

Cada salto de rede entre sua aplicação e o banco de dados adiciona latência. Hospedar ambos no mesmo provedor de nuvem e região pode reduzir o tempo de ida e volta de 50-100 ms para menos de 5 ms.

Passo 4: Configure sua primeira instância do AuraDB Professional
Após configurar sua conta, você será direcionado para a página de seleção de região e provedor de nuvem. Neste exemplo, você aprenderá como começar com o AuraDB Professional para acessar o conjunto completo de recursos.

O AuraDB Professional inclui:

Escolha do provedor de nuvem : Implante na AWS, GCP ou Azure.

Seleção de região : Escolha entre várias regiões geográficas para minimizar a latência.

Dimensionamento flexível : dimensione a memória e o armazenamento com base na sua carga de trabalho.

Cópias de segurança diárias e automatizadas : restaure seu banco de dados para qualquer ponto dentro do período de retenção.

Pausar/Retomar : Interrompa a cobrança de custos quando sua instância não estiver em uso.

Acesso total à API : Automatize o gerenciamento de instâncias programaticamente.

Clique em Iniciar avaliação gratuita de 14 dias para começar a usar o AuraDB Professional :

Opções para um profissional
Entendendo os requisitos de tamanho
Ao dimensionar um banco de dados de grafos, com exceção do AuraDB Free , você precisa considerar dois componentes principais:

O espaço de armazenamento precisa ser grande o suficiente para guardar todos os seus nós e relacionamentos em disco, incluindo suas propriedades e quaisquer índices.

O tamanho da memória precisa acomodar tanto seus dados quanto a carga de trabalho da transação (espaço de heap da JVM para processamento de consultas).

Para determinar o tamanho ideal, você precisa saber o seguinte sobre seu banco de dados:

Quantos nós e relacionamentos?

Quantas propriedades existem nos nós e relacionamentos?

Que tipo de dados são armazenados como propriedades? (números, strings, etc.)

Quantos índices são necessários?

Você precisa utilizar algum índice vetorial?

Estimativa dos requisitos de tamanho
A menos que todas essas informações estejam disponíveis, faça uma estimativa com base nas suas melhores projeções. O dimensionamento é menos crítico para o Aura, já que as instâncias do banco de dados podem ser redimensionadas por meio do console do Aura com alguns cliques.

Para a maioria dos planos Aura, você deve escolher o tamanho da memória (RAM) e a proporção de memória/armazenamento (1/2, 1/4, 1/8) .

tamanho
Por exemplo, se você escolher 2 GB de memória, isso corresponde a 4 GB de armazenamento. Aumente o armazenamento para 8 GB (1/4) ou 16 GB (1/8) por um custo adicional.

No caso do AuraDB Free , as opções de tamanho ficam ocultas, mas os limites do banco de dados (200.000 nós e 400.000 relacionamentos) normalmente exigem entre 3 GB e 4 GB de armazenamento.

Cálculo de tamanho

Consulte o Exemplo de Planejamento de Capacidade para obter um exemplo detalhado de como calcular o tamanho ideal para seu banco de dados.

Salvar suas credenciais
Você receberá um conjunto de credenciais necessárias para se conectar ao seu banco de dados. Certifique-se de salvar as credenciais em um local seguro.

Página de credenciais
Passo 5: Acesse sua instância profissional do Aura
Após configurar sua instância, acesse-a através do console do Neo4j Aura. A partir daí, gerencie seu banco de dados, execute consultas e monitore o desempenho:

Console do Aura mostrando a nova instância profissional em execução.
Página inicial de instância profissional
Após concluir a configuração, o console do Aura exibe a página "Primeiros passos" da sua nova instância do AuraDB Professional :

Alternativa: AuraDB Free
Se você escolheu o AuraDB Free em vez do AuraDB Professional , terá acesso a uma configuração fixa:

Google Cloud Platform (GCP) somente na região us-central1

Máximo de 200.000 nós e 400.000 relacionamentos.

Cópias de segurança sob demanda (limite por hora)

Pausa automática após 72 horas de inatividade.

Para acessar o AuraDB Free , clique em "Selecionar outra instância" na página de seleção de região:

Página de inscrição. Não está procurando um período de teste gratuito? Selecione outra opção destacada.
Selecionando o AuraDB Gratuito
Após clicar no link, você será direcionado para escolher entre uma lista mais completa de planos, incluindo o AuraDB Gratuito. Abaixo da descrição do AuraDB Gratuito, clique em Selecionar para prosseguir.

Página de seleção de instâncias
Configuração gratuita do AuraDB
Após selecionar a opção AuraDB Free, você terá acesso a uma instância do Google Cloud Platform (GCP) na região us-central1, e a interface do usuário não solicitará opções de tamanho ou provedor de nuvem, pois esses parâmetros são fixos para o AuraDB Free.

Sua instância ficará em execução continuamente até que você decida excluí-la, com um limite de 200.000 nós e 400.000 relacionamentos:

Console do Aura mostrando a nova instância gratuita em execução.
Faça o upgrade da versão gratuita para a versão profissional.

Faça upgrade da versão gratuita para a versão Profissional a qualquer momento através do console do Aura para desbloquear a escolha do provedor de nuvem, dimensionamento flexível e backups diários.

17%
Níveis do AuraDB
Entendendo os custos
Esta lição foi útil?SimNão




---





  



  ---
  

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




Fundamentos do AuraDB › Introdução ao Neo4j Aura
Entendendo os custos

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
Entendendo os custos
Nas lições anteriores, você aprendeu sobre os diferentes níveis disponíveis no Neo4j Aura e como selecionar o nível certo para o seu caso de uso específico.

Nesta lição você aprenderá como:

Explore a estrutura de custos do Neo4j Aura.

Entenda o que está incluído no preço do Aura além dos recursos de computação.

Gerencie os custos de forma eficaz, pausando e dimensionando corretamente as instâncias.

A estrutura de custos
Ao considerar o Neo4j Aura, é essencial entender pelo que você está pagando. O custo de uso do Aura inclui uma gama de serviços e recursos (dependendo do plano) que exigiriam um esforço considerável para implementar e manter em uma configuração autogerenciada:

Diagrama dos fatores de custo mostrando o que influencia sua fatura da Aura.
O que está incluído no preço?
Recursos computacionais : As máquinas virtuais que executam as instâncias do seu banco de dados.

Armazenamento : O espaço em disco usado para seu banco de dados, incluindo índices e logs.

Cópias de segurança : Cópias de segurança diárias automatizadas com opções de recuperação para um ponto específico no tempo.

Monitoramento e métricas : Recursos avançados de monitoramento para acompanhar o desempenho e a integridade do sistema.

Segurança : Criptografia em repouso e em trânsito, controle de acesso baseado em funções e isolamento de rede.

Atualizações e manutenção : Atualizações automáticas para garantir que você esteja executando a versão mais recente e segura do Neo4j.

Suporte : Acesso aos serviços de suporte do Neo4j, dependendo do seu plano.

Otimização de custos em todos os níveis
Para cada nível, existem diferenças de custo específicas a serem consideradas:

Um cluster é mais caro do que uma única instância.

Infraestrutura dedicada é mais cara do que infraestrutura compartilhada.

Os backups horários exigem mais espaço de armazenamento do que os backups diários.

Índices vetoriais exigem muito espaço de armazenamento e memória.

Melhores práticas para gestão de custos
Para gerenciar custos de forma eficaz no Neo4j Aura, considere as seguintes práticas recomendadas:

Dimensionamento de instâncias : Escolha o tamanho de instância adequado com base nos requisitos da sua carga de trabalho. Evite o provisionamento excessivo de recursos, pois o aumento de escala é sempre possível, se necessário.

Seleção da camada adequada : Selecione a camada apropriada com base nas necessidades da sua aplicação. Por exemplo, use o AuraDB Free para desenvolvimento e testes, e o AuraDB Professional ou o AuraDB Business Critical para cargas de trabalho de produção.

Pausar instâncias : Use o recurso de pausa para interromper a cobrança de custos quando as instâncias não estiverem em uso, especialmente em ambientes de desenvolvimento e teste.

Gerenciando custos por meio de pausas
Uma das maneiras mais diretas de controlar os custos é pausar as instâncias quando elas não estiverem em uso.

Por exemplo, se você tiver uma instância de desenvolvimento que só é usada durante o horário comercial, pause-a durante a noite e nos fins de semana para economizar custos.

Pausa automática e pausa manual
Aura oferece dois tipos de comportamento de pausa, dependendo do seu nível:

Pausa automática ( somente no AuraDB Free ):

Aciona automaticamente após 72 horas de inatividade.

Inatividade significa que nenhuma consulta é executada no banco de dados.

Instâncias gratuitas não podem ser pausadas manualmente.

Após 30 dias de pausa, a instância é excluída.

Pausa manual (planos pagos):

Você controla quando pausar e retomar.

As instâncias nunca são pausadas automaticamente, mesmo quando ociosas.

Retomada automática após 30 dias de pausa para evitar perda de dados.

Não consultar NÃO reduz os custos.

Uma instância ociosa não é uma instância pausada. Uma instância em execução continua a consumir recursos e a incorrer em custos mesmo quando nenhuma consulta está sendo executada.

Para planos pagos (Profissional, Business Critical, Nuvem Dedicada Virtual):

As instâncias nunca são pausadas automaticamente , independentemente da inatividade.

Não executar consultas não interrompe a cobrança.

Somente pausar explicitamente a instância interrompe os custos.

Para interromper a geração de custos, pause manualmente sua instância através do console do Aura.

Entendendo o comportamento de pausa
Pausar coloca sua instância em hibernação – ela para de consumir recursos e incorrer em custos, mas pode ser retomada rapidamente quando necessário.

Esse comportamento varia conforme o nível:

Instâncias gratuitas do AuraDB :

Não pode ser pausado manualmente.

Pausa automática após 72 horas de inatividade

Excluído após 30 dias de pausa.

Instâncias AuraDB Professional / AuraDB Business Critical / AuraDB Virtual Dedicated Cloud :

Pode ser pausado manualmente a qualquer momento.

Não pausar automaticamente quando estiver inativo

Retomado automaticamente após 30 dias de pausa.

Quando pausar as instâncias
Considere pausar as instâncias nestes cenários:

Ambientes de desenvolvimento fora do horário de expediente

Ambientes de teste entre ciclos de teste

Ambientes de teste quando não estão sendo usados ​​ativamente.

Instâncias temporárias para projetos específicos

Coordenadas antes da pausa

A pausa interrompe toda a atividade do banco de dados, portanto, coordene com sua equipe antes de pausar instâncias compartilhadas.

Tomar decisões informadas
Aqui estão algumas dicas para ajudá-lo a tomar decisões informadas sobre o uso do Aura:

Dimensionar suas instâncias corretamente

Selecione o nível Aura adequado às suas necessidades.

O comprometimento pode gerar economia a longo prazo.

Compreenda o custo total das alternativas de autogestão, incluindo manutenção e despesas operacionais.

Utilize o recurso de pausa para controlar os custos dos ambientes de desenvolvimento e teste.

Para obter informações mais detalhadas sobre preços, visite o guia de preços do Neo4j Aura .

Verifique se você entendeu.
Escolher o custo certo
Qual das seguintes opções representa uma prática recomendada para o gerenciamento de custos no Neo4j Aura?

 Pausar instâncias quando não estiverem em uso.
 Selecionar a opção mais cara para obter melhor desempenho.
 Optar pelo menor tamanho de instância, independentemente da carga de trabalho.
Confira a resposta
21%
Inscreva-se no Aura
Começando
Esta lição foi útil?SimNão



Texto original
Understanding costs
Avalie a tradução
O feedback vai ser usado para ajudar a melhorar o Google Tradutor


---


Fundamentos do AuraDB › Primeiros passos
Criar uma instância

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
Criar uma instância
Na lição anterior, você aprendeu a navegar no Console Aura e a compreender a estrutura organizacional de instâncias, projetos e organizações.

Ao final desta lição, você será capaz de:

Crie uma instância de banco de dados Aura.

Encontre os detalhes de conexão para sua instância.

Entenda quais configurações são fixas na criação e quais podem ser alteradas posteriormente.

Criando uma nova instância
Para criar uma nova instância de banco de dados, selecione Instâncias no menu à esquerda e clique em Criar instância .

criar instância
Isso abre a página de criação de instâncias, onde você configura sua nova instância de banco de dados.

Selecionando o nível da instância
Será exibida uma janela modal que lhe permitirá selecionar os níveis de serviço.

Selecionar o nível correto
Selecione AuraDB Professional para criar uma nova instância profissional.

Salvar suas credenciais
Uma janela modal será exibida com o nome de usuário e a senha do banco de dados.

credenciais
Certifique-se de baixar e prosseguir com o download e guarde o arquivo em local seguro. Ele contém as credenciais necessárias para conectar-se ao seu novo banco de dados.

Detalhes da conexão da instância
Aprenda a usar o Neo4j AuraDB, um serviço de banco de dados gráfico totalmente gerenciado na nuvem. Credenciais
Entrada	Valor
NEO4J_URI

neo4j+s://<instanceid>.databases.neo4j.io

NOME_DE_USUÁRIO_NEO4J

neo4j

SENHA_NEO4J

<sua senha>

BANCO DE DADOS NEO4J

neo4j

ID_INSTÂNCIA_AURA

<instanceid>

AURA_INSTANCENAME

Instância01

Detalhes da conexão da instância

O ID da instância não pode ser alterado durante o período de vida útil da instância.

O usuário possui direitos de administrador no banco de dados.

A senha poderá ser alterada posteriormente.

Criação de instância em andamento
Em seguida, você verá a nova instância listada na página de instâncias com o status " Criando" .

spinner
Instância em execução
Assim que o banco de dados estiver pronto, o status mudará para " Em execução" .

banco de dados em execução
Sua primeira instância já está funcionando!

instância pronta
Os indicadores mostrados são específicos para o Aura Free . Outros planos mostrarão indicadores de tamanho e localização.

Configuração na criação e posteriormente
Algumas configurações da instância só podem ser definidas no momento da criação, enquanto outras podem ser alteradas posteriormente.

Planeje cuidadosamente seu provedor de nuvem e região durante a configuração inicial, pois essas alterações exigem a criação de uma nova instância.

Fixado na criação (não pode ser alterado posteriormente):

Provedor de nuvem (AWS, GCP, Azure)

Região/localização

ID da instância

Pode ser alterado posteriormente:

Nome da instância

Tamanho da memória e do armazenamento (planos pagos)

Senha

Verifique se você entendeu.
Configuração da instância
Quais das seguintes configurações podem ser alteradas após a criação de uma instância do Aura?

 provedor de nuvem
 Região ou localização
 Nome da instância
 Senha
Confira a resposta
33%
Explorando o console Aura
Gerenciar uma instância
Esta lição foi útil?SimNão




---




Fundamentos do AuraDB › Primeiros passos
Gerenciar uma instância

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
Gerenciar uma instância
Na lição anterior, você aprendeu como criar instâncias do Aura e a entender os principais fatores que influenciam a configuração da instância.

Nesta lição você aprenderá como:

Redimensione as instâncias para cima ou para baixo com base nas necessidades da carga de trabalho.

Faça upgrade para um nível diferente.

Pausar instâncias para interromper custos (e por que instâncias ociosas ainda geram custos)

Clonar e excluir instâncias

Entendendo o gerenciamento de instâncias
Sua instância do Aura vem com um conjunto abrangente de opções de gerenciamento acessíveis através do menu de três pontos no seu console.

O diagrama mostra o ciclo de vida completo da instância, desde a criação até a exclusão, incluindo operações de pausa/retomada e redimensionamento.

Diagrama do ciclo de vida da instância mostrando todos os estados e transições.
Opções de gerenciamento de instâncias
O menu oferece acesso às seguintes opções:

Inspecionar - Visualizar detalhes da conexão e estatísticas da instância

Instantâneos - Capture e exporte instantâneos do banco de dados.

Backup e Restauração - Restaurar banco de dados a partir de um arquivo de backup

Clonar para - Clona os dados do gráfico para uma instância nova ou existente.

Redefinir para o estado original - Limpe o banco de dados e comece do zero.

Excluir - Exclui permanentemente a instância e todos os dados.

Inspecionando sua instância
A opção de inspeção permite visualizar os detalhes da sua instância.

inspecionar
Dicas para inspecionar uma instância
Aqui você encontrará informações de conexão com o banco de dados, a versão atual e informações relacionadas ao nível de serviço.

Renomeie sua instância usando o ícone de lápis no canto superior direito do nome.

Este painel também permite visualizar e tirar instantâneos, além de restaurar o banco de dados a partir de um backup.

Atualizando uma instância gratuita do AuraDB
À medida que sua aplicação cresce, você pode precisar ajustar o tamanho da sua instância ou migrar para um nível diferente.

Para atualizar, clique no botão Atualizar no cartão da instância.

Na página de instâncias, o botão "Atualizar" está localizado no cartão da instância e permite que você altere a instância para um nível superior.

atualizar
Isso abrirá a janela modal de atualização da instância, permitindo que você selecione o nível para o qual deseja atualizar.

Atualize a instância para outro nível.
Atualizando para o AuraDB Professional

Você pode atualizar para uma versão de avaliação do AuraDB Professional, mas a atualização para o plano Business Critical exige o fornecimento de informações de pagamento.

Para os planos AuraDB Professional e AuraDB Business Critical , configure o tamanho da instância usando o botão Configurar .

configurar
Configurando uma instância
A opção Configurar permite redimensionar sua instância em ambas as direções: aumentando a escala quando precisar de mais recursos ou reduzindo a escala para diminuir os custos.

Ampliar a escala
Aumente a escala da sua instância quando:

O desempenho das consultas fica comprometido devido à memória insuficiente.

Seu conjunto de dados está crescendo além da capacidade de armazenamento atual.

Você precisa de mais CPU para algoritmos de grafos complexos.

Na tela de configuração, selecione configurações de memória mais altas. O armazenamento e a CPU serão dimensionados proporcionalmente.

Reduzir a escala
Reduza a escala da sua instância quando:

Sua carga de trabalho diminui (por exemplo, após uma temporada de grande movimento).

Você provisionou recursos em excesso durante a configuração inicial.

Você deseja reduzir os custos dos ambientes de desenvolvimento ou teste?

Selecione configurações de memória mais baixas para reduzir a alocação de recursos e os custos.

Opções de configuração
A tela de configuração oferece opções para:

Ajustar o tamanho da memória (RAM) para dimensionamento vertical (melhora o desempenho de gravação)

Adicione ou remova servidores secundários para escalonamento horizontal (melhora o desempenho de leitura).

Alterar a proporção entre memória e armazenamento

Renomeie sua instância.

Escala vertical e horizontal
Escala vertical (aumentar/diminuir a escala):

Aumenta a memória e a CPU na instância primária.

Melhora o desempenho de gravação e a execução de consultas complexas.

Selecione configurações de memória mais altas na tela de configuração.

Escalonamento horizontal (adição de secundários):

Adiciona réplicas de leitura para distribuir a carga de consultas.

Melhora o desempenho de leitura para aplicações com alto tráfego.

Disponível nos planos Business Critical e Virtual Dedicated Cloud.

Configuração adicional

As opções avançadas incluem a ativação da biblioteca Graph Analytics e a configuração otimizada para vetores . Para obter mais informações, consulte a documentação do Neo4j Aura sobre redimensionamento de instâncias .

Após selecionar a configuração desejada e revisar os preços, marque a opção "Aceito" e clique em "Configurar" .

A configuração leva alguns minutos para ser concluída. O acesso de leitura e gravação é mantido durante esse período.

Clonando sua instância
A clonagem cria uma cópia de uma instância existente em:

Outra instância existente, sobrescrevendo os dados existentes.

Uma nova instância

Desenvolvimento e Testes

A clonagem é útil para criar ambientes de desenvolvimento, testar alterações ou configurar ambientes de teste que espelhem a produção.

Clonar uma instância

Clone para um nível superior quando precisar de uma infraestrutura diferente. Ao contrário do upgrade , a clonagem cria uma nova instância com um URI diferente.

Pausar uma instância
Para os planos pagos (Profissional, Business Critical, Virtual Dedicated Cloud), pause as instâncias para interromper a cobrança de custos quando não estiverem em uso.

Acesse a opção de pausa através do menu de três pontos no seu cartão de instância.

Instâncias ociosas ainda geram custos.

Uma instância em execução continua a gerar cobranças mesmo quando ociosa. Mesmo que você não execute nenhuma consulta, isso não pausa a instância nem reduz os custos. Você precisa pausar a instância manualmente para interromper a cobrança.

Excluindo uma instância
Excluir uma instância encerra a instância e exclui todos os dados associados.

A exclusão é permanente. Ao contrário da pausa, não é possível reverter a exclusão, a menos que você tenha exportado instantâneos.

Antes de excluir, certifique-se de ter exportado todos os dados que deseja manter.

Verifique se você entendeu.
Informações da instância
Que informações estão disponíveis ao inspecionar uma instância do Aura? Selecione todas as opções aplicáveis.

 Detalhes da conexão, incluindo o URI do banco de dados
 A versão atual do Neo4j em execução na instância.
 O nível da instância
 Métricas de uso de CPU e memória em tempo real
Confira a resposta
38%
Criar uma instância
Backup e restauração
Esta lição foi útil?SimNão



---



Fundamentos do AuraDB › Primeiros passos
Backup e restauração

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
Backup e restauração
Nesta lição você aprenderá como:

Entenda as capturas de tela agendadas e sob demanda.

Exportar, restaurar e criar instâncias a partir de snapshots.

Entendendo os snapshots do Aura
Os snapshots são o mecanismo de backup do Aura: cópias pontuais que você pode usar para restaurar sua instância após exclusões acidentais ou alterações com falha. Alguns são executados de acordo com um agendamento (dependendo do seu plano); outros você cria. Os snapshots agendados acontecem automaticamente — nenhuma ação é necessária. Os snapshots sob demanda são para quando você deseja um ponto de segurança antes de algo arriscado: uma grande importação, uma alteração de esquema ou outras operações que você talvez queira reverter.

instantâneo
Frequência e retenção de snapshots por nível
Nível	Agendado	Retenção
Livre

Somente sob demanda

Última captura de tela apenas

Profissional

Diário

7 dias

Crítico para os negócios

Por hora

30 dias

Nuvem virtual dedicada

Por hora (dias 1 a 7), diariamente (dias 8 a 60)

60 dias

Quando usar cada tipo de instantâneo
Utilize a árvore de decisão para escolher a abordagem correta: captura instantânea sob demanda, capturas instantâneas agendadas ou exportação para armazenamento de longo prazo.

Árvore de decisão de backup mostrando quando usar diferentes tipos de snapshot.
Trabalhando com instantâneos
Para qualquer captura de tela que você possa:

Exportar — Faça o download para o seu computador para armazenamento a longo prazo (além da retenção do Aura).

Criar instância a partir de um snapshot — Iniciar uma nova instância com esses dados (por exemplo, para desenvolvimento ou teste).

Restaurar — Reverte a instância atual para aquele ponto no tempo (sobrescreve os dados existentes).

Menu de ações de captura de instantâneo
Exportar instantâneos
A exportação baixa um instantâneo para sua máquina, permitindo que você o mantenha além do período de retenção do Aura, atenda aos requisitos de conformidade ou mantenha uma cópia de segurança antes de grandes alterações.

Abra a aba " Instantâneos " da sua instância.

Encontre a captura de tela que deseja, clique no menu (…​) ao lado dela e escolha Exportar .

Salve o arquivo em um local seguro (o tempo de download depende do tamanho e da sua conexão).

O Neo4j 5 usa `exports` .backup; o 4.x usa ` exports` .dump. Nomeie os arquivos claramente (por exemplo, nome da instância e data) para que você possa encontrá-los posteriormente.

Criar uma nova instância a partir de um snapshot
Você obtém um banco de dados separado com os dados desse snapshot — útil para uma cópia de desenvolvimento ou de teste da produção, ou para testar alterações sem afetar a instância ativa.

Na aba Snapshots , abra o menu (…​) do snapshot e selecione Criar instância a partir do snapshot .

Escolha o nível e o tamanho desejados (eles podem ser diferentes dos originais) e, em seguida, conclua o assistente.

A nova instância é cobrada separadamente; o tempo de criação depende do tamanho dos dados e da carga atual.

Restaurar um instantâneo
A restauração reverte sua instância atual para o ponto no tempo do snapshot. Use-a quando precisar desfazer alterações incorretas ou se recuperar de um erro.

Sobrescreve dados

A restauração substitui todos os dados da instância pelo snapshot. Se você precisar do estado atual posteriormente, exporte um snapshot primeiro.

Na aba Instantâneos , encontre o instantâneo desejado e clique no ícone de restauração (↩).

Digite RESTORE para confirmar e clique em Restaurar .

A instância ficará indisponível por um curto período enquanto a restauração é executada.

Não é possível visualizar o conteúdo do snapshot antes de restaurá-lo; para verificar os dados primeiro, crie uma instância a partir desse snapshot e inspecione-a lá.

Restaurar a partir de um arquivo de backup local
Use esta opção quando tiver um backup ou dump em sua máquina (por exemplo, de outra instância do Neo4j ou de uma exportação anterior) — por exemplo, ao migrar para o Aura ou restaurar um snapshot exportado. A restauração substitui tudo o que está atualmente na instância.

Aba Restaurar do arquivo de backup
Restaurando a partir de um arquivo local
Abra a aba Restaurar do arquivo de backup da sua instância.

Selecione seu arquivo .backup, .dump, ou .tar(o console aceita até 4 GB).

Confirme a restauração e aguarde a conclusão; a instância ficará indisponível até que o processo seja finalizado.

A instância deve ter capacidade suficiente para os dados; o AuraDB Free possui limites adicionais.

Para arquivos maiores que 4 GB, use a CLI de administração do Neo4j:

bash

Cópia
neo4j-admin database upload <database-name> \
  --from-path=<path-to-backup> \
  --to-uri=<aura-instance-uri> \
  --to-user=<username> \
  --to-password=<password>
Planejando sua estratégia de backup
Exporte instantâneos importantes para seu próprio armazenamento de acordo com uma programação que atenda às suas necessidades de retenção ou conformidade.

De tempos em tempos, execute uma restauração (ou crie uma instância a partir de um snapshot) para garantir que o processo funcione quando você precisar.

Verifique os requisitos da sua organização quanto ao tempo de armazenamento dos backups e ao local onde eles devem ser guardados.

O Aura armazena snapshots criptografados em repouso e em trânsito; depois de baixar um arquivo exportado, manter sua segurança é sua responsabilidade.

Para obter mais detalhes, consulte a documentação do Neo4j Aura sobre backup, exportação e restauração .

Verifique se você entendeu.
Objetivo da captura instantânea
Qual é o objetivo principal dos snapshots do Aura?

 Para monitorar o desempenho do banco de dados ao longo do tempo.
 Para fornecer recursos de backup e recuperação para seus dados.
 Para compactar seu banco de dados e economizar espaço de armazenamento
Ações de captura de instantâneo disponíveis
Quais das seguintes ações você pode realizar com um instantâneo do Aura? Selecione todas as opções aplicáveis:

 Exporte o instantâneo para sua máquina local.
 Crie uma nova instância a partir do snapshot.
 Restaurar o snapshot para sobrescrever a instância atual.
 Compartilhe a captura de tela diretamente com outros usuários do Aura.
Confira as respostas
42%
Gerenciar uma instância
Restaurando a partir de backups
Esta lição foi útil?SimNão



---




Fundamentos do AuraDB › Primeiros passos
Restaurando a partir de backups

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
Restaurando a partir de backups
Você aprendeu como criar e gerenciar snapshots, incluindo exportá-los e criar novas instâncias.

Sua missão nesta lição: Aprenda como restaurar seu mecanismo de recomendação a partir de snapshots ou arquivos de backup locais. Isso permite que você se recupere de problemas de dados ou reverta para estados anteriores.

Nesta lição você aprenderá como:

Restaure sua instância a partir de um snapshot.

Restaurar a partir de arquivos de backup locais

Planeje sua estratégia de backup.

Restaurando instantâneos
A opção Restaurar reverte sua instância atual para o ponto no tempo do snapshot. Use-a quando precisar reverter alterações problemáticas, quando ocorrer corrupção de dados ou quando quiser retornar a um estado estável conhecido após testes.

Se você excluir dados acidentalmente ou fizer alterações que interrompam suas consultas, a restauração a partir de um snapshot permite uma recuperação rápida.

Sobrescrevendo dados

Restaurar um snapshot sobrescreve todos os dados atuais da sua instância. Certifique-se de exportar um snapshot atual primeiro, caso precise recuperar o estado atual posteriormente.

Como restaurar um snapshot
Para restaurar sua instância para um snapshot anterior:

Acesse a aba "Snapshots" na sua instância do Aura.

Localize o instantâneo que deseja restaurar.

Clique no ícone de restauração (↩) ao lado da captura de tela.

Digite RESTORE para confirmar a ação.

Clique em Restaurar para prosseguir.

Processo de restauração

Sua instância ficará temporariamente indisponível durante o processo de restauração. A duração depende do tamanho do seu banco de dados. Considere a possibilidade de indisponibilidade ao restaurar snapshots.

Como funciona em segundo plano: Aura: 1. Interrompe a sua instância. 2. Substitui todos os dados pelos dados do snapshot. 3. Reinicia a sua instância. 4. Verifica se a restauração foi concluída com sucesso.

Visualizando dados instantâneos
Não existe uma forma direta de visualizar o conteúdo do snapshot antes de restaurá-lo. No entanto, considere estas alternativas:

Crie uma nova instância a partir do snapshot para inspecionar os dados.

Verifique se o carimbo de data/hora do snapshot corresponde ao estado esperado.

Verifique o tamanho do instantâneo como um indicador do volume de dados.

Teste seu snapshot de dados.

Boa prática: Antes de restaurar, crie uma instância de teste a partir do snapshot para verificar se ela contém os dados esperados.
Restaurando a partir do arquivo de backup
restaurar
Restauração usando arquivos locais
Se você tiver um backup ou dump no seu sistema local (diferente dos snapshots disponíveis no Aura), use-o para sobrescrever a instância atual.

A restauração de arquivos locais funciona bem para:

Migração de uma configuração Neo4j autogerenciada para Aura

Restaurando a partir de um snapshot exportado

Carregando dados de outro ambiente Neo4j

Se você exportou um snapshot anteriormente ou possui um backup de outra instância do Neo4j, pode restaurá-lo em sua instância do Aura.

Como restaurar a partir de um arquivo de backup local
Para restaurar sua instância a partir de um arquivo de backup local:

Navegue até a aba Restaurar do arquivo de backup em sua instância do Aura.

Clique para procurar e selecionar seu arquivo .backup, .dump, ou.tar

Confirme a restauração, ciente de que isso sobrescreverá todos os dados existentes.

Aguarde a conclusão do processo.

Processo de restauração local

Sua instância ficará indisponível durante o processo de restauração. A duração varia de acordo com o tamanho do arquivo e os recursos do sistema.

Como funciona em segundo plano: Aura: 1. Carrega seu arquivo de backup 2. Valida o formato do arquivo 3. Substitui todos os dados da instância pelos dados de backup 4. Reinicia sua instância

Limitações importantes
Ao restaurar a partir de arquivos locais, leve em consideração estas restrições:

Tamanho da instância : A instância de destino deve ser grande o suficiente para armazenar os dados.

Restrições do Aura Free : Aplicam-se limitações adicionais na quantidade de nós e relacionamentos.

Limite de tamanho de arquivo : Os arquivos de backup não podem exceder 4 GB para upload pelo console.

Arquivos maiores : Arquivos maiores que 4 GB exigem ferramentas de linha de comando.

Processamento de arquivos maiores que 4 GB
Para arquivos de backup com mais de 4 GB, utilize a ferramenta de linha de comando do administrador do Neo4j:

bash

Cópia
neo4j-admin database upload <database-name> \
  --from-path=<path-to-backup> \
  --to-uri=<aura-instance-uri> \
  --to-user=<username> \
  --to-password=<password>
Este comando carrega seu banco de dados diretamente para sua instância do Aura, ignorando a limitação de tamanho de arquivo do console.

Quando usar a restauração local
O uso da restauração de arquivos locais é um tanto limitado, mas é útil ao migrar de configurações autogerenciadas para o Aura.

Considere esta abordagem quando:

Seu arquivo de backup tem menos de 4 GB.

Você está migrando do Neo4j Community ou Enterprise.

Você precisa inicializar um novo ambiente com dados existentes.

Você está migrando entre diferentes ambientes de hospedagem do Neo4j.

Planejando sua estratégia de backup
Ter um plano de backup é essencial para a proteção de dados, bem como para o gerenciamento de mudanças e migrações.

Aqui estão algumas boas práticas a serem consideradas:

Planeje exportações regulares — Agende exportações regulares de snapshots importantes para seu próprio armazenamento. Isso garante um backup confiável que atenda aos requisitos de conformidade e retenção.

Teste seu processo de restauração - Teste regularmente a restauração a partir de snapshots para garantir que a recuperação de dados funcione quando necessário. Isso ajuda a identificar problemas nos procedimentos de backup e restauração antes que uma necessidade real surja.

Considere a conformidade e a retenção de dados — Compreenda os requisitos da sua organização para retenção de dados e conformidade. Certifique-se de que sua estratégia de backup esteja alinhada a essas necessidades, incluindo o período de retenção dos backups e quaisquer requisitos específicos de armazenamento ou criptografia.

Para obter mais informações, consulte a documentação do Neo4j Aura sobre backup, exportação e restauração .

Exportações regulares de instantâneos
Exporte regularmente instantâneos importantes para seu próprio armazenamento:

Antes das principais implantações de aplicativos

Após importações ou alterações significativas de dados

De forma programada para dados críticos de produção

Antes de realizar qualquer operação potencialmente arriscada

Para o seu mecanismo de recomendação: Exporte instantâneos após importar novos dados de filmes ou fazer alterações significativas no seu modelo de recomendação.

Exemplos de planos de backup
Considere estes planos de backup com base no seu ambiente:

Desenvolvimento : Capturas instantâneas sob demanda antes de grandes alterações.

Preparação : Capturas de tela diárias programadas com exportações semanais.

Produção : Diferencial por hora e capturas diárias completas com exportações semanais para armazenamento externo.

Ajuste seu cronograma com base na frequência de alteração de dados, nos objetivos de tempo de recuperação e nos requisitos de conformidade.

Testando seu processo de restauração
Um backup só é eficaz se você conseguir restaurá-lo. Teste regularmente seus procedimentos de backup e restauração:

Criar instâncias de teste a partir de snapshots

Verifique a integridade dos dados após a restauração.

Documente seus procedimentos de restauração.

Treine sua equipe no processo de restauração.

Teste instantâneo

Utilize testes de snapshot para validar seus backups sem afetar sua instância de produção. Crie uma instância de teste a partir de um snapshot e execute consultas de verificação para garantir a integridade e a precisão dos dados.

Verifique se você entendeu.
Objetivo da captura instantânea
Qual é o objetivo principal dos snapshots do Aura?

 Para monitorar o desempenho do banco de dados ao longo do tempo.
 Para fornecer recursos de backup e recuperação para seus dados.
 Para compactar seu banco de dados e economizar espaço de armazenamento
Ações de captura de instantâneo disponíveis
Quais das seguintes ações você pode realizar com um instantâneo do Aura? Selecione todas as opções aplicáveis:

 Exporte o instantâneo para sua máquina local.
 Crie uma nova instância a partir do snapshot.
 Restaurar o snapshot para sobrescrever a instância atual.
 Compartilhe a captura de tela diretamente com outros usuários do Aura.
Confira as respostas
46%
Backup e restauração
Conectando-se à sua instância
Esta lição foi útil?SimNão




Texto original
Your mission in this lesson: Learn how to restore your recommendation engine from snapshots or local backup files. This enables you to recover from data issues or revert to previous states.
Avalie a tradução
O feedback vai ser usado para ajudar a melhorar o Google Tradutor


---




Fundamentos do AuraDB › Primeiros passos
Conectando-se à sua instância

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
Conectando-se à sua instância
Na lição anterior, você aprendeu como restaurar sua instância a partir de snapshots e arquivos de backup locais, e como planejar sua estratégia de backup.

Nesta lição você aprenderá como:

Conecte-se à sua instância do Aura.

Utilize diferentes ferramentas para interagir com seu banco de dados.

Garantir a segurança da conexão

Conectando-se à sua instância
Para se conectar à sua instância do Aura, você precisará dos detalhes de conexão fornecidos na seção "Inspecionar" das opções de gerenciamento da sua instância, bem como do arquivo de credenciais que você baixou ao criar a instância.

O diagrama mostra o fluxo de conexão completo da sua aplicação até a instância do Neo4j.

Diagrama de fluxo de conexão mostrando autenticação e execução de consultas.
Credenciais de conexão
Seu arquivo de credenciais contém:

Entrada	Valor
NEO4J_URI

neo4j+s://<instanceid>.databases.neo4j.io

NOME_DE_USUÁRIO_NEO4J

neo4j

SENHA_NEO4J

<sua senha>

BANCO DE DADOS NEO4J

neo4j

ID_INSTÂNCIA_AURA

<instanceid>

AURA_INSTANCENAME

Instância01

Recuperando detalhes de conexão
Para visualizar os detalhes da conexão, acesse sua instância no console do Aura e clique nos três pontos no lado direito do cartão da instância. Selecione "Inspecionar" no menu suspenso.

inspecionar_conexão
Usando os detalhes de conexão
O vídeo a seguir demonstra como conectar-se a uma instância do Professional por meio da ferramenta de importação:

Explicação das informações de conexão
Os detalhes da conexão incluem:

ID : O identificador exclusivo da sua instância de banco de dados.

URI de conexão : a string de conexão usada para se conectar ao seu banco de dados.

O nome de usuário e a senha não são exibidos no painel Inspecionar por motivos de segurança. Recupere sua senha no arquivo de credenciais baixado quando você criou a instância.

Usando credenciais para conectar
Utilize esses detalhes para conectar-se através das ferramentas do console Aura (Consulta, Explorar, Painéis) ou qualquer aplicativo externo que suporte conexões Neo4j.

Conectar com credenciais][credentials_prompt
Visão geral dos métodos de interação
O Aura oferece diversas ferramentas para interagir com seu banco de dados, cada uma adequada para diferentes casos de uso:

Query : Uma interface web para executar consultas Cypher diretamente no seu banco de dados. Projetada para desenvolvedores e administradores de banco de dados que trabalham com a sintaxe Cypher.

Explore : Uma ferramenta de visualização gráfica para explorar dados visualmente sem escrever código Cypher. Ideal para usuários de negócios, analistas e desenvolvedores que estão criando protótipos de consultas.

Painéis de controle : Crie representações visuais dos seus dados para usuários de negócios e partes interessadas que precisam de insights sem escrever consultas.

Para obter mais opções de conexão, incluindo drivers e bibliotecas específicas de linguagem, consulte a documentação de conexão do Neo4j Aura .

Verifique se você entendeu.
Conectando-se à Aura
Quais detalhes você precisa para se conectar à sua instância do Aura?

 URI de conexão
 Nome de usuário
 Senha
 Nome do banco de dados
 Provedor de Nuvem
Confira a resposta
50%
Restaurando a partir de backups
Ferramentas
Esta lição foi útil?SimNão




---




Fundamentos do AuraDB › Ferramentas
Criação de dashboards

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
Criação de dashboards
Nas lições anteriores, você aprendeu como executar consultas Cypher usando a ferramenta Consulta e explorar seus dados usando a ferramenta Explorar.

Nesta lição você aprenderá como:

Crie painéis interativos usando a ferramenta de painel Aura.

Crie cartões de painel de controle com consultas Cypher

Adicione filtros para tornar os painéis dinâmicos.

Entendendo os dashboards
Os dashboards transformam dados brutos em representações visuais que qualquer pessoa pode entender, independentemente de sua formação técnica.

Os dashboards funcionam como a "vitrine" dos seus dados gráficos, exibindo as informações mais importantes em um formato visual e acessível, com o qual os usuários de negócios podem interagir sem precisar escrever código. No Aura, a ferramenta de dashboards permite criar protótipos e dashboards prontos para produção rapidamente.

Criando seu primeiro painel de controle
Você aprenderá como construir um painel que visualiza as relações entre atores no banco de dados de filmes.

Primeiro, acesse a seção Painéis no seu console do Aura:

painel_conectar
Iniciando um novo painel de controle
Antes de criar seu painel, verifique se você carregou os dados de exemplo do filme em sua instância.

Clique em Criar painel para começar:

painel_iniciar
Tour pela interface do painel de controle
Renomeie seu painel de "Novo painel" para algo descritivo como "Painel de Análise de Filmes" clicando no título.

Visão geral da interface do painel de controle
Renomeie seu painel de "Novo painel" para algo descritivo como "Painel de Análise de Filmes" clicando no título. image::images/04_dashboard_tool_tour.jpg[dashboard_tour,width=500,align=center]

Criando dashboards com auxílio de IA
Crie um painel gerado por IA clicando no botão "Gerar com IA" . Insira uma descrição das informações que deseja visualizar e a IA gerará um painel com base na sua descrição.

Adicionando cartões
Para exibir visualizações de dados específicas, você precisa adicionar cartões ao painel.

Configurando um cartão
Clique em Adicionar um cartão para criar sua primeira visualização:

Altere o título do cartão de "Novo cartão" para "Visão geral do ator".

Selecione Gráfico na lista suspensa de tipo de visualização.

Cole a seguinte consulta Cypher no campo Consulta:


Cópia
MATCH (p:Person)-[r:ACTED_IN]->(m:Movie)
WHERE p.name = 'Tom Hanks'
RETURN p,r,m
Salvar e visualizar o cartão
Clique em Salvar cartão para adicioná-lo ao seu painel:

painel_cartão
Seu painel exibirá uma visualização gráfica mostrando as conexões de Tom Hanks com os filmes:

painel_hanks
Cartões de reposicionamento

Mova os cartões arrastando-os usando a alça de seis pontos que aparece quando você passa o cursor sobre um cartão.

Tornando os dashboards interativos com filtros.
Utilize painéis estáticos para apresentar informações fixas ou adicione interatividade para permitir que os usuários explorem os dados dinamicamente.

Os filtros permitem que os usuários alterem dinamicamente quais dados são exibidos sem modificar as consultas.

Para adicionar um filtro ao seu painel, acesse a visualização do painel e selecione Adicionar filtro .

Preencha o nome do filtro e selecione a propriedade pela qual deseja filtrar.

Configurando um filtro
filtro_do_painel
Por exemplo, crie um filtro de "Seleção de pessoa" que controlará os dados de qual ator serão exibidos.

Vinculando filtros a cartões do painel de controle
Agora, atualize a consulta do seu cartão de Visão Geral do Ator para usar o parâmetro de filtro.


Cópia
MATCH (p:Person)-[r:ACTED_IN]->(m:Movie)
WHERE p.name = $person_name
RETURN p,r,m
Testando o filtro
Salve as alterações e teste o filtro:

seleção_do_painel
Resultados do painel dinâmico
Seu painel agora responde dinamicamente às seleções de filtro:

resultado_do_painel
Cartões de edição
Os painéis de controle de produção geralmente precisam ser atualizados à medida que os dados e os requisitos evoluem.

Após criar um cartão no painel, você pode editá-lo a qualquer momento clicando no menu de três pontos no cartão e selecionando "Editar cartão" .

Atualizando um cartão
Após fazer alterações no seu cartão (atualizando a consulta, alterando o tipo de visualização ou ajustando os filtros), salve essas alterações.

Tipos de visualização do painel de controle
Escolha a visualização adequada com base nos seus dados:

Tipo	Caso de uso
Gráfico

Relações e conexões, visualizações de rede, exibição de entidades

Mesa

Listagens detalhadas, dados classificáveis/pesquisáveis, formatos prontos para exportação.

Barra/Coluna

Comparações de categorias, classificações, valores discretos

Linha

Tendências ao longo do tempo, dados contínuos, múltiplas séries

Torta/Rosquinha

Relações parte-todo, distribuições (limite de 5 a 7 categorias)

Valor único/KPI

Principais métricas em resumo, indicadores de status, resumos executivos

Onde os dashboards se encaixam no seu fluxo de trabalho
Os painéis de controle servem como ponte entre seu banco de dados gráfico e as partes interessadas do negócio.

Elas permitem a prototipagem rápida de visualizações de dados e muitas vezes podem se tornar soluções de produção para organizações que precisam de insights rápidos sem o desenvolvimento de aplicativos personalizados.

A ferramenta de painel de controle se destaca em:

Exploração e validação rápidas de dados

Criação de apresentações para as partes interessadas

Criação de painéis de monitoramento operacional

Prototipagem antes de investir em aplicações personalizadas

Consultar, explorar e painéis de controle
Cada ferramenta tem uma função diferente no seu fluxo de trabalho de dados. O diagrama mostra quais usuários normalmente utilizam cada ferramenta e como eles se conectam.

Essas ferramentas se complementam em um fluxo de trabalho típico:

Consulta - Desenvolva e teste suas consultas Cypher.

Explorar - Valide os resultados visualmente e crie perspectivas.

Painéis de controle - Apresentando informações detalhadas para as partes interessadas

Diagrama de comparação de ferramentas mostrando a consulta
Vídeo resumo
Verifique se você entendeu.
Ajustando os dados do painel de controle dinamicamente
Como permitir que os usuários alterem dinamicamente quais dados são exibidos em um painel sem modificar as consultas subjacentes?

 Adicione filtros que utilizem parâmetros em suas consultas Cypher.
 Crie vários cartões de painel para cada variação de dados.
 Use o recurso de geração de IA para atualizar as consultas.
 Edite o cartão sempre que forem necessários dados diferentes.
Confira a resposta
75%
Explorar dados
Comparando e escolhendo a ferramenta certa
Esta lição foi útil?SimNão




---


Esta décima quarta lição apresenta a ferramenta de **Painéis (Dashboards)** integrada ao Neo4j Aura Console. Ela detalha como transformar consultas técnicas em interfaces interativas e dinâmicas voltadas para tomadores de decisão e usuários de negócios, eliminando a necessidade de desenvolver aplicações web personalizadas do zero.

Abaixo está o resumo analítico e estruturado das capacidades técnicas ensinadas:

---

## 1. O que são Dashboards no AuraDB?

Os dashboards funcionam como a **vitrine executiva** do seu grafo. Eles organizam blocos visuais chamados **Cartões (Cards)** dentro de uma grade arrastável.

### Métodos de Criação:

* **Manual:** Onde o desenvolvedor insere cartões e dita as regras de exibição.
* **Gerado por IA:** O recurso *"Gerar com IA"* permite descrever em linguagem natural o objetivo do painel (ex: *"Quero um painel para analisar a distribuição de elencos nos filmes"*) e a ferramenta monta a estrutura automaticamente.

---

## 2. Componentes de um Painel Dinâmico

### Cartões baseados em Cypher

Cada cartão adicionado ao painel executa uma consulta por trás dos panos. Se você configurar um cartão do tipo **Gráfico** com o código abaixo, ele renderizará a rede de conexões visual do ator:

```cypher
MATCH (p:Person)-[r:ACTED_IN]->(m:Movie)
WHERE p.name = 'Tom Hanks'
RETURN p, r, m

```

### Filtros e Parâmetros (A Chave da Interatividade)

Para evitar que o painel fique preso a um único ator (sendo estático), a lição introduz os **Filtros**.

1. Você cria um filtro global no painel chamado, por exemplo, de `Seleção de Pessoa`.
2. Você altera o código Cypher do cartão substituindo o texto fixo por uma **variável/parâmetro** (marcada com o símbolo `$`):

```cypher
MATCH (p:Person)-[r:ACTED_IN]->(m:Movie)
WHERE p.name = $person_name
RETURN p, r, m

```

3. **Resultado:** O usuário final ganha uma caixa de seleção na tela. Quando ele escolhe "Keanu Reeves", o valor preenche o parâmetro `$person_name` e todos os gráficos do painel se atualizam instantaneamente.

---

## 3. Catálogo de Visualizações Disponíveis

A ferramenta oferece uma matriz de componentes dependendo do tipo de dado que se quer destacar:

| Tipo de Visualização | Caso de Uso Principal |
| --- | --- |
| **Gráfico (*Graph*)** | Padrões de rede, conexões e caminhos entre entidades do grafo. |
| **Tabela (*Table*)** | Listas detalhadas, ordenáveis e prontas para exportação de dados brutos. |
| **Barra / Coluna** | Comparações entre categorias e rankings (ex: Top 10 atores com mais filmes). |
| **Linha** | Análise de dados contínuos e tendências ao longo do tempo. |
| **Pizza / Rosca** | Distribuição de partes de um todo (limitado a pequenas categorias, de 5 a 7). |
| **Valor Único / KPI** | Métricas consolidadas e resumos executivos (ex: total de filmes cadastrados). |

---

## 4. Onde a ferramenta se encaixa no Fluxo de Trabalho (Workflow)

O ecossistema do Aura fecha um ciclo completo de engenharia e análise de dados através de suas três pontas:

1. **Consulta (*Query*):** Onde os desenvolvedores escrevem e testam a lógica pura das consultas Cypher.
2. **Explorar (*Explore*):** Onde os analistas validam visualmente as relações e criam as perspectivas conceituais do negócio.
3. **Painéis (*Dashboards*):** Onde os *stakeholders* consomem os dados de forma mastigada, filtrada e operacional.

---

## 5. Resolução do Questionário Final

Com base na mecânica de parametrização para criar painéis reutilizáveis:

> **Pergunta:** Como permitir que os usuários alterem dinamicamente quais dados são exibidos em um painel sem modificar as consultas subjacentes?
> * [ **X** ] **Adicione filtros que utilizem parâmetros em suas consultas Cypher.**
> * [ ] Crie vários cartões de painel para cada variação de dados.
> * [ ] Use o recurso de geração de IA para atualizar as consultas.
> * [ ] Edite o cartão sempre que forem necessários dados diferentes.
> 
> 

**Justificativa:** Conforme demonstrado no passo a passo da lição, a única forma de dar autonomia para o usuário interagir com o painel sem alterar o código estrutural é mapeando um controle de tela (Filtro) associado a um parâmetro dinâmico (representado por `$` no Cypher, como `$person_name`). As outras alternativas geram retrabalho operacional ou quebram o propósito de automação do dashboard. 


---




Fundamentos do AuraDB › Ferramentas
Comparando e escolhendo a ferramenta certa

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
Comparando e escolhendo a ferramenta certa
Até agora neste curso, você utilizou as ferramentas Importar, Consultar, Explorar e Painéis.

Nesta lição você aprenderá como:

Decida quando usar Importar, Consultar, Explorar ou Painéis.

Associe cada ferramenta às tarefas, aos usuários e à escala de dados típicos.

Veja como o tipo de dados (conectados, hierárquicos, séries temporais, grafos de conhecimento) afeta a escolha da ferramenta.

Combine ferramentas em um fluxo de trabalho

Comparação de consultas, exploração e painéis.
Para ajudar você a escolher a ferramenta certa para sua tarefa, você pode usar a seguinte comparação:

Ferramenta	Ideal para	Escala de dados	Requer Cypher?
Consulta

Desenvolvedores, administradores de banco de dados, engenheiros de dados

Centenas de nós/relacionamentos

Sim

Explorar

Analistas de negócios, especialistas no domínio

Milhares de nós/relacionamentos

Não (usa frases de pesquisa)

Painéis de controle

Partes interessadas, executivos, usuários finais

Métricas e resumos agregados

Criado com Cypher, usado sem

Como as ferramentas se encaixam
Um fluxo típico: usar a ferramenta Consulta para desenvolver e testar o Cypher, usar a ferramenta Explorar para validar e explorar visualmente os resultados ou para criar Perspectivas e, em seguida, usar os Painéis para apresentar as informações a outras pessoas.

O diagrama resume quem normalmente usa qual ferramenta e como eles se conectam.

Comparação de ferramentas: Consulta
Como o tipo de dados afeta a escolha da ferramenta
O formato dos seus dados pode direcioná-lo para uma ferramenta específica ou uma combinação de ferramentas.

Dados altamente conectados (ex: redes sociais, detecção de fraudes):

Use a função Explorar para rastrear conexões e identificar padrões visualmente.

Use a função Query quando precisar de algoritmos ou caminhos precisos.

Use os painéis para métricas como "média de conexões por usuário".

Dados hierárquicos (ex.: organogramas, catálogos de produtos):

Use a função Explorar para navegar visualmente pelas relações entre pais e filhos.

Utilize a função Query para travessias recursivas e agregações.

Utilize os painéis para resumos e contagens de árvores.

Dados de séries temporais ou transacionais (ex.: registros, pedidos, eventos):

Use a função Query para filtros e agregações de intervalo de datas.

Utilize painéis de controle para visualizar tendências e KPIs.

Use a ferramenta Explorar para analisar transações ou anomalias específicas.

Grafos de conhecimento (ex: recomendações, dados semânticos):

Use a opção Explorar com Perspectivas para obter visualizações adequadas ao ambiente empresarial.

Utilize a função Query para inferência complexa ou busca por similaridade.

Utilize painéis de controle para apresentar recomendações aos usuários finais.

Verifique se você entendeu.
Escolher a ferramenta certa
Qual ferramenta permite que os desenvolvedores criem visualizações baseadas em Cypher que as partes interessadas possam usar sem precisar escrever consultas?

 Ferramenta de consulta
 Explorar ferramenta
 Painéis de controle
 Ferramenta de importação
Confira a resposta
79%
Criação de dashboards
Operações
Esta lição foi útil?SimNão



---




Fundamentos do AuraDB › Operações
Responsabilidade Compartilhada

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
Responsabilidade Compartilhada
No módulo anterior, você aprendeu como importar dados e usar as ferramentas Consulta, Explorar e Painéis.

Nesta lição, você aprenderá sobre o modelo de responsabilidade compartilhada entre o Aura e seus usuários.

Entendendo a responsabilidade compartilhada
Aura opera em um modelo de responsabilidade compartilhada, onde o Neo4j lida com os aspectos operacionais do banco de dados enquanto os usuários se concentram em seus aplicativos e dados.

O diagrama mostra quais responsabilidades pertencem ao Neo4j, quais pertencem a você e quais são compartilhadas.

Diagrama de responsabilidade compartilhada mostrando as responsabilidades do Neo4j e do usuário.
Responsabilidades de Aura
Aura é responsável pelo seguinte:

Gerenciamento de infraestrutura : O Aura gerencia a infraestrutura subjacente, incluindo servidores, armazenamento e redes.

Manutenção de banco de dados : O Aura gerencia tarefas de manutenção de banco de dados, como backups, atualizações e escalonamento.

Segurança : A Aura oferece recursos de segurança como criptografia, controle de acesso e conformidade com os padrões da indústria.

Responsabilidades do usuário
Os usuários são responsáveis ​​pelo seguinte:

Modelagem de dados : Os usuários devem compreender o modelo de dados em grafo do Neo4j e modelar seus dados de acordo com ele.

Desenvolvimento de aplicações : Os usuários são responsáveis ​​pelo desenvolvimento de aplicações que interagem com o banco de dados Neo4j.

Monitoramento e Otimização : Os usuários devem monitorar o desempenho do banco de dados e otimizar as consultas conforme necessário.

Funções do usuário
Além das responsabilidades compartilhadas, é importante compreender os diferentes papéis dos usuários dentro de uma organização Aura:

Menu suspenso "Função do projeto" mostrando as diferentes funções disponíveis.
Explicação dos papéis de usuário
As vagas disponíveis são:

Administrador da Organização : Tem acesso total a todos os projetos e instâncias dentro da organização. Pode gerenciar usuários, faturamento e configurações da organização. Você recebe essa função ao criar uma nova conta Aura.

Administrador do projeto : Tem acesso total a todas as instâncias dentro de um projeto específico. Pode gerenciar usuários e configurações do projeto.

Membro do Projeto : Possui acesso de leitura e gravação a instâncias dentro de um projeto específico, mas não pode gerenciar usuários ou configurações.

Visualizador de Projetos : Possui acesso somente leitura às instâncias dentro de um projeto específico. Não é possível fazer alterações no banco de dados ou nas configurações.

Leitor de Métricas : Tem acesso para visualizar métricas de desempenho e dados de monitoramento para instâncias dentro de um projeto específico. Não pode fazer alterações no banco de dados ou nas configurações.

Saiba mais sobre responsabilidade compartilhada

Para saber mais sobre o modelo de responsabilidade compartilhada, consulte o Whitepaper de Segurança do Neo4j Aura para obter uma visão geral detalhada das medidas e responsabilidades de segurança no Aura.

Adicionando usuários ao seu projeto
Para convidar usuários para o seu projeto, siga estes passos:

Acesse a página Configurações do Projeto no console do Aura.

Clique no menu Usuários .

Menu do projeto aberto
Menu de usuários do projeto com o botão "Convidar usuários" destacado.
Endereço de e-mail adicionado ao campo de usuários convidados
Menu suspenso "Função do projeto" mostrando as diferentes funções disponíveis.
Para consultar a lista completa de usuários do projeto, acesse o menu Usuários na página Configurações do Projeto para visualizar suas funções e status.

Tela de usuários do projeto mostrando o novo usuário adicionado.
Clique no botão Convidar usuários .

Insira os endereços de e-mail dos usuários que você deseja convidar.

Selecione as funções apropriadas para os usuários convidados.

Clique em Enviar convites para enviar os convites.

Remover usuários do seu projeto
Para excluir usuários do seu projeto, siga estes passos:

Acesse a página Configurações do Projeto no console do Aura.

Clique no menu Usuários .

Localize o usuário que deseja excluir e clique no botão Excluir ao lado do nome dele.

Confirme a exclusão quando solicitado.

Excluindo um usuário
Excluir janela pop-up de confirmação do usuário
Verifique se você entendeu.
Fazendo a escolha certa
Você está planejando ter uma nova equipe de analistas de dados trabalhando em uma instância do Neo4j Aura para um projeto crítico.

A função deles envolverá a análise de métricas, mas eles não farão nenhuma alteração no próprio banco de dados.

Qual das seguintes funções é a escolha certa para você?

 Administrador do Projeto
 Membro do Projeto
 Leitor de métricas
 Visualizador de Projetos
Confira a resposta
88%
Operações
Segurança e registros
Esta lição foi útil?SimNão



---



Fundamentos do AuraDB › Operações
Segurança e registros

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
Segurança e registros
Na lição anterior, você aprendeu sobre as diferentes métricas disponíveis no Neo4j Aura e como monitorar o desempenho de suas instâncias de banco de dados.

Nesta lição você aprenderá como:

Implemente os recursos básicos de segurança disponíveis no Neo4j Aura.

Acesse os registros para monitoramento e solução de problemas.

Recursos de segurança
O Neo4j Aura oferece diversos recursos de segurança integrados para ajudar a proteger seus dados:

Criptografia : Os dados são criptografados em repouso e em trânsito usando protocolos padrão do setor.

Controle de acesso : O controle de acesso baseado em funções (RBAC) permite definir permissões detalhadas para usuários e aplicativos.

Isolamento de rede : as instâncias do Aura são implantadas em uma rede privada, garantindo que seus dados não sejam acessíveis pela internet pública.

Registros de auditoria : Registros detalhados de toda a atividade do usuário são mantidos para fins de conformidade e monitoramento de segurança.

Autenticação única (SSO) : Integração com provedores de identidade para autenticação de usuários simplificada e segura.

Filtragem de IP : restrinja o acesso à sua instância do Aura com base em endereços IP ou intervalos de endereços.

Autenticação de ferramentas com usuário Aura : Utilize o usuário Aura para autenticação segura ao conectar ferramentas e aplicativos ao seu banco de dados.

MFA (Autenticação Multifator) : Adicione uma camada extra de segurança exigindo uma segunda forma de verificação durante o processo de login.

Configurar recursos de segurança
Como parte da sua estratégia básica de segurança, implemente Single Sign-On (SSO), MFA e registros de acesso para sua instância do Neo4j Aura:

Opções de segurança no console do Neo4j
Passo 1: Habilitar o Single Sign-On (SSO)
O Neo4j Aura oferece suporte a provedores de identidade (IdP) de Single Sign-On (SSO):

Okta

Microsoft Entra ID (anteriormente Azure AD)

Configurando o SSO
Para habilitar o SSO para sua instância do Aura, siga estas etapas:

Acesse as configurações da sua organização no console do Neo4j Aura.

Selecione a guia Segurança .

Na seção Single Sign-On (SSO) , escolha seu provedor de IdP (Okta ou Microsoft Entra ID).

Siga as instruções para concluir a configuração do SSO.

Configuração de SSO
Nova tela de configuração de SSO com menu suspenso do provedor de identidade destacado.
Etapa 2: Habilitar a autenticação multifator (MFA)
Para habilitar a autenticação multifator (MFA) em sua instância do Neo4j Aura, siga estas etapas:

Acesse as configurações da sua organização no console do Neo4j Aura.

Selecione a guia Segurança .

Na seção Autenticação Multifator (MFA) , ative a configuração MFA .

Siga as instruções para configurar o seu método de MFA preferido (por exemplo, SMS, aplicativo autenticador).

Configurando a MFA
Ative a caixa de diálogo de MFA com o botão Ativar MFA destacado.
Após concluir essas etapas, confirme novamente clicando no botão Ativar MFA .

Ative a confirmação pop-up de MFA
Registros de visualização
Para acessar os registros da sua instância do Neo4j Aura, siga estes passos:

Faça login no console do Neo4j Aura.

Selecione sua instância no painel de controle.

Acesse o menu "Logs" em "Operações" para visualizar registros em tempo real e dados históricos de registros.

Os registros são categorizados em diferentes tipos, incluindo:

Registros de consultas : Informações detalhadas sobre todas as consultas executadas em seu banco de dados.

Registros de transações : Registros de todas as transações, incluindo confirmações e reversões.

Registros de auditoria : Registros abrangentes de toda a atividade do usuário, incluindo logins, acesso a dados e alterações de configuração.

Acesse os registros para monitorar tentativas de autenticação, acesso a dados e outros eventos críticos.

Faça o download dos registros para análises adicionais ou para fins de conformidade.

Menu de operações com a opção "Registros" destacada.
Captura de tela dos registros
Captura de tela de segurança
Whitepaper de segurança do Neo4j Aura

Para saber mais sobre como habilitar recursos de segurança no Neo4j Aura, consulte o Whitepaper de Segurança do Neo4j Aura para obter uma visão geral detalhada das medidas e responsabilidades de segurança no Aura.

Verifique se você entendeu.
Entendendo os Registros
Em que situações você precisaria acessar os registros da sua instância do banco de dados Aura?

 Quando você deseja alterar o esquema do banco de dados.
 Quando você precisar solucionar problemas de desempenho ou erros.
 Ao criar um novo usuário para o banco de dados.
Confira a resposta
92%
Responsabilidade Compartilhada
Próximos passos
Esta lição foi útil?SimNão




---



Fundamentos do AuraDB › Operações
Próximos passos

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
Próximos passos
Na lição anterior, você aprendeu como habilitar recursos básicos de segurança e acessar logs no Neo4j Aura.

Nesta lição você aprenderá sobre:

Obtendo suporte para Neo4j Aura

Acordos de Nível de Serviço (ANS)

Recursos adicionais para dar continuidade à sua jornada de aprendizado.

Acesso ao suporte
O Neo4j oferece diversos canais de suporte, dependendo do seu nível Aura:

Opções de suporte por nível:

AuraDB Gratuito : Suporte da comunidade através do Fórum da Comunidade Neo4j.

AuraDB Professional : Suporte com base no melhor esforço (sem SLA formal)

Aura Business Critical : Suporte aprimorado com tempos de resposta mais rápidos

Nuvem Dedicada Virtual Aura : suporte premium 24 horas por dia, 7 dias por semana, com tempo de resposta de uma hora para problemas críticos.

Entrar em contato com o suporte
Para obter ajuda com sua instância do Aura:

Portal de Suporte : Envie perguntas, relate problemas e solicite recursos através do Portal de Suporte ao Cliente da Neo4j.

E-mail : Envie solicitações para aura-support@neo4j.com (um ticket de suporte será criado automaticamente).

Fórum da comunidade : Faça perguntas em community.neo4j.com

Discord : Junte-se ao servidor Discord do Neo4j para discussões com a comunidade.

Acordos de Nível de Serviço (ANS)
Os SLAs definem as garantias de disponibilidade para sua instância do Aura:

Nível	Meta de disponibilidade	Créditos de serviço
Livre

Sem SLA

Nenhum

Profissional

Sem SLA formal

Nenhum

Crítico para os negócios

99,95% de tempo de atividade

Crédito de 10% (99,0-99,95%), crédito de 25% (<99,0%)

Nuvem virtual dedicada

99,95% de tempo de atividade

Crédito de 10% (99,0-99,95%), crédito de 25% (<99,0%)

Para obter detalhes completos do SLA, consulte o Acordo de Nível de Serviço (SLA) do Neo4j .

Dando continuidade ao seu aprendizado
Explore os seguintes recursos para continuar aprendendo:

Workshops e webinars de aprendizagem ao vivo: https://neo4j.com/events/

Sessões e conferências gravadas: https://www.youtube.com/neo4j

Recursos adicionais
Documentação:

Proteja sua conta ativando a autenticação multifator (MFA): https://neo4j.com/docs/aura/security/mfa/

Saiba mais sobre criptografia no Aura: https://neo4j.com/docs/aura/security/encryption/

Migrar bancos de dados Neo4j autogerenciados para o Aura: https://neo4j.com/docs/aura/tutorials/migration/

Fórum da Comunidade Neo4j: https://community.neo4j.com/

GraphAcademy: https://graphacademy.neo4j.com/

Aprenda a projetar e construir modelos de dados em grafos: https://graphacademy.neo4j.com/courses/modeling-fundamentals

Aprenda Cypher, a linguagem de consulta para Neo4j: https://graphacademy.neo4j.com/courses/cypher-fundamentals

Explore tópicos mais avançados: https://graphacademy.neo4j.com/courses/

Encontrando caminhos de aprendizagem
Acesse os percursos de aprendizagem guiada diretamente do seu console Aura:

5 centro de aprendizagem
Exemplos de projetos e recursos
Após iniciar um dos projetos de exemplo disponíveis, use-os para praticar as habilidades adquiridas no GraphAcademy.

Extensão Neo4j para GitHub e VS Code
Confira o repositório do Neo4j no GitHub para projetos de exemplo e recursos adicionais: https://github.com/neo4j

Encontre a extensão do Neo4j para Visual Studio Code aqui: https://marketplace.visualstudio.com/items?itemName=neo4j-extensions.neo4j-for-vscode

Recursos para começar
Após iniciar o console Aura, acesse esses recursos diretamente do menu Começar:

5 recursos adicionais
Verifique se você entendeu.
Entendendo o suporte e os SLAs
Quais planos do Aura oferecem um SLA de disponibilidade de 99,95%?

 AuraDB Gratuito apenas
 AuraDB Professional apenas
 AuraDB Business Critical e AuraDB Virtual Dedicated Cloud
 Todos os níveis de Aura
Confira a resposta
96%
Segurança e registros
Esta lição foi útil?SimNão



---



Fundamentos do AuraDB › Operações
Próximos passos

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
Próximos passos
Na lição anterior, você aprendeu como habilitar recursos básicos de segurança e acessar logs no Neo4j Aura.

Nesta lição você aprenderá sobre:

Obtendo suporte para Neo4j Aura

Acordos de Nível de Serviço (ANS)

Recursos adicionais para dar continuidade à sua jornada de aprendizado.

Acesso ao suporte
O Neo4j oferece diversos canais de suporte, dependendo do seu nível Aura:

Opções de suporte por nível:

AuraDB Gratuito : Suporte da comunidade através do Fórum da Comunidade Neo4j.

AuraDB Professional : Suporte com base no melhor esforço (sem SLA formal)

Aura Business Critical : Suporte aprimorado com tempos de resposta mais rápidos

Nuvem Dedicada Virtual Aura : suporte premium 24 horas por dia, 7 dias por semana, com tempo de resposta de uma hora para problemas críticos.

Entrar em contato com o suporte
Para obter ajuda com sua instância do Aura:

Portal de Suporte : Envie perguntas, relate problemas e solicite recursos através do Portal de Suporte ao Cliente da Neo4j.

E-mail : Envie solicitações para aura-support@neo4j.com (um ticket de suporte será criado automaticamente).

Fórum da comunidade : Faça perguntas em community.neo4j.com

Discord : Junte-se ao servidor Discord do Neo4j para discussões com a comunidade.

Acordos de Nível de Serviço (ANS)
Os SLAs definem as garantias de disponibilidade para sua instância do Aura:

Nível	Meta de disponibilidade	Créditos de serviço
Livre

Sem SLA

Nenhum

Profissional

Sem SLA formal

Nenhum

Crítico para os negócios

99,95% de tempo de atividade

Crédito de 10% (99,0-99,95%), crédito de 25% (<99,0%)

Nuvem virtual dedicada

99,95% de tempo de atividade

Crédito de 10% (99,0-99,95%), crédito de 25% (<99,0%)

Para obter detalhes completos do SLA, consulte o Acordo de Nível de Serviço (SLA) do Neo4j .

Dando continuidade ao seu aprendizado
Explore os seguintes recursos para continuar aprendendo:

Workshops e webinars de aprendizagem ao vivo: https://neo4j.com/events/

Sessões e conferências gravadas: https://www.youtube.com/neo4j

Recursos adicionais
Documentação:

Proteja sua conta ativando a autenticação multifator (MFA): https://neo4j.com/docs/aura/security/mfa/

Saiba mais sobre criptografia no Aura: https://neo4j.com/docs/aura/security/encryption/

Migrar bancos de dados Neo4j autogerenciados para o Aura: https://neo4j.com/docs/aura/tutorials/migration/

Fórum da Comunidade Neo4j: https://community.neo4j.com/

GraphAcademy: https://graphacademy.neo4j.com/

Aprenda a projetar e construir modelos de dados em grafos: https://graphacademy.neo4j.com/courses/modeling-fundamentals

Aprenda Cypher, a linguagem de consulta para Neo4j: https://graphacademy.neo4j.com/courses/cypher-fundamentals

Explore tópicos mais avançados: https://graphacademy.neo4j.com/courses/

Encontrando caminhos de aprendizagem
Acesse os percursos de aprendizagem guiada diretamente do seu console Aura:

5 centro de aprendizagem
Exemplos de projetos e recursos
Após iniciar um dos projetos de exemplo disponíveis, use-os para praticar as habilidades adquiridas no GraphAcademy.

Extensão Neo4j para GitHub e VS Code
Confira o repositório do Neo4j no GitHub para projetos de exemplo e recursos adicionais: https://github.com/neo4j

Encontre a extensão do Neo4j para Visual Studio Code aqui: https://marketplace.visualstudio.com/items?itemName=neo4j-extensions.neo4j-for-vscode

Recursos para começar
Após iniciar o console Aura, acesse esses recursos diretamente do menu Começar:

5 recursos adicionais
Verifique se você entendeu.
Entendendo o suporte e os SLAs
Quais planos do Aura oferecem um SLA de disponibilidade de 99,95%?

 AuraDB Gratuito apenas
 AuraDB Professional apenas
 AuraDB Business Critical e AuraDB Virtual Dedicated Cloud
 Todos os níveis de Aura
Confira a resposta
96%
Segurança e registros
Esta lição foi útil?SimNão




---












  



  
  


CURSO CONCLUIDO
Fundamentos do Neo4j e GenAI

×
Neo4j GraphAcademy
GraphAcademy
CUP
Learn graphs.
Score for your country.

Represent your country in the GraphAcademy Cup.
Complete courses, earn points, and win weekly prizes.

🏆 Join the Cup
⚡ Weekly Challenge
GROUP STAGE • WEEK 3 ENDS IN
00
DAYS
:
18
HRS
:
30
MIN
:
59
SEC
Skip to where you left off (post 5)Skip to last replySkip to top
Skip to main content

Neo4j Online Community

​

Answers Needed
Discussions
Ask a question
Developer Guides
Graph Academy
Developer Blog
🎮 Discord
green_circle OPEN: Week 3 Challenge: Show What You Learned
trophy
⚽GraphAcademy Cup Community Challenge

194
views

7
links





Summarize
Jun 25
6h

​

post by Ari_Neo4j on Jun 25

Ari_Neo4j 
Neo4j Community Manager
Neo4j Staff
6d
:trophy: Week 3 Challenge: Show What You Learned
1. Join the GraphAcademy Cup
Before you can participate in the Community Challenge, you'll need to join the GraphAcademy Cup and represent your country.

:backhand_index_pointing_right: Join the GraphAcademy Cup

Register for the GraphAcademy Cup and join your country team. (must be done before you complete the course)

2. Complete a GraphAcademy Course
Complete one of the following GraphAcademy courses:

Cypher Fundamentals
Importing Data Fundamentals
Neo4j & GenAI Fundamentals
Graph Data Modeling Fundamentals
Neo4j Fundamentals
Developing with Neo4j MCP Tools
:backhand_index_pointing_right: GraphAcademy Courses

Then submit:

:white_check_mark: Your Team Profile Link

:white_check_mark: Your GraphAcademy Public Profile Username

:white_check_mark: The course you completed

:white_check_mark: One screenshot from GraphAcademy showing completion

:white_check_mark: A short explanation (100–300 words) answering:

What was the most valuable thing you learned, and how could you apply it to a real-world problem?

Example Submission
I completed Cypher Fundamentals. The most valuable concept I learned was pattern matching using MATCH. I could apply this to identify shared entities in a fraud investigation graph, helping investigators discover hidden relationships more quickly than traditional SQL queries.

Prize Eligibility
Must complete one of the eligible courses during Week 2.
Must include a public GraphAcademy profile.
Must include Team URL and Profile Username.
Previous submissions may not be resubmitted.
This lowers the barrier dramatically:

No coding required.
No GitHub required.
No project build required.
Still reinforces learning.
Easy for you to review and verify.# :trophy: GraphAcademy Cup Submission
Topic Title Format:
Week 1: Project Name - Country

GraphAcademy Cup Team Profile Link
Paste the URL to your country team page:

Team Profile Link:

GraphAcademy Public Profile Username
Public Profile Username:

:warning: Anonymous GraphAcademy profiles are not eligible for weekly LEGO prizes.

Country
Country:

GraphAcademy Course Completed
Course Name:

Project Name
Project Name:

Description
Tell us what you built.

Description:

What Did You Learn?
What concepts, techniques, or lessons from GraphAcademy did you apply?

What I Learned:

Screenshot
Drag and drop screenshots below.

Repository / Demo Link
GitHub / Demo URL (Optional):

Additional Notes
Anything else you'd like the community to know?

Additional Notes:

:white_check_mark: Submission Checklist
Before submitting, confirm that:

I am participating in the GraphAcademy Cup.

I included my Team Profile Link.

I included my GraphAcademy Public Profile Username.

My profile is public and eligible for prize verification.

My project is related to concepts learned in GraphAcademy.

:scroll: Contest Reminder
:wrapped_gift: One LEGO prize winner will be selected every week during the GraphAcademy Cup.

:scroll: Terms & Conditions:

GraphAcademy Cup
Terms & Conditions | GraphAcademy Cup
The official terms and conditions for the GraphAcademy Cup.

:red_question_mark: FAQ:

GraphAcademy Cup
FAQ | GraphAcademy Cup
How the GraphAcademy Cup works, how points are scored, who can win, and how prizes are awarded.



194
views

7
links





Summarize
Pinned on Jun 25

Pinned on Jun 25

post by leongkwokhing 3 days ago

leongkwokhing
3d
Week 3: IT Resilience Graph – Singapore

GraphAcademy Cup Team Profile Link: Singapore | GraphAcademy Cup

GraphAcademy Public Profile Username: leongkwokhing

Country: Singapore

GraphAcademy Course Completed Course Name: Graph Data Modeling Fundamentals

Project Name: IT Resilience Graph

Description: This project leverages Neo4j Aura to build a dynamic IT infrastructure dependency model that unifies hardware, network, and application layers into a single knowledge graph. By mapping connections between critical internal assets and vendor-provided resources (such as Stripe and Singtel), the graph replaces traditional, siloed asset tracking with interconnected intelligence.

Designed for high-stakes operational resilience, the solution enables IT teams to perform instant blast-radius assessments and proactive risk management. For instance, teams can execute multi-tier variable-length path queries to instantly trace how a hardware failure cascades up to mission-critical applications, or identify how a single external vendor outage (like a Singtel telecom disruption) propagates across organisational boundaries to compromise 8 distinct downstream IT assets.

What Did You Learn?: The course provided a reinforce my understanding of graph theory and graph database architecture. Moving beyond the limitations of rows and columns, I learned how nodes, relationships and properties form an expressive, interconnected web capable of mirroring real-world complexities. The course's deep dive into common graph use cases equipped me with the logical framework needed to model intricate data ecosystems. Furthermore, mastering Cypher pattern matching unlocked the ability to turn raw data points into actionable insights.

I directly applied these concepts to build the IT Resilience Graph, transforming traditional, siloed IT asset tracking into an interconnected intelligence model. By organising hardware, network, and application components as distinct nodes and defining their relationships, I successfully mapped a dynamic topology across internal and external vendor boundaries. Applying the graph modelling and pattern-matching techniques learned in the course allowed me to implement the graph schema variable-length path queries in Neo4j Aura. This capability enables IT teams to perform precise blast-radius assessments during live incidents, tracing how a single localised failure—such as a hardware crash or a Singtel telecom outage – cascades across architectural layers to compromise critical upstream applications.

Screenshot
Subgraph in Neo4j depicting the dependency between IT assets:

image
image
852×550 50.1 KB
[Impact Analysis] If the SAN Storage Array experiences a hardware crash, using
variable-length paths (*) to traverse multiple tiers of infrastructure layers instantly
reveal that both the Customer Database and Oracle Database (and sequentially, the
E-Commerce site and ERP) will be affected.

image
image
700×322 20.7 KB
[Vendor Risk Management] By tracing paths across external boundaries, the graph
reveals that a single Singtel telecom outage triggers a domino effect impacting 8
distinct IT assets. This showcases Neo4j's unique ability to map cross-organisational
dependencies for proactive vendor risk management.

image
image
762×497 39.8 KB
Additional Notes: While path traversal shows what is currently affected, we can explore using Neo4j’s Graph Data Science (GDS) library to calculate hidden infrastructure risks before an outage happens.

For example, running the Betweenness Centrality or PageRank algorithm on the (:Component) nodes. This could pinpoint the most critical infrastructure bottlenecks (e.g., a specific router or database) that have the highest number of shortest paths passing through them. If these nodes go down, the largest chunk of your infrastructure goes down.


post by sekharchennaiah12345 2 days ago

sekharchennaiah12345
Sekharchennaiah12345ctk
2d
I made it as seperate post in related topic channel. Later get to know that we need to post here. Here is created post link (Week 3: KiranaAI (Text2Cypher + Text2SQL AI Agent for Kirana Stores - India) - 🇮🇳)


post by Ari_Neo4j 1 day ago

Ari_Neo4j 
Neo4j Community Manager
Neo4j Staff
1d
It's all good. They should be a separate post buy your entry is in :slight_smile:


last visit
post by xlrtaha 6 hours ago

xlrtaha
Neo4j Certified Developer

7
6h
Week 3: VEIL – Graph-Native Corporate Relationship Platform - Morocco
GraphAcademy Cup Team Profile Link
Team Profile Link: Morocco | GraphAcademy Cup

Public Profile Username:

xlrtaha

Country
Morocco :morocco:

GraphAcademy Courses Completed
Cypher Fundamentals, Neo4j Fundementals and Neo4j Certified Professional

Screenshot 2026-07-01 030314
Screenshot 2026-07-01 030314
1919×1079 124 KB
Certificates Screenshot

Project Name
VEIL – Graph-Native Corporate Relationship Platform

Description
VEIL is a graph-native intelligence platform for exploring corporate ownership networks using live UK Companies House data.

The platform ingests companies, directors, officers, and Persons with Significant Control (PSCs) into a Neo4j graph database and exposes the relationships through an interactive Streamlit interface. Users can explore ownership structures, visualize connected entities, analyze graph topology, inspect influence metrics, execute configurable Cypher queries, and navigate corporate ecosystems through an interactive dashboard.

The architecture is modular, allowing the registry connector to be replaced with another corporate registry while preserving the graph model and analytics pipeline.

Built with Neo4j, Python, and Streamlit.

This project was vibe-coded, guided by technical knowledge built through certifications and practical exploration. Rather than writing every line of code manually, I used AI as an engineering multiplier while focusing on architecture, system design, iterative prompting, validation, debugging, and continuous refinement.

What I Learned
The most valuable lesson from GraphAcademy was learning how to model real-world relationships as a graph instead of forcing them into relational tables. Concepts such as nodes, relationships, graph schema design, and efficient Cypher pattern matching fundamentally changed how I approached entity resolution and ownership analysis.

I applied these concepts directly while developing VEIL by modeling companies, directors, officers, and PSCs as interconnected graph entities. This made it possible to traverse ownership structures naturally, detect shared directors, identify corporate communities, and compute graph analytics that would be significantly more complex using traditional SQL joins.

Working with Neo4j also reinforced the importance of designing the graph around relationships rather than records. This project demonstrated how graph databases can simplify investigations involving beneficial ownership, financial crime, compliance, and corporate intelligence, while providing an intuitive way to explore highly connected datasets.

Devpost Publication Link with Demo Video:
Devpost

ubo-knowledge-graph
A Neo4j graph database & Streamlit intelligence workbench for mapping UK corporate ownership structures, built on the free Companies House API.

Screenshots
screenshot 1
screenshot 1
screenshot 2
screenshot 2
screenshot 8
screenshot 8


Share

Bookmark

Flag

Reply

Pinned
This topic is pinned for you; it will display at the top of its category

Tracking
You will see a count of new replies because you read this topic.

Topic list, column headers with buttons are sortable.

Suggested

Related
Replies	Views	Activity
VEIL – Graph-Native Corporate Relationship Platform 
Projects & Collaboration
operations
,
knowledge-base
,
analytics
,
fraud
0	6	2h
Policy-driven backup/restore for self-hosted Neo4j Enterprise 
Operations
operations
,
backup
0	34	1d
Cannot delete expired Neo4j Sandboxes from my account 
Neo4j Graph Platform
sandbox
0	24	2d
There is 1 unread and 3 new topics remaining, or browse other topics in 
trophy
⚽GraphAcademy Cup Community Challenge





---

CURSO CONCLUIDO
Neo4j & GenAI Fundamentals


EQUIPE

https://graphacademy.neo4j.com/teams/country-ar


https://graphacademy.neo4j.com/teams/country-br



CERTIFICADO 

https://graphacademy.neo4j.com/c/487ae88a-968f-4f06-b4f2-80268e17e0d0



NOME EXIBICAO

SERGIO

 
PERFIL PUBLICO

https://graphacademy.neo4j.com/u/c94f8f29-bcb6-410f-87b2-c5a43ddef3ac/







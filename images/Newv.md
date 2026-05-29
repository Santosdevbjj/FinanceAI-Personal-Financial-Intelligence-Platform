Atualize o Motor NER (interpretador de IA do chat) e o Dashboard para reconhecer, processar e categorizar as seguintes despesas específicas enviadas pelo usuário, aplicando as regras abaixo:

1. DESPESAS ESSENCIAIS (Regra dos 60%):
Quando o usuário mencionar palavras-chave relacionadas a estas despesas, classifique como "Alimentação (Essencial)" ou "Contas Fixas (Essencial)" e atualize os gráficos correspondentes:
- Alimentação básica: "supermercado", "açougue", "padaria", "sacolão", "hortifruti".
- Utilidades e Contas: "conta de água", "conta de luz", "energia elétrica", "gás de cozinha", "gás".
- Conectividade essencial: "telefone fixo", "internet", "plano de celular", "conta de telefone".
- Transporte: "gasolina", "combustível", "abastecer o carro", "uber", "taxi".

2. ESTILO DE VIDA (Regra dos 20%):
Quando o usuário mencionar estes itens, classifique como "Lazer e Estilo de Vida (20%)":
- Alimentação fora/Fast Food: "lanchonete", "McDonalds", "habibs", "burger king","pizzaria", "iFood".
- Entretenimento e Assinaturas: "TV por assinatura", "streaming", "Netflix", "Globoplay", "Disney+", "Spotify".

Aprimoramentos na Interface do Chat e Dashboard:
- Adicione suporte no parser para identificar frases livres como: "gastei 40 reais na padaria ontem", "paguei a conta de luz de R$ 180" ou "R$ 50 de gasolina".
- Quando o payload JSON for gerado no "Modo Técnico", garanta que essas novas categorias estruturadas (ex: "Contas Fixas", "Transporte", "Streaming") apareçam detalhadas no objeto.
- Atualize a tabela de transações recentes do Dashboard para exibir essas novas entradas simuladas com ícones representativos (ex: um raio para luz, uma gota para água, uma TV para Netflix, etc.).

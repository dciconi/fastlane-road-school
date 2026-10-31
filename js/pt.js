/* ======================================================================
   PORTUGUÊS (Brasil)
   ====================================================================== */
const PT = {
ui:{
  brand:'Autoescola Fastlane', homeAria:'Início da Autoescola Fastlane', exitsCleared:'Saídas concluídas', route:'Rota', routeMap:'Mapa da rota', courseRoute:'Rota do curso', langAria:'Idioma',
  railNote:'Passe no quiz de cada parada para concluir uma saída. Seu progresso fica salvo neste navegador.',
  foot:'Um material de estudo não oficial sobre <i>The Millionaire Fastlane</i> (2011), de MJ DeMarco. Resume as ideias do livro com palavras próprias; leia o livro para ver o argumento completo. Conteúdo educativo, não é recomendação financeira.',
  reset:'Apagar meu progresso', resetConfirm:'Clique de novo para apagar', resetDone:'Progresso apagado',
  exit:'Saída', min:'min', cleared:'Concluída', notCleared:'Não concluída',
  signs:[['CALÇADA','Pobreza'],['FAIXA LENTA','Riqueza aos 65'],['FAIXA RÁPIDA','Riqueza em anos']],
  gantryAria:'Placa de rodovia: Calçada, saída para a pobreza; Faixa Lenta, saída para a riqueza aos 65; Faixa Rápida, em frente para a riqueza em anos',
  lede:'Um curso interativo em nove saídas sobre as ideias de <i>The Millionaire Fastlane</i>, de MJ DeMarco: as três estradas para a riqueza, as equações por trás delas, o teste CENTS para um negócio de verdade e os cinco sistemas que podem gerar renda sem você.',
  start:'Começar na Saída 1', cont:n => `Continuar na Saída ${n}`, viewLicense:'Ver sua habilitação', meta:'Cerca de 80 minutos · 9 paradas · 12 ferramentas',
  routeH:'A rota', routeSub:'Cada saída tem uma lição curta, uma ferramenta prática e um quiz. Percorra na ordem.',
  howH:'Como o curso funciona', how:[['Leia a lição','Cada saída condensa uma parte do livro em poucos minutos de leitura, em linguagem simples.'],['Use a ferramenta','Calculadoras e exercícios aplicam seus próprios números às equações da riqueza e ao teste CENTS.'],['Passe na parada','Acerte 2 de 3 perguntas para concluir uma saída. Passe no exame final para ganhar sua habilitação.']],
  exitOf:(n, t, m) => `Saída ${n} de ${t} · ${m} min`,
  checkpoint:'Parada de verificação', finalExam:'Exame final', cpNote:'Acerte 2 de 3 para concluir esta saída.', finalNote:'Acerte 8 de 10 para ganhar sua habilitação.',
  yourLicense:'Sua habilitação', licNote:'Seu nome e seu plano ficam neste navegador.', startLbl:'Início', overview:'Visão geral do curso', navAria:'Navegação entre lições',
  correct:'Correto.', notQuite:'Não exatamente.', score:(r, n) => `${r} de ${n} corretas`, exitCleared:'Saída concluída.', licEarned:'Habilitação conquistada.', need:p => `Você precisa de ${p} acertos para concluir esta saída.`, continueTo:n => `Seguir para a Saída ${n}`, retake:'Refazer',
  lic:{ locked:'<b>Habilitação bloqueada.</b> Acerte 8 ou mais no exame final para emitir aqui sua habilitação Fastlane.', nameLbl:'Nome na habilitação', namePh:'Seu nome', top:['Autoescola Fastlane','Carteira de habilitação'], aria:'Carteira de habilitação Fastlane',
    name:'Nome', cls:'Categoria', clsVal:'F · Fastlane', no:'Nº registro', issued:'Emissão', score:'Nota no exame', exits:'Saídas concluídas', endorse:'Habilitações', tree:'Árvore de dinheiro', treeNone:'Ainda não escolhida', act:'Primeira ação', actNone:'Adicione uma na planilha da Saída 8' }
},
mod:{
'road-trip':{ title:'A Viagem', sub:'A riqueza é uma jornada, e existem três estradas',
body:`
<p class="lede">A maioria das pessoas recebe um único mapa para a riqueza: trabalhar, poupar, investir, esperar. <i>The Millionaire Fastlane</i> defende que esse mapa tem uma falha de fábrica e que, na verdade, circulam três mapas, cada um levando a um resultado previsível.</p>
<h3>Uma Lamborghini e uma pergunta</h3>
<p>Na adolescência, DeMarco viu uma Lamborghini Countach e perguntou ao dono o que ele fazia da vida. O dono era jovem, e a resposta foi que ele era inventor. Essa conversa rápida quebrou o roteiro que DeMarco tinha recebido. Ninguém fica rico jovem subindo degrau por degrau numa carreira ou poupando 10% do salário. Os jovens ricos que ele passou a estudar tinham construído algo que ganhava dinheiro por eles. O livro é o mapa de como eles fizeram isso.</p>
<h3>Riqueza na cadeira de rodas</h3>
<p>O plano convencional funciona, um dia. Poupe com disciplina por quarenta anos e talvez você se aposente com um bom pé-de-meia. O problema é o momento. O plano entrega liberdade no fim da vida, quando boa parte da saúde, da energia e dos melhores anos já passou. DeMarco chama isso de <b>riqueza na cadeira de rodas</b>. A pergunta por trás deste curso é como conquistar liberdade enquanto você ainda é jovem o bastante para aproveitá-la.</p>
${key('Ideia-chave', 'A riqueza é um processo, não um evento. Prêmios de loteria, sucessos virais e grandes vendas de empresas são os eventos visíveis. Por trás de toda fortuna real há um processo longo e pouco glamoroso de construir algo que o mercado acaba recompensando.')}
<h3>O que a riqueza realmente é</h3>
<p>DeMarco define riqueza com três pilares, que ele chama de <b>Trindade da Riqueza</b> (no original, os "três Fs"):</p>
<ul><li><b>Família:</b> relacionamentos fortes e tempo para cuidar deles.</li><li><b>Forma física:</b> saúde, energia e vitalidade.</li><li><b>Liberdade:</b> poder escolher como passar seus dias.</li></ul>
<p>O dinheiro importa porque compra liberdade. Uma renda alta que vem com prestações altas e nenhum tempo livre não conta como riqueza nessa definição.</p>
<h3>Os três mapas</h3>
<p>Todo mundo segue um de três mapas financeiros, tendo escolhido ou não: a <b>Calçada</b> (Sidewalk), a <b>Faixa Lenta</b> (Slowlane) e a <b>Faixa Rápida</b> (Fastlane). Cada um tem sua mentalidade e sua matemática. Escolha uma estrada para compará-las.</p>
${W('roads')}
<p>O resto do curso percorre cada estrada e depois entrega as ferramentas para você construir sua própria Faixa Rápida.</p>`,
quiz:[
 ['O que DeMarco quer dizer com "riqueza na cadeira de rodas"?', ['Riqueza que chega tarde, depois de décadas poupando','Dinheiro perdido com contas médicas','Riqueza herdada de parentes mais velhos','Renda de seguro por invalidez'], 'O plano convencional rende perto da aposentadoria, quando boa parte da saúde e do tempo já foi gasta.'],
 ['"A riqueza é um processo, não um evento." Qual destas opções é o processo?', ['Ganhar na loteria','Uma ação dobrar de valor em uma semana','Anos construindo e melhorando um produto pelo qual as pessoas pagam','Receber um bônus grande no fim do ano'], 'Eventos são os momentos visíveis. O processo é a construção contínua que torna esses momentos possíveis.'],
 ['Qual destes não faz parte da Trindade da Riqueza?', ['Família','Fama','Forma física','Liberdade'], 'A trindade é Família, Forma física e Liberdade. Fama e status estão mais perto da mentalidade da Calçada.']
]},
'sidewalk':{ title:'A Calçada', sub:'A estrada padrão, e por que renda sozinha não salva ninguém',
body:`
<p class="lede">A Calçada é a estrada em que as pessoas acabam caindo por padrão. Não há plano nem direção, e cada aumento de salário é engolido por um estilo de vida maior. Ela leva à pobreza, ou a uma renda alta que nunca vira liberdade.</p>
<h3>Renda não é riqueza</h3>
<p>Há gente na Calçada em todas as faixas de renda. O caixa que compra um celular novo no cartão de crédito e o cirurgião que aluga um carro esportivo e mora numa casa que mal consegue pagar estão na mesma estrada. Os dois transformam renda em consumo e dívida, então nada se acumula.</p>
${eq('stop', 'Equação da riqueza na Calçada', 'Riqueza = Renda + Dívida', 'Aqui, "riqueza" é o que o salário compra mais o que dá para pegar emprestado')}
<p>Por fora parece riqueza: o carro, as roupas, as viagens. Tudo desaparece quando o salário para, porque nada disso gera renda. DeMarco separa com clareza parecer rico de ser rico.</p>
<h3>Sinais de que você está na Calçada</h3>
<ul>
<li><b>A gratificação imediata</b> vence a maioria das decisões.</li>
<li><b>A dívida compra aparência</b> em vez de construir alguma coisa.</li>
<li><b>Problemas de dinheiro são resolvidos com mais dinheiro</b>, como um aumento, um empréstimo ou um golpe de sorte, e não com mudança de comportamento.</li>
<li><b>A esperança depende da sorte:</b> a loteria, um processo judicial, uma grande chance.</li>
<li><b>O futuro é problema dos outros:</b> do chefe, do governo, da economia.</li>
</ul>
${warn('Atenção', 'Parecer rico é o hobby mais caro que existe. Cada real gasto para exibir riqueza é um real que não pode mais comprar liberdade.')}
<h3>Saindo da Calçada</h3>
<p>A saída começa pela responsabilidade. Sua posição atual é a soma das suas escolhas passadas, e o seu futuro será a soma das próximas. Os primeiros passos práticos: parar de financiar estilo de vida com dívida, adiar a gratificação e começar a se ver como <b>produtor</b> de coisas que os outros compram, e não como <b>consumidor</b> do que os outros vendem.</p>
<p>Teste seu olhar. Cada frase abaixo vem de uma das três estradas.</p>
${W('sorter')}`,
quiz:[
 ['Qual equação descreve a Calçada?', ['Riqueza = Renda Principal + Investimentos no Mercado','Riqueza = Renda + Dívida','Riqueza = Lucro Líquido + Valor do Ativo','Riqueza = Poupança × Tempo'], 'Na Calçada, o poder de compra vem do salário mais o dinheiro emprestado.'],
 ['Uma médica ganha $400.000 por ano, tem um Porsche alugado, cartões de crédito no limite e nenhuma poupança. Em que estrada ela está?', ['Faixa Rápida, porque a renda é alta','Faixa Lenta, porque tem uma profissão','Calçada, porque a renda vai direto para consumo e dívida','Nenhuma delas'], 'A renda não decide a estrada. O que acontece com a renda, sim.'],
 ['Qual é o primeiro passo para sair da Calçada?', ['Conseguir um aumento','Assumir a responsabilidade pelas suas escolhas','Encontrar um chefe melhor','Comprar menos bilhetes de loteria'], 'A responsabilidade coloca você de volta no volante. Todo o resto vem depois.']
]},
'slowlane':{ title:'A Faixa Lenta', sub:'O plano respeitável, e as duas variáveis que ele limita',
body:`
<p class="lede">A Faixa Lenta é o plano que você ouviu de pais, professores e assessores financeiros: estudar, conseguir um bom emprego, poupar 10%, investir em fundos de índice e na previdência, viver com frugalidade e se aposentar rico aos 65. É uma estrada respeitável. A crítica de DeMarco é que ela é lenta por definição e controlada por todos, menos por você.</p>
${eq('warn', 'Equação da riqueza na Faixa Lenta', 'Riqueza = Renda Principal + Investimentos no Mercado', 'Renda Principal = seu valor por hora × horas trabalhadas · Investimentos crescem com juros compostos')}
<h3>Duas variáveis com teto</h3>
<p>Veja o que a equação deixa você mudar. As <b>horas trabalhadas</b> têm um teto rígido: a semana tem 168 horas, e ninguém vende mais de 60 a 80 delas por muito tempo. O <b>valor por hora</b> é limitado pelo empregador, pelo setor e pelo mercado para as suas habilidades. Um ótimo aumento é de 10% ou 20%. Nenhuma das duas variáveis pode crescer cem vezes.</p>
<h3>Quem controla a Faixa Lenta</h3>
<p>Até as variáveis que você consegue empurrar estão nas mãos de outras pessoas. O empregador decide se você tem emprego. O mercado decide quanto seus investimentos rendem. Inflação, impostos e recessões decidem quanto o dinheiro vale. Um plano que depende de quarenta anos ininterruptos de emprego e de mercados colaborativos é esperança disfarçada de estratégia.</p>
${warn('A troca 5 por 2', 'Cinco dias de trabalho por dois dias de liberdade, repetidos por quatro décadas, em troca da promessa de liberdade quando você estiver velho.')}
${W('week')}
<h3>Juros compostos são lentos</h3>
<p>Juros compostos são poderosos com somas grandes e prazos longos. Esse é exatamente o problema: quem poupa pouco precisa das duas coisas, então a recompensa chega no fim da linha do tempo. Os juros compostos aceleram muito quem já tem dinheiro e aceleram devagar quem não tem. Teste com os seus números.</p>
${W('slowcalc')}
<p>Nada disso torna ruim poupar e investir. A Faixa Rápida também usa essas ferramentas, no final, quando já existe uma soma grande para investir. O erro é tratá-las como o motor da riqueza, e não como o lugar onde a riqueza fica estacionada.</p>`,
quiz:[
 ['A renda principal na Faixa Lenta é o produto de quais duas variáveis?', ['Unidades vendidas × lucro por unidade','Valor por hora × horas trabalhadas','Lucro líquido × múltiplo do setor','Taxa de poupança × taxa de juros'], 'As duas têm teto: as horas pelo relógio, o valor por hora pelos empregadores e pelo mercado.'],
 ['Por que DeMarco diz que a Faixa Lenta é incontrolável?', ['Porque investir é complicado demais','Porque empregadores, mercados e a economia decidem o resultado','Porque a previdência privada é proibida em alguns países','Porque você não pode escolher seu emprego'], 'Seu emprego, seus rendimentos e o valor do seu dinheiro dependem de forças que você não controla.'],
 ['Quando os juros compostos são uma ferramenta forte de riqueza?', ['Quando você começa com $100 por mês','Quando você já tem uma soma grande para investir','Quando os juros estão perto de zero','Quando você confere o saldo todo dia'], 'Os juros compostos ampliam o que você já tem. Capital grande mais tempo é o que os torna rápidos.']
]},
'fastlane':{ title:'A Faixa Rápida', sub:'Novas variáveis, a Lei do Impacto e o sistema de dinheiro',
body:`
<p class="lede">A Faixa Rápida é uma estratégia de negócios e de vida baseada em ser dono de um sistema que gera renda sem o seu tempo direto. O objetivo é a riqueza em anos, não em décadas, e ela chega lá mudando as variáveis da equação da riqueza.</p>
${eq('', 'Equação da riqueza na Faixa Rápida', 'Riqueza = Lucro Líquido + Valor do Ativo', 'Lucro Líquido = Unidades Vendidas × Lucro por Unidade · Valor do Ativo = Lucro Líquido × Múltiplo do Setor')}
<h3>Variáveis sem teto</h3>
<p>Compare com a Faixa Lenta. As <b>unidades vendidas</b> não têm teto: um produto pode vender dez cópias ou dez milhões. O <b>lucro por unidade</b> é algo que você define e melhora. E o próprio negócio vira um <b>ativo</b> que compradores avaliam como um múltiplo do lucro, então uma empresa que lucra $1 milhão por ano pode ser vendida por várias vezes isso. Essas variáveis estão sob o seu controle e podem ser multiplicadas, não só empurradas um pouco.</p>
${W('fastcalc')}
<h3>Torne-se produtor</h3>
<p>A Faixa Rápida inverte a sua relação com o mercado. Consumidores compram os produtos, os financiamentos e as assinaturas; produtores os criam. Para entrar na Faixa Rápida, comece a olhar cada produto, serviço e reclamação perguntando como é feito, quem lucra e o que poderia ser melhor.</p>
<h3>A Lei do Impacto</h3>
<p>O princípio central de DeMarco (no original, <i>Law of Effection</i>): <b>quanto mais vidas você toca, em escala ou em magnitude, mais dinheiro você ganha.</b> Escala significa muitas pessoas, cada uma atendida um pouco, como um aplicativo com um milhão de usuários. Magnitude significa poucas pessoas, cada uma atendida em grande medida, como uma incorporadora vendendo um prédio comercial. Um emprego impacta um empregador. Um sistema pode impactar milhões.</p>
${W('effection')}
<h3>O sistema de dinheiro</h3>
<p>A Faixa Rápida termina num lugar surpreendentemente conservador. Quando o sistema de negócio gera uma soma grande, por lucros ou por uma venda, esse dinheiro vai para investimentos seguros que geram renda, e os juros substituem o salário. Esse segundo sistema é o que torna a riqueza permanente, e não uma fase de sorte.</p>
${key('Ideia-chave', 'A Faixa Rápida são dois sistemas. O sistema de negócio cria a soma grande rapidamente. O sistema de dinheiro a transforma em renda para a vida toda.')}
${W('moneysys')}`,
quiz:[
 ['Qual é a equação da riqueza na Faixa Rápida?', ['Riqueza = Renda + Dívida','Riqueza = Lucro Líquido + Valor do Ativo','Riqueza = Renda Principal + Investimentos no Mercado','Riqueza = Horas × Valor'], 'Lucro líquido é unidades × lucro por unidade, e valor do ativo é lucro líquido × o múltiplo do setor.'],
 ['Qual frase é a Lei do Impacto?', ['Gaste menos do que ganha','Quanto mais vidas você toca, em escala ou magnitude, mais dinheiro ganha','Dinheiro poupado é dinheiro ganho','Trabalhe com inteligência, não com força'], 'O dinheiro acompanha o tamanho do efeito que você tem sobre outras pessoas.'],
 ['O que faz o sistema de dinheiro?', ['Paga o marketing','Transforma uma soma grande em renda com investimentos seguros','Substitui a necessidade de um negócio','Financia compras de estilo de vida'], 'Quando o negócio gera uma soma grande, o sistema de dinheiro faz essa riqueza durar.']
]},
'driver':{ title:'O Motorista', sub:'Você é o veículo, e o tempo é o combustível',
body:`
<p class="lede">Na metáfora de DeMarco, você é o veículo. Nenhum negócio, produto ou sistema supera a pessoa que o dirige, então a Faixa Rápida começa pelo jeito como você pensa e usa seu tempo.</p>
<h3>O volante é seu</h3>
<p>Sua situação atual é resultado de escolhas, e o seu futuro é resultado de escolhas que você ainda não fez. Culpar a economia, um chefe ou o azar entrega o volante para outra pessoa. Assumir não significa que tudo é culpa sua. Significa que mudar é responsabilidade sua.</p>
<h3>O tempo é o combustível</h3>
<p>O tempo é o único recurso que você não consegue recuperar. DeMarco separa o tempo que é realmente seu do tempo gasto ganhando dinheiro, indo ao trabalho e se recuperando dele. Deslocamentos, tarefas e as noites gastas para desestressar pertencem ao emprego. O verdadeiro propósito da Faixa Rápida é mover horas da segunda coluna para a primeira.</p>
${W('timeaudit')}
<h3>Faça a manutenção do veículo</h3>
<ul>
<li><b>Crenças.</b> Roteiros antigos como "dinheiro é sujo", "rico teve sorte" ou "não levo jeito para negócios" funcionam como limitadores de velocidade. Dê nome a eles e teste-os contra as evidências.</li>
<li><b>Companhias.</b> As pessoas com quem você convive definem o que parece normal. Procure construtores, mentores e exemplos da vida que você quer.</li>
<li><b>Educação.</b> A formatura não é o fim do aprendizado. Quem está na Faixa Rápida aprende o tempo todo com livros, cursos, experimentos e fracassos, porque o negócio exige.</li>
</ul>
${warn('O pedágio', 'Construir uma Faixa Rápida costuma custar alguns anos difíceis de noites, fins de semana e contenção no estilo de vida. A Faixa Lenta pede um sacrifício parecido por quarenta anos.')}`,
quiz:[
 ['Na metáfora da viagem, qual é o veículo?', ['Seu negócio','Seu carro','Você','Sua conta bancária'], 'Você é o veículo e o motorista. Suas crenças, hábitos e escolhas definem o limite de velocidade.'],
 ['Por que DeMarco trata o tempo como o ativo mais importante?', ['É fácil comprar mais','Não pode ser reposto depois de gasto','Os empregadores o valorizam muito','Ele rende como juros compostos'], 'Dinheiro se recupera. Tempo não, e por isso trocá-lo barato custa tanto.'],
 ['Qual destes é um exemplo de manutenção do veículo?', ['Trocar de carro por um de luxo no crédito','Substituir uma crença limitante depois de testá-la contra evidências','Evitar qualquer informação nova','Esperar o momento certo'], 'Crenças, companhias e aprendizado constante são o trabalho de manutenção.']
]},
'cents':{ title:'O Teste CENTS', sub:'Cinco mandamentos que separam um negócio Fastlane de um emprego',
body:`
<p class="lede">Nem todo negócio é Faixa Rápida. Muitos negócios são empregos fantasiados: você é dono deles, mas eles são donos do seu tempo. O filtro de DeMarco para um negócio Fastlane de verdade são cinco mandamentos, cuja sigla em inglês é <b>CENTS</b>: <i>Control, Entry, Need, Time, Scale</i>.</p>
<div class="commandments">
${cmd('C', 'Controle', 'Você controla a operação? Se um franqueador, uma única plataforma ou um fornecedor pode mudar as regras da noite para o dia, você é passageiro, não motorista.', 'Sinais de alerta', 'contratos de franquia rígidos, dependência de um marketplace ou de um algoritmo de busca, distribuidores de marketing multinível')}
${cmd('E', 'Entrada', 'Quão fácil é para qualquer pessoa começar? Quando as barreiras de entrada caem, a oportunidade cai junto. Se qualquer um pode começar amanhã com $99, milhares já começaram.', 'Sinais de alerta', 'oportunidades "prontas para usar", kits iniciais, qualquer coisa vendida como dinheiro fácil')}
${cmd('N', 'Necessidade', 'Resolve uma necessidade pela qual as pessoas pagam? Negócios Fastlane são construídos em torno do cliente, não da paixão do dono.', 'Sinais de alerta', '"eu adoro, então os outros também vão adorar", ninguém pedindo, uma solução procurando um problema')}
${cmd('T', 'Tempo', 'Funciona sem as suas horas? Se a renda para quando você para, é um emprego do qual você é dono.', 'Sinais de alerta', 'receita ligada a horas cobradas, o dono é o produto, nenhum plano para sistematizar')}
${cmd('S', 'Escala', 'Consegue alcançar muitas pessoas, ou entregar um valor muito grande a poucas? Negócios de um ponto só, apenas locais ou de atendimento individual batem no teto.', 'Sinais de alerta', 'geografia limitada, impossível de replicar, capacidade limitada pelas suas mãos')}
</div>
<p>Um negócio não precisa de nota máxima no primeiro dia. Os mandamentos mostram onde está o teto e o que corrigir. A Necessidade é a base: sem ela, nada mais importa. Passe alguns exemplos pelo inspetor e depois teste uma ideia sua.</p>
${W('cents')}`,
quiz:[
 ['O que significa o E de CENTS?', ['Esforço','Patrimônio','Entrada','Execução'], 'Entrada: quanto mais fácil for para qualquer um começar, mais fraca é a oportunidade.'],
 ['Um designer freelancer que cobra por hora viola mais claramente qual mandamento?', ['Necessidade','Tempo','Controle','Entrada'], 'Quando a renda para no momento em que você para de trabalhar, o negócio não se desligou do seu tempo.'],
 ['Por que o livro trata o marketing multinível como uma Faixa Rápida fraca?', ['Os produtos são sempre ruins','Qualquer um pode entrar, e a empresa-mãe controla as regras','É difícil demais começar','Exige diploma universitário'], 'Barreiras de entrada baixas e pouco controle reprovam dois mandamentos ao mesmo tempo.']
]},
'money-trees':{ title:'Árvores de Dinheiro', sub:'Os cinco sistemas de negócio que podem crescer sem você',
body:`
<p class="lede">Uma árvore de dinheiro é um sistema de negócio que continua gerando renda depois que você a planta e cuida dela. DeMarco cita cinco tipos de sistema, ou sementes, que podem virar árvores de dinheiro. A maioria das fortunas Fastlane vem de uma delas ou de uma combinação.</p>
<div class="seeds">
${seed('Sistemas de aluguel', 'Seja dono de algo que outros pagam para usar.', 'Imóveis, equipamentos, licenciamento de propriedade intelectual e royalties. O ativo rende enquanto você dorme, e os imóveis trazem magnitude.')}
${seed('Sistemas computacionais', 'Software, aplicativos, sites e plataformas online.', 'Construídos uma vez e usados por muitos, com custo quase zero por cliente adicional. A maior escala de todas as sementes.')}
${seed('Sistemas de conteúdo', 'Informação e entretenimento.', 'Livros, newsletters, cursos, vídeos e podcasts. Criados uma vez, consumidos repetidamente, pagos por vendas, assinaturas ou publicidade.')}
${seed('Sistemas de distribuição', 'Levar produtos a muita gente.', 'Inventar e fabricar um produto, vender por varejistas e redes, ou distribuir produtos de outras empresas.')}
${seed('Sistemas de recursos humanos', 'Um negócio tocado por pessoas que você emprega.', 'Equipes, gestores e processos fazem o trabalho. O mais difícil de construir, e o caminho para um negócio de serviços escapar das horas do dono.')}
</div>
<p>Combinações são comuns e fortes: uma empresa de software que publica conteúdo para atrair clientes, ou uma empresa de produtos que licencia seus designs. Escolha sua semente primeiro pela Necessidade, depois por quão bem o sistema cumpre o CENTS.</p>
${W('seeds')}`,
quiz:[
 ['Ter uma carteira de prédios residenciais é que tipo de sistema?', ['Conteúdo','Aluguel','Distribuição','Computacional'], 'Os inquilinos pagam para usar algo que é seu.'],
 ['Por que os sistemas computacionais são tão poderosos?', ['Não precisam de clientes','Cada cliente a mais custa quase nada para atender','São imunes à concorrência','Nunca precisam de atualização'], 'Custo marginal quase zero permite que o software alcance uma escala enorme.'],
 ['Qual sistema permite que um negócio de serviços se desligue do tempo do dono?', ['Sistemas de recursos humanos','Sistemas de conteúdo','Sistemas de aluguel','Nenhum deles'], 'Contratar e treinar pessoas para prestar o serviço, com processos e gestores, libera as horas do dono.']
]},
'accelerate':{ title:'Acelere', sub:'Execução, necessidade e o caminho até um evento de liquidez',
body:`
<p class="lede">Conhecer o mapa não é o mesmo que dirigir. O último trecho do livro fala de velocidade: como quem está na Faixa Rápida transforma uma ideia num sistema funcionando, e o sistema em liberdade.</p>
<h3>Execução vence ideias</h3>
<p>Ideias são baratas e abundantes. O valor está na execução: construir, lançar, vender e melhorar. Uma ideia modesta executada sem parar vence uma ideia brilhante que fica no caderno. Pare de esperar a ideia perfeita.</p>
<h3>Necessidade vence paixão</h3>
<p>"Faça o que você ama e o dinheiro virá" deixa o cliente de fora. Negócios Fastlane começam pelo que as pessoas precisam e estão dispostas a pagar. A paixão costuma vir depois do sucesso, quando você passa a amar ser bom em algo e ser livre.</p>
<h3>Escute as reclamações</h3>
<p>Toda reclamação é uma necessidade que ninguém resolveu bem. Frustrações no trabalho, atendimento ruim, processos lentos e produtos que quase funcionam são aberturas. Pratique transformar uma delas em oportunidade.</p>
${W('opportunity')}
<h3>Seja diferente, depois seja melhor</h3>
<p>Os clientes escolhem entre opções, então dê um motivo: melhor atendimento, melhor design, uma marca clara, mais valor do que o preço sugere. Trate a experiência do cliente como o produto e continue melhorando com base no que ele diz.</p>
<h3>Saia com um evento de liquidez</h3>
<p>A equação da Faixa Rápida conta o valor do ativo por um motivo. Vender todo ou parte de um negócio transforma anos de lucro numa soma única. Essa soma alimenta o sistema de dinheiro, e a viagem chega ao destino: renda dos investimentos e um tempo que pertence a você.</p>
<h3>Planeje o primeiro trecho</h3>
<p>Escreva sua rota. Seu plano fica salvo neste navegador e aparece na sua habilitação no fim do curso.</p>
${W('plan')}`,
quiz:[
 ['Segundo o livro, o que importa mais?', ['Uma ideia brilhante','Execução','Um plano de negócios perfeito','Acertar o momento do mercado'], 'Ideias valem pouco até alguém executá-las.'],
 ['Qual é a visão do livro sobre paixão?', ['Siga sua paixão e o dinheiro virá','Comece pela necessidade; a paixão costuma vir depois do sucesso','Paixão não tem nada a ver com felicidade','Só pessoas apaixonadas têm sucesso'], 'A necessidade é a base. A paixão é bem-vinda, mas os clientes pagam por soluções.'],
 ['O que é um evento de liquidez?', ['Uma queda repentina do mercado','Vender todo ou parte de um negócio, transformando valor do ativo em dinheiro','Quitar o cartão de crédito','Passar a poupança para a conta corrente'], 'Ele converte a metade "valor do ativo" da equação da Faixa Rápida numa soma única.']
]},
'final-exam':{ title:'Exame Final', sub:'Dez perguntas sobre toda a rota, e sua habilitação',
body:`<p class="lede">Dez perguntas que cobrem todas as saídas. Acerte 8 ou mais para ganhar sua habilitação Fastlane.</p>`,
quiz:[
 ['Qual estrada usa a dívida para parecer rico?', ['Calçada','Faixa Lenta','Faixa Rápida'], 'Na Calçada, riqueza é renda mais dívida, gasta em aparência.'],
 ['A renda principal da Faixa Lenta é igual a:', ['Unidades vendidas × lucro por unidade','Valor por hora × horas trabalhadas','Lucro líquido × múltiplo','Poupança × taxa de juros'], 'As duas variáveis têm teto, e é por isso que a Faixa Lenta é lenta.'],
 ['Na equação da Faixa Rápida, o valor do ativo é igual a:', ['Receita menos custos','Lucro líquido × múltiplo do setor','Unidades vendidas × preço','Seu salário × 40 anos'], 'Compradores pagam um múltiplo do lucro por um negócio que continua gerando lucro.'],
 ['Um negócio lucra $400.000 por ano num setor em que empresas são vendidas por 4× o lucro. Qual é, aproximadamente, o valor do ativo?', ['$400.000','$1,6 milhão','$4 milhões','$100.000'], '$400.000 × 4 = $1,6 milhão, além do lucro líquido do ano.'],
 ['Um negócio que para de ganhar quando você para de trabalhar reprova em qual mandamento?', ['Controle','Entrada','Tempo','Necessidade'], 'Tempo: um negócio Fastlane precisa se desligar das suas horas.'],
 ['Uma newsletter com 20.000 assinantes pagantes é que tipo de árvore de dinheiro?', ['Sistema de aluguel','Sistema de conteúdo','Sistema de distribuição','Sistema de recursos humanos'], 'Informação criada uma vez e consumida repetidamente é um sistema de conteúdo.'],
 ['Uma incorporadora que vende poucos prédios de $10 milhões usa qual lado da Lei do Impacto?', ['Escala','Magnitude','Nenhum'], 'Poucas pessoas, valor muito grande para cada uma: magnitude.'],
 ['"A riqueza é um processo, não um evento" significa:', ['A riqueza vem de construir com constância, não de um único momento de sorte','Você deve esperar o evento certo','Eventos não têm relação com riqueza','Só a riqueza lenta é real'], 'O evento visível é o resultado de um longo processo.'],
 ['A Faixa Rápida combina quais dois sistemas?', ['Um emprego e um bico','Um sistema de negócio e um sistema de dinheiro','Previdência privada e FGTS','Imóveis e ações'], 'O sistema de negócio constrói a soma grande; o sistema de dinheiro a transforma em renda duradoura.'],
 ['A Trindade da Riqueza é:', ['Família, Forma física, Liberdade','Fé, Fama, Fortuna','Foco, Finanças, Liberdade','Família, Fortuna, Fama'], 'Relacionamentos, saúde e poder de escolha.']
]}
},
w:{
  roads:{ label:'Compare', title:'Três mapas', roads:[
    { name:'Calçada', dest:'Destino: pobreza', eq:'Riqueza = Renda + Dívida', rows:[['O dinheiro serve para','Gastar e parecer rico'],['A dívida é','Um jeito de ter agora'],['O tempo é','Abundante, então é vendido barato'],['Educação','Termina na formatura'],['A renda vem de','Um emprego, gasta assim que chega'],['Quem controla','Ninguém. A um imprevisto da crise']] },
    { name:'Faixa Lenta', dest:'Destino: mediocridade, riqueza perto dos 65', eq:'Riqueza = Renda Principal + Investimentos no Mercado', rows:[['O dinheiro serve para','Poupar e investir passivamente'],['A dívida é','A inimiga'],['O tempo é','Trocado livremente agora pela liberdade depois'],['Educação','Diplomas para ganhar mais'],['A renda vem de','Um emprego, mais juros compostos'],['Quem controla','Empregadores, mercados e o calendário']] },
    { name:'Faixa Rápida', dest:'Destino: riqueza, possivelmente em anos', eq:'Riqueza = Lucro Líquido + Valor do Ativo', rows:[['O dinheiro serve para','Construir sistemas e comprar tempo de volta'],['A dívida é','Evitada para consumo, usada com cuidado para construir ativos'],['O tempo é','O ativo mais valioso, nunca vendido barato'],['Educação','Para a vida toda, por conta própria'],['A renda vem de','Um sistema de negócio, depois um sistema de dinheiro'],['Quem controla','Você']] } ] },
  sorter:{ label:'Pratique', title:'Identifique a estrada', names:['Calçada','Faixa Lenta','Faixa Rápida'],
    items:['"Vou financiar a caminhonete nova. A parcela é de só $650 por mês."','"Se eu contribuir o máximo para a previdência e mantiver os gastos baixos, me aposento aos 62."','"Todo mundo no meu setor reclama disso. Pode virar um produto."','"Alguém tem que ganhar na loteria. Por que não eu?"','"Vou fazer um mestrado para meu empregador me pagar mais por hora."','"Prefiro não ganhar nada por um ano construindo algo que venda sem mim."','"Eu mereço essas férias. Vou passar no cartão."','"Um retorno médio de 8% vai me deixar rico um dia."','"Em vez de comprar mais um aplicativo, o que seria preciso para criar um?"'],
    why:['Dívida e gratificação imediata: Calçada clássica.','Emprego, poupança e juros compostos por décadas: Faixa Lenta.','Pensar como um produtor que constrói sistemas: Faixa Rápida.'],
    left:n => `faltam ${n}`, todo:n => `${n} frases para classificar`, again:'Recomeçar' },
  week:{ label:'Visualize', title:'Uma vida de trabalho em semanas 5 por 2', days:['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'], sold:'VENDIDO', yours:'SEU', years:'Anos de trabalho em tempo integral', yearsOut:y => `${y} anos`,
    stats:['Dias úteis vendidos','Horas vendidas (40/sem)','Dias de fim de semana','Dias de férias (2 sem/ano)'] },
  slow:{ label:'Calculadora', title:'A máquina do tempo da Faixa Lenta', fields:['Sua idade','Renda anual ($)','Poupado por ano (%)','Retorno anual (%)','Gasto anual quando livre ($)','Rendimento seguro da poupança (%)'],
    stats:['Número da liberdade','Idade da liberdade','Anos de 5 por 2','Rendimento vs. aportes'], never:'Não até os 85', target:'Número da liberdade', freeAt:a => `Livre aos ${a}`, aria:'Gráfico de crescimento do patrimônio',
    note:'Números de exemplo. Considera renda fixa em valores de hoje, sem aumentos, impostos ou quedas do mercado. Seu número da liberdade é o patrimônio cujo rendimento cobre seu gasto anual.' },
  fast:{ label:'Calculadora', title:'Monte uma equação Fastlane', units:'Unidades vendidas por ano', profit:'Lucro por unidade', mult:'Múltiplo do setor', salary:'Comparar com um salário de ($/ano)',
    stats:['Lucro líquido / ano','Valor do ativo','Riqueza','Anos de salário para igualar'], barF:'Faixa Rápida: lucro de um ano + valor do ativo', barS:'Faixa Lenta: 40 anos de salário bruto',
    note:'Unidades e lucro por unidade não têm teto; horas e valor por hora têm. Os múltiplos variam com o setor, o tamanho e o crescimento.' },
  eff:{ label:'Explore', title:'A Lei do Impacto', presets:['Um emprego','Freelancer','Restaurante local','Livro best-seller','Aplicativo','Incorporadora'], lives:'Pessoas impactadas por ano', value:'Valor para cada pessoa',
    stats:['Impacto total','Apoiado em'], lean:['Uma pessoa','Escala','Magnitude','Ambos'], axis:'Escala: pessoas impactadas →', iso:['$1 mil','$1 mi','$1 bi','$1 tri'], aria:'Gráfico de escala versus magnitude',
    note:'Impacto = pessoas × valor para cada uma. A escala move você para a direita, a magnitude para cima. As linhas tracejadas marcam impacto total igual.' },
  money:{ label:'Calculadora', title:'O sistema de dinheiro', sum:'Soma vinda do negócio', yield:'Rendimento de investimentos seguros', stats:['Renda por ano','Por mês','Horas de trabalho necessárias'],
    note:'Apenas ilustrativo. Os rendimentos reais mudam com os juros, e impostos e inflação reduzem o que você fica.' },
  time:{ label:'Auditoria', title:'Para onde vão suas 168 horas', cats:['Sono','Trabalho','Deslocamento','Tarefas e recuperação do trabalho','TV, redes sociais e jogos','Família, amigos e exercícios','Aprendizado','Construindo seu sistema'],
    legend:['Vendido ao emprego','Consumindo','Construindo','Vida e descanso','Não atribuído'], note:'Semana de exemplo. Troque os números pelos seus.',
    over:t => `<b>Isso soma ${t} horas.</b> A semana só tem 168. Reduza alguma categoria para ver sua auditoria.`,
    out:(s, c, b, m, w) => `Você vende <b>${s}</b> horas por semana ao emprego e passa <b>${c}</b> consumindo, contra <b>${b}</b> construindo algo seu. Levar metade do seu tempo de tela para a construção rende <b>${m} horas por ano</b>, cerca de ${w} semanas de trabalho em tempo integral apontadas para a sua Faixa Rápida.` },
  cents:{ label:'Inspetor', title:'Aplique o teste CENTS', names:['Controle','Entrada','Necessidade','Tempo','Escala'], seg:['Passa','Fraco','Reprova'], restore:'Restaurar as notas sugeridas',
    presets:{
      saas:['Software de agendamento para clínicas odontológicas',['Você é dono do código, do preço e do roadmap.','Construir um bom software exige habilidade e tempo, o que afasta concorrentes.','Faltas em consultas custam dinheiro de verdade às clínicas.','O software funciona 24 horas; o suporte pode ter equipe.','Milhares de clínicas, cada uma atendida quase sem custo extra.']],
      coffee:['Cafeteria de bairro',['Você administra, embora o dono do imóvel tenha muito poder.','Um aluguel e uma máquina de espresso. Muita gente abre uma por ano.','As pessoas querem um bom café por perto.','Os donos muitas vezes ficam no balcão. A renda precisa de equipe para se desligar.','Um ponto atende um bairro.']],
      mlm:['Distribuidor de suplementos em marketing multinível',['A empresa-mãe define produtos, preços e regras.','Qualquer um entra pagando um kit inicial.','Há alguma necessidade do produto, mas as vendas dependem de recrutamento.','A renda depende de você vender e recrutar sem parar.','Limitado pela sua rede de contatos.']],
      freelance:['Design gráfico freelancer',['Você escolhe clientes e preços.','Um notebook e um portfólio. A concorrência é global.','Empresas precisam de design.','Você é o produto. A renda para quando você para.','Limitado pelas suas horas.']],
      rental:['Pequena carteira de imóveis para aluguel',['Você é dono do ativo e define as condições dentro da lei.','Capital e crédito são barreiras reais, embora muitos investidores concorram.','Todo mundo precisa de moradia.','Uma administradora pode tocar sem você.','Cresce por magnitude, um imóvel de cada vez.']],
      mine:['Sua própria ideia',['Quem poderia mudar suas regras da noite para o dia?','Qualquer um poderia começar isso amanhã com $99?','Quem está pedindo isso, e vai pagar?','A renda para quando você para?','Pode atender muitos, ou entregar grande valor a poucos?']] },
    v:{ rate:['Avalie os cinco','Escolha Passa, Fraco ou Reprova para cada mandamento.'], noneed:['Sem necessidade, sem negócio','Sem uma necessidade real, nada mais importa. Encontre um problema que as pessoas pagariam para resolver.'], fast:['Faixa Rápida','Este sistema pode se desligar do seu tempo e crescer sem teto.'], pot:['Faixa Rápida com buracos','Existe um negócio real aqui. Corrija os mandamentos fracos antes de acelerar.'], job:['Um emprego do qual você é dono','Você pode ser o chefe, mas o negócio é dono do seu tempo ou outra pessoa é dona das regras.'], trap:['Armadilha da Calçada','Reprova na maioria dos mandamentos. Dificilmente vai gerar liberdade.'] } },
  seeds:{ label:'Pratique', title:'Identifique a árvore de dinheiro', names:['Aluguel','Computacional','Conteúdo','Distribuição','Recursos humanos'],
    items:['Um aplicativo de treinos por assinatura','Um prédio com 12 apartamentos','Um podcast e uma newsletter pagos por patrocinadores','Criar um utensílio de cozinha, fabricá-lo e vendê-lo em grandes redes varejistas','Uma empresa de limpeza comercial com 40 funcionários e dois gestores','Licenciar um design patenteado a um fabricante em troca de royalties','Um marketplace online que conecta professores particulares e alunos','Uma série de e-books sobre marcenaria de nicho','Alugar equipamentos de construção para empreiteiras'],
    fb:(ok, s) => `${ok ? 'Correto' : 'Não exatamente'}: sistema de ${s.toLowerCase()}.`, left:n => `faltam ${n}`, todo:n => `${n} negócios para classificar`, again:'Recomeçar' },
  opp:{ label:'Exercício', title:'Transforme uma reclamação em oportunidade', fields:['Quem está frustrado?','O que os frustra?','Como lidam com isso hoje?'],
    defaults:['Pequenas clínicas odontológicas','pacientes faltam às consultas e a equipe passa horas remarcando','ligações telefônicas e cartões de lembrete em papel'], fallback:['Algum grupo de pessoas','algo continua dando errado','improvisos'],
    out:(who, pain, now) => `<b>Oportunidade:</b> ${who} perdem tempo ou dinheiro porque ${pain}. Hoje dependem de ${now}. Um sistema que resolva isso para milhares deles, sem precisar das suas horas, é um candidato à Faixa Rápida.`,
    list:['<b>Necessidade:</b> eles pagariam para esse problema sumir?','<b>Entrada:</b> o que impediria um concorrente de copiar você no mês que vem?','<b>Escala:</b> quantos outros têm esse problema?','<b>Próximo passo:</b> <a href="#cents">passe pelo inspetor CENTS</a>.'],
    note:'Exemplo preenchido. Troque por uma reclamação que você ouviu esta semana.' },
  plan:{ label:'Planilha', title:'Meu plano Fastlane', need:'A necessidade que vou atender', needPh:'Quem tem o problema, e qual é ele?', seed:'Minha árvore de dinheiro', weak:'Mandamento mais fraco', hours:'Horas por semana que vou recuperar',
    fix:'Como vou corrigir o mandamento fraco', fixPh:'ex.: criar uma versão que funcione sem mim', act:'Minha primeira ação nesta semana', actPh:'ex.: entrevistar cinco gerentes de clínica sobre faltas em consultas', saved:'Salvo neste dispositivo',
    seeds:['Escolha um sistema','Sistema de aluguel','Sistema computacional','Sistema de conteúdo','Sistema de distribuição','Sistema de recursos humanos'], cmds:['Escolha um','Controle','Entrada','Necessidade','Tempo','Escala'] }
}
};


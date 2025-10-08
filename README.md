<h1>Projeto JokenPô :punch::raised_hand::v:</h1> 
<br>
<h2>Este projeto implementa o clássico jogo JokenPô (Pedra, Papel e Tesoura) em uma interface web interativa. Ele utiliza uma combinação de HTML para a estrutura, CSS para o estilo e JavaScript para a lógica do jogo e a interatividade.</h2>
<br>
<h3>HTML</h3>
<p>Estrutura Base: Foi criado um container principal para centralizar todo o conteúdo na tela, garantindo uma apresentação organizada.

Interatividade: Os botões para as escolhas do jogador (rock, paper, scissors) utilizam emojis para representar as opções. A mágica da interatividade inicial está no atributo onclick="playHuman('escolha')", que liga diretamente a ação do clique à função JavaScript que inicia o jogo.

Exibição de Dados: Elementos <span> com IDs (human-score e machine-score) foram definidos para que o JavaScript possa facilmente selecionar e atualizar a pontuação do jogador e da "Alexa" (a máquina). O parágrafo com a classe result serve para exibir a mensagem do resultado de cada rodada.

Conexão de Arquivos: A folha de estilo (style.css) é linkada no <head> e o arquivo JavaScript (script.js) é carregado no final do <body> (<script src="./script.js"></script>). Essa prática garante que o HTML seja totalmente carregado antes de o script ser executado, evitando erros de manipulação do DOM.</p>

<h3>CSS</h3>
<p>O CSS (Cascading Style Sheets) transforma a estrutura em uma interface visualmente agradável e responsiva.

Estilo Global: O seletor universal (*) é usado para zerar as margens e paddings (margin: 0; padding: 0;), garantindo um controle total sobre o layout (Reset CSS).

Fundo e Centralização: O body usa uma imagem de fundo (background: url(...)) e o Flexbox (display: flex, justify-content: center, align-items: center, min-height: 100vh) é aplicado para centralizar o container perfeitamente no meio da tela, independentemente do tamanho da janela.

Estilização de Componentes: O container tem um fundo branco, bordas arredondadas e usa Flexbox (coluna) para empilhar seus elementos verticalmente.

Interação Visual: A propriedade transition no botão, combinada com o seletor :hover, cria um efeito suave de diminuição de opacidade quando o mouse passa sobre o botão, oferecendo um feedback visual ao usuário. Cores de fundo diferentes foram aplicadas a cada botão usando seus respectivos IDs.</p>

<h3>JavaScript</h3>
<p>O JavaScript é onde a lógica do jogo e a manipulação dos elementos da interface acontecem.

1. Seleção de Elementos (DOM)
As primeiras linhas demonstram a correta seleção de elementos do DOM (Document Object Model):

const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");
O método document.querySelector() é usado para buscar elementos por classe (.result) ou por ID (#human-score). Essa é uma prática essencial para que o JS possa interagir e modificar o conteúdo HTML de forma dinâmica.

2. Armazenamento de Pontuação
Duas variáveis globais (humanScoreNumber e machineScoreNumber) são inicializadas em 0. Essas variáveis mantêm o estado atual da pontuação fora do DOM, sendo a fonte de verdade para o placar.

3. Funções Chave
playHuman(humanChoice): Esta é a função chamada pelo onclick no HTML. Ela serve como ponto de partida da rodada, recebendo a escolha do jogador e, em seguida, chama a função principal do jogo (playTheGame), passando a escolha do jogador e a escolha gerada pela máquina (playMachine()).

playMachine(): Esta função é responsável pela lógica de decisão da máquina.

Cria um array (choices) com as opções válidas.

Gera um número inteiro aleatório entre 0 e 2 (Math.floor(Math.random() * 3)).

Usa o número aleatório como índice para retornar uma escolha aleatória do array, simulando a jogada da máquina.

playTheGame(human, machine): Esta função contém a lógica central para determinar o vencedor de uma rodada.

Condições de Vitória/Empate: Utiliza uma série de condicionais if/else if/else para comparar as escolhas do jogador (human) e da máquina (machine).

A condição de vitória do jogador é definida por uma lógica booleana composta, usando o operador || (OR) para checar todas as combinações vencedoras (ex: (human === "paper" && machine === "rock")).

Atualização de Pontuação e Interface:

Em caso de vitória ou derrota, a variável de pontuação global correspondente (humanScoreNumber ou machineScoreNumber) é incrementada (++).

Em seguida, a propriedade innerHTML do elemento HTML de placar (humanScore ou machineScore) é atualizada com o novo valor da variável.

A mensagem de resultado (result.innerHTML) também é alterada dinamicamente para informar o jogador sobre o desfecho da rodada.

💡 Aprendizado Principal em JavaScript:
O grande aprendizado aqui é a interconexão entre a interface (DOM) e a lógica (JavaScript). Você aprendeu a:

Separar o Estado da Aplicação (a pontuação em variáveis JS) do Visual da Aplicação (o placar no HTML).

Manipular o DOM usando querySelector para selecionar elementos e innerHTML para alterar seu conteúdo dinamicamente.

Implementar Lógica de Jogo complexa (regras do JokenPô) usando condicionais (if/else) e geração de números aleatórios (Math.random()).

Estruturar Funções para dividir tarefas (uma função para a escolha da máquina, outra para a jogada e uma para a lógica principal), tornando o código mais limpo, modular e fácil de manter.
</p>

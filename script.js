const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");
const machineChoiceDisplay = document.querySelector("#machine-choice-display");

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const playHuman = (humanChoice) => {
  playTheGme(humanChoice, playMachine());
};

const OPTION_THE_CHOICE = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors"
}

const CHOICES_EMOJI = {
  "rock": "✊",
  "paper": "🖐️",
  "scissors": "✌️"
};

const playMachine = () => {
  const choices = [OPTION_THE_CHOICE.PAPER, OPTION_THE_CHOICE.ROCK, OPTION_THE_CHOICE.SCISSORS];

  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};

const playTheGme = (human, machine) => {
   machineChoiceDisplay.innerHTML = CHOICES_EMOJI[machine];

  if (human === machine) {
    result.innerHTML = "Empatou";
  } else if (
    (human === OPTION_THE_CHOICE.ROCK && machine === OPTION_THE_CHOICE.SCISSORS) ||
    (human === OPTION_THE_CHOICE.SCISSORS && machine === OPTION_THE_CHOICE.PAPER) ||
    (human === OPTION_THE_CHOICE.PAPER && machine === OPTION_THE_CHOICE.ROCK)
  ) {
    humanScoreNumber++,
    humanScore.innerHTML = humanScoreNumber
    result.innerHTML = "Você ganhou! 🎉";
  } else {
    machineScoreNumber++,
    machineScore.innerHTML = machineScoreNumber
    result.innerHTML = "Você perdeu para Alexa 😢";
  }
};

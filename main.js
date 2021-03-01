function computerPlay() {
  options = ["Rock", "Paper", "Scissor"];
  let choice = Math.floor(Math.random() * options.length);
  return options[choice];
}

function playRound(p, c) {
  player = p.toUpperCase();
  computer = c.toUpperCase();

  if(player === computer) {
    return DRAW;
  }
  else if (player === "ROCK" && computer === "SCISSOR") {
    player_victories++;
    return PLAYER_WIN;
  }
  else if (player === "PAPER" && computer === "ROCK") {
    player_victories++;
    return PLAYER_WIN;
  }
  else if (player === "SCISSOR" && computer === "PAPER") {
    player_victories++;
    return PLAYER_WIN;
  }
  else {
    pc_victories++;
    return COMPUTER_WIN;
  }
}

function renderResults (c, winner) {
  const result = document.createElement('div');
  const pc = document.createElement('p');
  pc.textContent = `PC Play: ${c}`;
  switch (winner) {
    case PLAYER_WIN:
      result.classList.add('result-win');
      result.textContent = "You won !";
      break;
    case COMPUTER_WIN:
      result.classList.add('result-lost');
      result.textContent = "You lose !"; 
      break;
    case DRAW:
      result.classList.add('result');
      result.textContent = "It's a draw !";
      break;
  }
  showElement.appendChild(result);
  result.appendChild(pc);
}

const PLAYER_WIN = "PLAYER";
const COMPUTER_WIN = "PC";
const DRAW = "It's a draw !!";
var player_victories = 0;
var pc_victories = 0;
var aux = 0;

const Rock_btn = document.querySelector('#rock-button');
const Paper_btn = document.querySelector('#paper-button');
const Scissor_btn = document.querySelector('#scissor-button');
const showElement = document.querySelector('.show');
const scoreElement = document.querySelector('.score');

Rock_btn.addEventListener('click', e => {
  var txt = "Rock";
  const computerSelection = computerPlay();
  const playerSelection = txt.toUpperCase();
  var winner = playRound(playerSelection, computerSelection);
  renderResults(computerSelection, winner);
});

Paper_btn.addEventListener('click', e => {
  var txt = "Paper";
  const computerSelection = computerPlay();
  const playerSelection = txt.toUpperCase();
  var winner = playRound(playerSelection, computerSelection);
  renderResults(computerSelection, winner);  
});

Scissor_btn.addEventListener('click', e => {
  var txt = "Scissor";
  const computerSelection = computerPlay();
  const playerSelection = txt.toUpperCase();
  var winner = playRound(playerSelection, computerSelection);
  renderResults(computerSelection, winner);
});
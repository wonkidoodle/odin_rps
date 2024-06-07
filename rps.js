const choiceList = ['rock', 'paper', 'scissors']

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    return choiceList[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  let resultList = ['', 0];  
  
    switch (playerSelection) {
        case choiceList[0]:
          switch (computerSelection) {
            case choiceList[0]:
              resultList[0] = "It's a tie!";
              break;
            case choiceList[1]:
              resultList[0] = "Computer wins! Paper covers Rock.";
              resultList[1] = -1
              break;
            case choiceList[2]:
              resultList[0] = "You win! Rock crushes Scissors.";
              resultList[1] = 1
              break;
          }
          break;
    
        case choiceList[1]:
          switch (computerSelection) {
            case choiceList[0]:
              resultList[0] = "You win! Paper covers Rock.";
              resultList[1] = 1
              break;
            case choiceList[1]:
              resultList[0] = "It's a tie!";
              break;
            case choiceList[2]:
              resultList[0] = "Computer wins! Scissors cut Paper.";
              resultList[1] = -1
              break;
          }
          break;
    
        case choiceList[2]:
          switch (computerSelection) {
            case choiceList[0]:
              resultList[0] = "Computer wins! Rock crushes Scissors.";
              resultList[1] = -1
              break;
            case choiceList[1]:
              resultList[0] = "You win! Scissors cut Paper.";
              resultList[1] = 1
              break;
            case choiceList[2]:
              resultList[0] = "It's a tie!";
              break;
          }
          break;
    
        default:
          resultList[0] = "Invalid choice. Please choose 'Rock', 'Paper', or 'Scissors'.";
          break;
  }
  return resultList
}

const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const matchContainer = document.getElementById('matchContainer');
const playerScoreContainer = document.getElementById('playerScoreContainer');
const computerScoreContainer = document.getElementById('computerScoreContainer');

let playerScore = 0;
let computerScore = 0;

function appendMatch(content) {
  let matchContent = document.createElement('div');
  matchContent.textContent = content;
  matchContainer.appendChild(matchContent);
}

function game(weapon) {
  matchContainer.innerHTML = '';
  let player = weapon;
  let computer = getComputerChoice();
  let matchResult = playRound(player,computer);
  appendMatch('You chose ' + weapon + '.');
  appendMatch('Computer chose ' + computer + '.');
  appendMatch(matchResult[0]);
  if (matchResult[1] == -1){
    computerScore += 1;
  }
  else if (matchResult[1] == 1){
    playerScore += 1;
  }
  computerScoreContainer.textContent = 'Computer Score: ' + computerScore + '.';
  playerScoreContainer.textContent = 'Player Score: ' + playerScore + '.';
}

rockButton.addEventListener('click', function () {
  game('rock');
});

paperButton.addEventListener('click', function () {
  game('paper');
});

scissorsButton.addEventListener('click', function () {
  game('scissors');
});


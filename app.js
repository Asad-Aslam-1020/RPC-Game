let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msgContainer = document.querySelector("#messageContainer");
const playerScorePoints = document.querySelector("#playerScore");
const computerScorePoints = document.querySelector("#computerScore");
const computerMove = document.querySelector("#computerChoice");
const playerMove = document.querySelector("#playerChoice");
const moves = document.querySelectorAll(".moves");
const pScore = document.querySelector("#pScore");
const CScore = document.querySelector("#cScore");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const playerChoice = choice.getAttribute("id");
    playGame(playerChoice);
  });
});

const computerChoiceGen = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

const playGame = (playerChoice) => {
  const computerChoice = computerChoiceGen();
  console.log("Player Choice: ", playerChoice);
  console.log("Computer Choice: ", computerChoice);
  playerScorePoints.innerHTML = playerScore;
  computerScorePoints.innerHTML = computerScore;

  const drawGame = () => {
    if (playerChoice === computerChoice) {
      msgContainer.innerHTML = "Its was a draw.";
      msgContainer.style.backgroundColor = "Black";
      playerMove.innerHTML = "Rock";
      computerMove.innerHTML = computerChoice;
      playerMove.innerHTML = playerChoice;
    }
  };
  if (playerChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    msgContainer.innerHTML = "Computer Won";
    msgContainer.style.backgroundColor = "Red";
    playerMove.innerHTML = "Rock";
    computerMove.innerHTML = "Paper";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    playerScore++;
    msgContainer.innerHTML = "Player Won";
    msgContainer.style.backgroundColor = "Green";
    playerMove.innerHTML = "Paper";
    computerMove.innerHTML = "Rock";
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    msgContainer.innerHTML = "Computer Won";
    msgContainer.style.backgroundColor = "Red";
    playerMove.innerHTML = "Paper";
    computerMove.innerHTML = "Scissors";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    playerScore++;
    msgContainer.innerHTML = "Player Won";
    playerMove.innerHTML = "Scissors";
    computerMove.innerHTML = "Paper";
    msgContainer.style.backgroundColor = "Green";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    playerScore++;
    msgContainer.innerHTML = "Player Won";
    msgContainer.style.backgroundColor = "Green";
    playerMove.innerHTML = "Rock";
    computerMove.innerHTML = "Scissors";
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    msgContainer.innerHTML = "Computer Won";
    msgContainer.style.backgroundColor = "Red";
    playerMove.innerHTML = "Scissors";
    computerMove.innerHTML = "Rock";
  } else {
    drawGame();
  }
};

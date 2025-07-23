let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const resultText = document.getElementById("result-text");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function convertCase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function win(user, computer) {
  userScore++;
  userScore_span.textContent = userScore;
  resultText.innerHTML = `${convertCase(user)}<sup>(user)</sup> beats ${convertCase(computer)}<sup>(comp)</sup>. You win!`;
  addTempClass(user, "winningStyles");
}

function lose(user, computer) {
  computerScore++;
  computerScore_span.textContent = computerScore;
  resultText.innerHTML = `${convertCase(computer)}<sup>(comp)</sup> beats ${convertCase(user)}<sup>(user)</sup>. You lose!`;
  addTempClass(user, "losingStyles");
}

function draw(user) {
  resultText.innerHTML = `It was a draw! You both chose ${convertCase(user)}.`;
  addTempClass(user, "drawStyles");
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  const outcome = userChoice + computerChoice;

  switch (outcome) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    default:
      draw(userChoice);
  }
}

function addTempClass(choice, className) {
  const element = document.getElementById(choice);
  element.classList.add(className);
  setTimeout(() => element.classList.remove(className), 300);
}

function main() {
  rock_div.addEventListener("click", () => game("rock"));
  paper_div.addEventListener("click", () => game("paper"));
  scissors_div.addEventListener("click", () => game("scissors"));
}

main();
const resetButton = document.getElementById("reset-btn");
resetButton.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  userScore_span.textContent = 0;
  computerScore_span.textContent = 0;
  resultText.textContent = "Scores reset! Make your move.";
});

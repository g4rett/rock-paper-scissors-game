let humanScore = 0;
let computerScore = 0;
let drawScore = 0;
let totalGames = 0;

function winPercentage() {
    const winRate = (humanScore + (.5 * drawScore)) / totalGames * 100
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        //console.log("scissors");
        return "Scissors";
    } else if (choice === 1) {
        //console.log("rock");
        return "Rock";
    } else {
        return "Paper";
    }
}


function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "scissors" && computerChoice === "Paper") ||
        (humanChoice === "paper" && computerChoice === "Rock") ||
        (humanChoice === "rock" && computerChoice === "Scissors")) {
            humanScore++;
            return humanScore;
        } else if ((humanChoice === "paper" && computerChoice === "Scissors") ||
            (humanChoice === "rock" && computerChoice === "Paper") ||
            (humanChoice === "scissors" && computerChoice === "Rock")) {
                computerScore++;
                return computerScore;
            } else {
                drawScore++;
            }
}
function playGame() {
    document.body.style.minHeight = "100vh";
    document.body.style.margin = "0";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";
    document.body.style.background = "pink";

    const scoreBox = document.createElement("div");
    scoreBox.style.display = "flex";
    scoreBox.style.justifyContent = "center";
    scoreBox.style.alignItems = "center";
    scoreBox.textContent = "Human Score: " + humanScore + " | Computer Score " + computerScore + " | Draws: " + drawScore;
    scoreBox.style.fontSize = "24px";
    document.body.append(scoreBox);

    const scissorsButton = document.createElement("button");
    scissorsButton.textContent = "Scissors";
    scissorsButton.style.padding = "20px";

    const rockButton = document.createElement("button");
    rockButton.textContent = "Rock";
    rockButton.style.padding = "20px";

    const paperButton = document.createElement("button");
    paperButton.textContent = "Paper";
    paperButton.style.padding = "20px";

    document.body.append(scissorsButton, rockButton, paperButton);

    const choiceButtons = document.querySelectorAll("button");
    const buttonContainer = document.createElement("div");
    buttonContainer.append(...choiceButtons);
    buttonContainer.style.display = "flex";
    buttonContainer.style.flexDirection = "row";
    buttonContainer.style.gap = "5px";

    document.body.append(buttonContainer);

    const choiceDisplayContainer = document.createElement("div");
    document.body.append(choiceDisplayContainer);
    choiceDisplayContainer.style.fontSize = "24px";
    choiceDisplayContainer.textContent = "You: Select | Computer: Waiting...";

    const winLoseDisplay = document.createElement("div");
    document.body.append(winLoseDisplay);
    winLoseDisplay.style.fontSize = "50px";
    winLoseDisplay.textContent = "";
    


    choiceButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const myChoice = button.textContent;
            const compChoice = getComputerChoice();
            playRound(myChoice.toLowerCase(), compChoice);
            scoreBox.textContent = "Human Score: " + humanScore + " | Computer Score " + computerScore + " | Draws: " + drawScore;
            choiceDisplayContainer.textContent = "You: " + myChoice + " | Computer: " + compChoice;
            
            if (humanScore === 5) {
                winLoseDisplay.textContent = "You Win";
                humanScore = 0;
                computerScore = 0;
                drawScore = 0;
            } else if (computerScore === 5) {
                winLoseDisplay.textContent = "You Lose";
                humanScore = 0;
                computerScore = 0;
                drawScore = 0;
            } else {
                winLoseDisplay.textContent = "";
            }
            
        });
    });

}
playGame();


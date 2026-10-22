let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        //console.log("scissors");
        return "scissors";
    } else if (choice === 1) {
        //console.log("rock");
        return "rock";
    } else {
        return "paper";
    }
}
function getHumanChoice() {
    let mychoice = prompt("Rock, Paper, or Scissors").toLowerCase();
    return mychoice;
}
function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors")) {
            console.log("You: " + humanChoice + " | Computer: " + computerChoice);
            console.log("You Win");
            humanScore++;
            return humanScore;
        } else if ((humanChoice === "paper" && computerChoice === "scissors") ||
            (humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "scissors" && computerChoice === "rock")) {
                console.log("You: " + humanChoice + " | Computer: " + computerChoice);
                console.log("You Lose");
                computerScore++;
                return computerScore;
            } else {
                console.log("You: " + humanChoice + " | Computer: " + computerChoice);
                console.log("Draw");
            }
}
function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Your Score: " + humanScore + " Computer Score: " + computerScore);
    if (humanScore === 3) {
        console.log("BEST OF 5: WINNER");
    } else if (computerScore === 3) {
        console.log("BEST OF 5: LOSER");
    }
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Your Score: " + humanScore + " Computer Score: " + computerScore);
    if (humanScore === 3) {
        console.log("BEST OF 5: WINNER");
        return;
    } else if (computerScore === 3) {
        console.log("BEST OF 5: LOSER");
        return;
    }
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Your Score: " + humanScore + " Computer Score: " + computerScore);
    if (humanScore === 3) {
        console.log("BEST OF 5: WINNER");
        return;
    } else if (computerScore === 3) {
        console.log("BEST OF 5: LOSER");
        return;
    }
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Your Score: " + humanScore + " Computer Score: " + computerScore);
    if (humanScore === 3) {
        console.log("BEST OF 5: WINNER");
        return;
    } else if (computerScore === 3) {
        console.log("BEST OF 5: LOSER");
        return;
    }

    playRound(getHumanChoice(), getComputerChoice());
    console.log("Your Score: " + humanScore + " Computer Score: " + computerScore);
    if (humanScore === 3) {
        console.log("BEST OF 5: WINNER");
        return;
    } else if (computerScore === 3) {
        console.log("BEST OF 5: LOSER");
        return;
    } else if (computerScore != 3 && humanScore !=3) {
        playGame();
    }
}
playGame();


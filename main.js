function getComputerChoice() {
    const options = ["rock", "paper", "scissors"]
    const result = options[Math.floor(Math.random() * 3)];
    return result;
}

function playRound(player, computer) {
    if (player === computer) {
        return "It's a draw"
    }
    if (player === "rock") {
        if (computer === "scissors") {
            return "You Win! Rock beats Scissors"
        } else {
            return "You Lose! Paper beats Rock"
        }
    } else if (player === "paper") {
        if (computer === "rock") {
            return "You Win! Paper beats Rock"
        } else {
            return "You Lose! Scissors beats Paper"
        }
    } else {
        if (computer === "paper") {
            return "You win! Scissors beats Paper"
        } else {
            return "You Lose! Rock beats Scissors"
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundResult
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();
        const computerSelection = getComputerChoice();
        roundResult = playRound(playerSelection, computerSelection);
        if (roundResult.includes("Win!")) {
            playerScore++;
        } else if (roundResult.includes("Lose!")) {
            computerScore++
        }
        alert(roundResult);
    }

    if (playerScore > computerScore) {
        return `You won ${playerScore} to ${computerScore}`
    } else if (playerScore < computerScore) {
        return `You lost ${computerScore} to ${playerScore}`
    } else {
        return "It's a Draw"
    }
}



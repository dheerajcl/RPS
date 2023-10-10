let playerScore = 0, computerScore = 0;

document.getElementById('rock').addEventListener('click', function () {
    playRound('rock');
});

document.getElementById('paper').addEventListener('click', function () {
    playRound('paper');
});

document.getElementById('scissors').addEventListener('click', function () {
    playRound('scissors');
});

function playRound(playerSelection) {
    if (playerScore === 5 || computerScore === 5) {
        endGame();
        return;
    }

    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        document.getElementById('result').innerText = `It's a tie! Computer also chose ${computerSelection}`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        document.getElementById('result').innerText = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    } else {
        document.getElementById('result').innerText = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }

    document.getElementById('playerScore').innerText = playerScore;
    document.getElementById('computerScore').innerText = computerScore;

    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function endGame() {
    let message;
    if (playerScore >= 5) {
        message = "Congratulations! You are the winner!";
    } else {
        message = "Computer wins. Better luck next time!";
    }

    document.getElementById('result').innerText = message;

    // Prompt the user to restart the game
    setTimeout(() => {
        const restart = confirm("Do you want to restart the game?");
        if (restart) {
            resetGame();
        }
    }, 100); // Delay the prompt slightly to ensure it appears after the message
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('playerScore').innerText = playerScore;
    document.getElementById('computerScore').innerText = computerScore;
    document.getElementById('result').innerText = "";
}

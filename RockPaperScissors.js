function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const input = prompt("Enter Rock, Paper, or Scissors:");
    if (!input) {
        alert("Input cancelled.");
        return null;
    }
    const choice = input.toLowerCase().charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    if (choices.includes(choice)) {
        return choice;
    }
    alert("Invalid choice. Please try again.");
    return getHumanChoice();
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    const humanChoice = getHumanChoice();
    if (!humanChoice) return; // Exit if user cancels input
    const computerChoice = getComputerChoice();

    console.log(`You chose ${humanChoice}`);
    console.log(`Computer chose ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
        (humanChoice === 'Scissors' && computerChoice === 'Paper') ||
        (humanChoice === 'Paper' && computerChoice === 'Rock')
    ) {
        console.log("You win this round!");
        humanScore++;
    } else {
        console.log("Computer wins this round!");
        computerScore++;
    }

    console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
}

// Example: play 5 rounds
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (humanScore > computerScore) {
        console.log("🎉 You won the game!");
    } else if (computerScore > humanScore) {
        console.log("💻 Computer won the game!");
    } else {
        console.log("🤝 It's a tie game!");
    }
}

game();

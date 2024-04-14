const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let random_index = Math.ceil(Math.random() * choices.length)
    let choice = choices[random_index - 1]
    return choice
}

/**
 * @param {String} playerChoice - The player choice.
 * @param {String} computerChoice - The computer choice.
 * @return {Number} - Return 0, if the player has won. Return 1 if the
 *                  player has lost. Return 2 if it's a draw.
 */
function computeResult(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return 2
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        return 0
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        return 0
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        return 0
    }

    return 1
}

function play(playerChoice) {
    playerChoice = playerChoice.toLowerCase()
    let computerChoice = getComputerChoice()

    if (!validateChoice(playerChoice)) {
        console.error("Invalid choice. Try again.")
    } else {
        let result = computeResult(playerChoice, computerChoice)
        switch (result) {
            case 0:
                console.log(`You won! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}.`)
                break;
            case 1:
                console.log(`You lost! ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}.`)
                break; 
            case 2:
                console.log("It's a draw!")
        }
    }
}

function validateChoice(choice) {
    return choices.includes(choice)
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}
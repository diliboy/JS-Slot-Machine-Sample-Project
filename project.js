//1. Deposit some Money
//2. Determine number of lines to bet on
// 3. Collect a bet amount
//4. Spin the slot machine
//5. Determine if the player won or lost
//6. give the user their winnings
//7. Ask the user if they want to play again

const prompt = require('prompt-sync')();






const deposit = () =>{
    while(true){
        const depositAmount = prompt("Enter the amount you want to deposit: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount. Please enter a positive number.");
        }else{
            console.log(`You have deposited $${numberDepositAmount.toFixed(2)}`);
            return numberDepositAmount;
        }
    }
}

const getNumberOfLines = () => {
    while (true) {
         const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines. Please enter a valid number of lines.");
        }else{
            console.log(`You have entered ${numberOfLines}`);
            return numberOfLines;
        }
    }
}


const getBet = (balance, numberOfLines) => {
    while (true) {
        const bet = prompt(`Enter the bet amount per line: `);
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || (numberBet * numberOfLines) > balance) {
            console.log("Invalid bet amount. Please enter a valid bet amount that does not exceed your balance.");
        } else {
            console.log(`You have placed a bet of $${numberBet.toFixed(2)} per line.`);
            return numberBet;
        }
    }
}


let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
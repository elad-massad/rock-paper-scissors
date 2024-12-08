function getComputerChoice() {
    let random = Math.random();
    if(random<=0.33){
        console.log("computer's choice is: Rock");
        return 'rock';
    }
    else if(random<=0.66 && random> 0.33) {
        console.log("computer's choice is: Paper");
        return 'paper';
    }
    else {
        console.log("computer's choice is: Scissors");
        return 'scissors';
    }
}

function getHumanChoice() {
    let choice = prompt("Choose Rock, Papper or Scissors");
    let answer = choice.toLowerCase();
    switch (answer) {
        case 'rock':
            break;
        case 'paper':
            break;
        case 'scissors':
            break;
        default:
            console.log('You have a wrong input!');
            break;
    }
    console.log(answer);
    return answer;
}


let humanScore = 0; 
let computerScore = 0;

function playRound(humanChoice,computerChoice) {
    
    if(humanChoice == 'rock' && computerChoice == 'scissors'){
        humanScore += 1;
        console.log("You win! Rock beats Scissors");
    }
    else if(humanChoice == 'paper' && computerChoice == 'rock'){
        humanScore +=1;
        console.log("You win! Paper beats Rock");
    }
    else if(humanChoice == 'scissors' && computerChoice == 'paper'){
        humanScore += 1;
        console.log("You win! Scissors beats Paper");
    }
    else if(humanChoice == 'rock' && computerChoice == 'paper'){
        computerScore +=1;
        console.log("You lose! Paper beats Rock");
    }
    else if(humanChoice == 'paper' && computerChoice == 'scissors'){
        computerScore += 1;
        console.log("You lose! Scissors beats Paper");
    }
    else if(humanChoice == 'scissors' && computerChoice == 'rock'){
        computerScore += 1;
        console.log("You lose! Rock beats Scissors");
    }
    else {
        console.log("It's a draw!");
    }
    console.log(`The score after the round is Human:${humanScore} - Computer:${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
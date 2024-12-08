function getComputerChoice() {
    let random = Meth.random();
    
    if(random<=0.33){
        return 'Rock';
    }
    else if(random<=0.66 && random> 0.33) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

function getHumanChoice() {
    let choice = prompt("Choose Rock, Papper or Scissors");
    let answer = choice.toLowerCase();
    if(answer !== 'rock' || answer !== 'paper' || answer !== 'scissors') {
        console.log('You have put in a wrong input!');
        return
    }
    console.log(answer);
    return answer;
}
getHumanChoice();
function getComputerChoice(){
    choices = ['rock','paper','scissor'];
    return choices[Math.floor(Math.random()*3)];
}

function playRound(playerChoice,computerChoice){
    playerChoice = playerChoice.replace(/\s+/g, '').toLowerCase();

    alert("You played " + playerChoice+"\nComputer played " + computerChoice);

    if(playerChoice === computerChoice){
        return 'Tied!';
    }

    else if(playerChoice === 'rock'){
        if(computerChoice === 'paper'){
            return 'You Lost!';
        }
        else{
            return 'You win!';
        }
    }

    else if(playerChoice === 'paper'){
        if(computerChoice === 'scissor'){
            return 'You Lost!';
        }
        else{
            return 'You win!';
        }
    }

    else if(playerChoice === 'scissor'){
        if(computerChoice === 'rock'){
            return 'You Lost!';
        }
        else{
            return 'You win!';
        }
    }
}

function game(){
    var userScore = 0;
    var CPUScore = 0;
    alert("You are going to play 5 rounds of rock, paper and scissors!");
    for(i=0; i<5; i++){
        const output = playRound(prompt("Enter your choice (rock/paper/scissor): "), getComputerChoice());  
        if (output == 'You win!'){
            userScore++;
        }
        else if (output == 'You Lost!'){
            CPUScore++;
        }
        alert(output);
    }

    if (userScore>CPUScore){
        alert("You are the winner! User Score: "+userScore+", CPU Score: "+CPUScore);
    }
    else{
        alert("You are the loser! User Score: "+userScore+", CPU Score: "+CPUScore);
    }
}

game();
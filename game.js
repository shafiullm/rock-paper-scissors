function getComputerChoice(){
    choices = ['rock','paper','scissor'];
    return choices[Math.floor(Math.random()*3)];
}

function playRound(playerChoice,computerChoice){
    playerChoice = playerChoice.replace(/\s+/g, '').toLowerCase();
    output = '';

    if(playerChoice === computerChoice){
        output+= 'Tied!';
    }

    else if(playerChoice === 'rock'){
        if(computerChoice === 'paper'){
            output+=  'You Lost!';
        }
        else{
            output+=  'You win!';
        }
    }

    else if(playerChoice === 'paper'){
        if(computerChoice === 'scissor'){
            output+=  'You Lost!';
        }
        else{
            output+=  'You win!';
        }
    }

    else if(playerChoice === 'scissor'){
        if(computerChoice === 'rock'){
            output+=  'You Lost!';
        }
        else{
            output+=  'You win!';
        }
    }
    
    alert("You: " + playerChoice+"\nComputer: " + computerChoice+"\n"+output);
    return output;
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
    }

    if (userScore>CPUScore){
        alert("You are the winner! User Score: "+userScore+", CPU Score: "+CPUScore);
    }
    else{
        alert("You are the loser! User Score: "+userScore+", CPU Score: "+CPUScore);
    }
}

game();
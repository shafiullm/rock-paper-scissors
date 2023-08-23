var introContainer = document.querySelector(".intro-container");
var mainContent = document.querySelector(".main-content");

setTimeout(removeMainIntro, 6000);
setTimeout(addMainContent, 6000);

function removeMainIntro(){
    introContainer.classList.remove('.intro-container');
}

function addMainContent() {
    var htmlContent = `
      <div class="headerText">
        <h1>Select to Win-Tie-Lose</h1>
      </div>
      <div style="display: flex; flex-direction: row; justify-content: space-evenly; align-items: center; font-size: 15px; color: white;" class="score">
        <div>User score: <b><span class= "scoreDisplayUser">0</span></b></div>
        <div>CPU score: <b><span class= "scoreDisplayCPU">0</span></b></div>
      </div>
      <div class="imageContainer">
        <div data-text="Rock" value="rock" class="imageChildContainer">
          <img src="assets/rockPNG.png">
        </div>
        <div data-text="Paper" value="paper" class="imageChildContainer">
          <img src="assets/paperPNG.png">
        </div>
        <div data-text="Scissor" value="scissor"  class="imageChildContainer">
          <img src="assets/scissorPNG.png">
        </div>
      </div>
    `;

    mainContent.innerHTML = htmlContent;

    var imageDivs = document.querySelectorAll(".imageChildContainer");
    var CPUScore = 0;
    var userScore = 0;

    imageDivs.forEach(function(div) {
    div.addEventListener("click", function() {
    var selectedValue = this.getAttribute("value");
    var computerValue = getComputerChoice();
    

    function getComputerChoice(){
        choices = ['rock','paper','scissor'];
        return choices[Math.floor(Math.random()*3)];
    }
    
    function playRound(playerChoice,computerChoice){
        output = '';
        var audioRes;

        if(playerChoice === computerChoice){
            output+= 'Tie';
            audioRes = 'tieAudio';
        }
    
        else if(playerChoice === 'rock'){
            if(computerChoice === 'paper'){
                output+=  'Lose';
                CPUScore+=1;
                audioRes = 'loseAudio';
            }
            else{
                output+=  'Win';
                userScore+=1;
                audioRes = 'winAudio';
            }
        }
    
        else if(playerChoice === 'paper'){
            if(computerChoice === 'scissor'){
                output+=  'Lose';
                CPUScore+=1;
                audioRes = 'loseAudio';
            }
            else{
                output+=  'Win';
                userScore+=1;
                audioRes = 'winAudio';
            }
        }
    
        else if(playerChoice === 'scissor'){
            if(computerChoice === 'rock'){
                output+=  'Lose';
                CPUScore+=1;
                audioRes = 'loseAudio';
            }
            else{
                output+=  'Win';
                userScore+=1;
                audioRes = 'winAudio';
            }
        }

        var scoreDisplayUser = document.querySelector('.scoreDisplayUser');
        var scoreDisplayCPU = document.querySelector('.scoreDisplayCPU');

        scoreDisplayUser.textContent = userScore;
        scoreDisplayCPU.textContent = CPUScore;


        var audio = document.querySelector(`.${audioRes}`);

        audio.volume = 0.2;
        audio.currentTime = 0;
        audio.play();

        return output;
    }
    


    
      selectionText = document.createElement('h2');
      selectionText.classList.add('resultText');
      selectionText.textContent = `You: ${selectedValue.charAt(0).toUpperCase() + selectedValue.slice(1)}, CPU: ${computerValue.charAt(0).toUpperCase() + computerValue.slice(1)}, Result: ${playRound(selectedValue, computerValue)}`;
      mainContent.appendChild(selectionText);

    });
    
  });
  }



  









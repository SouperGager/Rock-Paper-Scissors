
rock.addEventListener('click', function() {
  const userChoice = 'rock'; 
  playRound(userChoice); 
});

paper.addEventListener('click', function() {
  const userChoice = 'paper'; 
  playRound(userChoice); 
});

scissors.addEventListener('click', function() {
  const userChoice = 'scissors'; 
  playRound(userChoice);
});


let userScore = 0;
let computerScore = 0;
const result = document.querySelector('#result');
const playerScore = document.querySelector('#playerScore');
const computersScore = document.querySelector('#computerScore');


function getComputerChoice(){
   let choices = ["rock","paper","scissors"];
   return choices[Math.floor(Math.random()*3)];
} 

function playRound(userChoice){
    let computerChoice = getComputerChoice();
    

    if (userChoice == computerChoice){
        console.log("It's a tie, "+ "computer selected "+ computerChoice);
      result.textContent = ("It's a tie, "+ "computer selected "+ computerChoice + ". Tie equals 0 score");
      playerScore.textContent = ( "Your Score "+ userScore);
      computersScore.textContent = ("Computer Score "+ computerScore);
      }
      else if (
        (userChoice == "rock" && computerChoice == "scissors")||
        (userChoice == "paper" && computerChoice == "rock")||
        (userChoice == "scissors" && computerChoice == "paper")
        ){ 
            userScore ++;
      console.log("you won, " + "computer selected "+ computerChoice)
        result.textContent = ("You won, " + "computer selected "+ computerChoice + ". Congrats, try to get a high score ");
        playerScore.textContent = ( "Your Score "+ userScore);
      computersScore.textContent = ("Computer Score "+ computerScore);
      } 
      else if(
        (computerChoice == "rock" && userChoice == "scissors")||
        (computerChoice == "paper" && userChoice == "rock")||
        (computerChoice == "scissors" && userChoice == "paper")
        ){ 
            computerScore ++;
        console.log("you lost, "+ "computer selected "+ computerChoice)
        result.textContent = ("You lost, "+ "computer selected "+ computerChoice + ". Click on the logo to increase your luck");
        playerScore.textContent = ( "Your Score "+ userScore);
      computersScore.textContent = ("Computer Score "+ computerScore);
      }
        else {
          console.log("invalid input please only enter either rock, paper or sicssors "+"computer selected "+ computerChoice)
        }
    return ("Your Score is " + userScore + " " + "Computer Score is " +computerScore);
}


const logo = document.getElementById('logo');
logo.addEventListener('click', () => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', '_blank')
});


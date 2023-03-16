let userScore = 0;
let computerScore = 0;

function getComputerChoice(){
   let choices = ["rock","paper","scissors"];
   return choices[Math.floor(Math.random()*3)];
} 

function playRound(){
    let computerChoice = getComputerChoice();
    let userChoice = (prompt("Please choose Rock, Paper, or Scissors").toLowerCase());

    if (userChoice == computerChoice){
        console.log("It's a tie, "+ "computer selected "+ computerChoice);
      }
      else if (
        (userChoice == "rock" && computerChoice == "scissors")||
        (userChoice == "paper" && computerChoice == "rock")||
        (userChoice == "scissors" && computerChoice == "paper")
        ){ 
            userScore ++;
      console.log("you won, " + "computer selected "+ computerChoice)
      } 
      else if(
        (computerChoice == "rock" && userChoice == "scissors")||
        (computerChoice == "paper" && userChoice == "rock")||
        (computerChoice == "scissors" && userChoice == "paper")
        ){ 
            computerScore ++;
        console.log("you lost, "+ "computer selected "+ computerChoice)
      }
        else {
          console.log("invalid input please only enter either rock, paper or sicssors "+"computer selected "+ computerChoice)
        }
    return ("Your Score is " + userScore + " " + "Computer Score is " +computerScore);
}console.log(playRound());


function game(){
    while (userScore < 5 && computerScore < 5) {
        console.log(playRound());
    
        if (userScore === 5) {
          console.log("Congratulations, you won the game!");
        } else if (computerScore === 5) {
          console.log("Sorry, the computer won the game!");
        }
      }
    }
    game();



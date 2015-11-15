////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


function getPlayerMove() {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
   var move = getInput();
   if ((move ===  null ) || (move === (''))) {
    	move = getInput();
    } 
    else {
    	return move;
    }
}




function getComputerMove() {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var move = randomPlay();
    if ((move === null) || (move === (''))) {
         move = randomPlay();
    } 
    else {
    	return move;
    }
}


function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
   if (playerMove === computerMove) {
   	winner = 'it is a tie!';
   }
   else if (playerMove === 'rock') {
   		if (computerMove === 'scissors'){
   			winner = 'player wins!';
   		}
   		else {
   			winner = 'computer wins!';
   		}
   	}
   	else if (playerMove === 'scissors') {
   		if (computerMove === 'rock') {
   			winner = 'computer wins!';
   		}
   		else {
   			winner = "player wins!";
   		}
   	}
   	else {
   		if (computerMove === 'scissors') {
   			winner = 'computer wins!';
   		}
   		else {
   			winner = "player wins!";
   		}
   	}
 	 return winner;
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    var gamesPlayed = 0;
    var finished = false;
    
   while (!finished) {
       var playerMove = (getPlayerMove());
        console.log("the player move is " + playerMove);
        var computerMove = (getComputerMove());
        console.log("the computer move is " + computerMove);
        
    	var winner = getWinner(playerMove,computerMove); 
    	
  		if (winner === 'computer wins!') {
      		computerWins += 1;
     	}
  		else if (winner  === 'player wins!') {
      		playerWins += 1;
      	}
      	gamesPlayed +=1;
    console.log(winner);  
    console.log("player wins = " + playerWins);
    console.log("computer wins = " + computerWins);
    console.log( "games played = " + gamesPlayed);
    console.log("");
    
    if ((computerWins === 5) || (playerWins === 5 )){
        	if (computerWins === 5) {
        	    finished = true;
            return("Computer has won 5 games");
        	}
        	else{
        	    finished = true;
            return("Player has won 5 games");
        	}
    	}
    }
}
   
playToFive();
   
   
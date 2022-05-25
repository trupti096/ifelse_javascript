let readlineSync = require("readline-sync");
var computerMoves = ['rock', 'paper', 'scissors'];
var randomMoveofComputer = computerMoves[Math.floor(Math.random()*computerMoves.length)];
var playerName = readlineSync.question("What is your name: ")
console.log("hi "+ playerName )
console.log("choose any move in rock paper scissors")
var playerMove = readlineSync.question("Which move you want to do? ");
if (playerMove == randomMoveofComputer){
    console.log("Match Draw");
}
else if(playerMove == "rock" && randomMoveofComputer == "paper"){
    console.log("computer won the match");
}
else if(playerMove == "rock" && randomMoveofComputer == "scissors"){
    console.log(playerName+ "Won the match");
}
else if(playerMove == "scissors" && randomMoveofComputer == "rock"){
    console.log("computer won the match");
}
else if(playerMove == "scissors" && randomMoveofComputer == "paper"){
    console.log(playerName+ "Won the match");
}
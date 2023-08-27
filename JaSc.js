
const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    //getting a random number out of four to make a choice from the list
    var compChoice = Math.floor(Math.random()*5);

    console.log(choices[compChoice])
    
}
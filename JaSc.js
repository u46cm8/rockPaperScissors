
const choices = ["rock", "paper", "scissors"];

var compSelection; 
var humanSelection;

function getComputerChoice(){
    //getting a random number out of four to make a choice from the list
    var Selection = Math.floor(Math.random()*3);

    console.log(choices[Selection]);
     return choices[Selection];
    
}

//Testing to see if it works
//getComputerChoice();

function getHumanChoice(){
    var Selection = document.getElementById("RockPaperScissors").value.toString();
//Testing out the inputs
    console.log(Selection.toLowerCase());
    return Selection;

}


function game()  {
    
    compSelection = getComputerChoice();
    humanSelection = getHumanChoice().toLowerCase();

    if(humanSelection == "rock" ){
        if(compSelection == "paper"){
            console.log("The computer wins as paper beats rock");
        }
        if(compSelection == "scissors"){
            console.log("You win as rock beats the computer's scissors")
        }
        if(compSelection == "rock"){
            console.log("It was a draw as you both choose rock")
        }
    }

    if(humanSelection == "paper" ){
        if(compSelection == "paper"){
            console.log("It was a draw as you both choose paper");
        }
        if(compSelection == "scissors"){
            console.log("You loose as the computer's scissors can cut paper")
        }
        if(compSelection == "rock"){
            console.log("You win as your paper can cover the rock")
        }
    }

    if(humanSelection == "scissors" ){
        if(compSelection == "paper"){
            console.log("You win as your scissor can cut the computer's paper");
        }
        if(compSelection == "scissors"){
            console.log("It's a draw as you both have scissors")
        }
        if(compSelection == "rock"){
            console.log("You loose as rocks can break scissors")
        }
    }

}

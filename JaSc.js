
const choices = ["rock", "paper", "scissors"];

var compSelection; 
var humanSelection;

function getComputerChoice(){
    //getting a random number out of four to make a choice from the list
    var Selection = Math.floor(Math.random()*3);

    console.log(choices[Selection]);
     return Selection;
    
}

//Testing to see if it works
//getComputerChoice();

function getHumanChoice(){
    var Selection = document.getElementById("RockPaperScissors").value.toString();
//Testing out the inputs
    console.log(Selection.toLowerCase());
    return Selection;

}


function game(compSelection)  {
    
    getComputerChoice();
    humanSelection = getHumanChoice().toLowerCase();

    if(humanSelection == "rock"){
        console.log("it works");
    }

}

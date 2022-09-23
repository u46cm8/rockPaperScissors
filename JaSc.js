
let choices = ["Rock", "Paper", "Scissor"]
function getComputerChoice(){
    let compChoice = Math.floor(Math.random()*(2 - 0 + 1) + 0);

    return choices[compChoice];
    
}



function playerRound(hChoice, cChoice){
    
    let done = false;


    let hU = hChoice.toString().toUpperCase();
    let cU = cChoice.toString().toUpperCase();
    console.log(`The computer's ${cChoice} vs your ${hChoice}`);
    if (cU =="ROCK"){
        if(hU =="PAPER"){
            console.log(`You won this time your ${hChoice} covers my ${cChoice}`);
            return "Human";
            done = true;
        }
        else if(hU =="SCISSOR"){
            console.log(`I won this time my ${cChoice} breaks your ${hChoice}`);
            return "Computer";
            done = true;
        }
    }
    else if (cU =="PAPER"){
        if(hU == "SCISSOR"){
            console.log(`You won this time your ${hChoice} cuts my ${cChoice}`);
            return "Human";
            done = true;
        }
        else if(hU =="ROCK"){
            console.log(`I won this time my ${cChoice} covers your ${hChoice}`);
            return "Computer";
            done = true;
        }
    }
    else if (cU == "SCISSOR"){
        if(hU =="ROCK"){
            console.log(`You won this time your ${hChoice} breaks my ${cChoice}`);
            return "Human";
            done = true;
        }
        else if(hU == "PAPER"){
            console.log(`I won this time my ${cChoice} cuts your ${hChoice}`);
            return "Computer";
            done = true;
        }
        
    }
    else if(hU === "STOP"){
        done = true;
    }
    if(hU === cU){
        console.log("Its a Draw!!!");
        done = true;
    }
    
}

function game(times){
    let computer = 0; 
    let human = 0;
    time = Number(times);
    for(let i=0; i<times; i++){
        //Geting users choice
        let hChoice = prompt("Please enter your choice");
        let cChoice = getComputerChoice();
        let result = playerRound(hChoice, cChoice);
        if(result == "Human"){
            human++;
        }
        else if(result == "Computer"){
            computer++;
        }
    }
    console.log("\n\n\n------------------------------\n\n\n")
    console.log(`The computer won ${computer} times`);
    console.log(`And the human won ${human} times`);
    if(computer>human){
        console.log("Harrah the Computer Won!!!!");
    }
    else if(human>computer){
        console.log("You did it!!! the computer is beat!!!!");

    }
    else{
        console.log("What'd yah know its a draw!!! \n not the draw of a place, but just could not beat me ;D");
    }
}
game(prompt("how many rounds would you like to play?"))
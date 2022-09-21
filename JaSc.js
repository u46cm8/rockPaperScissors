
let choices = ["Rock", "Paper", "Scissor"]
function getComputerChoice(){
    let compChoice = Math.floor(Math.random()*(2 - 0 + 1) + 0);

    return choices[compChoice];
    
}
//Geting users choice
let hChoice = prompt("Please enter your choice");
let cChoice = getComputerChoice();


function playerSelection(hChoice, cChoice){
    
    let done = false;


    let hU = hChoice.toString().toUpperCase();
    let cU = cChoice.toString().toUpperCase();
    console.log(cU);
    if (cU =="ROCK"){
        if(hU =="PAPER"){
            console.log(`You win, your ${hChoice} convers the computer's ${cChoice}`);
            done = true;
        }
        else if(hU =="SCISSOR"){
            console.log(`You lose, your ${hChoice} is broken by the computer's ${cChoice}`);
            done = true;
        }
    }
    else if (cU =="PAPER"){
        if(hU == "SCISSOR"){
            console.log(`You win, your ${hChoice} cuts the computer's ${cChoice}`);
            done = true;
        }
        else if(hU =="ROCK"){
            console.log(`You lose, your ${hChoice} is covered by the computer's ${cChoice}`);
            done = true;
        }
    }
    else if (cU == "SCISSOR"){
        if(hU =="ROCK"){
            console.log(`You win, your ${hChoice} breaks the computer's ${cChoice}`);
            done = true;
        }
        else if(hU == "PAPER"){
            console.log(`You lose, your ${hChoice} is cut by the computer's ${cChoice}`);
            done = true;
        }
        
    }
    else if(hU === "STOP"){
        done = true;
    }
    if(hU === cU){
        alert("Please try again your choice you choose the same as the computer");
        done = true;
    }
    
}


playerSelection(hChoice, cChoice);
choices = ['rock', 'paper', 'scissors'];

function playRound(playerSelection, computerSelection){
    if (playerSelection == 0){
        if (computerSelection == 0){
            return(`It's a draw`);
        }
        if (computerSelection == 1){
            return(`You lose this round! ${choices[computerSelection]} beats ${choices[playerSelection]}`);
        }
        if (computerSelection == 2){
            return(`You won this round! ${choices[playerSelection]} beats ${choices[computerSelection]}`);
        }
    }

    if (playerSelection == 1){
        if (computerSelection == 0){
            return(`You won this round! ${choices[playerSelection]} beats ${choices[computerSelection]}`);
        }
        if (computerSelection == 1){
            return(`It's a draw`);
        }
        if (computerSelection == 2){
            return(`You lose this round! ${choices[computerSelection]} beats ${choices[playerSelection]}`);
        }
    }

    if (playerSelection == 2){
        if (computerSelection == 0){
            return(`You lose this round! ${choices[computerSelection]} beats ${choices[playerSelection]}`);
        }
        if (computerSelection == 1){
            return(`You won this round! ${choices[playerSelection]} beats ${choices[computerSelection]}`);
        }
        if (computerSelection == 2){
            return(`It's a draw`);
        }
    }
}

function game(choice){
    playerSelection = choice.target.id;

    if (playerSelection == 'rock'){
        playerSelection = 0;
    }
    else if (playerSelection == 'paper'){
        playerSelection = 1;
    }
    else if (playerSelection == 'scissors' || playerSelection == 'scissor'){
        playerSelection = 2;
    }
    else {
        alert("wrong move");
        console.log("wrong move");
    }

    let computerSelection = Math.floor(Math.random() * 3);
    if(computerSelection == 0){
        computerChange('rock');
    }
    else if(computerSelection == 1){
        computerChange('paper');
    }
    else{
        computerChange('scissors');
    }


    let f = playRound(playerSelection, computerSelection);
    log.innerHTML = "";
    log.innerText = f;

    if(f[4] == 'l'){
        computerScore++;
    }
    else if (f[4] == 'w'){
        playerScore++;
    }
    else{}

    temp.innerText = `Score: ${playerScore} - ${computerScore}`;

    if (playerScore == 5 || computerScore == 5){
        
        if (playerScore > computerScore){
            score.innerText = 'You won 😄';
            score1.innerText = 'Choose your next move to restart the match';
        }
        else {
            score.innerText = 'You lost 😕';
            score1.innerText = 'Choose your next move to restart the match';
        }
        playerScore = 0;
        computerScore = 0;
    }
    else{
        score.innerText = "";
        score1.innerText = "";
    }

    
}

// game()

let computerScore = 0;
let playerScore = 0;

const playerOut = document.querySelector("#playerOut");
const computerOut = document.querySelector("#computerOut");
const log = document.querySelector("#log");
const score = document.querySelector("#score");
const score1 = document.querySelector("#score1");
const temp = document.querySelector("#temp");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const computerChange = (src) => {
    computerOut.innerHTML = "";
    const img = document.createElement("img");
    img.setAttribute("src", `./images/${src}.png`);
    computerOut.appendChild(img);
}

const change = (src) => {
    window.scrollTo(0,document.body.scrollHeight);
    game(src);
    src = `./images/${src.target.id}.png`;
    playerOut.innerHTML = "";
    const img = document.createElement("img");
    img.setAttribute("src", src);
    playerOut.appendChild(img);
}

rock.addEventListener('click', change);
paper.addEventListener('click', change);
scissors.addEventListener('click', change);

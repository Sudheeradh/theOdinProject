choices = ['rock', 'paper', 'scissors'];

function playRound(playerSelection, computerSelection){
    if (playerSelection == 0){
        if (computerSelection == 0){
            return(`It's a draw`);
        }
        if (computerSelection == 1){
            return(`You lose! ${choices[computerSelection]} beats ${choices[playerSelection]}`);
        }
        if (computerSelection == 2){
            return(`You won! ${choices[playerSelection]} beats ${choices[computerSelection]}`);
        }
    }

    if (playerSelection == 1){
        if (computerSelection == 0){
            return(`You won! ${choices[playerSelection]} beats ${choices[computerSelection]}`);
        }
        if (computerSelection == 1){
            return(`It's a draw`);
        }
        if (computerSelection == 2){
            return(`You lose! ${choices[computerSelection]} beats ${choices[playerSelection]}`);
        }
    }

    if (playerSelection == 2){
        if (computerSelection == 0){
            return(`You lose! ${choices[computerSelection]} beats ${choices[playerSelection]}`);
        }
        if (computerSelection == 1){
            return(`You won! ${choices[playerSelection]} beats ${choices[computerSelection]}`);
        }
        if (computerSelection == 2){
            return(`It's a draw`);
        }
    }
}

function game(){
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++){

        let playerSelection = prompt("type your move");
        playerSelection = playerSelection.toLowerCase();

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

        let f = playRound(playerSelection, computerSelection);
        console.log(f)

        if(f[4] == 'l'){
            computerScore++;
        }
        else if (f[4] == 'w'){
            playerScore++;
        }
        else{}
    }
    if (playerScore > computerScore){
        console.log('You won :D')
    }
    else if(playerScore <  computerScore) {
        console.log('You lost :(')
    }
    else{
        console.log("It's a draw :|")
    }
}

game()
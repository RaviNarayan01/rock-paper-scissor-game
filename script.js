let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userSocrePara = document.querySelector("#user-score");
let compSocrePara = document.querySelector("#comp-score");

const gencompchoice = ()=>{
    const option = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
};

const drawGame = () =>{
    console.log("game is draw.");
    msg.innerText = "game was draw.Play again.";
    msg.style.backgroundColor = "#081b31";
}

const playGame = (userChoice)=>{
    console.log("user choice =", userChoice);
    // generte computer choice
    const compChoice = gencompchoice();
    console.log("computer choice =",compChoice);    

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin === true){
        userScore++;
        userSocrePara.innerText = userScore;
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compSocrePara.innerText = compScore;
        msg.innerText = `you lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

    if(userChoice === compChoice){
        // draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // paper, scissor
            userWin = compChoice === "paper"? false : true;
        }else if(userChoice === "paper"){
            // rock, scissor
            userWin = compChoice === "rock"? true : false;
        }else {
            // rock, paper
            userWin = compChoice === "paper"? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
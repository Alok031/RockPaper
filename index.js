let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const player = document.querySelector("#user")
const compu = document.querySelector("#comp")
 
const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        player.innerHTML=userScore
        msg.innerHTML = `You won! Your ${userChoice} beats ${compChoice}`;
    }
    else{
        compScore++;
        compu.innerHTML=compScore
        console.log("comp");
        msg.innerHTML= `You Lose!Computer ${compChoice} beats ${userChoice}`;
    }
}
const drawGame = ()=>{
    console.log("Game was draw");
    msg.innerHTML ="Game Draw"
}
const getCompScore=()=>{
    const options = ["rock","paper","scissor"]
    const randomIn = Math.floor(Math.random()*3);
    return options[randomIn]
}
const playGame=(userChoice)=>{
    console.log(userChoice);
    const compChoice = getCompScore()
    console.log(compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin= compChoice==="paper"? false:true
        }else if(userChoice==="paper"){
            userWin= compChoice==='scissor'?false:true
        }else{
            userWin= compChoice==="rock"?false:true
        }
        showWinner(userWin, userChoice,compChoice)
    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id")
        console.log(userChoice);
        playGame(userChoice);
    })
})
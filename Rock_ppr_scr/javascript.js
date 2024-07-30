let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara= document.querySelector("#user-score")
const compScorepara= document.querySelector("#comp-score")

const genCompChoice = ()=> {
    //rock, ppr, scr
    const options =["rock", "paper", "scissors"];
const randIdx= Math.floor(Math.random() *3);//generate random num frpm 0 to 2
return options[randIdx];
};

const drawgame = () => {
    console.log("game was draw");
    msg.innerText=" game draw...play again";
};
const showWinner = (usrWin, uchoice, compChoice) =>{
    if(usrWin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`you win! ${uchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorepara,innerText=compScore;
       msg.innerText=`you lose :( ${compChoice} beats ${uchoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame = (uchoice) =>{
    console.log(uchoice);
    //generate comp choice
    const compChoice = genCompChoice();
    console.log("choice was clicked", compChoice);

    if(uchoice === compChoice){
      // draw game
      drawgame();
    } 
    else{
        let usrWin = true;
        if(uchoice==="rock"){
            //scr,ppr
            usrWin= compChoice==="paper" ? false :true;
        }
        else if(uchoice==="paper"){
            //scr,rock
            usrWin= compChoice==="scissors" ? false:true;
        }
        else{
            //rock.ppr
            usrWin= compChoice==="rock"? false:true;       
         }
         showWinner(usrWin, uchoice, compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const uchoice = choice.getAttribute("id")
        console.log("choice was clicked", uchoice);
        playGame(uchoice);
    });
});
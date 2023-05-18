let playerScore=0;
let CompScore=0;
let flag=0;
let flag_no=0;
let allTimePlayer=0;
let allTimeComp=0;

let player = document.querySelectorAll(".btn");
            player.forEach(function(i){
                i.addEventListener('click',function(){
                    game(i.innerHTML);
                });
            });

    
    function check() {
        let over = document.querySelector(".itsOver");
       if (playerScore>=5 || CompScore>=5) {
        if (playerScore>=5){
            over.innerHTML="YOU WON :)";
            allTimeScore(1);
        }
        else if (CompScore>=5) {
            over.innerHTML="YOU LOST :(";
            allTimeScore(0);
        }
           return 1;
           
}
        return 0;
    }
    
    
        function getComputerChoice() {
            let choices=["rock","paper","scissors"];
            let choice = Math.floor(Math.random()*choices.length);
            document.querySelector('.msg2').innerHTML="Computer Chose " + choices[choice];
             return choices[choice];
        }


       function playerSelection(i) {          
                document.querySelector('.msg').innerHTML="You chose " +i;

        }  



        function playRound(comp,player) {
         let displayScore=document.querySelector(".Current_Round");
            
            if (comp===player)
            {
                displayScore.innerHTML="It's a Tie!"; 
                displayScore.style.color="white";
                console.log("It's a Tie");
            }

            else if (comp==='rock'&& player==='paper') {
                displayScore.innerHTML="You win, paper beats rock";
                console.log ("You win, paper beats rock");
                displayScore.style.color="#61DA4E";
                playerScore++;
                return 0;

            }

            else if (comp==='rock' && player==='scissors') 
            {
                displayScore.innerHTML="You lose, rock beats scissors";
                console.log('You lose, rock beats scissors');
                displayScore.style.color="red";
                CompScore++;
                return 1;
            }

            else if (comp==='paper' && player ==='rock')
            {
                displayScore.innerHTML="You lose, paper beats rock";
                console.log('You lose, paper beats rock');
                displayScore.style.color="red";
                CompScore++;
                return 1;
            }

            else if (comp==='paper' && player === 'scissors') {
                displayScore.innerHTML="You win, scissors beats paper";
                console.log('You win, scissors beats paper');
                displayScore.style.color="#61DA4E";
                playerScore++;
                return 0;
            }

            else if (comp==='scissors' && player === 'rock') {
                displayScore.innerHTML="You win, rock beats scissors";
                console.log('You win, rock beats scissors');
                displayScore.style.color="#61DA4E";
                playerScore++;
                return 0;
            }

            else if (comp==='scissors' && player === 'paper') {
                displayScore.innerHTML="You lose, scissors beats paper";
                console.log('You lose, scissors beats paper');
                displayScore.style.color="red";
                CompScore++;
                return 1;
            }

        }


        function game(i) {
                player=playerSelection(i);
                comp = getComputerChoice();
                res=playRound(comp,i);
                displayScore(res);
            if (check()) {
                disableChoiceButtons();
                restart(flag++);
            } 
            }       
            
  

function displayScore(score) {
    let dispScore=document.querySelector(".score");
        dispScore.style.color="pink";
        dispScore.innerHTML="Player = " + playerScore + "  Computer = " + CompScore;
    }


function restart () {
    let start = document.querySelector(".startOver");
    start.innerHTML="Do you want to Play Again?";
    
    let res = document.getElementById("restart");
    res.style.display="block";
    
    if (flag<=1) {
    console.log("here" + flag);
    const yes = document.createElement('button');
    const no = document.createElement('button');
    yes.classList.add("restart_yes");
    yes.classList.add("rstBtns");
    no.classList.add("restart_no");
    no.classList.add("rstBtns");
    yes.innerHTML = "Yes";
    no.innerHTML = "No"; 
  //  document.body.appendChild(yes);
   // document.body.appendChild(no);
    res.appendChild(yes);
    res.appendChild(no);
   // document.body.res.appendChild(yes);
    }
    
    enableRestartButtons();
    
    const yes = document.querySelector(".restart_yes")
    yes.addEventListener("click",function(){
        start.innerHTML=" ";
        res.style.display="none";
        playerScore=0;
        CompScore=0;
        enableChoiceButtons();
        disableRestartButtons();
        removeOld();
    });
    const no = document.querySelector(".restart_no");
    no.addEventListener("click",function(){
        disableRestartButtons();
        flag_no++;
        console.log("THE FLAG NO IS "+ flag_no);
        if (flag_no<=1) {
          //  let bye = document.createElement("h1");
       // bye.innerHTML = "Ok then. Bye Bye";            
        //    document.body.appendChild(bye);
            start.innerHTML = "Ok then, Bye! :("
            removeOld();
        }
        
        });
        
    }


function disableChoiceButtons () {
    let btns = document.querySelectorAll(".btn");
    btns.forEach(function(i){
        i.style.opacity="0.2";
        console.log("here");
        i.disabled=true;
    });
}

function enableChoiceButtons () {
    let btns = document.querySelectorAll(".btn");
    btns.forEach(function(i){
                i.style.opacity="1";
                 i.disabled=false;
                 });
};

function disableRestartButtons () {
    
    restartYes = document.querySelector(".restart_yes");
    restartYes.disabled=true;
    restartNo = document.querySelector(".restart_no");
    restartNo.disabled=true;
};

function enableRestartButtons () {
    restartYes = document.querySelector(".restart_yes");
    restartYes.disabled=false;
    restartNo = document.querySelector(".restart_no");
    restartNo.disabled=false;
};

function allTimeScore(hasWon) {
    if (hasWon===1) {
        allTimePlayer++;
    }
    if (hasWon===0){
        allTimeComp++;
    }
    let scoreAllRounds = document.querySelector(".scoreAll");
    scoreAllRounds.innerHTML = "Score of All Rounds : <br> player = " + allTimePlayer + "<br> computer = " + allTimeComp; 
};

function removeOld() {
     let over = document.querySelector(".itsOver");
     over.innerHTML = " ";
        let hide = document.querySelectorAll(".chose");
        hide.forEach(function (i){
            i.innerHTML = " ";
        });
}
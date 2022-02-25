const boxes = document.querySelectorAll(".box");
const playerDisplay = document.getElementById("display-player");
let tictac = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let curentPlayer = 1;
let showAlertDraw=0;
let showAlertWin=0;
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function changePlayer() {
     console.log("1")
  if (curentPlayer === 1) {
    curentPlayer = 2;
    playerDisplay.innerHTML = "2";
    
  } else {
    curentPlayer = 1;
    playerDisplay.innerHTML = "1";
   
  }
}
function displayXO(box){
    if (curentPlayer===1)
    {
        box.innerHTML="X";
    }
    else
    {
        box.innerHTML="O";
    }
}
function checkGameStatus(boxid,curentPlayer){
    tictac[boxid]=curentPlayer;
    for(let i=0;i<winningConditions.length;i++)
    {
        let currentRule=winningConditions[i];
        let first=currentRule[0];
        let second=currentRule[1];
        let third=currentRule[2];
        if((tictac[first]===curentPlayer)&&(tictac[second]===curentPlayer)&&(tictac[third]===curentPlayer)){
            showAlertWin=1;
        }   
    }
    let isDraw=true;
    for(let i=0;i<tictac.length;i++)
    {
        if(tictac[i]==0)
        isDraw=false;
    }
    if(isDraw){
        showAlertDraw=1;
    }
}

function displayResult(cplayer){
  if(showAlertDraw || showAlertWin){
    setTimeout(()=>{
      if(showAlertWin){
        alert(`Player ${cplayer} Wins`);
        window.location.reload();
      }
      else if (showAlertDraw){
        alert("Match Draw");
        window.location.reload();
      }
    },70)
  }
}
boxes.forEach((item) => {
  item.addEventListener("click", (e) => {
    const boxid = e.target.id.replace("box", "")-1;
    console.log(boxid);
    displayXO(e.target);
    checkGameStatus(boxid,curentPlayer);
    displayResult(curentPlayer);
    changePlayer();
  });
});

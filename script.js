let boxes = document.querySelectorAll(".box");
  let reset = document.querySelector("#reset"); 
  let newGame = document.querySelector("#new");
  let msgContainer = document.querySelector(".msg-container");
  let msg = document.querySelector("#msg"); 
  let turnO=true;//playerX,playerO
  const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
const resetGame=()=>{
  turnO=true;
  enableBoxes();
  msgContainer.classList.add("hide");
};
  boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
      if(turnO){ //playerO
        box.innerText="O";
        turnO=false;
      } else {
        box.innerText="X";
        turnO=true;
      }
      box.disabled=true;  
      checkwinner();
    });
});
const disableBoxes=()=>{
  for(let box of boxes){
    box.disabled=true;
  };
}
const enableBoxes=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText=""; 
  };
}
 const showwinner=(winner)=>{
   msg.innerText=`Congratulations!winner is ${winner}`;
   msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkwinner=()=>{ 
  for(pattern of winpatterns){
    let post1Value=boxes[pattern[0]].innerText;
    let post2Value=boxes[pattern[1]].innerText;
    let post3Value=boxes[pattern[2]].innerText;
    if(post1Value!="" && post2Value!="" && post3Value!="" ){
      if(post1Value==post2Value && post2Value==post3Value){
        console.log("winner", post1Value);
         showwinner(post1Value);
      }
    }
  }
};

newGame.addEventListener("click",()=>{
  resetGame();
});
reset.addEventListener("click",()=>{
  resetGame();
});

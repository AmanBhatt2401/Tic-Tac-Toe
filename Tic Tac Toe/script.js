let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let msgcontainer=document.querySelector(".msgContainer");
let newbtn=document.querySelector(".newbtn");
let msg=document.querySelector(".msg");

let turn_player1=true;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turn_player1=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn_player1){
            box.innerText="O";
            turn_player1=false;
        }
        else{
            box.innerText="X";
            turn_player1=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disabelBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }    
}
const showWinner=(winner)=>{
    msg.innerText=`Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabelBoxes();
}


const checkWinner=()=>{
    for(let pattern of winPattern){

            let pos1value=boxes[pattern[0]].innerText;
            let pos2value=boxes[pattern[1]].innerText;
            let pos3value=boxes[pattern[2]].innerText;

            if(pos1value!="" && pos2value!="" && pos3value!="")
                {
                    if(pos1value==pos2value && pos2value==pos3value){
                        console.log("Winner",pos1value);
                        showWinner(pos1value);
                    }
                }
    }
}

newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click",resetGame)


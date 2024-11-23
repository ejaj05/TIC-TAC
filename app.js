let gameSeq = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let turnsO = false;
let count = 0;
let btns = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let game = document.querySelector(".game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let newBtn = document.querySelector(".newGame");
let main = document.querySelector("main");

const resetGame = (()=>{
    turnsO = false;
    enabled();
    msgContainer.classList.add("hide");
    main.classList.remove("hide");
})

btns.forEach((btn)=>{
    btn.addEventListener("click",function(){
        if(turnsO == false){
            this.innerText = "X";
            turnsO = true;
        }
        else{
            this.innerText = "O";
            turnsO = false;
        }
        btn.disabled = true;
        count++;
        checkWinner();
    });
});

const showWinner = ((winner) =>{
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    main.classList.add("hide");
    count = 0;
    disabled();
})

const disabled = (()=>{
    for(let btn of btns){
        btn.disabled = true;
    }
})

const enabled = (()=>{
    for(let btn of btns){
        btn.disabled = false;
        btn.innerText = "";
    }
})

const checkWinner = ()=>{
    for(winner of gameSeq){
        let pos1 = btns[winner[0]].innerText;
        let pos2 = btns[winner[1]].innerText;
        let pos3 = btns[winner[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(count == 9){
                msg.innerText = "Draw";
                msgContainer.classList.remove("hide");
                count = 0;
            }
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }
    }
}

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
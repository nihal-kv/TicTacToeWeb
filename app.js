const info=document.querySelector('.info');
const reset=document.querySelector('.reset');
const boxs=document.querySelectorAll('.box');



let currentPlayer='X';
let over;
let filled=0;

let winningPos=[
    [0,1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];

let gameState;
const init=()=>{
    currentPlayer='X';
    over=false;
    info.textContent=`Current Player- X`;
    reset.classList.remove('active');
    gameState=['', '', '', '', '', '', '', '', ''];
    boxs.forEach((box)=>{
        box.textContent='';
    })
    boxs.forEach((box)=>{
        box.classList.remove('green');
    })
    filled=0;
}
init();

const swapTurn=()=>{
    if(currentPlayer==="X") currentPlayer="O";
    else currentPlayer='X';
    
    if(!over) info.textContent=`Current Player- ${currentPlayer}`;
}


const isGameOver=(filled)=>{
    
    winningPos.forEach((pos)=>{
        if((gameState[pos[0]]==='X' && gameState[pos[1]]==='X' && gameState[pos[2]]==='X') || (gameState[pos[0]]==='O' && gameState[pos[1]]==='O' && gameState[pos[2]]==='O')){
            boxs[pos[0]].classList.add('green');
            boxs[pos[1]].classList.add('green');
            boxs[pos[2]].classList.add('green');

            reset.classList.add('active');
            info.textContent=`Winning Player- ${currentPlayer}`;
            over=true;
            return;
        }
        
        
        
        
    })
    if(!over && filled===9)
    {
        reset.classList.add('active');
        info.textContent=`Match Tied`;
        over=true;
    }
}

const clickHandler=(index)=>{
    if(!over && gameState[index]===''){
        filled++;
        gameState[index]=currentPlayer;
        boxs[index].textContent=currentPlayer;

        isGameOver(filled);

        swapTurn();

        
    }
}


    boxs.forEach((box, index)=>{
        
        box.addEventListener('click',()=>{
            clickHandler(index);       
        })

        
    })


reset.addEventListener('click', init);
//together with draggable
import initUI from "./initBoard"


export default function DOM(){
    const UI = initUI()
    const resetContent=()=>{
        document.getElementById('board1').innerHTML=''
        document.getElementById('setup').innerHTML=''
        document.getElementById('board2').innerHTML=''
    }

    const loadBattleBoard = ()=>{
        //clear the set up, it is now gone
        const setup = document.getElementById('setup')
        setup.setAttribute('hidden','')
        //minimise player board/change opacity
        // const playerBoard = document.getElementById('board1')
        // playerBoard.classList.toggle('')
        //3. set up AI board
        //==give it rows and columns only
        UI.initGameBoard('board2','board-cell-AI');
        const AIBoard = document.getElementById('board2');
        // AIBoard.classList.add('')
    }

    const attackUpdate=(side,cell,result)=>{
        //side= "human" or "AI" // the ATTACKER
        let cellElement;
        if (side=='human'){
            cellElement = document.querySelector(`.board-cell-AI[data-cell="${cell}"]`)

        }
        else{ //side = 'AI'
            //at attack
            cellElement = document.querySelector(`.board-cell[data-cell="${cell}"]`)
        }
        if (result){
            console.log('resuilt is TRUE')
            cellElement.textContent='O'
        }
        else{
            cellElement.textContent='X'
        }

    }



    return {resetContent,loadBattleBoard,attackUpdate}
}
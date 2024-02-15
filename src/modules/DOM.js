//together with draggable
import initUI from "./initBoard"

import explosion from "../assets/images/explosion.png"


export default function DOM(){
    const UI = initUI()
    const resetContent=()=>{
        document.getElementById('board1').innerHTML=''
        document.getElementById('setup').innerHTML=''
        document.getElementById('board2').innerHTML=''
        document.getElementById('start-game').removeAttribute('hidden')
        document.getElementById('setup').removeAttribute('hidden')
    }

    const loadBattleBoard = ()=>{
        const setup = document.getElementById('setup')
        setup.setAttribute('hidden','')
        UI.initGameBoard('board2','board-cell-AI');

        //remove Start Button
        const start = document.getElementById('start-game')
        start.setAttribute('hidden','')

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
            const cellImg = new Image();
            cellImg.src = explosion
            cellElement.appendChild(cellImg)
        }
        else{
            //explosion
            // const cellImg = new Image();
            // cellImg.src = explosion
            // cellElement.appendChild(cellImg)
            cellElement.textContent='X'
        }

    }



    return {resetContent,loadBattleBoard,attackUpdate}
}
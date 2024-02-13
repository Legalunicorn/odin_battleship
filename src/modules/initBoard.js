//DOM helper 

//ini

function initUI(){
    const initPregame = ()=>{

    }

    const initPregameBoard= ()=>{
        const playerBoard = document.getElementById('board1')
        //create a 10 by 10 grid
        //give each grid data attributes
        for (let i=0;i<10;i++){
            for (let j=0;j<10;j++){
                const newCell = document.createElement('div')
                newCell.dataset.row = i
                newCell.dataset.col = j
                newCell.classList.add('board-cell')
                playerBoard.appendChild(newCell)
            }
        }
        

    }

    const initPregameFleet = () =>{

    }

    return {initPregameBoard}

}
export default initUI
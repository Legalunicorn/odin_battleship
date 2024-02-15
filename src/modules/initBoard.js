//DOM helper 

//ini

function initUI(){
    const init = ()=>{
        initGameBoard('board1','board-cell');
        initPregameFleet();
        initShipRotate();
    }

    const initGameBoard= (boardID,cellClass)=>{
        const playerBoard = document.getElementById(boardID)
        //create a 10 by 10 grid
        //give each grid data attributes
        for (let i=0;i<10;i++){
            for (let j=0;j<10;j++){
                const newCell = document.createElement('div')
                // const cellID = 'cell-' +i.toString() + j.toString()
                // newCell.id = cellID
                newCell.dataset.cell = i.toString()+j.toString()
                newCell.classList.add(cellClass)
                playerBoard.appendChild(newCell)
            }
        }
        

    }

    const initPregameFleet = () =>{
        const fleet = document.getElementById('setup')
        const shipLengths = [5,4,3,2,2,1]
        let id = 1;//++ for each ship
        shipLengths.forEach((len)=>{
            addShip(fleet,len,id)
            id++;
        })
        //addships 
        //5,4,3,2,2,1

    }
    //used in initPregameFleet
    const addShip =(fleet,len,id) =>{
        const newShip = document.createElement('div')
        newShip.id = `ship${id}`
        newShip.setAttribute('draggable','true')
        newShip.dataset.direction='y'//by default
        newShip.dataset.length = len
        newShip.classList.add('ship')

        for (let i=0;i<len;i++){
            const shipCell = document.createElement('div')
            shipCell.classList.add('shipblock')
            newShip.appendChild(shipCell)
        }
        fleet.appendChild(newShip)
    
    }
    const initShipRotate = ()=>{
        const ships = document.querySelectorAll('.ship')
        console.log('rar',ships)
        ships.forEach((ship)=>{
            ship.addEventListener('dblclick',()=>{
                console.log('DOUBLE CLICKSS')
                const oldDirection = ship.dataset.direction
                ship.classList.toggle('isX')
                if (oldDirection=='x'){
                    ship.dataset.direction = 'y'
                }
                else{
                    ship.dataset.direction='x'
                }


            })
        })
    }

    return {initGameBoard,init}

}
export default initUI
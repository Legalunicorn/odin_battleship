//select dragaable
//for now just select one ship
import Ship from "./ship"

export default function draggable(player){
    let placed=0;
    const getPlaced=()=>placed
    const addPlaced=()=>placed++

    const initDraggable = ()=>{
        const placeableShips = document.querySelectorAll(".ship")
        placeableShips.forEach((ship)=>{
            ship.addEventListener('dragstart',dragStart)
        })

        //attach drag start event handler
        //this is the init hard
        // placeableShip.addEventListener('dragstart',dragStart)
        // console.log('hello?')

        const cells = document.querySelectorAll(".board-cell")
        cells.forEach((cell)=>{
            cell.addEventListener('dragenter',dragEnter)
            cell.addEventListener('dragover',dragOver)
            cell.addEventListener('dragleave',dragLeave)
            cell.addEventListener('drop',drop)
        })
        
    }
    //dragable functions 
    function dragStart(e){

        //getData on the target

        //all this logic to get the N sqaure being selected
        let direction = e.target.dataset.direction;
        let shipLen = parseInt(e.target.dataset.length);

        let rect = e.target.getBoundingClientRect();
        let squareNo;

        if (direction=='y'){
            let unitLength = Math.round((rect.bottom-rect.top)/shipLen)
            squareNo = Math.floor((e.clientY-rect.top)/unitLength)
            console.log(squareNo)

        }
        else if (direction=='x'){
            let unitLength = Math.round((rect.right-rect.left)/shipLen)
            squareNo = Math.floor((e.clientX-rect.left)/unitLength)
            console.log('x ',squareNo)
        }
        e.dataTransfer.setData('formatSquare',squareNo)
        e.dataTransfer.setData('text/plain',e.target.id)

        //SET SQAURE NO TO 
        // e.target.dataset.sqaureNo = squareNo

        //i wanna get the child node of draggable tho
        
        // console.log(e.clientX - rect.left,e.clientY - rect.top)
        setTimeout(()=>{
            // e.target.classList.add('hide')
        },0)
    }

    //drop functions
    function dragEnter(e){
        //add drag-over to corresponding nodes
        e.preventDefault();
        e.target.classList.add('drag-over')
    }

    //use this as the main visual indicator of block
    function dragOver(e){
        e.preventDefault();
        e.target.classList.add('drag-over')
 
         
    }
    function dragLeave(e){
        e.target.classList.remove('drag-over')
    }
    function drop(e){
        e.preventDefault();
        e.target.classList.remove('drag-over')
        const shipID = e.dataTransfer.getData('text/plain')
        // if (shipID==null){
        //     return //run time bug from dragging nothing into board
        // }
        const squareNo = parseInt(e.dataTransfer.getData('formatSquare'))

        //varaibles used to determine dragover class cells
        const ship = document.getElementById(shipID)
        if (ship==null) return //bug for runtime drag onto target error
        const length = ship.dataset.length
        const direction = ship.dataset.direction

        //target information
        const pos = e.target.dataset.cell
        const row = parseInt(pos.slice(0,1))
        const col = parseInt(pos.slice(-1))
        console.log('hhh',row,col)

        const shipHoverCells = []
        let invalid = false;
        //1. get all squares + invalid because out of grid
        if (direction=='x'){
            const startCol = col - squareNo; //ie 5-1 = 4
            for (let i = 0;i<length;i++){
                let cell = document.querySelector(`[data-cell="${row}${startCol+i}"]`)
                // let cell = document.getElementById(`cell-${row}${startCol+i}`)
                if (cell ==null){
                    //out of bounds
                    invalid = true
                }
                else if (cell.hasAttribute('data-has-ship')){
                    invalid = true
                    shipHoverCells.push(cell)
                }
                else{
                    shipHoverCells.push(cell)
                }
            }
        }
        else if (direction=='y'){
            const startRow = row-squareNo
            console.log('tee',startRow,length)
            for (let i =0;i<length;i++){
                // let cellxy = `${row}${startCol}`
                let cell = document.querySelector(`[data-cell="${startRow+i}${col}"]`)
                // let cell = document.getElementById(`cell-${startRow+i}${col}`)
                console.log('cell is: ',`cell-${i}${col}`,"::META",i)
                if (cell ==null){
                    //out of bounds
                    invalid = true
                }
                else if (cell.hasAttribute('data-has-ship')){
                    invalid = true
                    shipHoverCells.push(cell)
                }
                else{
                    shipHoverCells.push(cell)
                }
            }
        }
        
        //check validity
        if (invalid){
            shipHoverCells.forEach((cell)=>{
                cell.classList.add('drag-over-invalid')
                setTimeout(()=>{
                    cell.classList.remove('drag-over-invalid')
                },500)
            })
        }
        else{
            shipHoverCells.forEach((cell)=>{
                cell.classList.add('drag-set')
                cell.setAttribute('data-has-ship','')
            })
            //try setting attribute instead
            ship.setAttribute('hidden','')
            // ship.classList.add('hide')
            ship.setAttribute('draggable','false')

            //actually place the ships
            //player.place
            if (direction=='x'){
                player.placeShip(Ship(length),[row,col-squareNo],direction)
            }
            else{
                player.placeShip(Ship(length),[row-squareNo,col],direction)
            }
            addPlaced();
            

        }
    }



    return {initDraggable,getPlaced}

}

//select dragaable
//for now just select one ship
export default function draggable(){

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
        e.dataTransfer.setData('text/plain',e.target.id)

        //all this logic to get the N sqaure being selected
        let direction = e.target.dataset.direction;
        let shipLen = parseInt(e.target.dataset.length);

        let rect = e.target.getBoundingClientRect();
        let unitLength = Math.round((rect.bottom-rect.top)/shipLen)
        let squareNo;

        if (direction=='y'){
            squareNo = Math.floor((e.clientY-rect.top)/unitLength)
            console.log(squareNo)

        }
        else if (direction=='x'){
            squareNo = Math.floor((e.clientX-rect.left)/unitLength)
            console.log('x ',sqaureNo)
        }

        //SET SQAURE NO TO 
        e.target.dataset.sqaureNo = squareNo

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
    function dragOver(e){
        e.preventDefault();
        e.target.classList.add('drag-over')
    }
    function dragLeave(e){
        e.target.classList.remove('drag-over')
    }
    function drop(e){
        e.target.classList.remove('drag-over')
    }

    return {initDraggable}

}

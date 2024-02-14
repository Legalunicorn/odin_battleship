
//one gameboard for player, one gamebord for AI
function Gameboard (){
    let hits=0; // number of accurate hits 
    const getHits =()=> hits;
    const addHits =()=> hits++;

    let grid=[];
    /*
    [''] = no hit no ship
    ['',ship()] = no hit yes ship
    ['x'] = yes hit no ship
    ['x',ship()] = yes hit yes ship
    */
    const resetBoard =()=>{
        grid = []
        for (let i=0;i<10;i++){
            let row = [];
            for (let j=0;j<10;j++){
                row.push([''])
            } 
            grid.push(row) 
        }
    }
    resetBoard() //initialize board by resetting it

    //PUBLIC
    const placeShip = (Ship,start,direction)=>{
        /*
        Ship = object from Ship
        Start = left most for horizontal, top most for verticle
                returns a [x,y] array
        Direction = x or y

        This function takes in a valid ship placement
        ie. ship must fit and must not collide with other ships placed
        */
        let len = Ship.length;
        let row = start[0];
        let col = start[1];
        for (let i=0;i<len;i++){
            if (direction=='x'){
                //horizontal
                grid[row][col+i].push(Ship)
            } 

            else{
                grid[row+i][col].push(Ship)
            }
        }

    }
    //PUBLIC
    const receiveAttack=(square)=>{
        //BOARD.recevieAttack => true/false depending ifhit
        addHits();
        //Assumes sqaure has not been attacked
        let row = square[0],col = square[1];
        if (grid[row][col][0] ==''){
            grid[row][col][0] = 'x'
            return [false,false] //no hit, no sunk
        }

        if (grid[row][col].length>1){
            let hasSunk = grid[row][col][1].addHits();
            return [true,hasSunk] //has hit, sunk?
        }

    }
    //PUBLIC 
    const allSunk = ()=>{
        return (hits==5+4+3+2+2+1)
    }

    return {grid,resetBoard,placeShip,receiveAttack,allSunk,getHits,addHits}
}
export default Gameboard;


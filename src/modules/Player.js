export default function Player(mine,theirs){
    /* 
    - players simply make moves
    - player has access to 2 gameboards
    1. place ships in their own game boards
    - switch - 
    2. attack an opposing board
    */
    let myBoard=mine,theirBoard=theirs;
    let alreadyHitSquares =[];

    //attack opposing board
    const attack =(square)=>{
        alreadyHitSquares.push(square[0].toString()+square[1].toString())
        //assumes a new sqaure
        let hit =theirBoard.receiveAttack(square)
        return hit
    }

    const placeShip=(ship,start,direction)=>{
        //[ship,start,direction]

        myBoard.placeShip(ship,start,direction)
    }

    const getOpponentBoard=()=>theirBoard;

    return {attack,placeShip,getOpponentBoard,alreadyHitSquares}
}
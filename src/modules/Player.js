export default function Player(mine,theirs){
    /* 
    - players simply make moves
    - player has access to 2 gameboards
    1. place ships in their own game boards
    - switch - 
    2. attack an opposing board
    */
    let myBoard=mine,theirBoard=theirs;

    //attack opposing board
    const attack =(sqaure)=>{
        //assumes a new sqaure
        theirBoard.receiveAttack(square)
    }

    const placeShip=(ship,start,direction)=>{
        //[ship,start,direction]
        myBoard.placeShip(ship,start,direction)

    }

    return {attack,placeShip}
}
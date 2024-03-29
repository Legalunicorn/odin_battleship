import Ship from "./ship"

function AI(mine,theirs){
    let alreadyHitSqaures =[]; //uses a string xy 
    //myBoard should be a empty board upon init of Ai
    let myBoard = mine,theirBoard = theirs;

    //1. place ships
    // given a board place ships
    //CREATE THE ARR OF SHIPS  
    const arrOfShips=[] 
    const shipLen = [5,4,3,2,2,1]
    shipLen.forEach((len)=>{
        const newPlacement = [Ship(len)]
        let rand = Math.floor(Math.random()*2)
        if (rand==0){
            newPlacement.push('x')
        }
        else{
            newPlacement.push('y')
        }
        arrOfShips.push(newPlacement)
    })
  
    const placeShipsRandomly=()=>{
        //[[ship,('x')],[ship,('y)],[],[]
    
        //place 5 len ship first 
        //if direction = x, starts from the left
        // the col can only be maximum 9-5=4
        // if direction = y, then max row = 4 etc
        // the max col/row = 9-ship.length
        let col,row;
        let myGrid = myBoard.grid;
        arrOfShips.forEach((shipPlacement)=>{
            //randomly try to place ship until its on a allowed square

            let placed = false,ship = shipPlacement[0],dir=shipPlacement[1];
            
            while (!placed){
                let counter=0;
                if (dir=='x'){
                    //cap the column
                    col = Math.floor(Math.random()*(10-ship.length))
                    row = Math.floor(Math.random()*10)

                    // ------- myGrid[row][col]
                    for (let i =0;i<ship.length;i++){
                        if (myGrid[row][col+i].length==1) counter++ 
                    }
                    if (counter==ship.length){
                        //all sqaures clear
                        myBoard.placeShip(ship,[row,col],'x')
                        placed= true;
                    }

                }
                else if (dir=='y'){
                    row = Math.floor(Math.random()*(10-ship.length))
                    col = Math.floor(Math.random()*10)

                    for (let i =0;i<ship.length;i++){
                        if (myGrid[row+i][col].length==1) counter++ 
                    }
                    if (counter==ship.length){
                        //all sqaures clear
                        myBoard.placeShip(ship,[row,col],'y')
                        placed=true;
                    }
                }
   
            }
        })


    }



    //2. attack non attacked squares

    const attack =()=>{
        //AI attacks random square because Im lazy
        let done = false;
        let col,row;
        let stringxy;
        let hasHit;
        while (!done){
            col =Math.floor(Math.random() * 10);
            row = Math.floor(Math.random() * 10);
            stringxy = col.toString() + row.toString()
            if (!alreadyHitSqaures.includes(stringxy)){
                hasHit = theirBoard.receiveAttack([col,row])
                alreadyHitSqaures.push(stringxy)
                //return the attack
                done = true;
            }
        
            else{
                // return -1 //debug
            }
        }
        return [stringxy,hasHit] //xy,
        //return [[col,row],bool,bool] ==> coordiate attack, has hit, has sunk
    }

    const getMyBoard = ()=>{
        for (let i =0;i<10;i++){
            for (let j=0;j<10;j++){
                // process.stdout.write(theirBoard.grid[i][j]);
                console.log(theirBoard.grid[i][j])
            }
            console.log()
        }
    }

    const getOpponentBoard=()=>theirBoard

    return {placeShipsRandomly,attack,getOpponentBoard}
}

export default AI;
import AI from "../modules/AI";
import Gameboard from "../modules/Gameboard";
import Ship from "../modules/ship";

describe('Testing AI',()=>{
    let AIboard = Gameboard()
    let humanboard = Gameboard()
    let ai = AI(AIboard,humanboard)
    // let testShips = [[Ship(5),'x'],[Ship(4),'y'],[Ship(3),'x'],[Ship(2),'y'],[Ship(2),'y'],[Ship(1),'x']]
    ai.placeShipsRandomly(testShips)
    ai.placeShipsRandomly()


    test('placing ships',()=>{
        let shipcount = 0;
        for (let i =0;i<10;i++){
            for (let j=0;j<10;j++){
                if (AIboard.grid[i][j].length>1) shipcount++
            }
        }
        expect(shipcount).toBe(5+4+3+2+2+1)
    })

    test('attack squaures',()=>{
        //attempt 20 sqaures
        for (let i=0;i<20;i++){
            ai.attack();
        }

        let count=0
        for (let i=0;i<10;i++){
            for (let j=0;j<10;j++)
            if (humanboard.grid[i][j][0] =='x') count++
        }
        expect(count).toBe(20)
        
    })
})
import Gameboard from "../modules/Gameboard";
import Ship from "../modules/ship"

describe('Testing gameboard',()=>{
    const temp = Gameboard();
    test('grid init value',()=>{
        expect(temp.grid[0]).toEqual([[''],[''],[''],[''],[''],[''],[''],[''],[''],[''],])
        expect(temp.grid[9]).toEqual([[''],[''],[''],[''],[''],[''],[''],[''],[''],[''],])
    })

    test('test hit changes target',()=>{
        //attack a squate
        temp.receiveAttack([0,0]);
        expect(temp.grid[0][0][0]).toBe('x')
    })

    test('attack changes hit',()=>{
        expect(temp.getHits()).toBe(1)
    })


    test('place ship horizontal at origin',()=>{
        const randomShip = Ship(3)
        const temp2 = Gameboard();
        temp2.placeShip(randomShip,[0,0],'x')
        expect(temp2.grid[0][0][1]).toEqual(randomShip)
        expect(temp2.grid[0][1][1]).toEqual(randomShip)
        expect(temp2.grid[0][2][1]).toEqual(randomShip)

    })
    test('place ship vertical at origin',()=>{
        const randomShip = Ship(3)
        const temp2 = Gameboard();
        temp2.placeShip(randomShip,[0,0],'y')
        expect(temp2.grid[0][0][1]).toEqual(randomShip)
        expect(temp2.grid[1][0][1]).toEqual(randomShip)
        expect(temp2.grid[2][0][1]).toEqual(randomShip)

    })

    test('attack a place ship to increase its hit',()=>{
        const randShip = Ship(3)
        const randBoard = Gameboard();
        randBoard.placeShip(randShip,[0,0],'x')
        expect(randShip.getHits()).toBe(0)

        randBoard.receiveAttack([0,0])
        expect(randBoard.grid[0][0][1]).toEqual(randShip)
        expect(randShip.getHits()).toBe(1)

        randBoard.receiveAttack([0,1])
        expect(randShip.getHits()).toBe(2)
        expect(randShip.isSunk()).toBeFalsy

        randBoard.receiveAttack([0,2])
        expect(randShip.getHits()).toBe(3)
        expect(randShip.isSunk()).toBeTruthy

        
    })
});

// test('fake',()=>{
//     expect('1').toBe('1')
// })
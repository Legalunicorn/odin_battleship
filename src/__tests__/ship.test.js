import Ship from "../modules/ship"

describe('testing ships',()=>{
    test('Add hit number to SHIP',()=>{
        let newShip = Ship(5);
        newShip.addHits()
        expect(newShip.getHits()).toBe(1); 
    })
    test('testing sunk',()=>{
        let newShip = Ship(2);
        newShip.addHits()
        newShip.addHits()
        expect(newShip.isSunk()).toBeTruthy;
    })

})



function Ship(length){
    const len = length;
    let hits = 0;
    
    const addHits = ()=> {
        hits++
        return isSunk()
    }
    const getHits = ()=> hits;
    function isSunk(){
        return (getHits()==len)
    }

    return {isSunk,length,addHits,getHits}
};

export default Ship;
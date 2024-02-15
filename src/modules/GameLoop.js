// import Ship from "./ship"
import Gameboard from "./Gameboard"
import Player from "./Player"
import AI from "./AI"
import draggable from "./draggable"
import initUI from "./initBoard"
import DOM from "./DOM"


export default function GameLoop(){
    const dom = DOM();
    let humanBoard = Gameboard();
    let AIBoard = Gameboard();
    let humanPlayer = Player(humanBoard,AIBoard);
    let AIPlayer = AI(AIBoard,humanBoard);
    AIPlayer.placeShipsRandomly();

    //game main info
    let isPlayerTurn=true,gameOver=false;
    
    const game=()=>{
        dom.resetContent();
        createGameElements();

        const UI = initUI()
        UI.init();

        const drag = draggable(humanPlayer)
        drag.initDraggable(); //places humanPlayerShips
        //let the "start" button work, but only activates
        //when play drags 5 ships properly
        initStartGame(drag);
        // battleTurns();



    }
    const createGameElements=()=>{
        humanBoard = Gameboard()
        AIBoard = Gameboard()
        humanPlayer = Player(humanBoard,AIBoard)
        AIPlayer = AI(AIBoard,humanBoard)
        AIPlayer.placeShipsRandomly();
    }

    const initStartGame=(drag)=>{ //activate the str
        const startButton = document.getElementById('start-game')
        startButton.addEventListener('click',()=>{
            if (drag.getPlaced()>=6){
                console.log('loading battle...')
                dom.loadBattleBoard()
                battleTurns();
            }
            else{
                console.log(drag.getPlaced())
            }
        })

    }
    const battleTurns=()=>{
        console.log('battle turns!')
        let attackInfo;
        const playerCells = document.querySelectorAll(".board-cell-AI")
        playerCells.forEach((cell)=>{
            cell.addEventListener('click',()=>{
                if (isPlayerTurn){ //ATTACK
                    //1. get coordinate information
                    let row = parseInt(cell.dataset.cell.slice(0,1))
                    let col = parseInt(cell.dataset.cell.slice(-1))
                    let moveString = `${row}${col}`

                    //first check if the square is a valid square
                    let pastMoves = humanPlayer.alreadyHitSquares;
                    if (!pastMoves.includes(moveString)){
                        attackInfo = humanPlayer.attack([row,col]) //boolean
                        dom.attackUpdate('human',moveString,attackInfo)

                        //if miss-> switch tuursn
                        if (!attackInfo){
                            //missed! time for ai to strike back
                            isPlayerTurn=false

                            //AI ATTACKING LOOPS
                            //****************** */
                            // attackInfo = AIPlayer.attack(); //'54',false
                            // dom.attackUpdate('AI',attackInfo[0],attackInfo[1])
                            // if (!attackInfo[1]){
                            //     //AI missed
                            //     isPlayerTurn=true
                            // }
                            // else{ //AI has hit //--> let it keep hitting unti false
                            //     if (AIPlayer.getOpponentBoard().allSunk()){
                            //         gameOver=true;
                            //         alert('YOU SUCK YOU LOST TO AN AI BOT')
                            //     }
  
                            // }
                            AIAttackLoop();
                        }
                        else{
                            //check if win else keep going
                            if (humanPlayer.getOpponentBoard().allSunk()){
                                gameOver=true;
                                alert('GAME OVER!! YOU WIN')
                            }
                        }
                    }
                }
            })
        })

        const AIAttackLoop = ()=>{
            let attackInfo;
            while (!isPlayerTurn){
                attackInfo = AIPlayer.attack()
                dom.attackUpdate('AI',attackInfo[0],attackInfo[1])
                if (!attackInfo[1]){
                    //AI Missed
                    isPlayerTurn=true;
                }
                else if (AIPlayer.getOpponentBoard().allSunk()){
                    //check sunk all
                    gameOver=true;
                    alert('You suck you lose to a random AI bot')

                }
            }
        }
         
    }

    return {game}
    //dom.AI load board(AI.board)
}

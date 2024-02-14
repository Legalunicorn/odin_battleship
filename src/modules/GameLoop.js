// import Ship from "./ship"
import Gameboard from "./Gameboard"
import Player from "./Player"
import draggable from "./draggable"
import initUI from "./initBoard"
import DOM from "./DOM"


const GameLoop=()=>{
    let humanBoard = Gameboard();
    let AIBoard = Gameboard();
    let humanPlayer = Player(humanBoard,AIBoard);
    let AIPlayer = AI(AIBoard,humanBoard);
    AIPlayer.placeShipsRandomly();
    
    const game=()=>{
        DOM.restartGame();
        //create the backened BOARDS
        createGameElements();

        //initialize pregame UI
        initUI().init();
        //initialize draggable?
        const drag = draggable()
        drag.initDraggable(humanPlayer); //places humanPlayerShips
        
        //how to know if all ships placed?

    }
    const createGameElements=()=>{
         humanBoard = Gameboard()
         AIBoard = Gameboard()


         humanPlayer = Player(humanBoard,AIBoard)
        // AIPlayer = Player(AIBoard,humanBoard)
        AIPlayer = AI(AIBoard,humanBoard)
        AIPlayer.placeShipsRandomly();
        //give AI an aray of ships
        //let AI set up its board

    }

    const startGame=(drag)=>{ //activate the str
        const startButton = document.getElementById('start-game')
        startButton.addEventListener('click',()=>{
            if (drag.getPlaced==5){
                //dom 
                //DOM.loadBattleBoard();
                //enableMoveS();
            }
            else{
                console.log('-1')
            }
        })
        //click on start button

    }
    const enableMoves =()=>{
        const playerCells = document.querySelectorAll(".board-cell")
        pla
    }


    const battleTurns=()=>{
        let playerSunk=0;AISunk=0;

        let gameOver=false;
        let isPlayerTurn = true;
        let AttackInfo;
        //if its not players turn,
        const playerCells = document.querySelectorAll(".board-cell-AI")
        playerCells.forEach((cell)=>{
            cell.addEventListener('click',()=>{
                if (isPlayerTurn){ //ATTACK
                    //how to konw if hit or miss?
                    //player.attack(cell-info)
                    //--> get info if its hit or misss
                    //dom.makeAttack()
                    //dom has to know hit or miss though

                }


            })
        })

        //while not game over:
        while (!gameOver){
            //players automatically make their moves
            //so just check if its ai turn
            if (!isPlayerTurn){
                //AI turn to mode
                AttackInfo = AIPlayer.attack();
                //how to know if hit or miss?!
                //DOM.updateAIAttack(AIMove)
            }
        }
         
    }

    //dom.AI load board(AI.board)
}

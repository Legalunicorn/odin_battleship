// import Ship from "./modules/ship"
// import "./styles/test.scss"
// import "./styles/test2.scss"
// import testing from "./assets/images/test2.jpeg"

// let ship = Ship(5)
// console.log('hee hee',ship.length)

// const img = new Image();
// img.src = testing
// const body = document.getElementById('test')
// body.appendChild(img)

import "./styles/main.scss"

import initUI from "./modules/initBoard"
import draggable from "./modules/draggable"

let test = initUI()
// test.initPregameBoard();
test.init();

let testDrag = draggable();
testDrag.initDraggable();
console.log('here')
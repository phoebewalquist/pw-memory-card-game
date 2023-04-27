/*----- constants -----*/

// // Define an array of cards with their values (2 of each)
// let cardValues = ["A", "B", "C", "D", "E", "F", "G", 
//"H", "A", "B", "C", "D", "E", "F", "G", "H"];
const values = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2', 'E1', 'E2', 'F1', 'F2', 'G1', 'G2', 'H1', 'H2'];
/*----- state variables -----*/


// // Define a variable to keep track of flipped cards
// let flippedCards = [];
let flippedCards = [];
let matchedCards = [];
let board = [
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
];
/*----- cached elements  -----*/

const shuffleButton = document.querySelector('.play-button');
const cards = document.querySelectorAll('.card');
const container = document.querySelector('.game-board');


/*----- event listeners -----*/

shuffleButton.addEventListener('click', shuffleCards);
container.addEventListener('click', cardClick)
// container.addEventListener ('click', flipCard);

/*----- functions -----*/

//initialize game/shuffle cards
function render() {
  let idx = 0;
  board.forEach((row, rowIdx) => {
    row.forEach((cell, colIdx) => {
      const divEl = document.createElement('div')
     divEl.setAttribute('data-row', rowIdx)
      divEl.setAttribute('data-col', colIdx)
      //2. Check if the current cell is in the flippedCard array
      // if it is, then give different class
      //otherwise give it class of card front 
      if (flippedCards.includes(cell)) {
        divEl.classList.add('card-back', `${cell[0]}`)
      } else {
        divEl.classList.add('card-front')
      }
      cards[idx].innerHTML = ''
      cards[idx].append(divEl)
      // cards[idx].innerText = cell
      idx++
    })
  })
}



function initGame() {

  shuffleCards();
  setTheBoard();
  flippedCards = [];
  matchedCards = [];
  render();
}

function shuffleCards() {


  for (let index = values.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
  }
}


function cardClick(event) {
  const clickedCard = event.target;
  const row = clickedCard.dataset.row;
  const col = clickedCard.dataset.col;

if (flippedCards.includes(board[row][col])) {
  return;
} else {
  flippedCards.push(board[row][col]);
 if (flippedCards.length === 2) {
    checkMatch();
  }
}

if (matchedCards.length === 16) {
  checkWinner();
}
}




 function setTheBoard() {
  let idx = 0;
  board.forEach(row => {
    row.forEach((cell, index) => {
      row[index] = values[idx]
      idx++
    })
  })
}

//call init
initGame();
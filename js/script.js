
const values = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2', 'E1', 'E2', 'F1', 'F2', 'G1', 'G2', 'H1', 'H2'];



let flippedCards = [];
let matchedCards = [];
let board = [
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
];


const shuffleButton = document.querySelector('button');
const cards = document.querySelectorAll('.card');
const container = document.querySelector('.game-board');
const h2El = document.querySelector('h2')


shuffleButton.addEventListener('click', initGame);
container.addEventListener('click', cardClick);

function render() {
  let idx = 0;
  board.forEach((row, rowIdx) => {
    row.forEach((cell, colIdx) => {
      cards[idx].innerHTML = ''
      const divEl = document.createElement('div')
      divEl.setAttribute('data-row', rowIdx)
      divEl.setAttribute('data-col', colIdx)
    
      if (flippedCards.includes(cell) || matchedCards.includes(cell)) {
        divEl.classList.add('card-back', `${cell[0]}`)
      } else {
        divEl.classList.add('card-front')
      }
      cards[idx].append(divEl)
     
      idx++
    })
  })
}



function initGame() {
  flippedCards = [];
  matchedCards = [];
  shuffleCards();
  setTheBoard();
  render();
  h2El.textContent = '';
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

  if (flippedCards.includes(board[row][col]) || matchedCards.includes(board[row][col])) {
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
  render();
}


function checkMatch() {
  const [card1, card2] = flippedCards;
  if (card1[0] === card2[0]) {
    matchedCards.push(card1, card2);
    flippedCards = [];
    render();
  } else {
    render();
    setTimeout(function(){
      flippedCards = [];
      render();
    }, 1500 );
  }
  
}


function checkWinner() {
  if (matchedCards.length === 16) {
    h2El.textContent = 'You Won!'
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


initGame();
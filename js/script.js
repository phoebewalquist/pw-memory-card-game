/*----- constants -----*/

// // Define an array of cards with their values (2 of each)
// let cardValues = ["A", "B", "C", "D", "E", "F", "G", 
//"H", "A", "B", "C", "D", "E", "F", "G", "H"];
const values = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];
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
      divEl.classList.add('card-front')
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


  // const cardsArray = Array.from(cards);

  // for (let index = cardsArray.length - 1; index > 0; index--) {
  //   const randomIndex = Math.floor(Math.random() * (index + 1));
  //   [cardsArray[index], cardsArray[randomIndex]] = [cardsArray[randomIndex], cardsArray[index]];
  // }

  // cardsArray.forEach(card => container.appendChild(card));
}
//

function cardClick(event) {
  const clickedCard = event.target;
  const row = clickedCard.dataset.row;
  const col = clickedCard.dataset.col;
  console.log(board[row][col])
//1. push the letter of the card that was clicked into flippedCards
//check this by clicking a card and console logging flipped cards in console


//   if (!clickedCard.classList.contains('card') || matchedCards.includes(clickedCard)) {
//     return;
//   }

//  flipCard(clickedCard);
//  flippedCards.push(clickedCard);


//  if (flippedCards.length === 2) {
//    const [firstCard, secondCard] = flippedCards;
//    const firstValue = firstCard.dataset.value;
//    const secondValue = secondCard.dataset.value;

//    if (firstValue === secondValue) {
     
//      matchedCards.push(firstCard, secondCard);
//      flippedCards = [];

    
//      if (matchedCards.length === cards.length) {
//        setTimeout(() => {
//          alert('You won!');
//          initGame();
//        }, 1000);
//      }
//    } else {

    //  setTimeout(() => {
    //    flipCard(firstCard);
    //    flipCard(secondCard);
    //    flippedCards = [];
    //  }, 2000);
//    }
//  }
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
//render winner message

//call init
initGame();

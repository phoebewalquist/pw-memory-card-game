/*----- constants -----*/

const shuffleButton = document.querySelector('.play-button');
const cards = document.querySelectorAll('.card');
const container = document.querySelector('.game-board');

/*----- state variables -----*/


/*----- cached elements  -----*/


/*----- event listeners -----*/

shuffleButton.addEventListener('click', shuffleCards);

/*----- functions -----*/

function shuffleCards() {
  const cardsArray = Array.from(cards);

  for (let i = cardsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
  }

  cardsArray.forEach(card => container.appendChild(card));
}

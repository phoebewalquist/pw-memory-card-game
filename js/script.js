//inittialize game 
//shuffle cards -iterate through them, generate a random number 
//between 0 and 7 and assign it to the flex-item order property:
const playButton = document.querySelector('.play-button');
playButton.addEventListener('click', startGame);



// Define an array of cards with their values (2 of each)
//const cards = dcument.querySelectorAll
//   ];

// // Define a variable to keep track of flipped cards
// let flippedCards = [];
//return if false

//add an event listener to each card element to detect when a card is clicked.

// // Define a function to flip 2 cards to show their value
// function flipCard(card) {
// card.classList.add("flipped");
// flippedCards.push(card);
// }

// // Create a function to check if the 2 cards match
// function checkMatch() {
// let card1Value = flippedCards[0].getAttribute("data-value");
// let card2Value = flippedCards[1].getAttribute("data-value");

// if (card1Value === card2Value) {
// // If the cards match, remove them from the screen
// flippedCards[0].classList.add("matched");
// flippedCards[1].classList.add("matched");
// } else {
// // If the cards do not match, flip them back over
// setTimeout(function() {
// flippedCards[0].classList.remove("flipped");
// flippedCards[1].classList.remove("flipped");
// }, 1000);
// }

// limit the number of cards that a player can flip at once 
//to avoid the player flipping too many cards and losing track of which cards have been flipped.

// // Clear the flippedCards array
// flippedCards = [];
// }

//Game over condition to add a game over 
//condition to detect when all the cards have been matched and the game is won.


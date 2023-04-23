// // Define an array of cards with their values (2 of each)
// let cardValues = ["A", "B", "C", "D", "E", "F", "G", "H", "A", "B", "C", "D", "E", "F", "G", "H"];

// // Define a variable to keep track of flipped cards
// let flippedCards = [];

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

// // Clear the flippedCards array
// flippedCards = [];
// }
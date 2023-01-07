let firstCard = Math.floor(Math.random() * (12 - 2) + 2);
let secondCard = Math.floor(Math.random() * (12 - 2) + 2);
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector(".sum-el");
let cardEl = document.querySelector(".card-el");

function startGame() {
  renderGame();
}
function renderGame() {
  cardEl.textContent = "Cards: " + cards[0] + " " + cards[1];
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw another card?";
  } else if (sum === 21) {
    message = "You've got Blackjack";
    hasBlackJack = true;
  } else {
    message = "You're out of the game";
    isAlive = false;
  }

  messageEl.textContent = message;
}
function newCard() {
  let addCard = Math.floor(Math.random() * (12 - 2) + 2);
  cards.push(addCard);
  console.log(cards);
  sum += addCard;
  renderGame();
}

// scratch section
let messages = [
  "hey. how's it going",
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately",
];
let newMessage = "Same here!";
messages.push(newMessage);
console.log(messages);
// end scratch section

// lesson time stamp 2:48:00

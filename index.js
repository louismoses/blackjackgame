let firstCard = 10; //Math.floor(Math.random() * (12 - 2) + 2);
let secondCard = 11; //Math.floor(Math.random() * (12 - 2) + 2);
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

console.log(sum);
if (sum <= 20) {
  message = "Do you want to draw another card?";
} else if (sum === 21) {
  message = "Wohoo! You've got Blackjack";
  hasBlackJack = true;
} else {
  message = "You're out of the game";
  isAlive = false;
}

// CASH OUT
console.log(hasBlackJack);
console.log(isAlive);
console.log(message);

// scratch section

// end scratch section

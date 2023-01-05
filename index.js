let firstCard = Math.floor(Math.random() * (12 - 2) + 2);
let secondCard = Math.floor(Math.random() * (12 - 2) + 2);

let sum = firstCard + secondCard;
console.log(sum);
if (sum < 21) {
  console.log("waw");
}


// declaring variables

let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

// targeting image classes and setting the image attribute

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");


document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Won";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Won";
} else {
  document.querySelector("h1").innerHTML = "There was a tie";
}
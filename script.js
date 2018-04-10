var player1 = true;
var player2 = false;
var victory = document.getElementById('victory');
var accumulator1 = document.getElementById('accumulator1');
var current1 = document.getElementById('current1');
var redDot1 = document.getElementById('redDot1');
var roll = document.getElementById('roll');
var hold = document.getElementById('hold');
var dice1 = document.getElementById('dice1');
var dice2 = document.getElementById('dice2');
var newgame = document.getElementById('newgame');
var accumulator2 = document.getElementById('accumulator2');
var current2 = document.getElementById('current2');
var redDot2 = document.getElementById('redDot2');
var img1 = "<img src ='dice-1.png' width='150'/>";
var img2 = "<img src ='dice-2.png' width='150'/>";
var img3 = "<img src ='dice-3.png' width='150'/>";
var img4 = "<img src ='dice-4.png' width='150'/>";
var img5 = "<img src ='dice-5.png' width='150'/>";
var img6 = "<img src ='dice-6.png' width='150'/>";
var rand1;
var rand2;
var sum = 0;
var currentScore1 = 0;
var currentScore2 = 0;
var totalScore1 = 0;
var totalScore2 = 0;



function start() {
  player1 = true;
  player2 = false;
  currentScore1 = 0;
  currentScore2 = 0;
  totalScore1 = 0;
  totalScore2 = 0;
  accumulator1.innerHTML = "0";
  current1.innerHTML = "0";
  accumulator2.innerHTML = "0";
  current2.innerHTML = "0";
  redDot1.style.visibility = "visible";
  dice1.innerHTML = img1;
  dice2.innerHTML = img1;
  roll.disabled = false;
}

newgame.addEventListener('click', start);

function rollDice() {

  var img = [img1, img2, img3, img4, img5, img6];
  var rand1 = Math.floor(Math.random() * 6) + 1;
  dice1.innerHTML = img[rand1 - 1];
  var rand2 = Math.floor(Math.random() * 6) + 1;
  dice2.innerHTML = img[rand2 - 1];

  sum = rand1 + rand2;

  if (rand1 == 1 || rand2 == 1) {

    if (player1) {
      player2 = true;
      player1 = false;
      current1.innerHTML = "Oops !";
      current2.innerHTML = 0;
      currentScore1 = 0;
      redDot2.style.visibility = "visible";
      redDot1.style.visibility = "hidden";
    }
    else {
      player2 = false;
      player1 = true;
      current2.innerHTML = "Oops !";
      current1.innerHTML = 0;
      victory.innerHTML = "";
      currentScore2 = 0;
      redDot1.style.visibility = "visible";
      redDot2.style.visibility = "hidden";
    }
  }
  else {
    current1.innerHTML = "0";
    current2.innerHTML = "0";

    if (player1) {
      currentScore1 += sum;
      current1.innerHTML = currentScore1;
      redDot1.style.visibility = "visible";
      redDot2.style.visibility = "hidden";
    } else {
      currentScore2 += sum;
      current2.innerHTML = currentScore2;
      redDot2.style.visibility = "visible";
      redDot1.style.visibility = "hidden";
    }
  }
}

roll.addEventListener('click', rollDice);

hold.onclick = function hold() {
  if (player1) {
    totalScore1 += currentScore1;
    if (totalScore1 < 100) {
      player1 = false;
      player2 = true;
      accumulator1.innerHTML = totalScore1;
      redDot2.style.visibility = "visible";
      redDot1.style.visibility = "hidden";
    }
    else {
      accumulator1.innerHTML = "Gagné!";
      roll.disabled = true;
    }
    currentScore1 = 0;
  }
  else {
    totalScore2 += currentScore2;

    if (totalScore2 < 100) {
      player2 = false;
      player1 = true;
      accumulator2.innerHTML = totalScore2;
      redDot1.style.visibility = "visible";
      redDot2.style.visibility = "hidden";
    } else {
      accumulator2.innerHTML = "Gagné!";
      roll.disabled = true;
    }
    currentScore2 = 0;
  }
};
//hold.addEventListener('click', hold);

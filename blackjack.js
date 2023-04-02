let cards1 = document.getElementById("card1");
let cards2 = document.getElementById("card2");
let sum = document.getElementById("sum");
let st = document.getElementById("startbtn");
let blackjack = document.getElementById("bj");

console.log(sum);
console.log(st);

document.getElementById("restart-btn").style.display = "none";

function card_display() {
  startbtn.innerText = "GENERATE MORE CARDS";

  let gen1 = Math.floor(Math.random() * 21 + 1);
  let gen2 = Math.floor(Math.random() * 21 + 1);
  let res = gen1 + gen2;
  card1.innerText = "Card 1:" + " " + gen1;
  card2.innerText = "Card 2:" + " " + gen2;
  sum.innerText = "Sum:" + " " + res;

  if (res === 21) {
    console.log("It is a blackjack!");
    bj.innerText = "It's a blackjack!";
    document.getElementById("startbtn").disabled = "disabled";
	document.getElementById("restart-btn").style.display = "block";
  } else if (res < 21) {
    console.log("Aww man.");
    bj.innerText = "Aww man.";
    document.getElementById("startbtn").disabled = "disabled";
	document.getElementById("restart-btn").style.display = "block";
  } else if (res > 21) {
    console.log("You are safe");
    bj.innerText = "You are in the safe zone";
  }
}

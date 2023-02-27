const num = document.getElementById("number");
const btn = document.getElementById("generate");

const randomNum = Math.floor(Math.random() * 1000) + 1;

function generateNumber() {
  num.innerHTML = "#" + randomNum;
}

btn.addEventListener("click", generateNumber);



let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const user = document.querySelector("#guessfield");
const guesslot = document.querySelector(".guesses");
const lastresult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevguess = [];
let numguess = 1;

let platgame = true;
if (platgame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(user.value);
    console.log(guess);
    validate(guess);
  });
}

function validate(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please Enter a valid Number");
  } else {
    prevguess.push(guess);
    if (numguess === 10) {
      dispalyguess(guess);
      dispalymessage(`Game Over , Random Number Was ${randomNumber}`);
      endgame();
    } else {
      dispalyguess(guess);
      check(guess);
    }
  }
}

function check(guess) {
  if (guess === randomNumber) {
    dispalymessage("You Guess It Right");
    endgame();
  } else if (guess < randomNumber) {
    dispalymessage("Number is TOo Low");
  } else if (guess > randomNumber) {
    dispalymessage("Number is TOo High");
  }
}

function dispalyguess(guess) {
  user.value = "";
  guesslot.innerHTML += `"${guess}" -    `;
  numguess++;
  lastresult.innerHTML = `${11 - numguess}`;
}

function dispalymessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
  user.value = "";
  user.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newgame">Start new Game</h2>`;
  startOver.appendChild(p);
  newgame();
}

function newgame() {
  const newGameBtn = document.querySelector("#newgame");
  newGameBtn.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    numguess = 1;
    guesslot.innerHTML = "";
    lastresult.innerHTML = `${10 - numguess}`;
    user.removeAttribute("disabled");
    startOver.removeChild(p);
    prevguess = [];
    platgame = true;
  });
}

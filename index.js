let count = 0;
let countGuest = 0;

function increment(event) {
  event.preventDefault();
  count = count + 1;
  let scoreHeading = document.querySelector("#score-home");

  scoreHeading.innerHTML = count;
}

let buttonElement = document.querySelector(".add-one-home");
buttonElement.addEventListener("click", increment);

function incrementTwice(event) {
  event.preventDefault();
  count = count + 2;
  let scoreHeading = document.querySelector("#score-home");

  scoreHeading.innerHTML = count;
}

let buttonTwoElement = document.querySelector(".add-two-home");
buttonTwoElement.addEventListener("click", incrementTwice);

function incrementThree(event) {
  event.preventDefault();
  count = count + 3;
  let scoreHeading = document.querySelector("#score-home");

  scoreHeading.innerHTML = count;
}

let buttonThreeElement = document.querySelector(".add-three-home");
buttonThreeElement.addEventListener("click", incrementThree);

function resetScoreHome(event) {
  event.preventDefault();
  count = 0;
  let scoreHeading = document.querySelector("#score-home");
  scoreHeading.innerHTML = count;
}

let resetButtonElement = document.querySelector("#reset-home");
resetButtonElement.addEventListener("click", resetScoreHome);

function incrementGuestOne(event) {
  event.preventDefault();
  countGuest = countGuest + 1;
  let scoreGuest = document.querySelector("#score-guest");
  scoreGuest.innerHTML = countGuest;
}

let guestButtonOne = document.querySelector("#add-one-guest");
guestButtonOne.addEventListener("click", incrementGuestOne);

function incrementGuestTwo(event) {
  event.preventDefault();
  countGuest = countGuest + 2;
  let scoreGuest = document.querySelector("#score-guest");
  scoreGuest.innerHTML = countGuest;
}

let guestButtonTwo = document.querySelector("#add-two-guest");
guestButtonTwo.addEventListener("click", incrementGuestTwo);

function incrementGuestThree(event) {
  event.preventDefault();
  countGuest = countGuest + 3;
  let scoreGuest = document.querySelector("#score-guest");
  scoreGuest.innerHTML = countGuest;
}

let guestButtonThree = document.querySelector("#add-three-guest");
guestButtonThree.addEventListener("click", incrementGuestThree);

function resetScoreGuest(event) {
  event.preventDefault();
  countGuest = 0;
  let scoreGuest = document.querySelector("#score-guest");
  scoreGuest.innerHTML = countGuest;
}

let resetButtonGuestElement = document.querySelector("#reset-guest");
resetButtonGuestElement.addEventListener("click", resetScoreGuest);

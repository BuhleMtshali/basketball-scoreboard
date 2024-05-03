let count = 0;

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

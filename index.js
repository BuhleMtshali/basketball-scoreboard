let count = 0;

function increment(event) {
  event.preventDefault();
  count = count + 1;
  let scoreHeading = document.querySelector("#score-home");

  scoreHeading.innerHTML = count;
}

let buttonElement = document.querySelector(".add-one-home");
buttonElement.addEventListener("click", increment);

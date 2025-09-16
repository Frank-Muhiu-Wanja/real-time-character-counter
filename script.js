const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter();

function updateCounter() {
  totalCounterEl.innerText = textareaEl.value.length;
  remainingCounterEl.innerText =
    textareaEl.getAttribute("maxLength") - totalCounterEl.innerText;
  //   remainingCounterEl.innerText = 50 - totalCounterEl.innerText;
  if (+totalCounterEl.innerText === 50) {
    return alert("You have reached the end of characters");
  }
}

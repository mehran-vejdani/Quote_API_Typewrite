let destination = document.querySelector(".typedtext");
let quoteArray = [];
let index = 0;
let textPositions = 0;
let flag = true;

const Url = "https://api.quotable.io/random";

window.addEventListener("load", typeWrite);

function loadQuote() {
  fetch(Url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert(response.status);
      }
    })
    .then((data) => {
      quoteArray[index] = data.content;
    });
}

function typeWrite() {
  if (flag) {
    loadQuote();
    quoteArray[index] += " ";
    flag = false;
  }
  destination.innerHTML =
    quoteArray[index].substring(0, textPositions) + `<span> \u25AE <span>`;

  if (textPositions++ != quoteArray[index].length) {
    setTimeout("typeWrite()", 100);
  } else {
    quoteArray[index];
    setTimeout("typeWrite()", 3000);
    textPositions = 0;
    flag = true;
  }
}

typeWrite();

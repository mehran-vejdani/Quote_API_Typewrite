let destination = document.querySelector(".typedtext");
let quoteArray = [];
let index = 0;
let textPositions = 0;
let flag = true;

const Url = "https://api.quotable.io/random";

function loadQuote() {
  fetch(Url).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      alert(response.status);
    }
  }).then(data=>{
    quoteArray(index)=data.content
  })
}


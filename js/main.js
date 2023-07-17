var quotes = [
  {
    quote: "I'm not a good person",
    author: "Michael Jackson",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },

  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain",
  },
  {
    quote: "A friend is someone who knows all about you and still loves you.",
    author: "Elbert Hubbard",
  },
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "Good friends, good books, and a sleepy conscience: this is the ideal life.",
    author: "Mark Twain",
  },
  {
    quote:
      "Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).",
    author: "Mark Twain",
  },
  {
    quote: "Life is what happens to us while we are making other plans.",
    author: "Allen Saunders",
  },
];

var random;
//
function randomGenerator() {
  // 0-----10 =length 10
  return Math.trunc(Math.random() * (quotes.length - 1));
}

(function randomElement() {
  if (localStorage.getItem("random") === null) {
    console.log("hi there");
    random = randomGenerator();
    localStorage.setItem("random", random);
    displayQuote();
  } else {
    random = localStorage.getItem("random");
    displayQuote();
  }
})();

document.getElementById("btn").onclick = function () {
  var tempRandom = randomGenerator();
  while (random === tempRandom) {
    tempRandom = randomGenerator();
    console.log("repated", tempRandom);
  }
  random = tempRandom;
  localStorage.setItem("random", random);
  displayQuote();
};

function displayQuote() {
  document.getElementById("quote").innerHTML = quotes[random].quote;
  document.getElementById("auother").innerHTML = quotes[random].author;
}
// by eng ahmed hosin

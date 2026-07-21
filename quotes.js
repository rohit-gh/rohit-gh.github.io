(function () {
  var quotes = [
    { text: "Not all those who wander are lost.", source: "The Lord of the Rings" },
    { text: "Adventure is out there.", source: "Up" },
    { text: "To infinity and beyond!", source: "Toy Story" },
    { text: "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.", source: "Ferris Bueller's Day Off" },
    { text: "The world is not in your books and maps. It's out there.", source: "The Hobbit" },
    { text: "Just keep swimming.", source: "Finding Nemo" },
    { text: "With great power comes great responsibility.", source: "Spider-Man" }
  ];

  var quoteEl = document.querySelector(".rotating-quote");
  var textEl = document.querySelector(".rotating-quote__text");
  var sourceEl = document.querySelector(".rotating-quote__source");

  if (!quoteEl || !textEl || !sourceEl || !quotes.length) {
    return;
  }

  var index = 0;
  var interval = 5000;
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function renderQuote(i) {
    textEl.textContent = quotes[i].text;
    sourceEl.textContent = "— " + quotes[i].source;
  }

  function nextQuote() {
    if (prefersReducedMotion) {
      return;
    }

    quoteEl.classList.add("is-transitioning");

    window.setTimeout(function () {
      index = (index + 1) % quotes.length;
      renderQuote(index);
      quoteEl.classList.remove("is-transitioning");
    }, 400);
  }

  renderQuote(index);

  if (!prefersReducedMotion) {
    window.setInterval(nextQuote, interval);
  }
})();

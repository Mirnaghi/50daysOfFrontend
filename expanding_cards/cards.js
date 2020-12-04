const cards = document.querySelectorAll(".card");

// add .active class to card div when clicked
cards.forEach(card => {
  card.addEventListener("click", () => {
    removeActiveClass();  // remove .active class from previously clicked cards
    card.classList.add("active");
  })
});

// remove .active class from card divs
function removeActiveClass() {
  cards.forEach(card => {
    card.classList.remove("active");
  });

}

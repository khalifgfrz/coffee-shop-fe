// hamburger
// dropdownHamburger

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const dropdownHamburger = document.getElementById("dropdownHamburger");

  hamburger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdownHamburger.classList.toggle("show");
  });

  document.addEventListener("click", (event) => {
    if (!hamburger.contains(event.target)) {
      dropdownHamburger.classList.remove("show");
    }
  });

  dropdownHamburger.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

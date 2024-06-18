document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const dropdownHamburger = document.getElementById("dropdownHamburger");
  const toggleDropdown = document.getElementById("toggleDropdown");
  const dropdownMenu = document.getElementById("dropdownMenu");

  hamburger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdownHamburger.classList.toggle("show");
    dropdownMenu.classList.remove("show");
  });

  toggleDropdown.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdownMenu.classList.toggle("show");
    dropdownHamburger.classList.remove("show");
  });

  document.addEventListener("click", () => {
    dropdownHamburger.classList.remove("show");
    dropdownMenu.classList.remove("show");
  });

  dropdownHamburger.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  dropdownMenu.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

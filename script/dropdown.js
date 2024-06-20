document.addEventListener("DOMContentLoaded", () => {
  const toggleDropdown = document.getElementById("toggleDropdown");
  const dropdownMenu = document.getElementById("dropdownMenu");

  toggleDropdown.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdownMenu.classList.toggle("show");
  });

  document.addEventListener("click", (event) => {
    if (!toggleDropdown.contains(event.target)) {
      dropdownMenu.classList.remove("show");
    }
  });

  dropdownMenu.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

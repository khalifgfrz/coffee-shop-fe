// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const navbarBtn = document.querySelector(".navbar-btn");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
  navbarBtn.classList.toggle("active");
};

// Klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target) && !navbarBtn.contains(e.target)) {
    navbarNav.classList.remove("active");
    navbarBtn.classList.remove("active");
  }
});

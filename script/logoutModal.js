document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");
  const logoutBtn2 = document.getElementById("logoutBtn2");
  const modalBg = document.getElementById("modalBg");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const confirmLogoutBtn = document.getElementById("confirmLogoutBtn");

  logoutBtn.addEventListener("click", () => {
    modalBg.classList.add("show");
  });

  logoutBtn2.addEventListener("click", () => {
    modalBg.classList.add("show");
  });

  closeModalBtn.addEventListener("click", () => {
    modalBg.classList.remove("show");
  });

  modalBg.addEventListener("click", (e) => {
    if (e.target === modalBg) {
      modalBg.classList.remove("show");
    }
  });

  confirmLogoutBtn.addEventListener("click", () => {
    // Tambahkan logika log out Anda di sini
    alert("You have been logged out!");
    modalBg.classList.remove("show");
  });
});

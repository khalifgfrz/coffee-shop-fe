document.addEventListener("DOMContentLoaded", () => {
  const checkoutBtn = document.getElementById("checkoutBtn");
  const checkoutModalBg = document.getElementById("checkoutModalBg");
  const cancelCheckoutModalBtn = document.getElementById("cancelCheckoutModalBtn");
  const confirmCheckoutBtn = document.getElementById("confirmCheckoutBtn");

  checkoutBtn.addEventListener("click", () => {
    checkoutModalBg.classList.add("show");
  });

  cancelCheckoutModalBtn.addEventListener("click", () => {
    checkoutModalBg.classList.remove("show");
  });

  checkoutModalBg.addEventListener("click", (e) => {
    if (e.target === checkoutModalBg) {
      checkoutModalBg.classList.remove("show");
    }
  });

  confirmCheckoutBtn.addEventListener("click", () => {
    // Tambahkan logika log out Anda di sini
    alert("You have been checkout item!");
    checkoutModalBg.classList.remove("show");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const deleteBtn = document.getElementById("deleteBtn");
  const deleteBtn2 = document.getElementById("deleteBtn2");
  const deleteModalBg = document.getElementById("deleteModalBg");
  const cancelModalBtn = document.getElementById("cancelModalBtn");
  const confirmDeleteBtn = document.getElementById("confirmDeleteBtn");

  deleteBtn.addEventListener("click", () => {
    deleteModalBg.classList.add("show");
  });

  deleteBtn2.addEventListener("click", () => {
    deleteModalBg.classList.add("show");
  });

  cancelModalBtn.addEventListener("click", () => {
    deleteModalBg.classList.remove("show");
  });

  deleteModalBg.addEventListener("click", (e) => {
    if (e.target === deleteModalBg) {
      deleteModalBg.classList.remove("show");
    }
  });

  confirmDeleteBtn.addEventListener("click", () => {
    // Tambahkan logika log out Anda di sini
    alert("Item has been deleted!");
    deleteModalBg.classList.remove("show");
  });
});

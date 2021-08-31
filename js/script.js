const modal = document.getElementById("modal");
const openModal = document.getElementById("submit-modal");
const closeModal = document.getElementById("close");

openModal.onclick = function () {
  modal.style.display = "block";
};

closeModal.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

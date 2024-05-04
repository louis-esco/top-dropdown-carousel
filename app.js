const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownContent = document.querySelector(".dropdown-content");

function toggleDropdown() {
  dropdownContent.classList.toggle("show");
}

dropdownBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleDropdown();
});

document.addEventListener("click", (e) => {
  if (
    !dropdownContent.contains(e.target) &&
    dropdownContent.classList.contains("show")
  ) {
    toggleDropdown();
  }
});

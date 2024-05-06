const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownContent = document.querySelector(".dropdown-content");
const dropdown = document.querySelector(".dropdown-container");

function toggleDropdown() {
  dropdownContent.classList.toggle("show");
}

dropdownBtn.addEventListener("click", (e) => {
  toggleDropdown();
});

document.addEventListener("click", (e) => {
  if (
    !dropdown.contains(e.target) &&
    dropdownContent.classList.contains("show")
  ) {
    toggleDropdown();
  }
});

function Carousel() {
  const itemsNode = document.querySelectorAll(".carousel-item");
  const itemsArray = Array.from(itemsNode);
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  const navDots = document.querySelector(".nav-dots");

  function displayDots() {
    for (let i = 0; i < itemsNode.length; i++) {
      const dotBtn = document.createElement("button");
      dotBtn.classList.add("nav-dot-btn");
      dotBtn.dataset.btnIndex = i;
      navDots.appendChild(dotBtn);

      dotBtn.addEventListener("click", () => {
        toggleVisible(dotBtn.dataset.btnIndex, getActiveItem());
      });
    }
  }

  function toggleVisible(...indexes) {
    const dotBtnsNode = document.querySelectorAll(".nav-dot-btn");
    for (let ind of indexes) {
      if (ind >= itemsNode.length) {
        itemsNode[0].classList.toggle("visible");
        dotBtnsNode[0].classList.toggle("active-dot");
      } else if (ind < 0) {
        itemsNode[itemsNode.length - 1].classList.toggle("visible");
        dotBtnsNode[dotBtnsNode.length - 1].classList.toggle("active-dot");
      } else {
        itemsNode[ind].classList.toggle("visible");
        dotBtnsNode[ind].classList.toggle("active-dot");
      }
    }
  }

  function getActiveItem() {
    return itemsArray.findIndex((item) => item.classList.contains("visible"));
  }

  function nextItem() {
    const activeIndex = getActiveItem();
    toggleVisible(activeIndex, activeIndex + 1);
  }

  function previousItem() {
    const activeIndex = getActiveItem();
    toggleVisible(activeIndex, activeIndex - 1);
  }

  leftArrow.addEventListener("click", previousItem);
  rightArrow.addEventListener("click", nextItem);

  displayDots();
  toggleVisible(0);
  const interval = setInterval(nextItem, 5000);

  return {
    toggleVisible,
    getActiveItem,
    nextItem,
    previousItem,
  };
}

const carousel = Carousel();

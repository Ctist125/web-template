// 변수 선언
const menuButtonElement = document.querySelector("header button");
const asideElement = document.querySelector("aside");
const exitButtonElement = document.querySelector("aside button");
const arrowImageElement = document.querySelectorAll(".next-page");
const menuAnchorElement = document.querySelectorAll("aside a");

// 함수 선언
function openMobileMenu() {
  asideElement.style.display = "block";
  arrowImageElement[0].style.display = "none";
  arrowImageElement[1].style.display = "none";
}

function exitMoblieMenu() {
  asideElement.style.display = "none";
  arrowImageElement[0].style.display = "block";
  arrowImageElement[1].style.display = "block";
}

// event
menuButtonElement.addEventListener("click", openMobileMenu);
exitButtonElement.addEventListener("click", exitMoblieMenu);
menuAnchorElement[0].addEventListener("click", exitMoblieMenu);
menuAnchorElement[1].addEventListener("click", exitMoblieMenu);
menuAnchorElement[2].addEventListener("click", exitMoblieMenu);

// 수정 후

// 변수 선언
const profileSectionElement = document.getElementById("profile");
const introductionSectionElement = document.getElementById("introduction");
const arrowIcon1 = document.querySelector("#profile .next-page");
const arrowIcon2 = document.querySelector("#introduction .next-page");

// 함수 선언
function imageOpacity() {
  // 변수 선언
  const rectProfile = profileSectionElement.getBoundingClientRect();
  const rectIntroduction = introductionSectionElement.getBoundingClientRect();
  const scrollY = window.scrollY;

  // 위치에 따른 실행
  if (rectProfile.top < scrollY && rectProfile.bottom > scrollY) {
    const scrollRatio = scrollY / rectProfile.bottom;
    arrowIcon1.style.opacity = 0.5 - scrollRatio;
  } else if (
    rectIntroduction.top < scrollY &&
    rectIntroduction.bottom > scrollY
  ) {
    const scrollRatio = scrollY / rectIntroduction.bottom;
    arrowIcon2.style.opacity = 1 - scrollRatio;
  }
}

// event
window.addEventListener("scroll", imageOpacity);

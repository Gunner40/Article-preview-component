const shareIconPassive = document.querySelector(".card__social__shareIcon--1");
const shareIconActive = document.querySelector(".card__social__shareIcon--2");
const socialPassive = document.querySelector(".card__social--passive");
const socialActive = document.querySelector(".card__social--active");

shareIconPassive.addEventListener("click", () => {
  socialPassive.classList.toggle("d-none");
  socialActive.classList.toggle("d-none");
});

shareIconActive.addEventListener("click", () => {
  socialPassive.classList.toggle("d-none");
  socialActive.classList.toggle("d-none");
});

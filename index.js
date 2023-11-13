// main share icon
const shareIcon = document.querySelector(".share-icon--main");

// popup shareIcon on mobile
const shareIconPopup = document.querySelector(".share-icon--popUp");

// card social element, we want to change this to display: none when share icon is clicked, the popup element will then take its place
const socialElement = document.querySelector(".card__social");

// desktop popup element
const sharePopUp = document.querySelector(".sharePopup");

// mobile popup element
const sharePopUpMobile = document.querySelector(".sharePopup--mobile");

// listen for clicks on share icon and handle the event for desktop screens
shareIcon.addEventListener("click", () => {
  if (window.innerWidth > 900) {
    sharePopUp.classList.toggle("d-none");
  } else {
    socialElement.classList.toggle("d-none");
    sharePopUpMobile.classList.toggle("d-none");
  }
});

// listen for clicks on the share icon contained within the mobile popup element, and handle the event
shareIconPopup.addEventListener("click", () => {
  socialElement.classList.toggle("d-none");
  sharePopUpMobile.classList.toggle("d-none");
});

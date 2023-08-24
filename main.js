const navmob = document.querySelector(".nav");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    navmob.classList.toggle("nav--open");
    hamburger.classList.toggle("hamburger--open");
});

navmob.addEventListener("click", () => {
    navmob.classList.remove("nav--open");
    hamburger.classList.remove("hamburger--open");
});
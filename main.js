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

const body = document.querySelector('body');
const readmore = document.querySelector('.btn-read-on');



readmore.addEventListener('click', ()=>{
    const popup = document.createElement('section');
    popup.className = "popwin";
    const popcontent = document.createElement('div');
    popcontent.className = "popcontent";
    popcontent.innerHTML = `<button type="button" class="close">close</button>
    <h1>
    The project office Finalized the following Projects...
        The project office Finalized the following Projects...
        The project office Finalized the following Projects...
        The project office Finalized the following Projects...
        The project office Finalized the following Projects...
        The project office Finalized the following Projects...
        The project office Finalized the following Projects...
        The project office Finalized the following Projects...
        The project office Finalized the following Projects...
        The project office Finalized the following Projects...
        The project office Finalized the following Projects....</h1>`;
           body.appendChild(popup);
popup.appendChild(popcontent);

const close= document.querySelector('.close');
close.addEventListener('click', ()=> {
   body.removeChild(popup,popcontent);

})


})



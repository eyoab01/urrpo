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
    popup.innerHTML =`<img class="close" width="30" height="30" src="https://img.icons8.com/office/30/close-window--v1.png" alt="close-window--v1"/> `
    popcontent.innerHTML = ` 
    <h1>
    Lease Information Management system</h1>
    <p>URRPO Lease Information Management system development
     is in progressURRPO Lease Information Management system development URRPO Lease Information Management system development
     is in progressURRPO Lease Information Management systis in progress</p>`;
           body.appendChild(popup);
popup.appendChild(popcontent);

const close= document.querySelector('.close');
close.addEventListener('click', ()=> {
   body.removeChild(popup,popcontent);

})


})



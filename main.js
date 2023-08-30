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
        const readmore = document.querySelector('.btn-read-on-1');
        const readmore2 = document.querySelector('.btn-read-on-2');
        const readmore3 = document.querySelector('.btn-read-on-3');

        //first button

        readmore.addEventListener('click', ()=>{
            const popup = document.createElement('section');
            popup.className = "popwin";
            const popcontent = document.createElement('div');
            popcontent.className = "popcontent";
            popup.innerHTML =`<img class="close" width="30" height="30" src="https://img.icons8.com/office/30/close-window--v1.png" alt="close-window--v1"/> `
            popcontent.innerHTML=`<h1>
            Project status</h1>
            <p>
            <ul>Project Name: Lease Information Management system
            Client: Urban revenue reform project office
            Contractor:Bahirdar university
            Date: 07/20/2023
            <ul>
            </p>`;
            body.appendChild(popup);
            popup.appendChild(popcontent);
            const close= document.querySelector('.close');
            close.addEventListener('click', ()=> {
            body.removeChild(popup);

        })

        })


        readmore2.addEventListener('click', ()=>{
            const popup = document.createElement('section');
            popup.className = "popwin";
            const popcontenttwo = document.createElement('div');
            popcontenttwo.className = "poptwo";
            popup.innerHTML =`<img class="close" width="30" height="30" src="https://img.icons8.com/office/30/close-window--v1.png" alt="close-window--v1"/> `
            popcontenttwo.innerHTML=`<h1>
            Project status</h1>
            <p><ul>Contract Name: Capacity building training and assessment
            Client: Urban revenue reform project office
            Contractor: Bahirdar university, Diredawa university, civil service university, ambo university
            Date: 07/20/2023</ul>
            
             </p>`;
            body.appendChild(popup);
            popup.appendChild(popcontenttwo);
            const close= document.querySelector('.close');
            close.addEventListener('click', ()=> {
            body.removeChild(popup,popcontenttwo);

        })

        })

        readmore3.addEventListener('click', ()=>{
            const popup = document.createElement('section');
            popup.className = "popwin";
            const popcontentthree = document.createElement('div');
            popcontentthree.className = "popthree";
            popup.innerHTML =`<img class="close" width="30" height="30" src="https://img.icons8.com/office/30/close-window--v1.png" alt="close-window--v1"/> `
            popcontentthree.innerHTML=`
            <p><h1>
            Project status</h1>
            <p><ul>Contract Name:Property valuation system
            Client: Urban revenue reform project office
            Contractor: SPARC india inc.
            Date: 07/20/2017</ul></p>`;
            body.appendChild(popup);
            popup.appendChild(popcontentthree);
            const close= document.querySelector('.close');
            close.addEventListener('click', ()=> {
            body.removeChild(popup);

         })
        })

       
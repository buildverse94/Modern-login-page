const card = 
document.querySelector(".container");

document.addEventListener("mousemove", (e) => {
    let x = 
    (window.innerWidth/2 - e.clientX)/40;

    let y = 
    (window.innerHeight/2 - e.clientY)/40;

    card.style.transform = 
    `rotateY(${x}deg) rotateX(${-y}deg)`;
});

document.addEventListener("mouseleave",()=> {
    card.style.transform = 
    "rotateY(0deg) rotateX(0deg)";
});

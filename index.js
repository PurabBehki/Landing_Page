const containerel=document.querySelector(".container");

const leftel=document.querySelector(".split-left");
const rightel=document.querySelector(".split-right");

leftel.addEventListener("mouseenter",()=>{
    containerel.classList.add("active-left");
});

leftel.addEventListener("mouseleave",()=>{
    containerel.classList.remove("active-left");
});

rightel.addEventListener("mouseenter",()=>{
    containerel.classList.add("active-right");
});

leftel.addEventListener("mouseleave",()=>{
    containerel.classList.remove("active-right");
});

const macbtn=document.getElementById("mac-btn");
const winbtn=document.getElementById("win-btn");

macbtn.addEventListener("click",()=>{
    window.open("https://www.apple.com/mac/", "_blank");
});

winbtn.addEventListener("click",()=>{
    window.open("https://www.microsoft.com/surface", "_blank");
});
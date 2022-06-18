// responsive menu 
const mobile_Nav = document.querySelector(".mobile-navbar, .about-nav")
const headerElem = document.querySelector(".header")

mobile_Nav.addEventListener("click", () =>{
  headerElem.classList.toggle("active");
})
 
// swiper code 
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// portfolio Btn Filter 
const port_btn = document.querySelector(".port-btn")
const p_btn = document.querySelectorAll(".p-btn")
const p_img = document.querySelectorAll(".img-overlay")

port_btn.addEventListener("click", (e) =>{
    const p_btn_clicked = e.target;
    
    if (!p_btn_clicked.classList.contains("p-btn")) return;

    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

    p_btn_clicked.classList.add("p-btn-active");

    const btn_num = p_btn_clicked.dataset.btnNum;

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img.forEach((curElem) => curElem.classList.add("p-image-not-active"))
    img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"))
})


  // Scroll To Top Button
const heroSection = document.querySelector(".hero-section")  
const footerElem = document.querySelector(".footer")  

const scroollElement = document.createElement("div");  
scroollElement.classList.add("scrollTop-style");

scroollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;
footerElem.after(scroollElement);

const scrollTop = () =>{
   heroSection.scrollIntoView({behavior: "smooth"});
};
scroollElement  .addEventListener("click", scrollTop)

// Annimate Count Number
const countNum = document.querySelectorAll(".count-number")
const speed = 200;

countNum.forEach((curElem) =>{
  const updateNum = () =>{
     const targetNum = parseInt(curElem.dataset.num);
     const initialNum = parseInt(curElem.innerText);
     const incrementNum = Math.trunc(targetNum/speed);

     if(initialNum < targetNum){
       curElem.innerText = `${initialNum + incrementNum}+`;
       setTimeout(updateNum, 10);
     }
  };
  updateNum();
})





  
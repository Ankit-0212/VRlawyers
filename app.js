

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".image-slider");
const contents = document.querySelectorAll(".content");

var sliderNav = function (index) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  slides.forEach((slides) => {
    slides.classList.remove("active");
  });
  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[index].classList.add("active");
  slides[index].classList.add("active");
  contents[index].classList.add("active");
};

let i = 0;
setInterval(function () {
  if (i == 4) {
    i = 0;
  } else {
    i = i + 1;
    if (i == 4) {
      i = 0;
    }
  }
  sliderNav(i);
}, 3000);
btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});



const mainMenu=document.querySelector('.links');
const closeMenu=document.querySelector('.closemenu');
const openMenu=document.querySelector('.openMenu');

openMenu.addEventListener('click',Show);
closeMenu.addEventListener('click',Close);
function Show(){
  mainMenu.style.display='flex';
  mainMenu.style.top='0';
}
function Close(){
  
  mainMenu.style.top='-120%';
}
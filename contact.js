

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



const mainMenu = document.querySelector('.links');
      const closeMenu = document.querySelector('.closemenu');
      const openMenu = document.querySelector('.openMenu');

      openMenu.addEventListener('click', Show);
      closeMenu.addEventListener('click', Close);
      function Show() {
        mainMenu.style.display = 'flex';
        mainMenu.style.top = '0';
      }
      function Close() {

        mainMenu.style.top = '-120%';
      }
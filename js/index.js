let elementList = document.querySelector(".menu-icon");
const elementUl = document.querySelector("nav .nav__menu");
let menu_status = false;

elementList.addEventListener("click", () => {
  if (menu_status == false) {
    /*===== MENU SHOW =====*/
    elementUl.classList.add("show-menu");
    elementList.classList.add("list");
    menu_status = true;
  } else if (menu_status == true) {
    /*===== MENU Close =====*/
    elementUl.classList.remove("show-menu");
    elementList.classList.remove("list");
    menu_status = false;
  }
});

//
let box = document.querySelectorAll(".box");
let j = false;
for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", () => {
    for (let i = 0; i < box.length; i++) {
      box[i].classList.remove("active");
    }
    box[i].classList.add("active");
  });
}

// what year
const spanYear = document.querySelector("footer .container .what_year ");
let dateNow = new Date();
spanYear.innerHTML = `${dateNow.getFullYear()}`;

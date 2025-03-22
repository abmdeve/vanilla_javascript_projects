/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== SHOW CART ===============*/
// APRES AVOIR IMPLEMENTER LE SCROLL
const cart = document.getElementById("cart"),
  cartShop = document.getElementById("cart-shop"),
  cartClose = document.getElementById("cart-close");

/*===== CART SHOW =====*/
/* Validate if constant exists */
if (cartShop) {
  cartShop.addEventListener("click", () => {
    cart.classList.add("show-cart");
  });
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if (cartClose) {
  cartClose.addEventListener("click", () => {
    cart.classList.remove("show-cart");
  });
}

/*=============== SHOW LOGIN ===============*/
const login = document.getElementById("login"),
  loginButton = document.getElementById("login-button"),
  loginClose = document.getElementById("login-close");

/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
if (loginButton) {
  loginButton.addEventListener("click", () => {
    login.classList.add("show-login");
  });
}

/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */
if (loginClose) {
  loginClose.addEventListener("click", () => {
    login.classList.remove("show-login");
  });
}

/*=============== HOME SWIPER ===============*/
var homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, and the scroll-header class to the header tag
  if (scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== NEW SWIPER ===============*/
var homeSwiper = new Swiper(".new-swiper", {
  spaceBetween: 16,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
});

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to a tag with the scroll top
  // class
  if (scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== LIGHT BOX ===============*/

/*=============== QUESTIONS ACCORDION ===============*/

/*=============== STYLE SWITCHER ===============*/

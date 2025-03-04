const cartContainer = document.querySelector("cart-container");

eventListeners();

// ALL EVEN LISTENERS
function eventListeners() {
  // TOGGLE NAV BAR WHEN TOGGLE BUTTON IS CLICKED

  document.querySelector(".navbar-toggler").addEventListener("click", () => {
    document.querySelector("navbar-collapse").classList.toggle("show-navbar");
  });

  //   SHOW / HIDE CART CONTAINER

  document.getElementById("cart-btn").addEventListener("click", () => {
    cartContainer.classList.toggle("show-cart-container");
  });
}

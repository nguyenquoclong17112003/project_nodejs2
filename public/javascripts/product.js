// ! Order
function order() {
  const btnOrder = document.querySelectorAll(".content__home-products-btn");
  btnOrder.forEach(function (el, index) {
    el.onclick = function (e) {
      const btnItem = e.target;
      const abc = document.querySelector(".header__navbar-form-cart");
      const product = btnItem.parentElement;
      const productImg = product.querySelector("img").src;
      const productName = product.querySelector(
        ".content__home-products-title"
      ).innerText;
      const productPrice = product.querySelector(
        ".content__home-products-price-sale"
      ).innerText;
      abc.classList.remove("co-cart", "no-cart");

      addCart(productName, productPrice, productImg);
    };
  });
}

order();

function addCart(productName, productPrice, productImg) {
  const addCart = document.createElement("div");
  addCart.classList.add("header__navbar-there-are-start");
  const trcontent = ` 
    <img
      src="${productImg}"
      alt=""
      class="header__navbar-there-are-img"
    />
    <div class="header__navbar-there-are-content">
      <h3 class="header__navbar-there-are-title">
        ${productName}
      </h3>
      <p class="header__navbar-there-are-number">
        1 x
        <span class="header__navbar-there-are-price"
          >${productPrice}</span>
          <sup class="sup-2">đ</sup>
        <span class="header__navbar-clear">Xóa</span> 
      </p>
    </div>
  `;
  addCart.innerHTML = trcontent;
  const cartTable = document.querySelector(
    ".header__navbar-there-are-start-body"
  );
  cartTable.classList.add("open");
  cartTable.append(addCart);

  cartTotal();
}

// ! Total Price

function cartTotal() {
  const cartItem = document.querySelectorAll(".header__navbar-there-are-start");
  let total = 0;
  for (let i = 0; i < cartItem.length; i++) {
    const productPrice = cartItem[i].querySelector(
      ".header__navbar-there-are-price"
    ).innerHTML;
    totalA = productPrice * 1000;
    total = total + totalA;
    console.log(totalA);
    totalD = total.toLocaleString("de-DE");
  }

  const cartTotalPrice = document.querySelector(".header__navbar-total-price");
  cartTotalPrice.innerHTML = totalD;
}

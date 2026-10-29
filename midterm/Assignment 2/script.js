const maxTimes = 3;
let cart = [];

const badge = document.getElementById("cartBadge");
const cartIcon = document.querySelector(".cart-icon");
const miniCart = document.getElementById("miniCart");
const miniList = document.getElementById("miniList");
const miniTotal = document.getElementById("miniTotal");
const addButtons = document.querySelectorAll(".add-btn");

function countOf(name) {
  return cart.filter(function (item) {
    return item.name === name;
  }).length;
}

function showCart() {
  badge.textContent = cart.length;

  miniList.innerHTML = "";
  if (cart.length === 0) {
    miniList.innerHTML = '<li class="mini-empty">Your cart is empty</li>';
  }
  cart.forEach(function (item, index) {
    const li = document.createElement("li");
    li.innerHTML =
      "<span>" +
      item.name +
      " - USD " +
      item.price.toFixed(2) +
      "</span>" +
      '<button type="button" class="remove-btn" data-index="' +
      index +
      '">Remove</button>';
    miniList.appendChild(li);
  });

  const total = cart.reduce(function (sum, item) {
    return sum + item.price;
  }, 0);
  miniTotal.textContent = "USD " + total.toFixed(2);

  addButtons.forEach(function (btn) {
    const name = btn
      .closest(".big-card")
      .querySelector(".card-name")
      .textContent.trim();
    if (countOf(name) >= maxTimes) {
      btn.textContent = "Limit reached";
      btn.disabled = true;
    } else {
      btn.textContent = "ADD TO CART";
      btn.disabled = false;
    }
  });
}

addButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const card = btn.closest(".big-card");
    const name = card.querySelector(".card-name").textContent.trim();
    const price = parseFloat(
      card.querySelector(".card-price").textContent.replace("USD", ""),
    );
    cart.push({ name: name, price: price });
    showCart();
  });
});

miniList.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove-btn")) {
    cart.splice(Number(e.target.dataset.index), 1);
    showCart();
  }
});

cartIcon.addEventListener("click", function (e) {
  e.preventDefault();
  miniCart.classList.toggle("open");
});

showCart();

function init() {
  var basket = document.getElementById("basket");
  basket.innerHTML = getEmptyBasketHtml();
  renderMenu();
}

function renderMenu() {
  const menu = document.getElementById("menu");

  menu.innerHTML = `<h2 class="category">Burger</h2>`;
  menu.innerHTML += menuItems
    .map((menuItem) => getMenuItemHtml(menuItem))
    .join("");
}

function addToCart(id) {
  const menuItem = cart.find((item) => item.id === id);

  if (menuItem) {
    menuItem.quantity++;
  } else {
    cart.push({ id: id, quantity: 1 });
  }

  updateUI();
}

function updateUI() {
  renderMenu();
  renderCart();
}

function renderCart() {}

function changeButtonText(id) {
  const menuItem = cart.find((cartItem) => cartItem.id === id);

  if (!menuItem || menuItem.quantity === 0) {
    return "Add to basket";
  } else {
    return "Added " + menuItem.quantity;
  }
}

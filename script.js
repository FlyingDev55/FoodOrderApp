function init() {
  setEventListeners();
  renderMenu();
  renderCart();
}

function renderMenu() {
  const menu = document.getElementById("menu");

  menu.innerHTML = `<h2 class="category">Burger</h2>`;
  menu.innerHTML += menuItems
    .map((menuItem) => getMenuItemHtml(menuItem))
    .join("");
}

function renderMenuItemButton(id) {
  document.getElementById(`menu-item-btn-${id}`).innerHTML = getButtonText(id);
}

function addToCart(id) {
  const menuItem = cart.find((item) => item.id === id);

  if (menuItem) {
    menuItem.quantity++;
  } else {
    cart.push({ id: id, quantity: 1 });
  }

  updateUI(id);
}

function getButtonText(id) {
  const menuItem = cart.find((cartItem) => cartItem.id === id);

  if (!menuItem || menuItem.quantity === 0) {
    return "Add to basket";
  } else {
    return "Added " + menuItem.quantity;
  }
}

function decrease(id) {
  const cartItem = cart.find((cartItem) => cartItem.id == id);

  if (!cartItem) return;

  cartItem.quantity--;

  if (cartItem.quantity <= 0) {
    cart = cart.filter((cartItem) => cartItem.id !== id);
  }

  updateUI(id);
}

function removeCartItem(id) {
  const cartItem = cart.find((cartItem) => cartItem.id == id);

  if (!cartItem) return;

  cart = cart.filter((cartItem) => cartItem.id !== id);
  updateUI(id);
}

function updateUI(id) {
  renderMenuItemButton(id);
  renderCart();
}

function renderCart() {
  resetBasketHtml();
  const basketItems = document.getElementById("basket-items");
  const basketTotal = document.getElementById("basket-total");

  if (cart.length === 0) {
    document.getElementById("basket").innerHTML = getEmptyBasketHtml();
    return;
  }

  basketItems.innerHTML = cart
    .map((cartItem) => {
      const menuItem = menuItems.find((menuItem) => menuItem.id == cartItem.id);

      return getBasketItemHtml(menuItem, cartItem);
    })
    .join("");

  let subtotal = calculateSubTotal();
  let fee = calculateFee(subtotal);
  let total = calculateTotal(subtotal, fee);

  basketTotal.innerHTML = getBasketTotalHtml(subtotal, fee, total);
}

function resetBasketHtml() {
  const basket = document.getElementById("basket");
  basket.innerHTML = `<h2 class="basket-title">Your Basket</h2>
                      <div id="basket-items"></div>
                      <div id="basket-total"></div>`;
}

function calculateSubTotal() {
  let subTotal = 0;

  for (let index = 0; index < cart.length; index++) {
    const menuItem = menuItems.find(
      (menuItem) => menuItem.id == cart[index].id,
    );

    subTotal += menuItem.price * cart[index].quantity;
  }

  return subTotal;
}

function calculateFee(subTotal) {
  return subTotal / 10;
}

function calculateTotal(subTotal, fee) {
  return subTotal + fee;
}

function toggleBasket() {
  const basket = document.getElementById("basket");
  basket.classList.toggle("hidden");
}

function toggleTrashButton() {
  const trashButton = document.getElementById("trash-button");
  trashButton.classList.toggle("hidden");
}

function showOrderedDialog() {
  let dialog = document.getElementById("ordered-dialog");
  let basket = document.getElementById("basket");
  basket.classList.add("hidden");
  dialog.showModal();
  document.body.style.overflow = "hidden";
}

function closeOrderedDialog() {
  let dialog = document.getElementById("ordered-dialog");
  let basket = document.getElementById("basket");
  basket.classList.remove("hidden");
  dialog.close();
  document.body.style.overflow = "visible";
  updateUI();
}

function order() {
  showOrderedDialog();
  cart = [];
}

function setEventListeners() {
  let dialog = document.getElementById("ordered-dialog");
  dialog.addEventListener("click", (event) => {
    if (event.target == dialog) {
      closeOrderedDialog();
    }
  });
}

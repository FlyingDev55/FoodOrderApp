function getMenuItemHtml(menuItem) {
  return `<div class="menu-item">
              <img class="menu-img" src="${menuItem.image}" />
              <div class="menu-item__content">
                <div class="menu-item__header">
                  <h3 class="menu-item__title">${menuItem.name}</h3>
                  <span class="menu-item__price">${menuItem.price.toLocaleString(
                    "de-DE",
                    {
                      style: "currency",
                      currency: "EUR",
                    },
                  )}</span>
                </div>
                <p class="menu-item__description">
                  ${menuItem.description}
                </p>
                <button class="menu-item__button" onClick="addToCart(${menuItem.id})">
                  ${changeButtonText(menuItem.id)}
                </button>
              </div>
            </div>`;
}

function getEmptyBasketHtml() {
  return `<h2 class="basket-title">Your Basket</h2>
          <div class="basket-emptynote">
            <p>Nothing here yet.</p>
            <p>Go ahead and choose something delicious!</p>
          </div>
          <img class="shopping-cart-img" src="assets/icons/shoppingcart.svg"/>`;
}

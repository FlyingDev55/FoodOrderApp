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
          <img class="shopping-cart-img" src="assets/icons/shoppingcart.svg"/>
          <div id="basket-items" class="hidden"></div>
          `;
}

function getBasketItemHtml(menuItem, cartItem) {
  return `
        <div class="basket-item-container">
          <div class="basket-item">
            <button id="trash-button" class="trash-button-absolute hidden">
              <img class="trash-icon" src="assets/icons/delete.png"/>
            </button>
            <p class="basket-item__title">${menuItem.name}</p>
            <div class="basket-item-price-container">

              <div class="basket-item__amount">
                <button class="btn-cart-icon" onClick="decrease(${cartItem.id})">${
                  cartItem.quantity === 1
                    ? `<img class="trash-icon" src="assets/icons/delete.png"/>`
                    : `<img class="minus-icon" src="assets/icons/minus.png"/>`
                }</button>
                <span>&thinsp;${cartItem.quantity}&thinsp;</span>
                <button class="btn-cart-icon" onClick="addToCart(${cartItem.id})"><img class="plus-icon" src="assets/icons/plus.png"/></button>
              </div>

              <span class="basket-item__price">${(
                menuItem.price * cartItem.quantity
              ).toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR",
              })}</span>
              
            </div>
          </div>
        </div>
            `;
}

function getBasketTotalHtml(subtotal, fee, total) {
  return `<div class="basket-subtotal-container mg-bottom">
              <span class="basket-subtotal__title">Subtotal</span>
              <span class="basket-subtotal__price">${subtotal.toLocaleString(
                "de-DE",
                {
                  style: "currency",
                  currency: "EUR",
                },
              )}</span>
            </div>

            <div class="basket-deliver-container mg-bottom">
              <span class="basket-deliver__title">Delivery fee</span>
              <span class="basket-deliver__price">${fee.toLocaleString(
                "de-DE",
                {
                  style: "currency",
                  currency: "EUR",
                },
              )}</span>
            </div>
            <div class="break-line mg-bottom"></div>
            <div class="basket-total-container mg-bottom">
              <span class="basket-total__title">Total</span>
              <span class="basket-total__price">${total.toLocaleString(
                "de-DE",
                {
                  style: "currency",
                  currency: "EUR",
                },
              )}</span>
            </div>

            <div class="basket-button-container">
              <button class="basket-button" onClick="order()">Buy now (${total.toLocaleString(
                "de-DE",
                {
                  style: "currency",
                  currency: "EUR",
                },
              )})</button>
            </div>`;
}

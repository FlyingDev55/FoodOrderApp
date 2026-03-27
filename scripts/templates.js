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
            <p class="basket-item__title">${menuItem.name}</p>
            <div class="basket-item-price-container">

              <div class="basket-item__amount">
                <button onClick="decrease(${cartItem.id})">${
                  cartItem.quantity === 1
                    ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6C4.71667 6 4.47917 5.90417 4.2875 5.7125C4.09583 5.52083 4 5.28333 4 5C4 4.71667 4.09583 4.47917 4.2875 4.2875C4.47917 4.09583 4.71667 4 5 4H9C9 3.71667 9.09583 3.47917 9.2875 3.2875C9.47917 3.09583 9.71667 3 10 3H14C14.2833 3 14.5208 3.09583 14.7125 3.2875C14.9042 3.47917 15 3.71667 15 4H19C19.2833 4 19.5208 4.09583 19.7125 4.2875C19.9042 4.47917 20 4.71667 20 5C20 5.28333 19.9042 5.52083 19.7125 5.7125C19.5208 5.90417 19.2833 6 19 6V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM10 17C10.2833 17 10.5208 16.9042 10.7125 16.7125C10.9042 16.5208 11 16.2833 11 16V9C11 8.71667 10.9042 8.47917 10.7125 8.2875C10.5208 8.09583 10.2833 8 10 8C9.71667 8 9.47917 8.09583 9.2875 8.2875C9.09583 8.47917 9 8.71667 9 9V16C9 16.2833 9.09583 16.5208 9.2875 16.7125C9.47917 16.9042 9.71667 17 10 17ZM14 17C14.2833 17 14.5208 16.9042 14.7125 16.7125C14.9042 16.5208 15 16.2833 15 16V9C15 8.71667 14.9042 8.47917 14.7125 8.2875C14.5208 8.09583 14.2833 8 14 8C13.7167 8 13.4792 8.09583 13.2875 8.2875C13.0958 8.47917 13 8.71667 13 9V16C13 16.2833 13.0958 16.5208 13.2875 16.7125C13.4792 16.9042 13.7167 17 14 17Z" fill="#363534"/>
                      </svg>`
                    : `-`
                }</button>
                <span>${cartItem.quantity}</span>
                <button onClick="addToCart(${cartItem.id})">+</button>
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
  return `<div class="basket-subtotal-container">
              <span class="basket-subtotal__title">Subtotal</span>
              <span class="basket-subtotal__price">${subtotal.toLocaleString(
                "de-DE",
                {
                  style: "currency",
                  currency: "EUR",
                },
              )}</span>
            </div>

            <div class="basket-deliver-container">
              <span class="basket-deliver__title">Delivery fee</span>
              <span class="basket-deliver__price">${fee.toLocaleString(
                "de-DE",
                {
                  style: "currency",
                  currency: "EUR",
                },
              )}</span>
            </div>
            <div class="break-line"></div>
            <div class="basket-total-container">
              <span class="basket-total__title">Total</span>
              <span class="basket-total__price">${total.toLocaleString(
                "de-DE",
                {
                  style: "currency",
                  currency: "EUR",
                },
              )}$</span>
            </div>
            <button class="basket-button" onClick="order()">Buy now (${total.toLocaleString(
              "de-DE",
              {
                style: "currency",
                currency: "EUR",
              },
            )})</button>`;
}

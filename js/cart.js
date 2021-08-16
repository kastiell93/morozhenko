let goodsList = document.querySelector(".goods-list");
let goods = document.querySelectorAll(".goods-list li");
let goodsQuantity = goods.length;
let checkoutButton = document.querySelector(".checkout");
let goodDeleteButtons = document.querySelectorAll(".goods-list li button");
let priceSum = document.querySelector(".cart-popup__price");
let emptyCartMessage = document.createElement("p");
emptyCartMessage.textContent = "Корзина пуста. Закажите что-нибудь";
emptyCartMessage.classList.add("empty-cart--message");

for (let i = 0; i < goodDeleteButtons.length; i++) {
  goodDeleteButtons[i].addEventListener("click", function () {
    goods[i].remove();
    goodsQuantity--;
    function summary() {
      let sum;
      let price = document.querySelectorAll(".item-price");
      for (let i = 0; i < price.length; i++) {
        sum += price[i].textContent;
        sum = parseInt(sum.match(/\d+/));
        return sum;
      }
      if (goodsQuantity == 0 || sum === undefined) {
        goodsList.appendChild(emptyCartMessage);
        checkoutButton.disabled = true;
        return 0;
      }
    }
    priceSum.textContent = "Итого: " + summary() + " руб.";
  });
}

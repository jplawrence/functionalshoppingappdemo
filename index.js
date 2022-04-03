let count = document.getElementById("count")
let addBtn = document.getElementById("add-btn")
let subtractBtn = document.getElementById("subtract-btn")
let cartNo = document.getElementById("cart-amount")
let addToCartBtn = document.getElementById("purchase-btn")
let cartAmount = 0

function subtract() {
    if (cartAmount != 0) {
        cartAmount -= 1
        count.textContent = cartAmount
    }
    else {
        return
    }
}
function add() {
    cartAmount += 1
    count.textContent = cartAmount
}
function addToCart() {
    if (cartAmount != 0) {
        cartNo.style.display = "block";
        cartNo.textContent = cartAmount;
    }
    else {
        return
    }
}
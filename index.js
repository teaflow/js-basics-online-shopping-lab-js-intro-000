var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100);
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
var itemAndPrices = [];
  if(cart.length === 0) {
    return console.log("Your shopping cart is empty.")
}
    for(var i = 0; i < cart.length; i++) {
    var itemAndPrice = cart[i]
    var item = Object.keys(itemAndPrice)[0]
    var price = itemAndPrice[item]

    itemAndPrices.push(`${item} at \$${price}`)

  }

console.log(`In your cart, you have ${itemAndPrices.join(', ')}.`)

}

function removeFromCart(item) {

var itemInCart = false;

  for(var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item) ) {
      cart = cart.slice(0, i)
      itemInCart = true;
    }

    }
    if(!itemInCart) {
       console.log("That item is not in your cart.")
  }
  return cart;
}

function placeOrder(cardNumber) {
  if(!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }

  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
cart = [];
  }

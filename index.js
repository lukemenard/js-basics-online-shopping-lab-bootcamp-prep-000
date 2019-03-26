var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {'itemName': [item], 'itemPrice': Math.floor(Math.random() * 100)}
  cart.push(newItem)
  return(`${item} has been added to your cart.`)
}

function viewCart() {
  
  if (cart.length < 1) {
    return 'Your shopping cart is empty.'
  }
  
  else {
  const nameAndPrice = []
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      nameAndPrice.push(item + "at $" + cart[i][item])
    }
  }
  }
  return "In your cart, you have " + nameAndPrice + "."
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

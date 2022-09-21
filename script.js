/*
// Importing module
console.log('importing modules');
// import { addToCart } from './shoppingCart.js';
// import { totalPrice as price, quantity } from './shoppingCart.js';
// addToCart('bread', 2);
// console.log(price, quantity);

// console.log('Importing Module');
// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('Oranges', 4);
// console.log(ShoppingCart.totalPrice);

// importing default
import add from './shoppingCart.js';
import { cart } from './shoppingCart.js';
add('pizza', 9);
add('bread', 2);
add('orange', 5);
console.log(cart); // Imports are live connections

*/

// The previous module pattern
const ShoppingCart2 = (function () {
  const cart = [];
  const totalPrice = 20;
  const totalQuantity = 200;
  const shippingCost = 500;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(quantity, product);
  };

  const orderStock = function (product, quantity) {
    console.log(quantity, product);
  };

  return {
    cart,
    totalPrice,
    totalQuantity,
    addToCart,
  };
})();

console.log(ShoppingCart2);
ShoppingCart2.addToCart('bread', 8);
console.log(ShoppingCart2.cart);
// console.log(ShoppingCart2.shopStuffs);

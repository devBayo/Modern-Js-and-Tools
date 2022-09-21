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
console.log(cart);

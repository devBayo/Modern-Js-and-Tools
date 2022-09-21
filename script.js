// Importing module
// import { addToCart } from './shoppingCart.js';
// import { totalPrice as price, quantity } from './shoppingCart.js';
// addToCart('bread', 2);
// console.log(price, quantity);

console.log('Importing Module');
import * as ShoppingCart from './shoppingCart.js';

ShoppingCart.addToCart('Oranges', 4);
console.log(ShoppingCart.totalPrice);

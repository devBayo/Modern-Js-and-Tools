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

/*
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
*/

/*
Other module patterns
- AMD modules
- CommonJS modules
*/

// Common JS Modules (doesn't work in normal javascript, it's meant for node)

// Export
// export.addToCart = function (product, quantity) {
// cart.push({ product, quantity });
// console.log(`${quantity} ${product} added to cart`);
// };

/// Import
// const { addToCart } = require('./shoppingCart.js');

// Working With lodash
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es/cloneDeep ';

const state = {
  user: { isUser: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.isUser = false;

console.log(stateClone);
console.log(stateDeepClone);

// Bundling with parcel

// Keeps the brower's state
// if (module.hot) {
//   module.hot.accept();
// }
module.hot?.accept();

/*
// Configuring babel and polifiling
class Person {
  greeting = ' Hello ';
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(this.name + this.greeting);
  }
}

const bayo = new Person('bayo');
bayo.greet();

cart.find(el => el.quantity > 2);
Promise.resolve('Test').then(x => console.log(x));

import 'core-js/stable ';

// Polifiling async functions
import 'regenerator-runtime/runtime';

*/

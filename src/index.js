import  createItem  from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWishlist = [];

console.log("welcome to the shopee");

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels Lamborghini", 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, 1);

await cartService.displaycart(myCart);

// await cartService.deleteItem(myCart, item2.name);

await cartService.calculateTotal(myCart);
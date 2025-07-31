async function addItem(userCart, item) {
    userCart.push(item);
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1) {
        userCart.splice(index, 1);
    }
}

async function removeItem(userCart, index) {
    const deleteItem = index -1;

    if(index >= 0 && index < userCart.length) {
        userCart.splice(index, 1);
    }
}

async function calculateTotal(userCart) {
    console.log("Shopee cart total is "); 
    
    const result = userCart.reduce((total, item)=> total + item.subtotal(), 0);
    console.log(`\n total r$ ${result}`);
}

async function displaycart(userCart) {
    console.log("shopee car list")
    userCart.forEach((item, index) => { 
        console.log(`${index+1}. ${item.name} - r$ ${item.price} |
            ${item.quantity} | subtotal r$ ${item.subtotal()}`);
    });
}

export{
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displaycart
};
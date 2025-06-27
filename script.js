const productName = document.getElementById('product-name');
const productPrice = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');


let totalPrice = 0;
 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}

//add product button function
addProductButton.addEventListener('click', function() {
    if (!productName.checkValidity() || !productPrice.checkValidity()) {
    alert("Enter product and Price.")
    return;
}
const name = productName.value.trim();
const price = parseFloat(productPrice.value);
addProductToCart((name,price),productName.value = '', productPrice.value = '');

})


// Function for adding products and testing 
let cartList = []

function addProductToCart(name, price) {
const newItem = {
    name: name,
    price: parseFloat(price)

    
};
cartList.push(newItem);
renderProductToCart(newItem);
updateTotalPrice(newItem.price);

}

//Totaling cost, removebutton child to each item
function renderProductToCart(product) {
    
const listItem = document.createElement('li');
listItem.dataset.price = product.price;
listItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;


const removeBtn = document.createElement('button');
removeBtn.textContent = 'Remove'
removeBtn.addEventListener('click',removeItem);

listItem.appendChild(removeBtn);
cart.appendChild(listItem);
    
}

addProductToCart("Cat food", 9.00)
addProductToCart("Icecream", 6.38);
addProductToCart("soap", 3.00);
addProductToCart("cookies", 5.99);
addProductToCart("chips", 1.99);
addProductToCart("napkins", 2.50)

console.log(cartList);
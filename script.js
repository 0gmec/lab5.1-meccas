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
    
})


// Function for adding products and testing 
let productList = []

function addProductToList(name, price) {
const newProduct = {
    name: name,
    price: parseFloat(price)

    
};
productList.push(newProduct);
renderProductToList(newProduct);
updateTotalPrice(newProduct.price);

}

//Totaling cost, removebutton child 
function renderProductToList(product) {
    
const listItem = document.createElement('li');
listItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
listItem.dataset.price = product.price;

const removeBtn = document.createElement('button');
removeBtn.textContent = 'Remove'
removeBtn.addEventListener('click',removeItem);

listItem.appendChild(removeBtn);
cart.appendChild(listItem);
    
}

addProductToList("Cat food", 9.00)
addProductToList("Icecream", 6.38);
addProductToList("soap", 3.00);
addProductToList("cookies", 5.99);
addProductToList("chips", 1.99);
addProductToList("napkins", 2.50)

console.log(productList);
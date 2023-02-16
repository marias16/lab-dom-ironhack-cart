// ITERATION 1

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});


function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalValue = (price * quantity).toFixed(2);

  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = subtotalValue;
  return Number(subtotalValue);
}

function calculateAll() {
  // ITERATION 2
  const products = document.getElementsByClassName('product');
  let totalCost = 0;
  for(const productElem of products) {
    totalCost += updateSubtotal(productElem);
    
  }
  totalCost = totalCost.toFixed(2);
  // ITERATION 3
  const totalShow = document.querySelector('#total-value span')
  totalShow.innerHTML = totalCost;
  return totalCost;
}

// ITERATION 4
const removeBtns = document.querySelectorAll('.btn-remove')
for(btn of removeBtns) {
  btn.addEventListener('click', removeProduct);
}

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  //remove row 
  let tableBody = document.querySelector('tbody');
  let rowProduct = target.parentNode.parentNode;
  tableBody.removeChild(rowProduct);

  //remove price
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //we get the value of the two inputs
  let productName = document.querySelector("#product-name").value;
  let productPrice = document.querySelector("#product-price").value;
  
  //we clone the node tr class product and set the characteristics
  let rowProduct = document.querySelector(".product").cloneNode(true);
  rowProduct.querySelector(".name span").innerHTML = productName;
  rowProduct.querySelector(".price span").innerHTML = productPrice;
  rowProduct.querySelector(".quantity input").value = 0;

  //we append the node to the table
  document.querySelector("tbody").appendChild(rowProduct);

  //we reset the input at create product after appending
  document.querySelector("#product-price").value = 0;
  document.querySelector("#product-name").value = "";
}

let buttonCreate = document.querySelector("#create");

buttonCreate.addEventListener('click', createProduct)

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

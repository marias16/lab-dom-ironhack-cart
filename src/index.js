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
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

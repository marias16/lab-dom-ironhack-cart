// ITERATION 1

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

const product = document.querySelector('.product')

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
  // ITERATION 3
  const totalShow = document.querySelector('#total-value span')
  totalShow.innerHTML = totalCost;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
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

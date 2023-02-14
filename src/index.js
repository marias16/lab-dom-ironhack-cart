// ITERATION 1

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

const product = document.querySelector('.product')

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = document.querySelector('.price span');
  const quantity = document.querySelector('input');
  const priceValue = Number(price.innerHTML);
  const quantityValue = Number(quantity.value);
  const subtotalValue = (priceValue * quantityValue).toString();
  const subtotal = document.querySelector('.subtotal span')
  subtotal.innerHTML = subtotalValue;
  return subtotalValue;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product')
  let priceTotal = 0;
  for(const productElem of products) {
    updateSubtotal(productElem);
    console.log(updateSubtotal(productElem));
    priceTotal += updateSubtotal(productElem);
  }
  return priceTotal;
  // ITERATION 3
  //... your code goes here
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

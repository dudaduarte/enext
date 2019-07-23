const showProducts = document.querySelector('.showProducts');

function getOnApi() {
  fetch('https://www.enext.vtexcommercestable.com.br/api/catalog_system/pub/products/search')
    .then(response => response.json())
    .then(response => printScreen(response.items))
}

function printScreen(items) {
  const products = items[index];
  showProducts.innerHTML = template(products);
  index++
}

function template (products) {
  return `
  `
}
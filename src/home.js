document.addEventListener("DOMContentLoaded",() => {
const showProducts = document.querySelector('.showProducts');

function getOnApi() {
  fetch('https://www.enext.vtexcommercestable.com.br/api/catalog_system/pub/products/search')
    .then(response => response.json())
    .then(response => printScreen(response))
}

function printScreen(response) {
  response.map((products) => {
    showProducts.innerHTML += template(products);
  });
}

function template(products) {
  return `<div class="card" style="width: 18rem;">
  <img src="${products.items[0].images[0].imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <a href="${products.link}">
      <h5 class="card-title">${products.productName}</h5>
      <p class="card-text">${products.items[0].sellers[0].commertialOffer.Price}</p>
      <buton  id="wishlist" class="btn btn-primary" data-id="${products.productId}"><i class="fas fa-heart"></i></button>
    </a>
  </div>
  </div>`
}

getOnApi();

})
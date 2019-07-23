const showProducts = document.querySelector('.showProducts');

function getOnApi() {
  fetch('https://www.enext.vtexcommercestable.com.br/api/catalog_system/pub/products/search')
    .then(response => response.json())
    .then(response => printScreen(response.items))
}

function printScreen(items) {
  items.map((item) => {
    showProducts.innerHTML = template(item);
  });
}

function template(products) {
  return `<div class="card" style="width: 18rem;">
  <img src="${products.images[0].imagesUrl}" class="card-img-top" alt="...">
  <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
          card's content.</p>
      <a href="#" id="like" class="btn btn-primary">Like</a>
  </div>
  </div>`
}
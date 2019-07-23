document.addEventListener("DOMContentLoaded",() => {
  const showProducts = document.querySelector('.showProduct');
  
  function getOnApi() {
    fetch('https://www.enext.vtexcommercestable.com.br/api/catalog_system/pub/products/search')
      .then(response => response.json())
      .then(response => printScreen(response))
  }
  
  function printScreen(response) {
    response.filter((product) => {
      if (data-img-id || data-name-id === product.productId) {
        return
      }
      showProducts.innerHTML = template(product);
    });
  }
  
  function template(product) {
    return `<div class="card mb-3" style="max-width: 540px;">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="${product.items[0].images[0].imageUrl}" class="card-img" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${product.productName}</h5>
                    <p class="card-text">${product.items[0].sellers[0].commertialOffer.Price}</p>
                    <p class="card-text"><small class="text-muted">>${product.metaTagDescription}</small></p>
                    <a href="#" id="like" class="btn btn-primary" data-id="${product.productId}"><i class="fas fa-heart"></i></a>
                  </div>
                </div>
              </div>
            </div>`
  }  
  getOnApi();
  
  })
function getOnApi() {
    fetch('https://www.enext.vtexcommercestable.com.br/api/catalog_system/pub/products/search')
      .then(response => response.json())
      .then(response => { const products = response.map(response => response.items);
      });
  }
  getOnApi()
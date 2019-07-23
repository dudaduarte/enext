vtexid.start({
    returnUrl: '',
    userEmail: '',
    locale: 'pt-BR',
    forceReload: false
})


let button = document.querySelector('#wishlist');
button.addEventListener('click', (event) => {
  event.target.dataset.id
  console.log(event.target.dataset.id)
})

function showModal() {
  if (dataLayer.visitorLoginState === false){
        vtexid.start({
        returnUrl: '',
        userEmail: '',
        locale: 'pt-BR',
        forceReload: false
    })
  }
  else {
    // adiciona à wishlist
  }
} 


let apiProducts = require('https://www.enext.vtexcommercestable.com.br/api/catalog_system/pub/products/search')


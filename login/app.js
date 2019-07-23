vtexid.start({
    returnUrl: '',
    userEmail: '',
    locale: 'pt-BR',
    forceReload: false
})

let addWishList = document.getElementById('like')
addWishList.addEventListener('click', showModal)

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


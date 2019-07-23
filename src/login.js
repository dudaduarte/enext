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
  let userEmail = dataLayer[2].visitorContactInfo[0];
  let productId;

    fetch('https://www.enext.vtexcommercestable.com.br//api/dataentities/CL/search?email=dudammduarte@gmail.com&_fields=wishlistProducts')
      .then(response => response.json())
      .then(response => console.log(response))
      .then(
        fetch("https://enext.vtexcommercestable.com.br/api/dataentities/CL/documents", {
          body: "{\"email\": userEmail,\"wishlistProducts\": productId}",
          headers: {
            Accept: "application/vnd.vtex.ds.v10+json",
            "Content-Type": "application/json"
          },
          method: "PATCH"
        })
      )
      .then(resp => {
        console.log(resp);
      })
  }
} 

let apiProducts = require('https://www.enext.vtexcommercestable.com.br/api/catalog_system/pub/products/search')


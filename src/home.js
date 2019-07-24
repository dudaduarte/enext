document.addEventListener("DOMContentLoaded",() => {
  const showProducts = document.querySelector('.showProducts');
  let productsArr = [];
  let userEmail = null;
  getOnApi();
  
  async function userListener() {
    const userData = await fetch('/no-cache/profileSystem/getProfile');
    const userResponse = await userData.json();
    if(userResponse.IsUserDefined){
      userEmail = userResponse.Email;
      getUserData();
    }
  }
  userListener();
  function getOnApi() {
    fetch('https://www.enext.vtexcommercestable.com.br/api/catalog_system/pub/products/search')
      .then(response => response.json())
      .then(response => printScreen(response))
  }
  
  function printScreen(response) {
    response.map((products) => {
      showProducts.innerHTML += template(products);
    });
    const btnLike = document.querySelectorAll('.testebtn');
    test(btnLike);
  }
  
  function template(products,event) {
    return `<div class="card mx-5 mb-5 w-25">
              <a href="${products.link}">
                <img src="${products.items[0].images[0].imageUrl}" class="card-img-top border-bottom" alt="..." height="329" width="329">
              </a>
              <div class="card-body d-flex flex-row">
                <div>
                  <a href="${products.link}">
                    <p class="card-title text-dark">${products.productName}</p>
                  </a>
                  <p class="card-text text-dark">RS ${products.items[0].sellers[0].commertialOffer.Price}</p>
                </div>
                <div class="ml-auto">
                  <button id="wishlist" class="btn mr-auto" onclick="idLike(${products.productId})" data-id="${products.productId}"><i class="fas fa-heart"></i></button>
                </div>
              </div>
            </div>`
   }
   function test(btnLike) {
     for (btn of btnLike) {
       btn.addEventListener("click", event => {
         if (userEmail) {
           let productId = event.currentTarget.dataset.id;
           let productIndex = productsArr.indexOf(productId);
           if (productIndex === -1) {
             productsArr.push(productId);
           } else {
             productsArr.splice(productIndex);
           }
           let productsString = productsArr.join(",");
           patchNewData(productsString);
         } else {
           vtexid.start({
             returnUrl: "",
             userEmail: "",
             locale: "pt-BR",
             forceReload: true
           });
         }
       });
     }
   }
  async function getUserData() {
    const getResponse = await fetch(`https://www.enext.vtexcommercestable.com.br//api/dataentities/CL/search?email=${userEmail}&_fields=wishlistProducts`);
    const getResponseJson = await getResponse.json();
    productsArr = getResponseJson[0].wishlistProducts.split(',');
  }
  
  async function patchNewData(productsString) {
    const patchResponse = await fetch("https://enext.vtexcommercestable.com.br/api/dataentities/CL/documents", {
      body: JSON.stringify({
        "email": userEmail,
        "wishlistProducts": productsString
      }),
      headers: {
        Accept: "application/vnd.vtex.ds.v10+json",
        "Content-Type": "application/json"
      },
      method: "PATCH",
    });
    const patchResponseJson = await patchResponse.json();
  }
})
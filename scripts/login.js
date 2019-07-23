const endpointRegister = "https://www.enext.vtexcommercestable.com.br/api/catalog_system/pub/products/search/?fq=productId:2000001";
const btnLogin = document.querySelector("#btn-login");

btnLogin.addEventListener('click', () => {
  vtexid.start({

    returnUrl: '/',
  
    userEmail: '',
  
    locale: 'pt-BR',
  
    forceReload: false
  
  });
});
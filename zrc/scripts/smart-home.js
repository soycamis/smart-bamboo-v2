
//COMPARADOR COLCHONES
function comparadorContainer() {
    document.getElementById('comparadorButton').style.display = 'none';
    document.getElementById('contentFirm').style.display = 'flex';
    document.getElementById('contentHybrid').style.display = 'flex';
    document.getElementById('contentBalance').style.display = 'flex';
    document.getElementById('verMasFirm').style.display = 'flex';
    document.getElementById('verMasHybrid').style.display = 'flex';
    document.getElementById('verMasBalance').style.display = 'flex';
  }
  
  function layerFirm() {
    document.getElementById('matressContent').innerHTML = 'La armonía perfecta entre soporte y confort. Nuestra innovadora tecnología hace que tu colchon FIRM se adapte a tu cuerpo dándole el soporte que tanto necesita.';
    document.getElementById('firmBulletOne').innerHTML = 'Con tejido antimicrobiano de alta tecnología, llamado tratamiento SILVADURTM 930FLEX.';
    document.getElementById('firmBulletTwo').innerHTML = 'Con tecnología de enfriamiento constante, llamada NanoCool Fabric.';
    document.getElementById('firmBulletThree').innerHTML = 'Funda desmontablede fácil acceso, cuenta con un cierre lateral, para que se pueda lavar y retirar sin complicaciones.';
    document.getElementById('firmBulletFour').innerHTML = 'Sin transferencia de movimiento.';
    document.getElementById('firmBulletFive').innerHTML = 'Con 365 noches de prueba.';
    document.getElementById('firmBulletSix').innerHTML = 'Garantía de 12 años.';
    document.getElementById('firmBulletSeven').innerHTML = 'Envío gratis.';
    document.getElementById('matressContainer').style.display = 'block';
    document.getElementById('verMenosFirm').style.display = 'flex';
    document.getElementById('verMasFirm').style.display = 'none';
    document.getElementById('firmUl').style.display = 'block';
  }
  
  function dismountElementsFirm() {
    document.getElementById('matressContainer').style.display = 'none';
    document.getElementById('matressContent').innerHTML = ' ';
    document.getElementById('verMasFirm').style.display = 'flex';
    document.getElementById('verMenosFirm').style.display = 'none';
    document.getElementById('firmUl').style.display = 'none';
  }
  
  function layerHybrid() {
    document.getElementById('matressContentHybrid').innerHTML = 'Con su combinación única de resortes de acero y memory foam, este colchón te proporcionará la firmeza que necesitas para una buena postura y el confort que buscas para una noche de sueño reparadora.';
    document.getElementById('hybridBulletOne').innerHTML = 'Con tejido antimicrobiano de alta tecnología, llamado tratamiento SILVADURTM 930FLEX.';
    document.getElementById('hybridBulletTwo').innerHTML = 'Con tecnología de enfriamiento constante, llamada NanoCool Fabric.';
    document.getElementById('hybridBulletThree').innerHTML = 'Funda desmontablede fácil acceso, cuenta con un cierre lateral, para que se pueda lavar y retirar sin complicaciones.';
    document.getElementById('hybridBulletFour').innerHTML = 'Sin transferencia de movimiento.';
    document.getElementById('hybridBulletFive').innerHTML = 'Con 365 noches de prueba.';
    document.getElementById('hybridBulletSix').innerHTML = 'Garantía de 12 años.';
    document.getElementById('hybridBulletSeven').innerHTML = 'Envío gratis.';
    document.getElementById('matressContainerHybrid').style.display = 'block';
    document.getElementById('verMenosHybrid').style.display = 'flex';
    document.getElementById('verMasHybrid').style.display = 'none';
    document.getElementById('hybridUl').style.display = 'block';
  }
  
  function dismountElementsHybrid() {
    document.getElementById('matressContainerHybrid').style.display = 'none';
    document.getElementById('matressContentHybrid').innerHTML = ' ';
    document.getElementById('verMasHybrid').style.display = 'flex';
    document.getElementById('verMenosHybrid').style.display = 'none';
    document.getElementById('hybridUl').style.display = 'none';
  }
  
  function layerBalance() {
    document.getElementById('matressContentBalance').innerHTML = 'Diseñado para darte el soporte en espalda y cuello que necesitas, aliviar la presión en las articulaciones y adaptarse a ti. Disfruta de una suavidad y comodidad inigualables.';
    document.getElementById('balanceBulletOne').innerHTML = 'Con tejido antimicrobiano de alta tecnología, llamado tratamiento SILVADURTM 930FLEX.';
    document.getElementById('balanceBulletTwo').innerHTML = 'Con tecnología de enfriamiento constante, llamada NanoCool Fabric.';
    document.getElementById('balanceBulletThree').innerHTML = 'Funda desmontablede fácil acceso, cuenta con un cierre lateral, para que se pueda lavar y retirar sin complicaciones.';
    document.getElementById('balanceBulletFour').innerHTML = 'Sin transferencia de movimiento.';
    document.getElementById('balanceBulletFive').innerHTML = 'Con 365 noches de prueba.';
    document.getElementById('balanceBulletSix').innerHTML = 'Garantía de 12 años.';
    document.getElementById('balanceBulletSeven').innerHTML = 'Envío gratis.';
    document.getElementById('matressContainerBalance').style.display = 'block';
    document.getElementById('verMenosBalance').style.display = 'flex';
    document.getElementById('verMasBalance').style.display = 'none';
    document.getElementById('balanceUl').style.display = 'block';
  }
  
  function dismountElementsBalance() {
    document.getElementById('matressContainerBalance').style.display = 'none';
    document.getElementById('matressContentBalance').innerHTML = ' ';
    document.getElementById('verMasBalance').style.display = 'flex';
    document.getElementById('verMenosBalance').style.display = 'none';
    document.getElementById('balanceUl').style.display = 'none';
  }
  
  //GRID VIDEOS
  function defaultContentVideoHome() {
  document.getElementById('defaultContentVideoHome').style.display = 'block';
  }
  
  function renderVideoTwo() {
  document.getElementById('defaultContentVideoHome').style.display = 'none';
  document.getElementById('NewVideoContentThree').style.display = 'none';
  document.getElementById('NewVideoContentFour').style.display = 'none';
  document.getElementById('NewVideoContentFive').style.display = 'none';
  document.getElementById('NewVideoContentStart').style.display = 'none';
  document.getElementById('NewVideoContentTwo').style.display = 'block';
  }
  
  function renderVideoThree() {
  document.getElementById('defaultContentVideoHome').style.display = 'none';
  document.getElementById('NewVideoContentTwo').style.display = 'none';
  document.getElementById('NewVideoContentFour').style.display = 'none';
  document.getElementById('NewVideoContentFive').style.display = 'none';
  document.getElementById('NewVideoContentStart').style.display = 'none';
  document.getElementById('NewVideoContentThree').style.display = 'block';
  }
  
  function renderVideoFour() {
  document.getElementById('defaultContentVideoHome').style.display = 'none';
  document.getElementById('NewVideoContentTwo').style.display = 'none';
  document.getElementById('NewVideoContentThree').style.display = 'none';
  document.getElementById('NewVideoContentFive').style.display = 'none';
  document.getElementById('NewVideoContentStart').style.display = 'none';
  document.getElementById('NewVideoContentFour').style.display = 'block';
  }
  
  function renderVideoFive() {
  document.getElementById('defaultContentVideoHome').style.display = 'none';
  document.getElementById('NewVideoContentTwo').style.display = 'none';
  document.getElementById('NewVideoContentThree').style.display = 'none';
  document.getElementById('NewVideoContentFour').style.display = 'none';
  document.getElementById('NewVideoContentStart').style.display = 'none';
  document.getElementById('NewVideoContentFive').style.display = 'block';
  }
  
  function renderVideoStart() {
  document.getElementById('defaultContentVideoHome').style.display = 'none';
  document.getElementById('NewVideoContentTwo').style.display = 'none';
  document.getElementById('NewVideoContentThree').style.display = 'none';
  document.getElementById('NewVideoContentFour').style.display = 'none';
  document.getElementById('NewVideoContentFive').style.display = 'none';
  document.getElementById('NewVideoContentStart').style.display = 'block';
  }
  
  //LO MAS
    function renderNewProducts() {
        document.getElementById('MostSellerContent').style.display = 'none';
        document.getElementById('ProductBlogsContent').style.display = 'none'; 
        document.getElementById('NewProductsContent').style.display = 'block';
    }
  
    function renderProductBlog() {
        document.getElementById('NewProductsContent').style.display = 'none';
        document.getElementById('MostSellerContent').style.display = 'none';
        document.getElementById('ProductBlogsContent').style.display = 'block';
    }
  
    function renderMostSeller() {
        document.getElementById('NewProductsContent').style.display = 'none';
        document.getElementById('ProductBlogsContent').style.display = 'none';
        document.getElementById('MostSellerContent').style.display = 'block';
    }
  
  // About Home
    function aboutContainerHome() {
      document.getElementById('contentAbout').style.display = 'block';
      document.getElementById('verMenosAbout').style.display = 'block';
      document.getElementById('verMasAbout').style.display = 'none'; 
    }
  
    function dismountAboutContainer() {
      document.getElementById('contentAbout').style.display = 'none';
      document.getElementById('verMenosAbout').style.display = 'none';
      document.getElementById('verMasAbout').style.display = 'block'; 
    }
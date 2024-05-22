function next(index, lenght) {
    let nextIndex = index+1
    if(index == lenght) {
      nextIndex = 1
    }
    let next = document.querySelector(`.modal-container[index="${nextIndex}"] main-modal`)
    let modal = document.querySelector(`.modal-container[index="${index}"] main-modal`)
    modal.close()
    next.open()
  }
  
  function previous(index, lenght) {
    let previousIndex = index-1
    if(index == 1) {
      previousIndex = lenght
    }
    let previous = document.querySelector(`.modal-container[index="${previousIndex}"] main-modal`)
    let modal = document.querySelector(`.modal-container[index="${index}"] main-modal`)
    modal.close()
    previous.open()
  }
  
  $('.product-textvideo-grid__container').slick({
    dots: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    arrows: false,
    swipeToSlide: true,
    edgeFriction: 0,
    infinite: true,
  });
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

/*--- product slider ---*/
var swiper = new Swiper(".product-slider", {
    speed: 600,
    loop: true,
    spaceBetween: 50,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
    breakpoints: {
      575: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      750: {
        slidesPerView: 2,
      },
  
      1200: {
        slidesPerView: 3,
      }
    }
});


/*--- review slider ---*/
var swiper2 = new Swiper(".review-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },    
    breakpoints: {
      575: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      750: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    }
});



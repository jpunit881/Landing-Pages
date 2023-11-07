// Get references to the header elements
const header01 = document.getElementById("header-01");
const header02 = document.getElementById("header-02");

// Function to handle the scroll event
function handleScroll() {
    if (window.scrollY > 100) {
        // When scrolled more than 180px, hide header-01 and show header-02
        header01.style.display = "none";
        header02.style.display = "block";

        // Make header-02 stick to the top
        header02.style.position = "fixed";
        header02.style.top = "0";

        // Add a delay to apply the opacity transition effect
        setTimeout(() => {
          header02.style.opacity = 1; // Smoothly transition to full opacity
        }, 10);
    } else {
        // When scrolled back up, show header-01 and hide header-02
        header01.style.display = "block";
        header02.style.display = "none";

        // Restore the normal position of header-02
        header02.style.position = "relative";

        header02.style.opacity = 0; // Hide smoothly
    }
}
// Add a scroll event listener to the window
window.addEventListener("scroll", handleScroll);

/*--- swiper slider ---*/
var swiper = new Swiper(".brand-swipper", {
    speed: 600,
    loop: true,
    spaceBetween: 60,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
  
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      clickable: true,
    },
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      575: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      750: {
        slidesPerView: 3,
      },
  
      1200: {
        slidesPerView: 5,
      }
    }
});

/*--- swiper slider ---*/
var swiper2 = new Swiper(".case-study-slider", {
  speed: 600,
  loop: true,
  spaceBetween: 50,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
    clickable: true,
  },

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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

/*--- swiper slider ---*/
var swiper2 = new Swiper(".testimonial-slider", {
  speed: 600,
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',

  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
    clickable: true,
  },

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  }
});

/*---- Scroll top button ----*/
let scrollTop = document.querySelector('.scroll-top');
  
function toggleScrollTop() {
    if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
}

scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
document.addEventListener('scroll', toggleScrollTop);
window.addEventListener('load', toggleScrollTop);


/* 13. counterUp*/
jQuery(document).ready(function($) {
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
});


document.addEventListener('DOMContentLoaded', () => {
  "use strict"; 
  /**  Animation on scroll function and init */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);
});

const preloader = document.querySelector('#preloader');

if (preloader) {
  window.addEventListener('load', () => {
    preloader.remove();
  });
}
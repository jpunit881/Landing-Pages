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

var swiper = new Swiper(".testimonial-slider", {
    speed: 600,
    loop: true,
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

/*--- swiper slider ---*/
var swiper2 = new Swiper(".events-slider", {
  speed: 600,
  loop: true,
  spaceBetween: 0,
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


var swiper3 = new Swiper('.gallery-slider', {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
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


const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth',
      duration: 1000,
      easing: 'ease-in-out'
    }));
}

jQuery(document).ready(function($) {
  $('.counter').counterUp({
      delay: 50,
      time: 3000
  });
});

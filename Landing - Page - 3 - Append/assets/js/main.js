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
  
/*---- Preloader ----*/
const preloader = document.querySelector('#preloader');
if (preloader) {
  window.addEventListener('load', () => {
    preloader.remove();
  });
}
 
/*---- Init isotope layout and filters ----*/
function initIsotopeLayout() {
    document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
        let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
        let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
        let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';
  
        let initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort
    });
  
    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
        filters.addEventListener('click', function() {
            isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
            this.classList.add('filter-active');
            initIsotope.arrange({
              filter: this.getAttribute('data-filter')
            });
            if (typeof aosInit === 'function') {
              aosInit();
            }
          }, false);
        });
    });
}
window.addEventListener('load', initIsotopeLayout);
  
/*---- Frequently Asked Questions Toggle ----*/
document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
        faqItem.parentNode.classList.toggle('faq-active');
    });
});
  
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

/*--- swiper slider ---*/
var swiper = new Swiper(".testimonial-swiper", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
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
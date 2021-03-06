import SwiperCore, {Pagination, Swiper} from 'swiper/core';
// configure Swiper to use modules
  SwiperCore.use([Pagination]);

let swiper = Swiper;
let init = false;

let swiperMode = () => {
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
  let notMobile = window.matchMedia('(min-width: 768px)');

  // Enable (for mobile)
  if(mobile.matches) {
    if (!init) {
      init = true;
      swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: "auto",
        spaceBetween: 16,
        loop: false,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable:true,

        }
      });
    }
  }
}

/* On Load
**************************************************************/
window.addEventListener('DOMContentLoaded', function() {
    swiperMode();
});




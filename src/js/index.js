import '../scss/style.scss';
import './swiperInit.js';
import SwiperCore, {Pagination, Swiper} from 'swiper/core';
  // configure Swiper to use modules
  SwiperCore.use([Pagination]);
// import "../../node_modules/swiper/swiper.scss";
export default Swiper;


console.log('Works!');

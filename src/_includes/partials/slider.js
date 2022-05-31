  // core version + navigation, pagination modules:
  import Swiper, { Navigation, Pagination } from 'swiper';
  // import Swiper and modules styles
  const {html} = require('common-tags');
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  // init Swiper:

  const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],

  });

  function Slider({body, date}) {
    return html`
    <div class="${`card__container ${raised ? `card__container--raised` :``}`}">
      <h2 class="card__title">${title}</h2>
      <a class="card__link" href="${link}">${linkText}</a>
    </div>


    <div class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      ...
    </div>

    `;
  }
  
  module.exports = Slider;
  


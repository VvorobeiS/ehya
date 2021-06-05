$(document).ready(function () {
 
  var menuBurger = $('.menu-burger');
 
  menuBurger.on('click', function () {
    $('body').toggleClass('overflow--hidden');
    $('.nav').toggleClass('nav--visible');
  });

const categoriesSlider = new Swiper('.categories-slider__container', {
  // Optional parameters
  loop: false,
  slidesPerView: 1,
  spaceBetween: 28,
  speed: 700,

  // Настройки адаптивной версии
  breakpoints: {
    // если браузер >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
    },
    // если браузер >= 768px
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    // если браузер >= 1200px
    1200: {
      slidesPerView: 4,
      slidesPerColumn: 1,
      slidesPerColumnFill: 'column',
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.categories-slider__btn--next',
    prevEl: '.categories-slider__btn--prev',
  },

  // Управление клавиатурой
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  // Автопрокрутка
  // autoplay: {
  //   delay: 5000,
  // Отключить после ручного переключения
  //   disableOnInteraction: false,
  // },
});
})
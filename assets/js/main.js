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
      disabledClass: 'categories-slider__btn--disabled',
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

  const booksSlider = new Swiper('.books-slider__container', {
    // Optional parameters
    loop: false,
    slidesPerView: 1,
    speed: 700,

    // Настройки адаптивной версии
    breakpoints: {
      // если браузер >= 320px
      320: {
        slidesPerView: 1,
      },
      // если браузер >= 320px
      577: {
        slidesPerView: 2,
      },
      // если браузер >= 768px
      769: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      // если браузер >= 1200px
      1200: {
        slidesPerView: 5,
        spaceBetween: 28,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.books-slider__btn--next',
      prevEl: '.books-slider__btn--prev',
      disabledClass: 'books-slider__btn--disabled',
    },

    // Управление клавиатурой
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
  });

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.click-close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {
    var targetModal = $(this).attr('data-href');
    $(targetModal).find('.modal__dialog').addClass('modal__dialog--visible');
    $(targetModal).find('.modal__overlay').addClass('modal__overlay--visible');
    $('body').toggleClass('overflow--hidden');
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
    $('body').removeClass('overflow--hidden');
    $(document).on('keydown', function (event) {
      if (event.keyCode == 27) {
        modalOverlay.removeClass('modal__overlay--visible');
        modalDialog.removeClass('modal__dialog--visible');
        $('body').removeClass('overflow--hidden');
      }
    });
  }

  // Обработка форм
  $('.form').each(function () {
    $(this).validate({
      messages: {
        name: {
          required: 'Это поле обязательно к заполнению',
          minlength: 'Минимальное количество символов 2',
        },
        phone: {
          required: 'Это поле обязательно к заполнению',
        },
        email: {
          required: 'Это поле обязательно к заполнению',
          email: 'Email формат: name@domain.com',
        },
        subscribe: {
          required: 'Это поле обязательно к заполнению',
          email: 'Email формат: name@domain.com',
        },
      },
    });
  });

  $("input[type='tel']").each(function () {
    $(this).mask('+7(999)999-99-99');
  });
});

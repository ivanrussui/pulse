// Tiny Slider
const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  controls: false,
  autoplay: 1000,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  navPosition: 'bottom',
  speed: 600,
  responsive: {
    320: {
      nav: true,
    },
    768: {
      nav: false,
    },
  },
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});

// wow.js animation
new WOW().init();

$(document).ready(function () {
  // переключение табов
  $('ul.catalog__tabs').on(
    'click',
    'li:not(.catalog__tab_active)',
    // изменение (переключение) карточек внутри табов при перекл табов
    function () {
      $(this)
        .addClass('catalog__tab_active')
        .siblings()
        .removeClass('catalog__tab_active')
        .closest('div.container')
        .find('div.catalog__content')
        .removeClass('catalog__content_active')
        .eq($(this).index())
        .addClass('catalog__content_active');
    }
  );

  // кнопки подробнее и назад
  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content')
          .eq(i)
          .toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });
  }

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  // Modal
  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #order, #thanks').fadeOut(450);
  });
  $('.button_mini').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });

  // Validate
  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        phone: 'required',
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: 'Пожалуйста, введите своё имя',
          minlength: jQuery.validator.format('Введите более {0} букв!'),
        },
        phone: 'Пожалуйста, введите свой номер телефона',
        email: {
          required: 'Пожалуйста, введите свою почту',
          email: 'Неправильно введен адрес почты',
        },
      },
    });
  }

  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');

  // Masked Input
  $('input[name=phone').mask('+7 (999) 999-9999');

  // Ajax
  $('form').submit(function (e) {
    e.preventDefault();

    if (!$(this).valid()) {
      return;
    }

    $.ajax({
      type: 'POST',
      url: 'mailer/smart.php',
      data: $(this).serialize(),
    }).done(function () {
      $(this).find('input').val('');
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('750');

      $('form').trigger('reset');
    });
    return false;
  });

  // pageup
  $(window).scroll(function () {
    if ($(this).scrollTop() > 990) {
      $('.pageup').fadeIn(500);
    } else {
      $('.pageup').fadeOut('slow');
    }
  });

  // плавность перехода по всем ссылкам на сайте
  $("a[href='#up']").click(function () {
    const _href = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(_href).offset().top + 'px' });
    return false;
  });
});

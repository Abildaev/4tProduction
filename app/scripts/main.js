document.addEventListener('DOMContentLoaded', function (event) {

  //herader

  $(window).scroll( function() {
  
    const distanceY = $(window).scrollTop();
    if (distanceY >= 10) {
      $('.header').addClass('header__fixed');
    }

    else {
      $('.header').removeClass('header__fixed');
    }
});

  var mySwiper = new Swiper('.banner__slider', {
    // Optional parameters

    speed: 3000,
    allowTouchMove: false,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })

  var mySwiper = new Swiper('.banner__slide-art', {
    // Optional parameters

    speed: 1000,
    allowTouchMove: false,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',

    }
  });

  var mySwiper = new Swiper('.banner__text-slider', {
      // Optional parameters
      loop: true,
      speed: 1000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
    }
  );

var mySwiper = new Swiper('.partners__slider', {
  navigation: {
    nextEl: '.partners-button-next',
    prevEl: '.partners-button-prev',
    disabledClass: 'swiper-button-disabled',
  },

  breakpoints: {

    768: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
      spaceBetween: 2
    },
    992: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
      spaceBetween: 2
    },

  }

});


// services 
function effectServices() {
  $(this).parent('.services__service').toggleClass('addHover');
  $(this).siblings().toggleClass('addHover');
}
$('.services__link').hover(effectServices);


// contacts

$('select#cities').on('change', function () {
  $('input[name="city"]').val(this.value);
});

// contact	
$('#phone').intlTelInput({
  separateDialCode: true,
});


let inputs = $('.contacts__file');

inputs.change(function () {
  const countWord = $(this).val().split('/').pop().split('\\').pop().length;

  if (countWord >= 1) {

    $(this).siblings('.contacts__file-btn').children('span.input__file-button-text').text($(this).val().split('/').pop().split('\\').pop().substr(0, 7) + '...' + $(this).val().split('/').pop().split('\\').pop().substr(countWord - 3, countWord));
  } else {
    $(this).siblings('.contacts__file-btn').children('span.input__file-button-text').text('Добавить файл');
  }
});


//menu 

let Menu = $('.header__menu');

function openMenu() {

  Menu.toggleClass('changeMenu');

}

$('.header__open-menu').click(openMenu); $('.header__close-menu').click(openMenu);

});




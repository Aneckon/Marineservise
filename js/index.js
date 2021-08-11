var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
      }
    }
  });

  $(document).ready(function() {
    $('.header__burder-img').click(function() {
        $('.header__burder-img').toggleClass('menu__remove');
        $('.header__nav').toggleClass('menu__open');
    });
});

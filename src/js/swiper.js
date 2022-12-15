new Swiper('.review__swiper', {
  loop: true,
  preventClicks: true,
  // autoplay: true,
  speed: 400,

  breakpoints: {
    1024: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    320: {
      centeredSlides: true,
      slidesPerView: 1.4,
      spaceBetween: 0,
    },
  },
});

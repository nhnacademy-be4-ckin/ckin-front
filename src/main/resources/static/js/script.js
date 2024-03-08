// opilsol-N5 [gSLTFQb4Tx]
(function() {
  $(function() {
    var swiper = new Swiper(".opilsol-N5 .slide-container", {
      // loop: "true",
      allowTouchMove: false,
      touchEventsTarget: "wrapper",
      navigation: {
        nextEl: ".opilsol-N5 .swiper-button-next",
        prevEl: ".opilsol-N5 .swiper-button-prev",
      },
      /* autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }, */
      breakpoints: {
        320: {
          slidesPerView: 1.1446,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2.427,
          spaceBetween: 20,
        },
        922: {
          slidesPerView: 3.232,
          spaceBetween: 20,
        },
        1025: {
          slidesPerView: 3.75,
          spaceBetween: 40,
        },
      },
    });
    $(".opilsol-N5 .slide-container .swiper-slide").hover(function() {
      swiper.autoplay.stop();
    }, function() {
      swiper.autoplay.start();
    });
  });
})();
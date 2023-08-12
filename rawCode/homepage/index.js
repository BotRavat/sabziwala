var swiper = new Swiper(".mySwiper", {
    slidesPerView: 7,
    spaceBetween: 15,
     autoplay: {
        delay:2500,
        disableOnInteraction:false,
     },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  });
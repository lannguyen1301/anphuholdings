function initTeamSwiper() {
  const el = document.querySelector('.team-swiper');
  if (!el || el.classList.contains('swiper-initialized')) return;

  new Swiper(el, {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,

    // 🔥 BẮT BUỘC
    autoHeight: true,
    observer: true,
    observeParents: true,

    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 16 },
      640: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 24 },
      1280: { slidesPerView: 4, spaceBetween: 24 },
    },
  });
}

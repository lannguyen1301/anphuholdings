function initAgentSwiper() {
  const el = document.querySelector('.h2-agent-swiper');
  if (!el || el.swiper) return;

  new Swiper(el, {
    slidesPerView: 3,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
}

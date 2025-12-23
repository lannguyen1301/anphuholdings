let reviewsSwiperInstance = null;

function initReviewsSwiper() {
  const el = document.querySelector('.h2-reviews-swiper');
  if (!el || typeof Swiper === 'undefined') return;

  // Tránh init trùng khi include lại
  if (reviewsSwiperInstance) {
    reviewsSwiperInstance.destroy(true, true);
    reviewsSwiperInstance = null;
  }

  reviewsSwiperInstance = new Swiper('.h2-reviews-swiper', {
    slidesPerView: 3,
    pagination: {
      el: '.h2-reviews-swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 10 },
      320: { slidesPerView: 2, spaceBetween: 10 },
      640: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 3, spaceBetween: 20 },
    },
  });
}

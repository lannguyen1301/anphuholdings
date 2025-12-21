// // js/aos-init.js
// function initAOS() {
//   if (!window.AOS) return;

//   AOS.init({
//     delay: 0,
//     duration: 1000,
//     once: true,
//   });

//   // dùng cho includeHTML
//   AOS.refreshHard();
// }

function initAOS() {
  if (!window.AOS) return;

  AOS.init({
    once: true,
    duration: 800,
    offset: 100,
    easing: 'ease-out-cubic',
  });
}

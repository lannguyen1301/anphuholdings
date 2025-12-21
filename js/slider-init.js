// js/slider-init.js
function initRangeSlider() {
  const areaSlider = document.getElementById('areaSlider');
  if (!areaSlider || areaSlider.noUiSlider) return;

  noUiSlider.create(areaSlider, {
    start: [100, 1000],
    connect: true,
    range: { min: 10, max: 2000 },
    step: 10,
  });
}

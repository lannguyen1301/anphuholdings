// // js/toggle-init.js
// function toggleSeoContent() {
//   const content = document.getElementById('seo-content');
//   if (!content) return;

//   const gradient = document.getElementById('seo-gradient');
//   const btnText = document.getElementById('seo-btn-text');
//   const btnIcon = document.getElementById('seo-btn-icon');

//   if (content.classList.contains('max-h-24')) {
//     content.classList.replace('max-h-24', 'max-h-[1000px]');
//     gradient?.classList.add('hidden');
//     btnText.textContent = 'Thu gọn';
//     btnIcon.classList.replace('fa-chevron-down', 'fa-chevron-up');
//   } else {
//     content.classList.replace('max-h-[1000px]', 'max-h-24');
//     gradient?.classList.remove('hidden');
//     btnText.textContent = 'Xem thêm';
//     btnIcon.classList.replace('fa-chevron-up', 'fa-chevron-down');
//   }
// }

function toggleFaq(button) {
  const answer = button.nextElementSibling;
  const icon = button.querySelector('i');

  if (!answer) return;

  answer.classList.toggle('hidden');
  icon?.classList.toggle('rotate-180');
  button.classList.toggle('bg-blue-50');
}

function toggleFullInfo() {
  const fullContent = document.getElementById('info-full');
  const btnText = document.getElementById('btnText');
  const btnIcon = document.getElementById('btnIcon');

  if (!fullContent) return;

  const isHidden = fullContent.classList.contains('hidden');

  fullContent.classList.toggle('hidden');
  btnText.textContent = isHidden ? 'Thu gọn' : 'Xem thêm';

  btnIcon.classList.toggle('fa-chevron-down', !isHidden);
  btnIcon.classList.toggle('fa-chevron-up', isHidden);
}

function toggleSeoContent() {
  const content = document.getElementById('seo-content');
  const gradient = document.getElementById('seo-gradient');
  const btnText = document.getElementById('seo-btn-text');
  const btnIcon = document.getElementById('seo-btn-icon');

  if (!content) return;

  const isCollapsed = content.classList.contains('max-h-24');

  content.classList.toggle('max-h-24', !isCollapsed);
  content.classList.toggle('max-h-[1000px]', isCollapsed);
  gradient?.classList.toggle('hidden', isCollapsed);

  btnText.textContent = isCollapsed ? 'Thu gọn' : 'Xem thêm';
  btnIcon.classList.toggle('fa-chevron-down', !isCollapsed);
  btnIcon.classList.toggle('fa-chevron-up', isCollapsed);
}

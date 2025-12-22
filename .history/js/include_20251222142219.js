async function includeHTML(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Cannot load ${url}`);
    el.innerHTML = await res.text();

    // ⏱️ Chờ browser render DOM xong
    requestAnimationFrame(() => {
      initAfterInclude();
    });
  } catch (err) {
    console.error(err);
  }
}

function initAfterInclude() {
  // 1️⃣ Breadcrumb (nhẹ – chạy ngay)
  if (typeof initBreadcrumb === 'function') {
    initBreadcrumb();
  }

  // 2️⃣ Flowbite
  if (window.initFlowbite) {
    initFlowbite();
  }

  // 3️⃣ AOS (chỉ refresh – không init lại)
  if (window.AOS) {
    AOS.refreshHard();
  }

  // 4️⃣ Các component PHỤ THUỘC layout → delay 1 frame nữa
  requestAnimationFrame(() => {
    if (typeof initTeamSwiper === 'function') {
      initTeamSwiper();
    }

    if (typeof initPhuongSwiper === 'function') {
      initPhuongSwiper();
    }

    if (typeof initRangeSlider === 'function') {
      initRangeSlider();
    }
  });
}

// đệ quy

// async function includeHTML(selectorOrEl, url) {
//   const el =
//     typeof selectorOrEl === 'string'
//       ? document.querySelector(selectorOrEl)
//       : selectorOrEl;

//   if (!el) return;

//   try {
//     const res = await fetch(url);
//     if (!res.ok) throw new Error(`Cannot load ${url}`);

//     el.innerHTML = await res.text();

//     // 🔁 LOAD PARTIAL CON (QUAN TRỌNG)
//     const nestedIncludes = el.querySelectorAll('[data-include]');
//     for (const nested of nestedIncludes) {
//       await includeHTML(nested, nested.dataset.include);
//     }

//     // ⏱️ Chờ browser render DOM xong
//     requestAnimationFrame(() => {
//       initAfterInclude();
//     });
//   } catch (err) {
//     console.error(err);
//   }
// }

async function includeHTML(selectorOrEl, url, isRoot = true) {
  const el =
    typeof selectorOrEl === 'string'
      ? document.querySelector(selectorOrEl)
      : selectorOrEl;

  if (!el) return;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Cannot load ${url}`);

    el.innerHTML = await res.text();

    // 🔁 LOAD PARTIAL CON (CHỈ HTML, KHÔNG INIT)
    const nestedIncludes = el.querySelectorAll('[data-include]');
    for (const nested of nestedIncludes) {
      await includeHTML(nested, nested.dataset.include, false);
    }

    // ⏱️ CHỈ ROOT mới được init thư viện
    if (isRoot) {
      requestAnimationFrame(() => {
        initAfterInclude();
      });
    }
  } catch (err) {
    console.error(err);
  }
}

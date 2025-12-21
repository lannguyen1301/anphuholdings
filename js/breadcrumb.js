function initBreadcrumb() {
  const pageTitle = document.getElementById('pageTitle');
  const breadcrumbTitle = document.getElementById('breadCrumbTitle');

  if (!pageTitle || !breadcrumbTitle) {
    console.warn('Breadcrumb init failed', {
      pageTitle,
      breadcrumbTitle,
    });
    return;
  }

  breadcrumbTitle.textContent = pageTitle.textContent.trim();
}


function setLanguage(lang) {
  document.querySelectorAll("[data-zh]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

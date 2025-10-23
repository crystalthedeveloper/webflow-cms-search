/**
 * Webflow CMS Search (Attribute-Based)
 * Repo: crystalthedeveloper/webflow-cms-search
 * Version: 1.0.1
 *
 * Works natively on Webflow published sites.
 * Add a text input with [data-cltd-search-field]
 * and a CMS list wrapper with [data-cltd-search-list].
 * Each CMS item should contain text to be matched.
 *
 * v1.0.1 — Improvements:
 *  - Smooth fade animation for "no results" element
 *  - Accessibility support via aria-live for screen readers
 */

document.addEventListener("DOMContentLoaded", () => {
  const searchField = document.querySelector('[data-cltd-search-field]');
  const list = document.querySelector('[data-cltd-search-list]');
  if (!searchField || !list) return;

  const items = Array.from(list.children);
  const noResults = document.querySelector('[data-cltd-search-empty]');

  // Add aria-live for accessibility
  if (noResults) {
    noResults.setAttribute("aria-live", "polite");
    noResults.style.transition = "opacity 0.25s ease";
    noResults.style.opacity = "0";
    noResults.style.display = "none";
  }

  searchField.addEventListener('input', e => {
    const query = e.target.value.trim().toLowerCase();
    let visibleCount = 0;

    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      const match = text.includes(query);
      item.style.display = match ? '' : 'none';
      if (match) visibleCount++;
    });

    if (noResults) {
      if (visibleCount === 0) {
        noResults.style.display = "block";
        requestAnimationFrame(() => (noResults.style.opacity = "1"));
      } else {
        noResults.style.opacity = "0";
        setTimeout(() => (noResults.style.display = "none"), 250);
      }
    }
  });
});

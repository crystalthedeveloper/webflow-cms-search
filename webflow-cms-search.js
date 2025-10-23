/**
 * Webflow CMS Search (Attribute-Based)
 * Repo: crystalthedeveloper/webflow-cms-search
 * Version: 1.0.0
 *
 * Works natively on Webflow published sites.
 * Add a text input with [data-cltd-search-field]
 * and a CMS list wrapper with [data-cltd-search-list]
 * Each CMS item should contain text to be matched.
 */

document.addEventListener("DOMContentLoaded", () => {
  const searchField = document.querySelector('[data-cltd-search-field]');
  const list = document.querySelector('[data-cltd-search-list]');
  if (!searchField || !list) return;

  const items = Array.from(list.children);
  const noResults = document.querySelector('[data-cltd-search-empty]');

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
      noResults.style.display = visibleCount === 0 ? '' : 'none';
    }
  });
});

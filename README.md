# webflow-cms-search  
A lightweight, dependency-free **live search** solution for Webflow CMS.  
It filters visible CMS items as you type — perfect for blogs, portfolios, directories, or stores.  
Built entirely with **data attributes**, keeping your Webflow Designer clean and flexible.  

---

## 🚀 Install  
Add the script **before the closing `</body>` tag** or inside the **Page Settings → Custom Code → Footer** of your Webflow project.  

```html
<!-- Webflow CMS Search [by Crystal The Developer Inc.] -->
<script src="https://cdn.jsdelivr.net/gh/crystalthedeveloper/webflow-cms-search@v1.0.1/webflow-cms-search.js" defer></script>
```

---

## 🧩 Setup

### 1️⃣ Add a search field
Place an `<input>` element anywhere on your page and add:
```html
<input type="text" placeholder="Search..." data-cltd-search-field>
```

### 2️⃣ Set up your CMS list wrapper
Wrap your CMS items inside an element with:
```html
<div data-cltd-search-list>
  <div class="w-dyn-item">First Project</div>
  <div class="w-dyn-item">Second Project</div>
</div>
```

### 3️⃣ Add an optional “no results” message
Add this **outside** the CMS list:
```html
<div data-cltd-search-empty style="display:none;">No results found.</div>
```

---

## ⚙️ How it works

The script listens to user input, compares it against each CMS item’s text, and shows/hides matching results in real time.  
If no matches are found, the `[data-cltd-search-empty]` element is displayed automatically.

```javascript
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
      noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  });
});
```

---

## 🔄 Updating to a new version
Whenever a new version is released, just update the version number in your script URL:  
```html
<script src="https://cdn.jsdelivr.net/gh/crystalthedeveloper/webflow-cms-search@v1.0.1/webflow-cms-search.js" defer></script>
```

👉 Example:  
- `@v1.0.0` → first release  
- `@v1.0.1` → bug fixes or improvements  
- `@latest` → always loads the newest version (for testing)

---

## 🧠 Notes
- Works on **published Webflow sites** (not inside the Designer preview).  
- 100% client-side — no external dependencies, APIs, or cookies.  
- Compatible with any CMS Collection List.  

---

**👩🏽‍💻 Created by [Crystal The Developer Inc.](https://www.crystalthedeveloper.ca)**  
*Clean code, fast load, and full Webflow compatibility.*

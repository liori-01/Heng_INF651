// === Materialize initialization ===
document.addEventListener("DOMContentLoaded", function () {
  if (window.M) {
    if (M.FormSelect) {
      M.FormSelect.init(document.querySelectorAll("select"));
    }
    if (M.updateTextFields) {
      M.updateTextFields();
    }
  }
});

/* ===== Movie Watchlist: functions + arrays (Materialize-friendly markup) ===== */

let movies = []; // [{id, title, category, rating, addedAt}]

// ---- Elements (match your HTML) ----
const $form = document.getElementById("movie-form");
const $title = document.getElementById("movie-input");
const $cat = document.getElementById("category-input");
const $rating = document.getElementById("rating-input");
const $list = document.getElementById("watchlist");

const $search = document.getElementById("search-input");
const $filter = document.getElementById("filter-category");
const $sort = document.getElementById("sort-select");

const $status = document.getElementById("status");

// ---- Helpers ----
const uid = () =>
  Math.random().toString(36).slice(2, 9) + Date.now().toString(36);
const norm = (s) => (s || "").toString().trim();
const esc = (s) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
        c
      ])
  );

// robust rating parser (handles "", "8", "8.5", "8,5")
const toRating = (v) => {
  if (v == null) return null;
  const s = String(v).trim().replace(",", ".");
  if (s === "") return null;
  const n = parseFloat(s);
  return Number.isFinite(n) ? n : null;
};

// ---- State mutators ----
function addMovie(title, { category = "", rating = null } = {}) {
  const t = norm(title);
  if (!t) return { ok: false, reason: "EMPTY" };

  // optional dup-prevent (case-insensitive on title)
  if (movies.some((m) => m.title.toLowerCase() === t.toLowerCase())) {
    return { ok: false, reason: "DUP" };
  }

  movies.push({
    id: uid(),
    title: t,
    category: norm(category) || "",
    rating: rating, // keep the parsed number or null
    addedAt: Date.now(),
  });

  return { ok: true };
}

function removeMovie(id) {
  const i = movies.findIndex((m) => m.id === id);
  if (i !== -1) movies.splice(i, 1);
}

// ---- Filtering/sorting/search ----
function getVisibleMovies() {
  let list = [...movies];

  // search (title + category)
  const q = ($search?.value || "").toLowerCase();
  if (q) {
    list = list.filter(
      (m) =>
        m.title.toLowerCase().includes(q) ||
        (m.category || "").toLowerCase().includes(q)
    );
  }

  // category filter
  const cat = ($filter?.value || "all").toLowerCase();
  if (cat !== "all") {
    list = list.filter((m) => (m.category || "").toLowerCase() === cat);
  }

  // sort
  const mode = $sort?.value || "recent";
  if (mode === "title") {
    list.sort((a, b) => a.title.localeCompare(b.title));
  } else if (mode === "rating") {
    list.sort((a, b) => (b.rating ?? -Infinity) - (a.rating ?? -Infinity));
  } else {
    list.sort((a, b) => b.addedAt - a.addedAt); // recent default
  }

  return list;
}

// ---- Render ----
function renderList() {
  const items = getVisibleMovies();

  if (!items.length) {
    $list.innerHTML = `
      <li class="movie-row" style="text-align:center; padding:14px; color:#666; background:#f5f5f5;">
        No movies to show.
      </li>`;
    return;
  }

  $list.innerHTML = items
    .map(
      (m) => `
    <li class="movie-row" data-id="${m.id}">
      <span class="movie-title">${esc(m.title)}</span>
      <span>
        ${
          m.category ? `<span class="movie-chip">${esc(m.category)}</span>` : ""
        }
        ${
          typeof m.rating === "number"
            ? `<span class="movie-chip">⭐ ${m.rating}</span>`
            : ""
        }
        <button class="btn-remove" data-action="remove" title="Remove">✕</button>
      </span>
    </li>
  `
    )
    .join("");
}

// ---- Events ----
function announce(msg) {
  if ($status) {
    $status.textContent = msg;
    setTimeout(() => ($status.textContent = ""), 1200);
  }
}

function handleSubmit(e) {
  e.preventDefault();

  const title = $title?.value ?? "";
  const cat = $cat?.value ?? "";
  const rating = toRating($rating?.value); // ← use robust parser

  const res = addMovie(title, { category: cat, rating });
  if (!res.ok) {
    if (res.reason === "EMPTY") announce("Please enter a movie title.");
    if (res.reason === "DUP") announce("That title is already on your list.");
    return;
  }

  // reset inputs
  if ($title) $title.value = "";
  if ($rating) $rating.value = "";
  if ($cat) $cat.selectedIndex = 0;

  renderList();
  announce("Movie added.");
}

function handleListClick(e) {
  const btn = e.target.closest('[data-action="remove"]');
  if (!btn) return;
  const row = e.target.closest("[data-id]");
  if (!row) return;
  removeMovie(row.getAttribute("data-id"));
  renderList();
  announce("Removed.");
}

function handleLive() {
  renderList();
}

// ---- Wire up ----
if ($form) $form.addEventListener("submit", handleSubmit);
if ($list) $list.addEventListener("click", handleListClick);

if ($search) $search.addEventListener("input", handleLive);
if ($filter) $filter.addEventListener("change", handleLive);
if ($sort) $sort.addEventListener("change", handleLive);

// First paint
renderList();

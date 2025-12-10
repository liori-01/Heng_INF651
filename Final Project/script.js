const myMusicTracks = [
  {
    id: "m1",
    title: "emotional ambient music",
    description: "this consists of granular synthesis and heavy pads. i was heavily inspired by botanica music.",
    mood: "Ambient",
    year: 2024,
    file: "music/5.17.2024.mp3"
  },
  {
    id: "m2",
    title: "the way you get (slowed)",
    description: "unreleased music but slowed by a few semitones.",
    mood: "Chill",
    year: 2024,
    file: "music/the way you get (slowed).mp3"
  },
  {
    id: "m3",
    title: "emulation remix",
    description: "i love the original song so much.",
    mood: "Remix",
    year: 2025,
    file: "music/emulation.mp3"
  },
  {
    id: "m4",
    title: "when your ISP doesnt fix ur internet on christmas day",
    description: "i hate them so much.",
    mood: "Glitch / angry",
    year: 2020,
    file: "music/when ISP doesnt fix ur internet on christmas day (2020).mp3"
  },
  {
    id: "m5",
    title: "house sketch",
    description: "2016 style music",
    mood: "House",
    year: 2023,
    file: "music/house sketch.mp3"
  }
];

// --------------- FAVORITE ALBUMS (3×3) ---------------
const favoriteAlbums = [
  {
    id: "a1",
    title: "Worlds",
    artist: "Porter Robinson",
    year: 2014,
    genre: "Electronic",
    spotifyUrl: "https://open.spotify.com/album/7AJPV0L05IyIBid97AvwVD?si=T8_A1JktSpSGAg8GbHnbiQ"
  },
  {
    id: "a2",
    title: "Good Faith",
    artist: "Madeon",
    year: 2020,
    genre: "Electronic",
    spotifyUrl: "https://open.spotify.com/album/6Lq1lrCfkpxKa4jCo5gKWr?si=fPhoLju3RS6U4lRlXyfrxQ"
  },
  {
    id: "a3",
    title: "heart of android",
    artist: "Camellia",
    year: 2018,
    genre: "Electronic",
    spotifyUrl: "https://open.spotify.com/album/5vNqPvxMybvSfgOH5XwKwC?si=OnpiC1OERniyZXb_tJrsMQ"
  },
  {
    id: "a4",
    title: "L'été",
    artist: "Snail's House",
    year: 2018,
    genre: "Electronic",
    spotifyUrl: "https://open.spotify.com/album/2jwH5smWfEllXmVwPQT8rY?si=6HON6eV3S5WjVBighV5uiQ"
  },
  {
    id: "a5",
    title: "Nurture",
    artist: "Porter Robinson",
    year: 2021,
    genre: "Electronic",
    spotifyUrl: "https://open.spotify.com/album/4Hjqdhj5rh816i1dfcUEaM?si=KPSjUaKRT2uJV_DUsnQKnQ"
  },
  {
    id: "a6",
    title: "Virtual Self",
    artist: "Virtual Self",
    year: 2017,
    genre: "Electronic",
    spotifyUrl: "https://open.spotify.com/artist/0F52YLV7uWqaJfMMDgG737?si=B0WbEX9ZTwyJT8qSmQwrfA"
  },
  {
    id: "a7",
    title: "Quest For Fire",
    artist: "Skrillex",
    year: 2023,
    genre: "Electronic",
    spotifyUrl: "https://open.spotify.com/album/7tWP3OG5dWphctKg4NMACt?si=o-YqxQ0QQDSttECdztU-Mw"
  },
  {
    id: "a8",
    title: "archive001:reworks+",
    artist: "kamome sano",
    year: 2014,
    genre: "Pop",
    spotifyUrl: "https://open.spotify.com/album/2djaY5IexaN38CkbW6fol0?si=UGxshO3lTOWW6GFCaTM73Q"
  },
  {
    id: "a9",
    title: "re:sort",
    artist: "sora",
    year: 2003,
    genre: "Electronic",
    spotifyUrl: "https://open.spotify.com/album/1E2YllECyI6VagDvI7gcfQ?si=GKYvsPhHSoOXFWEBtydWQg"
  }
];


let userFavorites = [];
let recommendations = [];

// --------------- FAVORITES PAGE ---------------
function renderCoreFavorites(list = coreFavorites) {
  const container = document.getElementById("coreFavoritesContainer");
  if (!container) return;

  container.innerHTML = "";

  list.forEach(track => {
    const card = document.createElement("div");
    card.className = "track-card";
    card.id = `track-card-${track.id}`;

    card.innerHTML = `
      <div class="track-layout">
        <img 
          id="art-${track.id}" 
          class="track-art" 
          src="${track.artworkUrl ? track.artworkUrl : ""}" 
          alt="Album art for ${track.title}" 
        />
        <div class="track-info">
          <h3>${track.title}</h3>
          <p>${track.artist}</p>
          <p><small>${track.genre} • ${track.mood}</small></p>
        </div>
        <div class="track-actions">
          <button data-id="${track.id}" class="add-to-playlist-btn">
            ⭐ Add
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  document.querySelectorAll(".add-to-playlist-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.getAttribute("data-id"));
      addToUserFavorites(id);
    });
  });
}

function renderUserFavorites() {
  const container = document.getElementById("userFavoritesContainer");
  if (!container) return;

  container.innerHTML = "";

  if (userFavorites.length === 0) {
    container.textContent = "No songs in your playlist yet.";
    return;
  }

  userFavorites.forEach(track => {
    const item = document.createElement("div");
    item.className = "track-card";

    item.innerHTML = `
      <div class="track-layout">
        <img 
          class="track-art" 
          src="${track.artworkUrl ? track.artworkUrl : ""}" 
          alt="Album art for ${track.title}"
        />
        <div class="track-info">
          <h3>${track.title}</h3>
          <p>${track.artist}</p>
        </div>
        <div class="track-actions">
          <button data-id="${track.id}" class="remove-from-playlist-btn">
            Remove
          </button>
        </div>
      </div>
    `;

    container.appendChild(item);
  });

  document.querySelectorAll(".remove-from-playlist-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.getAttribute("data-id"));
      removeFromUserFavorites(id);
    });
  });
}

function addToUserFavorites(trackId) {
  const track = coreFavorites.find(t => t.id === trackId);
  if (!track) return;

  const exists = userFavorites.some(t => t.id === trackId);
  if (exists) return;

  userFavorites.push(track);
  renderUserFavorites();
}

function removeFromUserFavorites(trackId) {
  userFavorites = userFavorites.filter(t => t.id !== trackId);
  renderUserFavorites();
}

function filterFavorites(term) {
  const container = document.getElementById("coreFavoritesContainer");
  if (!container) return;

  const searchTerm = term.toLowerCase();
  const filtered = coreFavorites.filter(track =>
    track.title.toLowerCase().includes(searchTerm) ||
    track.artist.toLowerCase().includes(searchTerm)
  );

  renderCoreFavorites(filtered);
  loadArtworkForFavorites(filtered);
}

// --------------- DAILY ALBUM (TINY PILL ON HOME) ---------------
function getDailyAlbumIndex() {
  if (favoriteAlbums.length === 0) return null;

  const today = new Date();
  const dayKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  const stored = localStorage.getItem("dailyAlbumMini");
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (parsed.dayKey === dayKey && typeof parsed.index === "number") {
        return parsed.index;
      }
    } catch (e) {
      console.error("Error parsing dailyAlbumMini", e);
    }
  }

  const randomIndex = Math.floor(Math.random() * favoriteAlbums.length);
  localStorage.setItem("dailyAlbumMini", JSON.stringify({ dayKey, index: randomIndex }));
  return randomIndex;
}

async function fetchMiniAlbumArt(album) {
  const query = encodeURIComponent(`${album.title} ${album.artist}`);
  const url = `https://itunes.apple.com/search?term=${query}&media=music&entity=album&limit=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.resultCount > 0) {
      let artworkUrl = data.results[0].artworkUrl100;
      if (artworkUrl) {
        artworkUrl = artworkUrl.replace("100x100bb", "200x200bb");
      }
      return artworkUrl;
    }
  } catch (err) {
    console.error("Error fetching mini album artwork for", album.title, err);
  }
  return null;
}

async function showDailyAlbumMini() {
  const container = document.getElementById("dailyAlbumMini");
  if (!container) return;

  const index = getDailyAlbumIndex();
  if (index === null) {
    container.innerHTML = "";
    return;
  }

  const album = favoriteAlbums[index];

  // make sure we have artwork (reuse any cached URL)
  if (!album.artworkUrl) {
    album.artworkUrl = await fetchMiniAlbumArt(album);
  }

  // if we have a Spotify URL, make the pill a real link
  if (album.spotifyUrl) {
    container.href = album.spotifyUrl;
    container.target = "_blank";
    container.rel = "noopener noreferrer";
  } else {
    container.removeAttribute("href");
  }

  const artHtml = album.artworkUrl
    ? `<img class="daily-album-mini-art" src="${album.artworkUrl}" alt="Album cover for ${album.title}">`
    : `<div class="daily-album-mini-art"></div>`;

  container.className = "daily-album-mini";
  container.innerHTML = `
    ${artHtml}
    <div class="daily-album-mini-info">
      <span class="meta-label">Album of the day</span>
      <span class="title">${album.title}</span>
      <span class="meta">${album.artist} • ${album.year}</span>
    </div>
  `;
}

// --------------- RECOMMEND PAGE ---------------
function handleRecommendationSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const errorEl = document.getElementById("formError");

  if (!errorEl) return;

  errorEl.textContent = "";

  const formData = new FormData(form);
  const name = formData.get("name").trim();
  const title = formData.get("title").trim();
  const artist = formData.get("artist").trim();
  const link = (formData.get("link") || "").trim();
  const reason = formData.get("reason").trim();

  if (!name || !title) {
    errorEl.textContent = "Please include at least your name and a song/album title.";
    return;
  }

  const rec = { name, title, artist, link, reason };
  recommendations.push(rec);
  form.reset();
  renderRecommendations();
}

function renderRecommendations() {
  const container = document.getElementById("recommendationsContainer");
  if (!container) return;

  container.innerHTML = "";

  if (recommendations.length === 0) {
    container.textContent = "No recommendations yet.";
    return;
  }

  recommendations.forEach(rec => {
    const div = document.createElement("div");
    div.className = "recommendation-card";

    div.innerHTML = `
      <h4>${rec.title} ${rec.artist ? `– ${rec.artist}` : ""}</h4>
      <p><strong>Recommended by:</strong> ${rec.name}</p>
      ${rec.reason ? `<p><em>"${rec.reason}"</em></p>` : ""}
      ${
        rec.link
          ? `<p><a href="${rec.link}" target="_blank" rel="noopener noreferrer">${rec.link}</a></p>`
          : ""
      }
    `;

    container.appendChild(div);
  });
}

// --------------- MY MUSIC PAGE ---------------
function renderMyMusic(list = myMusicTracks) {
  const container = document.getElementById("myMusicList");
  if (!container) return;

  container.innerHTML = "";

  if (!list.length) {
    container.textContent = "No tracks added yet.";
    return;
  }

  list.forEach(track => {
    const card = document.createElement("div");
    card.className = "track-card";

    card.innerHTML = `
      <div class="track-layout">
        <div class="track-info">
          <h3>${track.title}</h3>
          <p class="description">${track.description}</p>
          <p class="meta">${track.mood ? track.mood + " • " : ""}${track.year || ""}</p>
          ${
            track.file
              ? `<audio controls src="${track.file}"></audio>`
              : `<p class="helper-text">No audio file linked yet.</p>`
          }
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function applyMusicSort(criteria) {
  const sorted = [...myMusicTracks];

  if (criteria === "title-asc") {
    sorted.sort((a, b) => a.title.localeCompare(b.title));
  } else if (criteria === "year-newest") {
    sorted.sort((a, b) => (b.year || 0) - (a.year || 0));
  } else if (criteria === "year-oldest") {
    sorted.sort((a, b) => (a.year || 0) - (b.year || 0));
  }

  renderMyMusic(sorted);
}

// --------------- iTUNES API (TRACK ARTWORK FOR FAVORITES) ---------------
async function fetchArtworkForTrack(track) {
  const query = encodeURIComponent(`${track.title} ${track.artist}`);
  const url = `https://itunes.apple.com/search?term=${query}&media=music&limit=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.resultCount > 0) {
      const result = data.results[0];
      let artworkUrl = result.artworkUrl100;

      if (artworkUrl) {
        artworkUrl = artworkUrl.replace("100x100bb", "300x300bb");
      }

      track.artworkUrl = artworkUrl;

      const img = document.getElementById(`art-${track.id}`);
      if (img && artworkUrl) img.src = artworkUrl;
    }
  } catch (err) {
    console.error("Error fetching artwork for", track.title, err);
  }
}

async function loadArtworkForFavorites(list = coreFavorites) {
  for (const track of list) {
    await fetchArtworkForTrack(track);
  }
}

// --------------- iTUNES API (ALBUM ART FOR 3×3 GRID) ---------------
async function fetchArtworkForAlbumElement(el) {
  const album = (el.dataset.album || "").trim();
  const artist = (el.dataset.artist || "").trim();

  if (!album && !artist) return;

  const term = encodeURIComponent(`${album} ${artist}`.trim());
  const url = `https://itunes.apple.com/search?term=${term}&media=music&limit=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.results || data.results.length === 0) return;

    let artworkUrl = data.results[0].artworkUrl100;
    if (artworkUrl) {
      artworkUrl = artworkUrl.replace("100x100bb", "300x300bb");
      el.style.backgroundImage = `url('${artworkUrl}')`;
    }
  } catch (err) {
    console.error("Error fetching album art for", album, artist, err);
  }
}

async function loadArtworkForAlbumGrid() {
  const albumEls = document.querySelectorAll(".album-art[data-album], .album-art[data-artist]");
  if (!albumEls.length) return;

  for (const el of albumEls) {
    await fetchArtworkForAlbumElement(el);
  }
}

// --------------- INIT ---------------
window.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);

  // Always try to load album art for the 3×3 grid
  loadArtworkForAlbumGrid();

  // Home page: tiny daily album pill
  if (document.getElementById("dailyAlbumMini")) {
    showDailyAlbumMini();
  }

  // Favorites page (tracks + playlist)
  if (document.getElementById("coreFavoritesContainer")) {
    renderCoreFavorites();
    renderUserFavorites();
    loadArtworkForFavorites();

    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.addEventListener("input", e => {
        filterFavorites(e.target.value);
      });
    }
  }

  // My Music page
  if (document.getElementById("myMusicList")) {
    renderMyMusic();

    const sortSelect = document.getElementById("musicSort");
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        applyMusicSort(e.target.value);
      });
    }
  }

  // Recommend page
  const recommendForm = document.getElementById("recommendForm");
  if (recommendForm) {
    renderRecommendations();
    recommendForm.addEventListener("submit", handleRecommendationSubmit);
  }

});

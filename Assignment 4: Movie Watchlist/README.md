# Movie Watchlist

Movie Watchlist is a simple, real-time JavaScript web application for managing a personal movie list.  
Users can add movies, filter by category, sort by rating or title, and remove movies once they have watched them.  
The application runs entirely in the browser with no backend required.

---

## Features

- Add movies with optional category and rating (0–10).
- Search movies in real time by title or category.
- Filter the list by category.
- Sort movies by:
  - Most recent (default)
  - Title (A–Z)
  - Rating (High to Low)
- Remove movies from the list after watching.
- Responsive and clean UI styled with [Materialize CSS](https://materializecss.com/).

---

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- [Materialize](https://materializecss.com/) for UI components and styling

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/liori-01/Heng_INF651.git
cd "Heng_INF651/Assignment 4: Movie Watchlist"
```

### 2. Open the Project
Open `index.html` in any modern web browser. No build tools or server are required.

---

## Project Structure

```
movie-watchlist/
├─ index.html         # Main HTML file
├─ styles.css         # Custom CSS
├─ watchlist.js       # Core JavaScript logic and Materialize initialization
└─ README.md          # Project documentation
```

---

## How It Works

- The watchlist is stored in a JavaScript array in memory.
- Adding a movie appends it to the array and updates the UI.
- Sorting, searching, and filtering operate on the array in real time.
- Removing a movie deletes it from the array and re-renders the list.
- Materialize's FormSelect is used for dropdown styling.

---

## Dependencies

The project uses Materialize via CDN:

```html
<!-- Materialize CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

<!-- Materialize JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
```

No other external dependencies are required.

---

## Contributing

1. Fork the repository.  
2. Create a new branch: `git checkout -b feature/your-feature-name`.  
3. Commit your changes: `git commit -m 'Add your message'`.  
4. Push to your branch: `git push origin feature/your-feature-name`.  
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Credits

Developed using [Materialize](https://materializecss.com/) and vanilla JavaScript.

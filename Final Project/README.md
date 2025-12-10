# Darat's Music Library

An interactive web application that showcases my favorite albums, my own music, and recommendations from visitors. Built as a final JavaScript project to demonstrate DOM manipulation, events, arrays/objects, and overall front end structure.

---

## Table of Contents

- [Overview](#overview)
- [Motivation](#motivation)
- [Features](#features)
- [Pages](#pages)
- [Tech Stack](#tech-stack)
- [JavaScript Concepts Used](#javascript-concepts-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)
- [Credits](#credits)

---

## Overview

**Project Title:** Darat's Music Library  
**Course:** Final JavaScript Project  
**Author:** Makara "Darat" Heng  

This project is an interactive web application called **Darat's Music Library**. It is designed to showcase my understanding of core JavaScript concepts such as:

- Events and user interactions  
- DOM manipulation  
- Arrays and objects  
- Functions and reusable logic  
- Conditional logic and basic data handling  

The site acts as a personal music hub where users can:

- Browse a **3x3 grid of favorite albums**
- Listen to my **original tracks**
- Submit **music recommendations**
- View a **daily album recommendation**

---

## Motivation

I have always thought it would be cool to have my own website where I could:

- Showcase my music  
- Share the albums and artists I love  
- Invite people to recommend music back to me  

Instead of just sending playlists or links in messages, I wanted a space that feels personal, something that looks and feels like "me" and also lets others interact with it.

This project turns that idea into a working web application.  

- The **Favorites** page shows what I am into  
- The **My Tracks** page lets people hear what I have created  
- The **Recommend** page lets visitors suggest new music I might like  

At the same time, it serves as a practical project to apply real JavaScript features in a context I care about.

---

## Features

- **Daily Album Recommendation**
  - Displays one album from my favorites per day using JavaScript and `localStorage`
  - Shows album art, title, artist, year, and links to Spotify

- **3x3 Favorites Grid**
  - A grid of my favorite albums with titles, artists, and metadata
  - Album art is fetched dynamically from the iTunes API
  - Each card links out to Spotify in a new tab

- **My Tracks List**
  - Displays my own tracks with description, mood, year, and audio player
  - Users can sort the list by title or year

- **Recommendation Form**
  - Visitors can submit song or album recommendations
  - Basic validation for required fields (name and title)
  - Recommendations are rendered live on the page as cards

- **Consistent Layout**
  - Vertical side navigation shared across pages
  - Full screen background images and overlay content sections

---

## Pages

### Home (`index.html`)

- Intro to **Darat's Music Library**
- **Daily Album Pill** that shows one favorite album per day
- "Today’s Recommendation" section
- Buttons that link to Favorites and My Tracks

### Favorites / 3x3 Albums (`favorites.html`)

- 3x3 grid of my favorite albums  
- Each album card includes:
  - Album art (fetched via iTunes API)
  - Title, artist, year, and genre
  - Link to Spotify

### My Tracks (`my-music.html`)

- List of my own tracks stored in a JavaScript array
- Each track has:
  - Title, description, mood, year
  - Local audio file (if available)
- Sort dropdown to sort by:
  - Title (A to Z)
  - Year (Newest to Oldest)
  - Year (Oldest to Newest)

### Recommend (`recommend.html`)

- Music recommendation form with:
  - Name (required)
  - Song or album title (required)
  - Artist (optional)
  - Link (optional)
  - Reason (optional)
- Submissions are:
  - Stored in a JavaScript array
  - Rendered dynamically as recommendation cards
  - Shown without reloading the page

---

## Tech Stack

- **HTML5** for structure  
- **CSS3** for layout, styling, and responsive design  
- **JavaScript (ES6)** for interactivity  
- **External API:** iTunes Search API for album artwork  

No backend or build tools are required. This project runs in a browser as a static site.

---

## JavaScript Concepts Used

- **Events**
  - `DOMContentLoaded` for page initialization
  - `click`, `change`, and `submit` event listeners

- **DOM Manipulation**
  - `document.getElementById`, `querySelectorAll`
  - Updating `innerHTML`
  - Dynamically creating and inserting cards and UI elements
  - Setting inline styles for background images

- **Arrays and Objects**
  - `favoriteAlbums` for album data
  - `myMusicTracks` for original tracks
  - `recommendations` for user submitted data

- **Functions and Reusability**
  - `renderMyMusic(list)` to render track cards
  - `applyMusicSort(criteria)` to sort tracks
  - `loadArtworkForAlbumGrid()` to populate album artwork
  - `showDailyAlbumMini()` to display the daily album pill
  - `handleRecommendationSubmit()` and `renderRecommendations()` for form handling

- **Logic, Loops, and Conditionals**
  - Loops to iterate through arrays and NodeLists
  - Conditionals to guard against missing elements
  - Basic form validation and state handling
  - Sorting with custom comparison logic

- **Storage**
  - `localStorage` to store and reuse the daily album selection for each day

---

## Getting Started

### 1. Clone or Download the Repository
```bash
git clone https://github.com/liori-01/Heng_INF651.git
cd Heng_INF651
cd "Final Project"

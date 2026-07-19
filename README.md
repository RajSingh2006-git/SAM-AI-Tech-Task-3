# 🍴 ForkFinder – Restaurant Recommendation System

> **SAM AI Technologies | Task 3**  
> An AI-powered restaurant recommendation web app with smart filters, 3D UI, and beautiful food-themed design.

---

## 🌐 Live Preview

Open `index.html` in any modern browser to run the app locally.

---

## 📸 Features

| Feature | Description |
|---|---|
| 🎬 **Welcome Splash Screen** | Animated intro with time-based greeting (Morning / Afternoon / Evening / Night), orbiting food emojis, and rising particles |
| 🌄 **Food Background Hero** | Full-screen food photo background with Ken Burns zoom effect and floating food emoji decorations |
| 🧊 **3D UI Cards** | Restaurant cards tilt in real-time with mouse movement (±8° X/Y), glowing shadows, and smooth hover transitions |
| 🎯 **Smart Filters** | Filter by **City**, **Cuisine**, **Min Rating** (slider), and **Price Range** |
| 🔍 **Live Search** | Debounced search across restaurant name, cuisine, tags, and description |
| ⚡ **Quick Tags** | One-click filter chips: Italian, Japanese, Indian, Mexican, Chinese, Top Rated, Budget |
| 📊 **Sort Options** | Sort by Highest/Lowest Rated, Name A–Z, Price Low/High |
| 📄 **Pagination** | Loads 9 cards at a time with "Load More" button |
| 🪟 **Detail Modal** | Full restaurant popup with photo, address, hours, phone, website, and top reviews |
| 🍳 **Chef Illustration** | Animated floating chef blended into the food background |
| 🙏 **Thank You Footer** | Shimmer-animated gradient thank you message with bouncing emojis |
| 📱 **Fully Responsive** | Works seamlessly on desktop, tablet, and mobile |

---

## 🗂️ Project Structure

```
restaurant-recommender/
│
├── index.html        # Main HTML — page structure & layout
├── style.css         # All styling — 3D effects, animations, dark theme
├── app.js            # JavaScript — dataset, filters, sorting, rendering
├── chef.jpg          # Chef illustration image
└── README.md         # Project documentation
```

---

## 🍽️ Dataset

The app includes a built-in dataset of **32 restaurants** across:

### 🏙️ Cities
`Mumbai` · `Delhi` · `Bangalore` · `Hyderabad` · `Chennai` · `Pune` · `Goa` · `Dubai`

### 🍜 Cuisines (12 types)
`Italian` · `Japanese` · `Indian` · `Mexican` · `Chinese` · `Thai` · `Mediterranean` · `American` · `Korean` · `Middle Eastern` · `Continental` · `Seafood`

Each restaurant includes:
- Name, cuisine type, city/location
- Star rating & review count
- Price range (`$` to `$$$$`)
- Tags, description, address, hours, phone, website
- 2 top user reviews

---

## ⚙️ How It Works

### Recommendation Logic
```
1. User sets filters (location / cuisine / rating / price / keyword)
2. Dataset is filtered matching ALL active criteria
3. Results are sorted by selected sort option
4. Matching restaurants are displayed as 3D interactive cards
5. Click any card to see full details in a modal popup
```

### Filter Criteria
| Filter | Type | Description |
|---|---|---|
| Location | Dropdown | Filter by city |
| Cuisine | Dropdown | Filter by food type |
| Min Rating | Slider (1–5) | Minimum star rating |
| Price Range | Dropdown | $, $$, $$$, $$$$ |
| Search | Text input | Name, tags, description |

---

## 🚀 Getting Started

### Run Locally
```bash
# Clone the repository
git clone https://github.com/RajSingh2006-git/SAM-AI-Tech-Task-3.git

# Navigate to the project
cd SAM-AI-Tech-Task-3

# Open in browser
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

No dependencies. No build step. Pure HTML + CSS + JavaScript. ✅

---

## 🎨 Design System

| Element | Value |
|---|---|
| **Primary Color** | `#ff5f40` (Coral Orange) |
| **Accent Color** | `#7c3aed` (Violet) |
| **Background** | `#080810` (Deep Dark) |
| **Font** | Outfit (sans-serif) + DM Serif Display |
| **3D Perspective** | `1200px` |
| **Card Tilt** | `±8° Y`, `±5° X` on mouse move |
| **Blend Mode** | `mix-blend-mode: multiply` for chef image |

---

## 🛠️ Technologies Used

- **HTML5** — Semantic structure
- **CSS3** — Custom properties, 3D transforms, `mix-blend-mode`, animations, glassmorphism
- **Vanilla JavaScript** — DOM manipulation, filter logic, IntersectionObserver, MutationObserver
- **Google Fonts** — Outfit + DM Serif Display
- **Unsplash** — Food background & restaurant images

---

## 📋 Task Requirements ✅

> From SAM AI Technologies — Task 3

- [x] Create a system to recommend restaurants based on user preferences
- [x] Use dataset with restaurant details
- [x] Filter data based on criteria (location, cuisine, rating)
- [x] Implement simple recommendation logic
- [x] Display recommended restaurants

---

## 👨‍💻 Author

**Raj Singh**  
SAM AI Technologies Internship — Task 3  
[GitHub Profile](https://github.com/RajSingh2006-git)

---

## 📄 License

This project is built for educational purposes as part of the SAM AI Technologies internship program.

---

<div align="center">
  <strong>🍴 ForkFinder</strong> — Find Your Perfect Table<br/>
  <em>Built with ❤️ for SAM AI Technologies</em>
</div>
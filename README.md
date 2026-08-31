# 🎮 Arcade Craft JS

<div align="center">

![Arcade Craft JS Banner](https://img.shields.io/badge/Arcade%20Craft-JS-FF6B6B?style=for-the-badge&logo=gamepad&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

*A collection of classic arcade games built with pure HTML, CSS, and JavaScript*

</div>

---

## ✨ Description

**Arcade Craft JS** is a curated collection of three classic arcade games reimagined with modern web technologies. Each game is built entirely with vanilla HTML5, CSS3, and JavaScript (ES6+) no frameworks, no build tools, just pure, clean code that runs directly in your browser.

This project showcases clean architecture, responsive design patterns, and smooth animations while delivering an authentic arcade gaming experience.

---

## 🎯 Features At A Glance

| Feature | 🧩 Memory Flip | 🐍 Snake | ⭕ Tic Tac Toe |
|----------|:-------------:|:--------:|:--------------:|
| **Score Tracking** | ✓ | ✓ | ✓ |
| **Timer** | ✓ | — | — |
| **Sound Effects** | — | ✓ | — |
| **Mobile Responsive** | ✓ | ✓ | ✓ |
| **Win Animation** | ✓ | — | ✓ |
| **Local Storage** | — | ✓ | ✓ |
| **Pause/Resume** | — | ✓ | — |

---

## 🕹️ Available Games

### 1. 🧩 Memory Card Flip

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-memory--card--flip.netlify.app-00C7B7?style=for-the-badge)](https://memory-card-flip.netlify.app/)

</div>

A sleek, responsive 3D Memory Card Matching game with smooth CSS animations and brain-challenging gameplay.

**Key Features:**
- **3D Flip Mechanics** — Smooth CSS 3D perspective transformations
- **Smart Matching Engine** — Real-time state management
- **Game Analytics Dashboard** — Live tracking for Moves and Timer
- **Win Condition Overlay** — Celebration modal with performance statistics
- **Mobile-First Design** — Optimized layout scaling from 3-column to 4-column grid

**Tech Stack:** HTML5, CSS3 (Grid, Flexbox, 3D Transforms, Animations), ES6+ JavaScript, Google Fonts (Plus Jakarta Sans)

---

### 2. 🐍 Snake Game

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-snake--game0999.netlify.app-00C7B7?style=for-the-badge)](https://snake-game0999.netlify.app/)

</div>

The classic snake game enhanced with speed progression, audio feedback, and state controls.

**Key Features:**
- **Dynamic Speed Progression** — Speed increases every 5th food consumed
- **Full State Control** — Pause and Resume functionality
- **Audio Feedback Engine** — Custom sound effects on food & game over
- **Collision Detection System** — Precise self-collision algorithm
- **Real-time Score Dashboard** — High-contrast scoreboard
- **Mobile Controls** — Touch-friendly D-pad for mobile devices

**Tech Stack:** HTML5 Canvas API, CSS3, ES6+ JavaScript, Web Audio API

---

### 3. ⭕ Tic Tac Toe

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-tic--tac--toe--333.netlify.app-00C7B7?style=for-the-badge)](https://tic-tac-toe-333.netlify.app/)

</div>

A modern take on the classic Tic Tac Toe with animated win lines and persistent scoreboard.

**Key Features:**
- **Two-Player Gameplay** — Turn-based X and O
- **Win Line Animation** — Smooth animated line between winning cells
- **Automatic Win/Draw Detection** — Horizontal, vertical, diagonal checks
- **Persistent Scoreboard** — Saved to localStorage
- **Responsive Design** — Adapts to all screen sizes
- **SVG Icons** — Custom SVG feature icons

**Tech Stack:** HTML5, CSS3 (Grid, Custom Properties, Animations), ES6+ JavaScript, localStorage API, Google Fonts (Bebas Neue, Manrope)

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/razazaheer12/Arcade-Craft-JS.git

# Navigate to project directory
cd Arcade-Craft-JS

# Open any game in your browser
start index.html  # Windows
# or
open index.html  # macOS
# or
xdg-open index.html  # Linux
```

### Project Structure

```
Arcade-Craft-JS/
│
├── Memory-Card-Flip/          # 🧩 Memory Matching Game
│   ├── index.html             # Game structure
│   ├── script.js              # Game logic
│   ├── style.css              # Styling & animations
│   └── README.md              # Game documentation
│
├── Snake-Game/                # 🐍 Classic Snake Game
│   ├── index.html             # Game structure
│   ├── script.js              # Game logic
│   ├── style.css              # Styling & animations
│   └── README.md              # Game documentation
│
└── Tic-Tac-Toe/               # ⭕ Tic Tac Toe Game
    ├── index.html             # Game structure
    ├── script.js              # Game logic
    ├── style.css              # Styling & animations
    └── README.md              # Game documentation
```

**Tech Stack:**
* **Core:** HTML5, CSS3, JavaScript (ES6+)
* **Layout & Styling:** CSS Grid, Custom Properties (Variables), CSS Keyframe Animations
* **State Management:** Web Storage API (`localStorage`)
* **Typography:** Google Fonts (*Bebas Neue*, *Manrope*)

---

## 🎨 Design Philosophy

### Clean Architecture
Each game follows a modular structure separating concerns:
- **HTML** — Semantic structure and accessibility
- **CSS** — Styling, animations, and responsive design
- **JavaScript** — Game logic and DOM manipulation

### Mobile-First Approach
All games are designed with mobile users in mind:
- Responsive layouts that adapt to all screen sizes
- Touch-friendly controls and buttons
- Optimized performance for mobile devices

### Performance Optimized
- No external dependencies or frameworks
- Minimal file sizes
- Efficient DOM manipulation
- CSS hardware-accelerated animations

---

## 🛠️ Technologies Used

| Technology | Description |
|------------|-------------|
| **HTML5** | Semantic markup and page structure |
| **CSS3** | Styling, animations, and responsive design |
| **JavaScript (ES6+)** | Game logic and DOM manipulation |
| **Canvas API** | Game rendering (Snake Game) |
| **localStorage API** | Score persistence |
| **Web Audio API** | Sound effects (Snake Game) |
| **Google Fonts** | Typography |

---

## 📸 Screenshots

### 🧩 Memory Card Flip
![Memory Card Flip](<img width="914" height="411" alt="Screenshot 2026-08-31 190044" src="https://github.com/user-attachments/assets/618a4927-f824-4b69-8324-2739fa23653b" />
)

### 🐍 Snake Game
![Snake Game](https://github.com/user-attachments/assets/c818b621-6d5b-4dc0-a572-5b1af4ad1732)

### ⭕ Tic Tac Toe
![Tic Tac Toe](<img width="392" height="397" alt="image" src="https://github.com/user-attachments/assets/381fa21d-3d24-41d1-b98a-9a81fa073ff7" />
)

---

## 🔮 Future Roadmap

- [ ] Add difficulty levels (Easy, Medium, Hard)
- [ ] Implement sound effects across all games
- [ ] Add thematic card/skin customization
- [ ] Integrate localStorage for high scores (Memory Flip)
- [ ] Add multiplayer support for Tic Tac Toe
- [ ] Create a unified game launcher
- [ ] Add mobile touch/swipe controls (Snake Game)
- [ ] Implement leaderboard system
- [ ] Add dark/light theme toggle
- [ ] Create a game selection menu

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create.

```bash
# 1. Fork the Project
# 2. Create your Feature Branch
git checkout -b feature/AmazingFeature

# 3. Commit your Changes
git commit -m 'Add some AmazingFeature'

# 4. Push to the Branch
git push origin feature/AmazingFeature

# 5. Open a Pull Request
```

---

## 📜 License

This project is distributed under the MIT License.

```
MIT License

Copyright (c) 2026 Arcade Craft JS
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction.
```

---

## 👨‍💻 Author

### **Raza Zaheer**

- GitHub: [@razazaheer12](https://github.com/razazaheer12)
- Portfolio: [@razazaheer](https://raza-zaheer-portfolio-web-developer.vercel.app/)
- LinkedIn: [Raza Zaheer](https://linkedin.com/in/razazaheer)

*Building the future of web gaming, one game at a time.*

---

<div align="center">

⭐ **If you found this project helpful, please give it a star!** ⭐

**Made with ❤️ and JavaScript**

</div>

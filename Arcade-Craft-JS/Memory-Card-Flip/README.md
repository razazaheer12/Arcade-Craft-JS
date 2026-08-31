# 🧩 MemoryFlip - Brain Matching Game

A sleek, responsive 3D Memory Card Matching game engineered with HTML5, CSS3 Grid/Animations, and modern Vanilla JavaScript (ES6+). Built with a **Mobile-First Approach** to ensure seamless gameplay across all screen sizes—from smartphones to 4K desktop displays.

<img width="959" height="430" alt="image" src="https://github.com/user-attachments/assets/8bbc8c97-cda9-4ff3-9ce3-b6b41864ff9d" />

### 🧩 Memory Card Flip

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-memory--card--flip.netlify.app-00C7B7?style=for-the-badge)](https://memory-card-flip.netlify.app/)

</div>

---

## 🎮 Key Features

* **Mobile-First Design:** Optimized layout scaling dynamically from a `3-column` grid on mobile devices to a `4-column` grid on screens wider than `480px`.
* **3D Flip Mechanics:** Smooth CSS 3D perspective transformations (`rotateY`) on card tap/click.
* **Smart Matching Engine:** Real-time state management tracking opened pairs, applying active visual feedback for matched items, and locking board input during flips.
* **Game Analytics Dashboard:** Live tracking for total **Moves** and active **Timer**.
* **Win Condition Overlay:** Custom modal celebrating completion with detailed performance statistics.
* **Minimalist Aesthetic:** Clean slate visual design with glassmorphism elements and high-contrast status feedback.

---

## 🕹️ How to Play

1. Tap or click any card to reveal its icon.
2. Select a second card to find its matching pair.
3. If both cards match, they will stay face-up with a green highlight indicator.
4. If they don't match, both cards will flip back automatically after a brief delay.
5. Complete all pairs in the fewest moves and fastest time possible!

---

## 📁 Project Structure

```
memory-card-game/
├── index.html          # Main HTML structure
├── script.js           # Game logic and interactions
├── style.css           # Styling with CSS3 animations and responsive design
└── README.md           # Project documentation
```

---

## 🛠️ Technologies Used

* **HTML5** - Semantic markup structure
* **CSS3** - Custom properties, Flexbox, Grid, 3D Transforms, Animations
* **JavaScript (ES6+)** - Modern vanilla JS for game logic
* **Google Fonts** - Plus Jakarta Sans for typography
* **Responsive Design** - Mobile-first approach with breakpoint at 480px

---

## 📸 Preview

![alt text](<Screenshot 2026-08-31 190044.png>)
![alt text](<Screenshot 2026-08-31 190117.png>)

---

## 🚀 Getting Started

1. **Clone or download** this repository
2. **Open** `index.html` in any modern web browser
3. **Enjoy playing** the memory matching game!

*No build tools or dependencies required - pure HTML/CSS/JS*

---

## 📱 Responsiveness

The game adapts to different screen sizes:
- **Mobile (< 480px):** 3-column grid layout (12 cards arranged in 4 rows)
- **Tablet/Desktop (≥ 480px):** 4-column grid layout (12 cards arranged in 3 rows)

---

## 🎯 Future Enhancements

* Add difficulty levels (easy, medium, hard)
* Implement sound effects for flips and matches
* Add thematic card sets (animals, fruits, emojis, etc.)
* Include localStorage to track high scores
* Add multiplayer mode

---

## 💡 How It Works

The game uses CSS 3D transforms for the card flipping animation. Each card has a front face (showing a question mark) and a back face (showing the emoji symbol). When clicked, the card rotates 180 degrees on the Y-axis to reveal its symbol. Matching logic is handled in JavaScript, tracking flipped cards and checking for matches.

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author 

**Raza Zaheer**
* GitHub: [@razazaheer12](https://github.com/razazaheer12)



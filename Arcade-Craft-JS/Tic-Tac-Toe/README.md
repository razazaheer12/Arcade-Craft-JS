## 🎮 Tic Tac Toe Game

A modern Tic Tac Toe game built with HTML, CSS, and JavaScript. Play two-player turn-based gameplay with automatic win/draw detection, a persisted scoreboard, and an animated win line drawn between winning cells!

![Tic Tac Toe](https://github.com/user-attachments/assets/dc851b82-1153-45ef-942f-e83152032201


## 🎯 Features

👥 **Two-player** turn-based gameplay

🏆 **Automatic** win / draw detection

📊 **Real-time** event handling with visual feedback

🎨 **Animated** win line drawn between winning cells

💾 **Persisted** scoreboard (saved to localStorage)

🔄 **Instant** restart option

📱 **Responsive** design for all screen sizes



## 📸 Screenshots
<img width="1536" height="1024" alt="Tic Tac Toe Game View" src="https://github.com/user-attachments/assets/tictactoe-view.png" />

<img width="1536" height="1024" alt="Tic Tac Toe Win Animation" src="https://github.com/user-attachments/assets/tictactoe-win.png" />


## 🚀 Getting Started

## Open in Browser

Simply open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge) to start playing!

No server or build tools required - this is a static web application.



## 🛠️ Project Structure

tic-tac-toe/

│── index.html      # Game layout and structure
│── style.css       # Game styling and animations
│── script.js       # Game logic and functionality
│── README.md       # Project documentation



## 🎮 How to Play

1. Open `index.html` in your web browser

2. Click on any cell to place an **X** (Player X goes first)

3. Players take turns clicking empty cells:
   - Player X places **X** marks (blue)
   - Player O places **O** marks (red)

4. The game automatically detects:
   - **Win**: Three matching marks in a row (horizontal, vertical, or diagonal)
   - **Draw**: All cells filled with no winner

5. When a player wins, an animated line connects the winning cells

6. Scores are automatically updated and saved to localStorage

7. Click **Restart Round** to play again (scores persist)

8. Refresh the page to reset all scores



## 📂 Tech Stack

**HTML5** – Semantic page structure, accessible game board

**CSS3** – Modern styling with CSS Grid, custom properties, animations, and responsive design

**JavaScript (ES6)** – Game logic, DOM manipulation, event handling, localStorage persistence

**Web APIs** – `localStorage` for score persistence, `getBoundingClientRect` for win-line positioning



## 🌟 Game Features Explained

### Turn Indicator
- Shows which player's turn it is
- Color-coded: blue for X, red for O

### Win Line Animation
- Smoothly draws a line between winning cells
- Uses `getBoundingClientRect()` for precise positioning
- Works on window resize

### Scoreboard
- Tracks wins for Player X (blue)
- Tracks wins for Player O (red)
- Tracks draw games
- Persists across page refreshes via localStorage

### Responsive Design
- Adapts to smaller screens
- Mobile-friendly touch targets
- Maintains aspect ratio on all devices



## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

To contribute:

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📜 License

This project is licensed under the MIT License – feel free to use, modify, and distribute.

## 👨‍💻 Author

Developed by RazaZaheer12 🚀

Developed as a clean, modern implementation of the classic Tic Tac Toe game demonstrating HTML, CSS, and JavaScript best practices.

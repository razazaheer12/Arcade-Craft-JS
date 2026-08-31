/* ---------------------------------------------------------------
   Tic Tac Toe
   Two-player turn-based game with automatic win/draw detection,
   a persisted scoreboard, and an animated win line drawn between
   the winning cells' real on-screen positions.
--------------------------------------------------------------- */

const WIN_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // columns
  [0, 4, 8],
  [2, 4, 6], // diagonals
];

const SCORES_KEY = "tttScores";

const boardEl = document.getElementById("board");
const boardWrapEl = document.querySelector(".board-wrap");
const cells = Array.from(document.querySelectorAll(".cell"));
const statusEl = document.getElementById("status");
const winLineEl = document.getElementById("win-line");
const restartBtn = document.getElementById("restart-btn");

const scoreXEl = document.getElementById("score-x");
const scoreOEl = document.getElementById("score-o");
const scoreDrawEl = document.getElementById("score-draw");

let board = Array(9).fill(null);
let currentPlayer = "X";
let gameActive = true;
let scores = { X: 0, O: 0, draw: 0 };

function loadScores() {
  try {
    const saved = JSON.parse(localStorage.getItem(SCORES_KEY));
    if (saved && typeof saved.X === "number") return saved;
  } catch (e) {
    /* fall through to defaults */
  }
  return { X: 0, O: 0, draw: 0 };
}

function saveScores() {
  localStorage.setItem(SCORES_KEY, JSON.stringify(scores));
}

function renderScores() {
  scoreXEl.textContent = scores.X;
  scoreOEl.textContent = scores.O;
  scoreDrawEl.textContent = scores.draw;
}

function updateStatus() {
  const colorClass = currentPlayer === "X" ? "x-color" : "o-color";
  statusEl.innerHTML = `Player <span class="${colorClass}">${currentPlayer}</span>'s turn`;
}

function getWinningCombo() {
  return (
    WIN_COMBOS.find(
      ([a, b, c]) => board[a] && board[a] === board[b] && board[a] === board[c],
    ) || null
  );
}

function drawWinLine(combo) {
  const wrapRect = boardWrapEl.getBoundingClientRect();
  const startRect = cells[combo[0]].getBoundingClientRect();
  const endRect = cells[combo[2]].getBoundingClientRect();

  const startX = startRect.left + startRect.width / 2 - wrapRect.left;
  const startY = startRect.top + startRect.height / 2 - wrapRect.top;
  const endX = endRect.left + endRect.width / 2 - wrapRect.left;
  const endY = endRect.top + endRect.height / 2 - wrapRect.top;

  const dx = endX - startX;
  const dy = endY - startY;
  const angleRad = Math.atan2(dy, dx);
  const angleDeg = angleRad * (180 / Math.PI);
  const length = Math.hypot(dx, dy) + 34; // small overhang past the outer cells
  const extend = 17;

  winLineEl.style.width = `${length}px`;
  winLineEl.style.left = `${startX - extend * Math.cos(angleRad)}px`;
  winLineEl.style.top = `${startY - extend * Math.sin(angleRad) - 3}px`;
  winLineEl.style.transform = `rotate(${angleDeg}deg)`;
  winLineEl.classList.add("show");
}

function handleCellClick(event) {
  const index = Number(event.currentTarget.dataset.index);
  if (!gameActive || board[index]) return;

  board[index] = currentPlayer;
  const cell = cells[index];
  cell.textContent = currentPlayer;
  cell.classList.add(currentPlayer.toLowerCase());
  cell.disabled = true;

  const winningCombo = getWinningCombo();

  if (winningCombo) {
    gameActive = false;
    winningCombo.forEach((i) => cells[i].classList.add("win"));
    drawWinLine(winningCombo);
    cells.forEach((c) => (c.disabled = true));

    scores[currentPlayer] += 1;
    renderScores();
    saveScores();

    const colorClass = currentPlayer === "X" ? "x-color" : "o-color";
    statusEl.innerHTML = `Player <span class="${colorClass}">${currentPlayer}</span> wins!`;
    return;
  }

  if (board.every(Boolean)) {
    gameActive = false;
    scores.draw += 1;
    renderScores();
    saveScores();
    statusEl.textContent = "It's a draw!";
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  updateStatus();
}

function resetRound() {
  board = Array(9).fill(null);
  currentPlayer = "X";
  gameActive = true;

  cells.forEach((cell) => {
    cell.textContent = "";
    cell.className = "cell";
    cell.disabled = false;
  });

  winLineEl.classList.remove("show");
  winLineEl.style.width = "0";

  updateStatus();
}

cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
restartBtn.addEventListener("click", resetRound);
window.addEventListener("resize", () => {
  // keep the win line aligned with the board if it's currently shown
  if (!gameActive) {
    const combo = getWinningCombo();
    if (combo) drawWinLine(combo);
  }
});

scores = loadScores();
renderScores();
resetRound();
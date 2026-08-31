// Aesthetic Emoji Icons List
const items = ['🚀', '👾', '🎨', '🧩', '⚡', '🥑'];

let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let timer = null;
let secondsPassed = 0;
let isGameStarted = false;
let isBoardLocked = false;

// DOM Elements
const gridContainer = document.getElementById('grid');
const movesElement = document.getElementById('moves');
const timerElement = document.getElementById('timer');
const restartBtn = document.getElementById('restart-btn');
const winModal = document.getElementById('win-modal');
const playAgainBtn = document.getElementById('play-again-btn');
const finalMovesElement = document.getElementById('final-moves');
const finalTimeElement = document.getElementById('final-time');

// Initialize Game
function initGame() {
  // Reset Variables
  gridContainer.innerHTML = '';
  flippedCards = [];
  matchedPairs = 0;
  moves = 0;
  secondsPassed = 0;
  isGameStarted = false;
  isBoardLocked = false;
  
  movesElement.textContent = '0';
  timerElement.textContent = '00:00';
  clearInterval(timer);
  winModal.classList.add('hidden');

  // Duplicate items for pairing & shuffle
  const deck = [...items, ...items].sort(() => Math.random() - 0.5);

  // Render Cards
  deck.forEach((symbol) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.symbol = symbol;

    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">✦</div>
        <div class="card-back">${symbol}</div>
      </div>
    `;

    card.addEventListener('click', () => handleCardClick(card));
    gridContainer.appendChild(card);
  });
}

// Start Timer Logic
function startTimer() {
  timer = setInterval(() => {
    secondsPassed++;
    const mins = String(Math.floor(secondsPassed / 60)).padStart(2, '0');
    const secs = String(secondsPassed % 60).padStart(2, '0');
    timerElement.textContent = `${mins}:${secs}`;
  }, 1000);
}

// Card Click Event Handler
function handleCardClick(card) {
  if (isBoardLocked || card.classList.contains('flipped') || card.classList.contains('matched')) {
    return;
  }

  if (!isGameStarted) {
    isGameStarted = true;
    startTimer();
  }

  card.classList.add('flipped');
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    updateMoves();
    checkMatch();
  }
}

// Update Move Counter
function updateMoves() {
  moves++;
  movesElement.textContent = moves;
}

// Check Matching Cards
function checkMatch() {
  const [card1, card2] = flippedCards;
  const isMatch = card1.dataset.symbol === card2.dataset.symbol;

  if (isMatch) {
    card1.classList.add('matched');
    card2.classList.add('matched');
    flippedCards = [];
    matchedPairs++;

    if (matchedPairs === items.length) {
      endGame();
    }
  } else {
    isBoardLocked = true;
    setTimeout(() => {
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');
      flippedCards = [];
      isBoardLocked = false;
    }, 900);
  }
}

// End Game Modal Trigger
function endGame() {
  clearInterval(timer);
  setTimeout(() => {
    finalMovesElement.textContent = moves;
    finalTimeElement.textContent = timerElement.textContent;
    winModal.classList.remove('hidden');
  }, 500);
}

// Event Listeners
restartBtn.addEventListener('click', initGame);
playAgainBtn.addEventListener('click', initGame);

// Start game on load
initGame();
let currentIndex = 0;
let shuffledItems = [];
let totalScore = 0;
const maxRounds = 5;

window.onload = () => {
  startGame();
};

function startGame() {
  shuffledItems = shuffleArray(data).slice(0, maxRounds);
  currentIndex = 0;
  totalScore = 0;
  document.getElementById('guess-mode').classList.remove('hidden');
  document.getElementById('game-over').classList.add('hidden');
  document.getElementById('guess-score').textContent = `Punteggio totale: ${totalScore}`;
  loadNextItem();
}

function loadNextItem() {
  const item = shuffledItems[currentIndex];
  const container = document.getElementById('guess-card');
  
  container.innerHTML = `
    <h3>${item.name}</h3>
    <img src="${item.image}" alt="${item.name}" class="item-image" />
    <p id="round-description" style="margin-top: 10px;"></p>
  `;

  document.getElementById('year-input').value = '';

  // Nascondi punteggio e freccia ad ogni nuovo round
  document.getElementById('score-area').classList.add('hidden');
  document.getElementById('next-round-btn').classList.add('hidden');

  // Mostra input e bottone invia
  document.getElementById('input-area').classList.remove('hidden');

  // Resetta descrizione e punteggio round
  document.getElementById('round-score').textContent = '';
  document.getElementById('round-description').textContent = '';

  // Aggiorna titolo
  document.getElementById('guess-round-title').textContent = `Round ${currentIndex + 1}/${maxRounds}`;

  // Abilita input e bottone
  document.getElementById('year-input').disabled = false;
  document.getElementById('submit-btn').disabled = false;
}

function submitGuess() {
  const input = document.getElementById('year-input');
  const userYear = parseInt(input.value);
  if (isNaN(userYear)) {
    alert('Inserisci un numero valido');
    return;
  }

  const correctYear = shuffledItems[currentIndex].year;
  const scoreThisTurn = calculatePoints(userYear, correctYear);
  totalScore += scoreThisTurn;

  // Mostra descrizione con anno corretto senza la parola "Descrizione:"
  document.getElementById('round-description').textContent = `${shuffledItems[currentIndex].description} (${correctYear})`;

  // Mostra punteggio round e totale
  document.getElementById('round-score').textContent = `Punti ottenuti: ${scoreThisTurn}`;
  document.getElementById('guess-score').textContent = `Punteggio totale: ${totalScore}`;

  // Nascondi input e bottone invia
  document.getElementById('input-area').classList.add('hidden');

  // Mostra area punteggi
  document.getElementById('score-area').classList.remove('hidden');

  // Mostra pulsante avanti
  document.getElementById('next-round-btn').classList.remove('hidden');
}

function nextRound() {
  currentIndex++;
  if (currentIndex < maxRounds) {
    loadNextItem();
  } else {
    endGame();
  }
}

function calculatePoints(userYear, correctYear) {
  const maxScore = 5000;
  const error = Math.abs(userYear - correctYear);

  const baseYear = Math.max(1, Math.abs(correctYear));
  const difficulty = Math.log10(baseYear + 1);
  const penalty = error / difficulty;

  const score = Math.max(0, Math.round(maxScore * Math.exp(-penalty / 50)));

  return score;
}

function endGame() {
  document.getElementById('guess-mode').classList.add('hidden');
  document.getElementById('game-over').classList.remove('hidden');
  document.getElementById('final-score').textContent = `Punteggio totale: ${totalScore}`;
}

function restartGame() {
  startGame();
}

// Utility per mischiare gli elementi
function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

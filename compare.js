// compare.js
let currentStreak = 0;
let recordStreak = 0;
let currentPair = [];
let keepItem = null;
let keepCounter = 0;
let awaitingNext = false;

window.onload = () => {
  currentStreak = 0;
  recordStreak = 0;
  keepItem = null;
  keepCounter = 0;
  loadNewPair();
};

function loadNewPair() {
  const candidates = [...data];
  if (keepItem) {
    const index = candidates.findIndex(item => item.name === keepItem.name);
    if (index !== -1) candidates.splice(index, 1);
  }
  const item2 = candidates[Math.floor(Math.random() * candidates.length)];
  const item1 = keepItem || data[Math.floor(Math.random() * data.length)];

  currentPair = [item1, item2];
  awaitingNext = false;

  const container = document.getElementById('compare-cards');
  container.innerHTML = '';

  currentPair.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <h3>${item.name}</h3>
      <img src="${item.image}" alt="${item.name}" class="item-image" />
      <p>${item.description}</p>
    `;
    div.onclick = () => checkAnswer(index);
    container.appendChild(div);
  });
}

function checkAnswer(indexSelected) {
  if (awaitingNext) return;

  const selected = currentPair[indexSelected];
  const other = currentPair[1 - indexSelected];
  const correct = selected.year >= other.year;

  const container = document.getElementById('compare-cards');
  container.innerHTML = '';

  currentPair.forEach((item) => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <h3>${item.name}</h3>
      <img src="${item.image}" alt="${item.name}" class="item-image" />
      <p>${item.description}</p>
      <p><strong>Anno:</strong> ${item.year}</p>
    `;
    container.appendChild(div);
  });

  if (correct) {
    currentStreak++;
    document.getElementById('compare-score').textContent = `Punteggio: ${currentStreak}`;

    if (keepItem && keepItem.name === selected.name) {
      keepCounter++;
    } else {
      keepItem = selected;
      keepCounter = 1;
    }

    if (keepCounter >= 2) {
      keepItem = null;
      keepCounter = 0;
    }

    awaitingNext = true;
    setTimeout(loadNewPair, 2000);
  } else {
    if (currentStreak > recordStreak) recordStreak = currentStreak;
    showGameOver();
  }
}

function showGameOver() {
  document.getElementById('compare-mode').classList.add('hidden');
  document.getElementById('game-over').classList.remove('hidden');
}

function restartGame() {
  currentStreak = 0;
  keepItem = null;
  keepCounter = 0;
  document.getElementById('compare-score').textContent = 'Punteggio: 0';
  document.getElementById('game-over').classList.add('hidden');
  document.getElementById('compare-mode').classList.remove('hidden');
  loadNewPair();
}

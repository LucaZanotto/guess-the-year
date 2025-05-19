// script.js
let currentMode = '';
let currentStreak = 0;
let recordStreak = 0;
let currentPair = [];
let keepItem = null;
let keepCounter = 0;
let awaitingNext = false;

function startGame(mode) {
  currentMode = mode;
  document.getElementById('mode-selection').classList.add('hidden');
  document.getElementById('game-area').classList.remove('hidden');

  if (mode === 'compare') {
    document.getElementById('compare-mode').classList.remove('hidden');
    currentStreak = 0;
    recordStreak = 0;
    keepItem = null;
    keepCounter = 0;
    loadNewPair();
  }
}

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

  const container = document.getElementById('compare-cards');
  container.innerHTML = '';

  const correct = selected.year >= other.year;

  currentPair.forEach((item, index) => {
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
    setTimeout(() => {
      const candidates = [...data];
      if (keepItem) {
        const index = candidates.findIndex(item => item.name === keepItem.name);
        if (index !== -1) candidates.splice(index, 1);
      }
      const newItem = candidates[Math.floor(Math.random() * candidates.length)];
      const newPair = keepItem ? [keepItem, newItem] : [data[Math.floor(Math.random() * data.length)], newItem];
      currentPair = newPair;

      const container = document.getElementById('compare-cards');
      container.innerHTML = '';

      currentPair.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
          <h3>${item.name}</h3>
          <img src="${item.image}" alt="${item.name}" class="item-image" />
          <p>${item.description}</p>
          ${item === keepItem ? `<p><strong>Anno:</strong> ${item.year}</p>` : ''}
        `;
        div.onclick = () => checkAnswer(index);
        container.appendChild(div);
      });

      awaitingNext = false;
    }, 2000);
  } else {
    alert(`Sbagliato! ${selected.name} è del ${selected.year}, ma ${other.name} è del ${other.year}`);
    if (currentStreak > recordStreak) recordStreak = currentStreak;
    alert(`Streak terminata. Record: ${recordStreak}`);
    currentStreak = 0;
    document.getElementById('compare-score').textContent = 'Punteggio: 0';
    keepItem = null;
    keepCounter = 0;
    loadNewPair();
  }
}
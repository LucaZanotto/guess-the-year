let currentStreak = 0;
let recordStreak = 0;

let keepItem = null;     // Carta scelta da tenere (max 2 turni)
let keepCounter = 0;     // Contatore turni consecutivi della keepItem
let otherItem = null;    // Carta non scelta dal turno precedente

let awaitingNext = false;
let currentPair = [];
let shownItems = [];

window.onload = () => {
  currentStreak = 0;
  recordStreak = 0;
  keepItem = null;
  keepCounter = 0;
  otherItem = null;
  awaitingNext = false;
  loadNewPair();
};

function loadNewPair() {
  let candidates = data.filter(item => !shownItems.find(shown => shown.name === item.name));

  if (keepItem) {
    candidates = candidates.filter(item => item.name !== keepItem.name);
  }

  if (candidates.length === 0) {
    alert("Hai visto tutti gli elementi disponibili!");
    shownItems = [];
    loadNewPair();
    return;
  }

  let item1, item2;

  if (keepItem && keepCounter < 2) {
    item1 = keepItem;
    item2 = candidates[Math.floor(Math.random() * candidates.length)];
  } else if (keepItem && keepCounter >= 2) {
    if (!otherItem) {
      const idx1 = Math.floor(Math.random() * candidates.length);
      item1 = candidates[idx1];
      candidates.splice(idx1, 1);
      item2 = candidates[Math.floor(Math.random() * candidates.length)];
    } else {
      item1 = otherItem;
      candidates = candidates.filter(item => item.name !== item1.name);
      if (candidates.length === 0) {
        alert("Hai visto tutti gli elementi disponibili!");
        shownItems = [];
        loadNewPair();
        return;
      }
      item2 = candidates[Math.floor(Math.random() * candidates.length)];
      keepItem = null;
      keepCounter = 0;
      otherItem = null;
    }
  } else {
    const idx1 = Math.floor(Math.random() * candidates.length);
    item1 = candidates[idx1];
    candidates.splice(idx1, 1);
    item2 = candidates[Math.floor(Math.random() * candidates.length)];
  }

  currentPair = [item1, item2];
  awaitingNext = false;

  // Aggiorna shownItems con i nuovi elementi, senza duplicati
  if (!shownItems.find(i => i.name === item1.name)) shownItems.push(item1);
  if (!shownItems.find(i => i.name === item2.name)) shownItems.push(item2);

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

    // Aggiorna keepItem e keepCounter in base alla carta scelta
    if (keepItem && keepItem.name === selected.name) {
      keepCounter++;
    } else {
      keepItem = selected;
      keepCounter = 1;
    }

    // Aggiorna otherItem in base alla carta non scelta
    otherItem = other;

    awaitingNext = true;
    setTimeout(loadNewPair, 2000);
  } else {
    if (currentStreak > recordStreak) recordStreak = currentStreak;
    showGameOver();
  }
}

function showGameOver() {
  console.log('showGameOver called, currentStreak:', currentStreak);

  document.getElementById('compare-mode').classList.add('hidden');
  document.getElementById('game-over').classList.remove('hidden');

  document.getElementById('final-score').textContent = `Total score: ${currentStreak}`;

  if (currentStreak > recordStreak) recordStreak = currentStreak;
}

function restartGame() {
  currentStreak = 0;
  keepItem = null;
  keepCounter = 0;
  otherItem = null;
  shownItems = [];
  awaitingNext = false;

  document.getElementById('compare-score').textContent = 'Punteggio: 0';
  document.getElementById('game-over').classList.add('hidden');
  document.getElementById('compare-mode').classList.remove('hidden');

  loadNewPair();
}

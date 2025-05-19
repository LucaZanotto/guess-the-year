let currentStreak = 0;
let recordStreak = 0;

let keepItem = null;
let keepCounter = 0;
let otherItem = null;

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
    if (keepItem && keepItem.name === selected.name) {
      keepCounter++;
    } else {
      keepItem = selected;
      keepCounter = 1;
    }
    otherItem = other;
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
  document.getElementById('final-score').textContent = `Total score: ${currentStreak}`;

  const range = getScoreRange(currentStreak);
  const gifs = {
    "0-3": "gif/gif_0-3/",
    "4-8": "gif/gif_4-8/",
    "9-15": "gif/gif_9-15/",
    "16+": "gif/gif_16/"
  };

  const gifFolder = gifs[range];
  const gifList = [
    "1.gif", "2.gif", "3.gif", "4.gif", "5.gif", "6.gif", "7.gif", "8.gif", "9.gif"// Aggiungi qui i nomi reali delle gif
  ];
  const randomGif = gifList[Math.floor(Math.random() * gifList.length)];

  document.getElementById('game-over-bg').src = `${gifFolder}${randomGif}`;

  const fraseList = frasi[range];
  const fraseRandom = fraseList[Math.floor(Math.random() * fraseList.length)];
  document.getElementById('final-phrase').textContent = fraseRandom;
}

function getScoreRange(score) {
  if (score <= 3) return "0-3";
  if (score <= 8) return "4-8";
  if (score <= 15) return "9-15";
  return "16+";
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

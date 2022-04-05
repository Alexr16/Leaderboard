const scores = [];
const display = () => {
  const scoreList = document.getElementById('score-list');
  for (let i = 0; i < scores.length; i += 1) {
    const scoreContainer = document.createElement('div');
    scoreContainer.classList.add('scores-container');
    scoreContainer.innerHTML = `
        <p>${scores[i].name}: ${scores[i].score}</p>
    `;
    scoreList.appendChild(scoreContainer);
  }
};

const add = () => {
  const nameInput = document.getElementById('name-form');
  const scoreInput = document.getElementById('score-form');
  if (nameInput.value) {
    const name = nameInput.value;
    const score = scoreInput.value;
    scores.push({ name, score });
    nameInput.value = null;
    scoreInput.value = null;
  }
};

export { add, display };
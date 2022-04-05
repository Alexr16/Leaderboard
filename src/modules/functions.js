const scores = [];
const display = (name, score) => {
  const scoreList = document.getElementById('score-list');
  const scoreContainer = document.createElement('div');
  scoreContainer.classList.add('scores-container');
  scoreContainer.innerHTML = `
        <p>${name}: ${score}</p>
    `;
  scoreList.appendChild(scoreContainer);
};

const add = () => {
  const nameInput = document.getElementById('name-form');
  const scoreInput = document.getElementById('score-form');
  if (nameInput.value) {
    const name = nameInput.value;
    const score = scoreInput.value;
    scores.push({ name, score });
    display(name, score);
    nameInput.value = null;
    scoreInput.value = null;
  }
};

export { add, display };
import { getUsers, createUser } from './api.js';

const scoreList = document.getElementById('score-list');

const display = async () => {
  const data = await getUsers();
  while (scoreList.firstChild) {
    scoreList.removeChild(scoreList.firstChild);
  }
  data.result.forEach((entry) => scoreList.insertAdjacentHTML('beforeend', `
          <div class="scores-container">
            <p>${entry.user}: ${entry.score}</p>
          </div>
      `));
};

const add = () => {
  const nameInput = document.getElementById('name-form');
  const scoreInput = document.getElementById('score-form');
  if (nameInput.value !== '' && scoreInput.value !== '') {
    const data = {
      user: nameInput.value,
      score: scoreInput.value,
    };
    createUser(data);
    nameInput.value = null;
    scoreInput.value = null;
  }
};

export { add, display };

const urlScores = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6D6w3ZmO81UdfoRZx52e/scores/';

const createUser = async (data) => {
  const response = await fetch(urlScores, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: data.user,
      score: data.score,
    }),
  });
  const res = await response.json();
  return res;
};

const getUsers = async () => {
  const response = await fetch(urlScores);
  const users = await response.json();
  return users;
};

export { createUser, getUsers };

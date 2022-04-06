const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

const createGame = async (data) => {
  const response = await fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify({
      name: data.name,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  return response.json();
};

const gameIdFromStorage = () => {
  const localStorageID = localStorage.getItem('ID')
    ? JSON.parse(localStorage.getItem('ID'))
    : null;
  return localStorageID;
};

const saveGameLs = () => {
  const data = {
    name: 'my new game',
  };
  if (!gameIdFromStorage()) {
    window.addEventListener('load', async () => {
      const { result } = await createGame(data);
      const gameID = result.substr(14, 20);
      console.log(gameID);
    });
  }
};

export default saveGameLs;

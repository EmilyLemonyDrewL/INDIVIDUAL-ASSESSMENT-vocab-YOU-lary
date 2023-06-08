import client from '../utils/client';

// Make the API calls for the vocabulary cards
const endpoint = client.databaseURL;

// TODO: GET ALL VOCAB CARDS
const getVocabCards = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabCards.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// TODO: GET SINGLE VOCAB CARD
const getOneVocabCard = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabCards/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

// FILTER CARDS BY CATEGORY
const selectVocabCategory = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabCards.json?orderBy="uid"&equalTo="${uid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const selectVocabCategories = Object.values(data).filter((item) => item.category); resolve(selectVocabCategories);
    })
    .catch(reject);
});

// TODO: CREATE VOCAB CARD
const createVocabCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabCards.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: UPDATE VOCAB CARD
const updateVocabCards = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabCards/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// TODO: FILTER CARDS BY CATEGORY
const vocabWebDev = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabCards.json?orderBy="category"&equalTo="Web Development"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const whichCategory = Object.values(data).filter((item) => item.category);
      resolve(whichCategory);
    })
    .catch(reject);
});

const vocabHerp = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabCards.json?orderBy="category"&equalTo="Herpetology"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const whichCategory = Object.values(data).filter((item) => item.category);
      resolve(whichCategory);
    })
    .catch(reject);
});

const vocabCraft = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabCards.json?orderBy="category"&equalTo="Crafting"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const whichCategory = Object.values(data).filter((item) => item.category);
      resolve(whichCategory);
    })
    .catch(reject);
});

// TODO: DELETE VOCAB CARD
const deleteVocabCard = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabCards/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  vocabWebDev,
  vocabHerp,
  vocabCraft,
  getVocabCards,
  deleteVocabCard,
  getOneVocabCard,
  createVocabCard,
  updateVocabCards,
  selectVocabCategory
};

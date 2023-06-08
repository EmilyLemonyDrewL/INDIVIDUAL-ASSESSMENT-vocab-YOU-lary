import {
  getVocabCards, vocabCraft, vocabHerp, vocabWebDev
} from '../api/vocabData';
import addVocabForm from '../components/forms/addVocabForm';
import { showVocab } from '../pages/vocabCards';
import { signOut } from '../utils/auth';

const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  // GET 'ADD A CARD' FORM TO SHOW
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('add-vocab-btn')) {
      addVocabForm();
    }
  });

  // All VOCAB CARDS
  document.querySelector('#show-all-cards').addEventListener('click', () => {
    getVocabCards(user.uid).then(showVocab);
  });

  // TODO: VOCAB BY CATEGORY
  document.querySelector('#category-1').addEventListener('click', () => {
    vocabWebDev(user.uid).then(showVocab);
  });

  document.querySelector('#category-2')
    .addEventListener('click', () => {
      vocabHerp(user.uid).then(showVocab);
    });

  document.querySelector('#category-3').addEventListener('click', () => {
    vocabCraft(user.uid).then(showVocab);
  });

  // END OF navigationEvents
};
export default navigationEvents;

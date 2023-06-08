import { getVocabCards } from '../api/vocabData';
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
};
export default navigationEvents;

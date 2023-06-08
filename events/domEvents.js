import {
  deleteVocabCard, getOneVocabCard, getVocabCards
} from '../api/vocabData';
import addVocabForm from '../components/forms/addVocabForm';
import { showVocab } from '../pages/vocabCards';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A CARD
    if (e.target.id.includes('delete-word')) {
    // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure that you want to delete this vocabulary card?')) {
        console.warn('CLICKED DELETE CARD', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocabCard(firebaseKey).then(() => {
          getVocabCards(user.uid).then(showVocab);
        });
      }
    }

    // CLICK EVENT TO SHOW FORM FOR ADDING A CARD
    if (e.target.id.includes('add-vocab-btn')) {
      addVocabForm({}, user);
    }

    // CLICK EVENT FOR EDITING/UPDATING A CARD
    if (e.target.id.includes('edit-word-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getOneVocabCard(firebaseKey).then((cardObj) => addVocabForm(cardObj, user));
    }

    // END OF domEvents
  });
};

export default domEvents;

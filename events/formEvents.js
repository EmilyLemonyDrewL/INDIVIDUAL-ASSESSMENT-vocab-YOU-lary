import { createVocabCard, getVocabCards, updateVocabCards } from '../api/vocabData';
import { showVocab } from '../pages/vocabCards';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING THE CARD FORM
    if (e.target.id.includes('submit-vocab')) {
      const dateSubmit = new Date();
      const date = dateSubmit.toLocaleString();
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        category: document.querySelector('#category-input').value,
        date_submitted: date,
        uid: user.uid
      };

      createVocabCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocabCards(patchPayload).then(() => {
          getVocabCards(user.uid).then(showVocab);
        });
      });
    }

    // CLICK EVENT FOR EDITING A CARD
    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        category: document.querySelector('#category-input').value,
        firebaseKey,
      };

      updateVocabCards(payload).then(() => {
        getVocabCards(user.uid).then(showVocab);
      });
    }
    // END OF formEvents
  });
};

export default formEvents;

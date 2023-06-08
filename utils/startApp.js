import logoutButton from '../components/logoutButton';
import { showVocab } from '../pages/vocabCards';
import domBuilder from '../components/shared/domBuilder';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
import formEvents from '../events/formEvents';
import navBar from '../components/shared/navbar';
import { getVocabCards } from '../api/vocabData';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar();
  logoutButton();
  navigationEvents(user);
  // SHOW CARDS ON THE DOM
  getVocabCards(user.uid).then((vocab) => showVocab(vocab));
};

export default startApp;

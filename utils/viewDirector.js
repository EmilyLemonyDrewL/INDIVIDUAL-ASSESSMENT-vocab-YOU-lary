import firebase from 'firebase';
import 'firebase/auth';
import loginButton from '../components/loginButton';
import startApp from './startApp';
import client from './client';
import 'bootstrap';
import '../styles/main.scss';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user);
    } else {
      // person is NOT logged in
      loginButton();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;

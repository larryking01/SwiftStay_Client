import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDX7KBsp8rj8oBiZ_pTQcXMPcQUl86a-rA',
  authDomain: 'hotel-finder-app-f7c2d.firebaseapp.com',
  projectId: 'hotel-finder-app-f7c2d',
  storageBucket: 'hotel-finder-app-f7c2d.appspot.com',
  messagingSenderId: '570987603740',
  appId: '1:570987603740:web:990871ea6db16c43527cd9',
};

// initializing firebase app
firebase.initializeApp(firebaseConfig);

// initializing firebase services.
const firebaseAuth = firebase.auth();

export { firebaseAuth };

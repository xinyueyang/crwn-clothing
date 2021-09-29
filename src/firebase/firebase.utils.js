import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCwbV6SBBLw_Rr4-6PULllUz_8n4RTdOhQ",
    authDomain: "crwn-clothing-db-6cd7c.firebaseapp.com",
    projectId: "crwn-clothing-db-6cd7c",
    storageBucket: "crwn-clothing-db-6cd7c.appspot.com",
    messagingSenderId: "118411498496",
    appId: "1:118411498496:web:2aa7eabb5df4d38cd174e5",
    measurementId: "G-Z6C7BPS4FN"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const SignInWithGoogle = () =>auth.signInWithPopup(provider);

  export default firebase;
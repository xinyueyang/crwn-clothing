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

  export const createUserProfileDocument = async(userAuth, additionalData) =>{
      if (!userAuth) return;
      
      const userRef = firestore.doc(`user/${userAuth.uid}`);
      const snapShot = await userRef.get();

      if(!snapShot.exists){
          const {displayName, email} = userAuth;
          const createdAt = new Date();
          try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
          }
          catch(error){
            console.log("error creating user', error.message");
          }
      }

      return userRef;
      console.log(snapShot);
      
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const SignInWithGoogle = () =>auth.signInWithPopup(provider);

  export default firebase;
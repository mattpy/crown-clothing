import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDSTPh5Q_Vc2oFiuhUGSlx_CBitUNaZUsw",
    authDomain: "crown-db-c3ae8.firebaseapp.com",
    databaseURL: "https://crown-db-c3ae8.firebaseio.com",
    projectId: "crown-db-c3ae8",
    storageBucket: "crown-db-c3ae8.appspot.com",
    messagingSenderId: "1051256715292",
    appId: "1:1051256715292:web:abe56a9e73c1d329b247d9",
    measurementId: "G-E774F2V3RP"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
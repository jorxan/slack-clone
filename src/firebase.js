import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDGHUNhRsE3zA_uCIw-4ke7TW_nyjmq4jc",
    authDomain: "slack-clone-8526b.firebaseapp.com",
    databaseURL: "https://slack-clone-8526b.firebaseio.com",
    projectId: "slack-clone-8526b",
    storageBucket: "slack-clone-8526b.appspot.com",
    messagingSenderId: "668578478253",
    appId: "1:668578478253:web:496866c273c1657e5d6e24",
    measurementId: "G-8R5NGNLWH6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth, provider};

  export default db;
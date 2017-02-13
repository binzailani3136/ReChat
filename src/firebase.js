import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "xxxxxxxx",
  authDomain: "xxxxxxxx",
  databaseURL: "xxxxxxx",
  storageBucket: "xxxxxxx",
  messagingSenderId: "xxxxxxxx"
};
export const firebaseApp = firebase.initializeApp(firebaseConfig);

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "xxxxxxxx",
  authDomain: "xxxxxxxx",
  databaseURL: "xxxxxxxx",
  storageBucket: "xxxxxxxx",
  messagingSenderId: "xxxxxxxx"
};
export const firebaseApp = firebase.initializeApp(firebaseConfig);

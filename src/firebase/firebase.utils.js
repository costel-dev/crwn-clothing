import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDT3LPz6vn8gfzV1YPLBfFd582HVr5IgAo",
  authDomain: "crwn-clothing-db-6a290.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-6a290.firebaseio.com",
  projectId: "crwn-clothing-db-6a290",
  storageBucket: "crwn-clothing-db-6a290.appspot.com",
  messagingSenderId: "349202442628",
  appId: "1:349202442628:web:3a5bbb4b0f770dfd4595d1",
  measurementId: "G-1N7EJG6E2D",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

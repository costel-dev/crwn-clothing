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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // check if the userAuth object from auth library exists in our db
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // get the data snapshot if exists
  const snapShot = await userRef.get();
  // if user doesn't exists we will create a new entry in DB
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // 'set' is the create method if the user doesn't exists
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

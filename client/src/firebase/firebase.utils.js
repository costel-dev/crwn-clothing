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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
}

export  const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items} = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title, 
      items
    }
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  } , {})
} 

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

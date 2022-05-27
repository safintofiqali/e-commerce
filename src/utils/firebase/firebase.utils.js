import { initializeApp } from "firebase/app";
// Firebase sub-library related to authentication
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// Firestore sub-library. doc is to access the documents. getDoc, however, is to set the data of a specific doc, setDoc is to set the data of a specific doc.
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX0OlTJA8FkDSUXL5pT6wZzl_CsP3hSb4",
  authDomain: "crwn-clothing-db-8e7ad.firebaseapp.com",
  projectId: "crwn-clothing-db-8e7ad",
  storageBucket: "crwn-clothing-db-8e7ad.appspot.com",
  messagingSenderId: "945984912693",
  appId: "1:945984912693:web:78a83fd91c24925a2b607c",
};

// Initialize Firebase
// this 'firebaseApp' variable is an instance of the firebase that link these codes to the instance we created on the firebase.google.com
//  the link with the firestore, crud operation, and authentication will be done through this instance
const firebaseApp = initializeApp(firebaseConfig);

// We need a provider in order to be able to use the google authentication feature.
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};

export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

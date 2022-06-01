// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// IMPORT NECESSARY TOOLS FROM GOOGLE AUTH
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

// IMPORT NECESSARY TOOLS FROM FIRESTORE
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATAnhl_tOijLOsVagdUbdyqLk-bY9AF7g",
  authDomain: "firste-commerce.firebaseapp.com",
  projectId: "firste-commerce",
  storageBucket: "firste-commerce.appspot.com",
  messagingSenderId: "768674463736",
  appId: "1:768674463736:web:fd5966fa8b4e4a0316a00d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// USE THE TOOLS IMPORTED FROM AUTH SERVICE
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

// USE THE TOOLS IMPORTED FROM FIRESTORE
export const db = getFirestore();

// CREATE USER AND STORE IT IN FIRESTORE - USING THE SIGN IN WITH GOOGLE POPUP
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation });
    } catch (err) {
      console.log(err);
    }
  }
};

// CREATE USER WITH EMAIL AND PASSWORD
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  await signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};

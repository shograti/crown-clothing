import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJNdWItOVO0WOI4UUP9E81nm926wG_fic",

  authDomain: "crown-db-13a4a.firebaseapp.com",

  projectId: "crown-db-13a4a",

  storageBucket: "crown-db-13a4a.appspot.com",

  messagingSenderId: "86869237853",

  appId: "1:86869237853:web:30f8138bdece604f4b2db4"
};
 
// Initialize Firebase
initializeApp(firebaseConfig);
 
export const auth = getAuth();
export const firestore = getFirestore();
 
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
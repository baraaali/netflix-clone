import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB30tVu0uaGH8SBE0ez6vuv5usHMfnFbwE",
    authDomain: "netflix-clone-55ef8.firebaseapp.com",
    projectId: "netflix-clone-55ef8",
    storageBucket: "netflix-clone-55ef8.appspot.com",
    messagingSenderId: "149793257118",
    appId: "1:149793257118:web:8e764e31310cba6da4ad8f"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {auth}
export default db;
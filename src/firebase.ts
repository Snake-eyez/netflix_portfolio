import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getEnvOrDefault } from "./config/env";

const firebaseConfig = {
    apiKey: getEnvOrDefault("REACT_APP_FIREBASE_API_KEY", "AIzaSyAzSIG7dC_iHBAMC8W-KfnuZIjsiVqnD3c"),
    authDomain: getEnvOrDefault("REACT_APP_FIREBASE_AUTH_DOMAIN", "derrelwinter.com"),
    projectId: getEnvOrDefault("REACT_APP_FIREBASE_PROJECT_ID", "derrel-win"),
    storageBucket: getEnvOrDefault("REACT_APP_FIREBASE_STORAGE_BUCKET", "derrel-win.firebasestorage.app"),
    messagingSenderId: getEnvOrDefault("REACT_APP_FIREBASE_MESSAGING_SENDER_ID", "749969636632"),
    appId: getEnvOrDefault("REACT_APP_FIREBASE_APP_ID", "1:749969636632:web:f2eff4e8e08d2cd48f326d"),
    measurementId: getEnvOrDefault("REACT_APP_FIREBASE_MEASUREMENT_ID", "G-FVJ79B672R")
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

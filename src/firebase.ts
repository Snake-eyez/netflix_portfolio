import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAzSIG7dC_iHBAMC8W-KfnuZIjsiVqnD3c",
    authDomain: "derrelwinter.com",
    projectId: "derrel-win",
    storageBucket: "derrel-win.firebasestorage.app",
    messagingSenderId: "749969636632",
    appId: "1:749969636632:web:f2eff4e8e08d2cd48f326d",
    measurementId: "G-FVJ79B672R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

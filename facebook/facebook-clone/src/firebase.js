import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxEevdnKlJ1hVpSl60ofzFTN7UlUMsT3U",
    authDomain: "facebook-clone-2a69b.firebaseapp.com",
    projectId: "facebook-clone-2a69b",
    storageBucket: "facebook-clone-2a69b.appspot.com",
    messagingSenderId: "829098856824",
    appId: "1:829098856824:web:f08c94d6ec87fa5983f88d",
    measurementId: "G-D4S4J6Q8T4"
  };


  // npm i firebase



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const provider = new GoogleAuthProvider();
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);



export {auth,provider};
export default db;

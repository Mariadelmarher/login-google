import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB5SXiFLMzi6R0JENBISqCIa04Eeft0ma8",
    authDomain: "login--frontend.firebaseapp.com",
    projectId: "login--frontend",
    storageBucket: "login--frontend.appspot.com",
    messagingSenderId: "793622341220",
    appId: "1:793622341220:web:6cbca5e72c873af8f7e171"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const authentication = getAuth(app);
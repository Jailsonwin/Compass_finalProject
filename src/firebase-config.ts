import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAkS2js5d8an7CGbv39EURbfg37lrAB8vM",
    authDomain: "compass-finalproject.firebaseapp.com",
    projectId: "compass-finalproject",
    storageBucket: "compass-finalproject.appspot.com",
    messagingSenderId: "186167682691",
    appId: "1:186167682691:web:d2e5e4b9b57c6c9ff89db6"
  };
  
  const app = initializeApp(firebaseConfig);
  
  export const auth = getAuth(app); 
import { initializeApp } from "firebase/app";
import { getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.KEY_FIREBASE,
  authDomain: "react-firebase-d4e24.firebaseapp.com",
  projectId: "react-firebase-d4e24",
  storageBucket: "react-firebase-d4e24.appspot.com",
  messagingSenderId: "548293144628",
  appId: "1:548293144628:web:5588fa7cd16f7c0b1c1a61"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)



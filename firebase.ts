import {getApp , getApps , initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyDF2QguSXwN_S3L5ozshoTYxfEMHJL8350",
  authDomain: "chatgpt-roland.firebaseapp.com",
  projectId: "chatgpt-roland",
  storageBucket: "chatgpt-roland.appspot.com",
  messagingSenderId: "17958438786",
  appId: "1:17958438786:web:e3a00b769221c37339f19b"
};

// Initialize Firebase
const app =  getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export{db}
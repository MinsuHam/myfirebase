import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDEhpCXfjJ7Ytdp20sQFSBmrVnYXZlKKno",
  authDomain: "react-project-aee9c.firebaseapp.com",
  projectId: "react-project-aee9c",
  storageBucket: "react-project-aee9c.appspot.com",
  messagingSenderId: "268998043122",
  appId: "1:268998043122:web:44ec90acfe04f691fef76b",
  measurementId: "G-JTTR5F4WT7"
};

//firebase 초기화
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, storage, db }
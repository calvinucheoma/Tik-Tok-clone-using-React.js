import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyB_HgZ__PuQfvoQamw9G_kbQdzX_2gzjTQ",
  authDomain: "chuks-tiktok-clone.firebaseapp.com",
  projectId: "chuks-tiktok-clone",
  storageBucket: "chuks-tiktok-clone.appspot.com",
  messagingSenderId: "178329166069",
  appId: "1:178329166069:web:801f6b58758012aed7a5bc"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
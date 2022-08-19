import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import { getDatabase } from "firebase/database";



const firebaseConfig = {
    apiKey: "AIzaSyBb_yAbXRg8lSf_-VfwVU3zWsR16mgGkH8",
    authDomain: "puanlasana-a711d.firebaseapp.com",
    projectId: "puanlasana-a711d",
    storageBucket: "puanlasana-a711d.appspot.com",
    messagingSenderId: "361890627324",
    appId: "1:361890627324:web:ebce4f7a408e7b7591e179",
    measurementId: "G-0LDN3NLMCB"
  };



firebase.initializeApp(firebaseConfig);


const firestoreRef=firebase.firestore();
const authRef=firebase.auth();
const storageRef=firebase.storage();



const timestamp=firebase.firestore.FieldValue.serverTimestamp

export {firestoreRef,authRef,timestamp,storageRef}

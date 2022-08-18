import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDw_8KiLymQNu1XzfIzeOfmY1go8K4FlnY",
    authDomain: "vue3-firebase-projeler.firebaseapp.com",
    projectId: "vue3-firebase-projeler",
    storageBucket: "vue3-firebase-projeler.appspot.com",
    messagingSenderId: "365766464914",
    appId: "1:365766464914:web:360a978dff50a7e0319d4b"
  };

firebase.initializeApp(firebaseConfig)

const firestoreRef=firebase.firestore();
const authRef=firebase.auth();

export {firestoreRef,authRef}
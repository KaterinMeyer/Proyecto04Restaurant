import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAmFJBRi4MICcu1_Olj3LoKkxG24mmjwgU",
    authDomain: "udd-proyecto04restaurant.firebaseapp.com",
    projectId: "udd-proyecto04restaurant",
    storageBucket: "udd-proyecto04restaurant.appspot.com",
    messagingSenderId: "928070933310",
    appId: "1:928070933310:web:71d1c820adfe446e532a6f"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { firebase, db };
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJDs_KZes4Uv9n4_aeOo-j4ufst-mVevI",
    authDomain: "backsamehome.firebaseapp.com",
    projectId: "backsamehome",
    storageBucket: "backsamehome.appspot.com",
    messagingSenderId: "1082898499737",
    appId: "1:1082898499737:web:a139409e53f7d6ce0d5008"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// exemple d'utilisation de firebase auth
 export default const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)
}

// exemple d'utilisation de firestore
export default const addUser = (id, userData) => {
    return firestore.collection('users').doc(id).set(userData)
}


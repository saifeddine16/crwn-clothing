import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyC5o19tNfkLgZa7yBfFS0NsXECZm9MP1K4",
    authDomain: "crwn-db-228d0.firebaseapp.com",
    projectId: "crwn-db-228d0",
    storageBucket: "crwn-db-228d0.appspot.com",
    messagingSenderId: "1008556637500",
    appId: "1:1008556637500:web:865e9fbbd35d0658b83239",
    measurementId: "G-D2TZZC51WH"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
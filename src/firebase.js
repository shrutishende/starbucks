import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyANrQyYwNNdszkWAS1Re73JFmGKpNtqNI8",
    authDomain: "starbucks-e633c.firebaseapp.com",
    projectId: "starbucks-e633c",
    storageBucket: "starbucks-e633c.appspot.com",
    messagingSenderId: "1088038854452",
    appId: "1:1088038854452:web:d914dcc3c63ec787014f61",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };

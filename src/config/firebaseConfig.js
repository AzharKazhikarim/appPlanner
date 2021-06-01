import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage"

var firebaseConfig = {
        apiKey: "AIzaSyCIEpXHbOhfTtdDLcdyRvEzJ8iPhO9O0Ho",
        authDomain: "to-do-561fd.firebaseapp.com",
        projectId: "to-do-561fd",
        storageBucket: "to-do-561fd.appspot.com",
        messagingSenderId: "343353207926",
        appId: "1:343353207926:web:8fc8a587f1a63a42170357"
};

firebase.initializeApp(firebaseConfig)
firebase.firestore()
firebase.storage();
export default firebase;
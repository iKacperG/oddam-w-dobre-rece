import firebase from "firebase/app"
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD03IRkqK5y1FmgULFFL-Z-AjSi0OfHG10",
    authDomain: "oddam-w-dobre-rece-d68d4.firebaseapp.com",
    databaseURL: "https://oddam-w-dobre-rece-d68d4.firebaseio.com",
    projectId: "oddam-w-dobre-rece-d68d4",
    storageBucket: "oddam-w-dobre-rece-d68d4.appspot.com",
    messagingSenderId: "327942063766",
    appId: "1:327942063766:web:73e34af52eb3e2121624b7",
    measurementId: "G-SZ9GQRVHNK"
};

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()
export default firebase

import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAqR6g5LPB7VDftRJmRwCRmUbC14DsVYWc",
    authDomain: "healthcare-management-66d65.firebaseapp.com",
    projectId: "healthcare-management-66d65",
    storageBucket: "healthcare-management-66d65.appspot.com",
    messagingSenderId: "1029943627287",
    appId: "1:1029943627287:web:ebed196b69fc12560b5652",
    measurementId: "G-7HLFTW7F71"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export default firebase;

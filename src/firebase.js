import firebase from "firebase"

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyB-cz3Igc5-hYXH1VBob6xObXqlJB-SmnA",
        authDomain: "messenger-ceb9a.firebaseapp.com",
        databaseURL: "https://messenger-ceb9a.firebaseio.com",
        projectId: "messenger-ceb9a",
        storageBucket: "messenger-ceb9a.appspot.com",
        messagingSenderId: "769629069256",
        appId: "1:769629069256:web:ab8c402a2d08db9a5caafd",
        measurementId: "G-Q6BTZJVBRE"
    }
);
const db = firebaseApp.firestore();

export default db;
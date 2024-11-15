import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCkb6hF6nDrv8nFE1DCMD1biBNjGoSe5_k",
	authDomain: "journeymate1019.firebaseapp.com",
	projectId: "journeymate1019",
	storageBucket: "journeymate1019.firebasestorage.app",
	messagingSenderId: "873109518184",
	appId: "1:873109518184:web:ae4c88af1bebe386bd48dd",
	measurementId: "G-K22F678GBJ"
};

const firebaseApp = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
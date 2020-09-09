import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
		 apiKey: "AIzaSyDzDPz-fKR4rmnV57CjRxPFqgGVtAyBG98",
		  authDomain: "facebook-messenger-clone-16054.firebaseapp.com",
		  databaseURL: "https://facebook-messenger-clone-16054.firebaseio.com",
		  projectId: "facebook-messenger-clone-16054",
		  storageBucket: "facebook-messenger-clone-16054.appspot.com",
		  messagingSenderId: "999986372313",
		  appId: "1:999986372313:web:0e6777959beea194b928c8",
		  measurementId: "G-589TDQMZ36"
});

const db = firebaseApp.firestore();
export default db;
import firebase from "firebase";

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAfAbVYDbaTV4Fb-gWofwI943wlJhM0m1k",
    authDomain: "linkedin-clone-c2de9.firebaseapp.com",
    projectId: "linkedin-clone-c2de9",
    storageBucket: "linkedin-clone-c2de9.appspot.com",
    messagingSenderId: "989665980631",
    appId: "1:989665980631:web:cfb90765449a64659f8092"
  };
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage};
  export default db;
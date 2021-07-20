import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC3mmYZJ6-fZ1ftg9Vd4GUZ2rtN11syEOk",
  authDomain: "vuefirebaseblog-b5bef.firebaseapp.com",
  projectId: "vuefirebaseblog-b5bef",
  storageBucket: "vuefirebaseblog-b5bef.appspot.com",
  messagingSenderId: "834449425967",
  appId: "1:834449425967:web:8281ecd525f91fc179e8da",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();

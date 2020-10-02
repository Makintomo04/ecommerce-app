import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDKzQz_l9yl9PoaWyDNhnSgIjSoia0Pf3A",
  authDomain: "marq-e-site.firebaseapp.com",
  databaseURL: "https://marq-e-site.firebaseio.com",
  projectId: "marq-e-site",
  storageBucket: "marq-e-site.appspot.com",
  messagingSenderId: "983981777659",
  appId: "1:983981777659:web:aba82070e6c64c83c9865e",
  measurementId: "G-HG5HYRERWB",
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

const provider = new firebase.auth.TwitterAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithTwitter = () =>
  auth.signInWithPopup(provider).catch(function (error) {
    const errorCode = error.code;

    console.log(errorCode);

    const errorMessage = error.message;

    console.log(errorMessage);
  });

export default firebase;

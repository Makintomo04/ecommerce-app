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
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log(userAuth);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

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

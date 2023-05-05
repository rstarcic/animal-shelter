// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9XB97RcJlPB06HTtSVH5zfe4qyEq4JdQ",
  authDomain: "animal-shelter-ad8db.firebaseapp.com",
  projectId: "animal-shelter-ad8db",
  storageBucket: "animal-shelter-ad8db.appspot.com",
  messagingSenderId: "234847650246",
  appId: "1:234847650246:web:01876a7d3510e3567df2c7",
  measurementId: "G-29E4WLGLJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
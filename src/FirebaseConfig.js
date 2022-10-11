// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLqBsqa_I-AAvncOaR5HDeEM8Em2ctpEs",
  authDomain: "view-e522c.firebaseapp.com",
  projectId: "view-e522c",
  storageBucket: "view-e522c.appspot.com",
  messagingSenderId: "324904952494",
  appId: "1:324904952494:web:86a76d7faf1a778e16833f",
  measurementId: "G-60TVE7D8XY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

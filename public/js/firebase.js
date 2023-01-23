// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCegnoVNqd2qHhUUirZawcgISeYh0t40Ek",
  authDomain: "terre-monde-main-site.firebaseapp.com",
  projectId: "terre-monde-main-site",
  storageBucket: "terre-monde-main-site.appspot.com",
  messagingSenderId: "370953463667",
  appId: "1:370953463667:web:869aa7852687702d890706",
  measurementId: "G-593571JBHT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
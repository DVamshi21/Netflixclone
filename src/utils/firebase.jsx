// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWwGE-vapnGGiINckgVQPD9ftBLua3_mA",
  authDomain: "netflixgpt-72157.firebaseapp.com",
  projectId: "netflixgpt-72157",
  storageBucket: "netflixgpt-72157.firebasestorage.app",
  messagingSenderId: "775757820912",
  appId: "1:775757820912:web:02217c26efccda884aa335",
  measurementId: "G-BT4XK5RXPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA16hLOxCV3s21wZRcUI_qtgDJghEwcLUo",
  authDomain: "gamblingtest-42a66.firebaseapp.com",
  projectId: "gamblingtest-42a66",
  storageBucket: "gamblingtest-42a66.appspot.com",
  messagingSenderId: "724192000950",
  appId: "1:724192000950:web:b66b0b08a2ef97ead59f17",
  measurementId: "G-1CE0W16ZH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
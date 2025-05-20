// js/firebase-config.js

const firebaseConfig = {
  apiKey: "AIzaSyBzmE9Z6iTrdp2U85oTt_2C3UGTWp9rqac",
  authDomain: "busan-nam.firebaseapp.com",
  projectId: "busan-nam",
  storageBucket: "busan-nam.appspot.com",
  messagingSenderId: "1096676975422",
  appId: "1:1096676975422:web:563d285bb49dd50488026f",
  measurementId: "G-V305K7BGVZ"
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);

// Firebase 서비스 export
const auth = firebase.auth();
const db = firebase.firestore();

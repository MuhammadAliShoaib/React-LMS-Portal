// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-TVCuxWZVq_xgBZS9dCY2SLfyfZAurvA",
  authDomain: "jp-software-41778.firebaseapp.com",
  databaseURL: "https://jp-software-41778-default-rtdb.firebaseio.com",
  projectId: "jp-software-41778",
  storageBucket: "jp-software-41778.appspot.com",
  messagingSenderId: "735508119185",
  appId: "1:735508119185:web:ea999a005d4e07cff78930",
  measurementId: "G-081N183DQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuy0REfUijAGl203HF_MLctqHZnkfixKo",
  authDomain: "netflixgpt-6a4cf.firebaseapp.com",
  projectId: "netflixgpt-6a4cf",
  storageBucket: "netflixgpt-6a4cf.appspot.com",
  messagingSenderId: "161071058266",
  appId: "1:161071058266:web:426004b1ab68719bb03763",
  measurementId: "G-H9LEYV17PM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth()
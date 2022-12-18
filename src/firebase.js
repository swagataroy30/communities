import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSUUywJVSHIiiISZ_UVqxaJEIK1So1gPA",
  authDomain: "education-webapp-c9878.firebaseapp.com",
  projectId: "education-webapp-c9878",
  storageBucket: "education-webapp-c9878.appspot.com",
  messagingSenderId: "287261450210",
  appId: "1:287261450210:web:d193a4bec7bdc73a0e63bb",
  measurementId: "G-9JMHV6SKFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
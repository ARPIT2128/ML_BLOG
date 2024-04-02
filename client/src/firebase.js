// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmtER6QL_wsH7vsHW_R-hOquHzVaznlT8",
  authDomain: "web-ml-blog.firebaseapp.com",
  projectId: "web-ml-blog",
  storageBucket: "web-ml-blog.appspot.com",
  messagingSenderId: "141234077460",
  appId: "1:141234077460:web:d8c6615373e6b8efd04c01",
  measurementId: "G-ZJ0E8FFY39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

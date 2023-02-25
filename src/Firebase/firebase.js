import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyCB7XQELb2M_IR6V4d01tCANd4Kjugh5H0",
  authDomain: "react-authentication-58f60.firebaseapp.com",
  projectId: "react-authentication-58f60",
  storageBucket: "react-authentication-58f60.appspot.com",
  messagingSenderId: "131892688491",
  appId: "1:131892688491:web:3855d432f50c47a958632e",
  measurementId: "G-LYXZQMDJ32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export default app;
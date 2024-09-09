// Import the functions you need from the SDKs you need
 
import { initializeApp } from "firebase/app";
 
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
 
// TODO: Add SDKs for Firebase products that you want to use
 
// https://firebase.google.com/docs/web/setup#available-libraries
 
 
// Your web app's Firebase configuration
 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 
const firebaseConfig = {
 
  apiKey: "AIzaSyDHDZJrCw1kTXw8retzR95MYooh9HXcj34",
 
  authDomain: "web3express-550d6.firebaseapp.com",
 
  projectId: "web3express-550d6",
 
  storageBucket: "web3express-550d6.appspot.com",
 
  messagingSenderId: "317498209613",
 
  appId: "1:317498209613:web:672b2afff88fcd6d043304",
 
  measurementId: "G-D5XWNFHD1E"
 
};
 
 
// Initialize Firebase
 
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)
export default app


// const analytics = getAnalytics(app); 
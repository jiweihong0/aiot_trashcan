// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsgiYqqk-5ZV3Ib1oSQ0azY4FjrFVvA28",
  authDomain: "iotcan.firebaseapp.com",
  databaseURL: "https://iotcan-default-rtdb.firebaseio.com",
  projectId: "iotcan",
  storageBucket: "iotcan.appspot.com",
  messagingSenderId: "495859550005",
  appId: "1:495859550005:web:04c3defbcdbb37ad026e7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// const db = getFirestore(app)
export const db = getDatabase(app);
// export {db}

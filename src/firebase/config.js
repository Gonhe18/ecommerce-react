// import {} from ''

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDvwDPQzsGjjtEDb-C2Ea-xlHBZDzQnYm0",
  authDomain: "ecommerce-reactjs-a7832.firebaseapp.com",
  projectId: "ecommerce-reactjs-a7832",
  storageBucket: "ecommerce-reactjs-a7832.appspot.com",
  messagingSenderId: "971960818034",
  appId: "1:971960818034:web:0ca258ef5252fe267265eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
  return app
}
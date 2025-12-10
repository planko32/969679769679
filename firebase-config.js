// =============================
//  Firebase Main Configuration
//  YazanInvest Platform
// =============================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCk0BoshEenWFYuEKGJO5g_gJCb32d0_C4",
  authDomain: "yazaninvest-97b20.firebaseapp.com",
  projectId: "yazaninvest-97b20",
  storageBucket: "yazaninvest-97b20.firebasestorage.app",
  messagingSenderId: "914397308708",
  appId: "1:914397308708:web:11eac8734b2d157a6e75b1",
  measurementId: "G-ZHVS0R3TG4"
};

export const app  = initializeApp(firebaseConfig);
export const db   = getFirestore(app);
export const auth = getAuth(app);

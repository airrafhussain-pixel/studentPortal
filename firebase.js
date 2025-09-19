// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC_B9WxuNEOlmxKR2EvQMP3r2cU1dyUJZE",
    authDomain: "blogs-website-fd3d2.firebaseapp.com",
    projectId: "blogs-website-fd3d2",
    storageBucket: "blogs-website-fd3d2.firebasestorage.app",
    messagingSenderId: "780074062618",
    appId: "1:780074062618:web:3e6560bdc39e7926f3d2a3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChWtFBUpqKuTxD5cS_JEM-m40BYCnYQpk",
  authDomain: "kieta-koi.firebaseapp.com",
  projectId: "kieta-koi",
  storageBucket: "kieta-koi.appspot.com",
  messagingSenderId: "692347212874",
  appId: "1:692347212874:web:e7dfe0d748d429196dc2b3"
};

export default defineNuxtPlugin(nuxtApp => {
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  nuxtApp.vueApp.provide('auth', auth)
  nuxtApp.provide('auth', auth)
})

// Initialize Firebase
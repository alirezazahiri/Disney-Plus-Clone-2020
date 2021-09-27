import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDtcZ3AvuD3ZRQfX0uyI9PlULy-VuMb11E",
    authDomain: "disney-2020.firebaseapp.com",
    projectId: "disney-2020",
    storageBucket: "disney-2020.appspot.com",
    messagingSenderId: "853513741148",
    appId: "1:853513741148:web:174d3a9fb29321851e1799",
  })
  .auth();

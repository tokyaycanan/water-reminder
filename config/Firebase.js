import * as firebase from 'firebase';

import 'firebase/firestore';


try {
  firebase.initializeApp({
    apiKey: "AIzaSyAEeX0wecfq5Sh0xqo2t9h1Ugi-Lx_n2E0",
    authDomain: "water-reminder-6c09c.firebaseapp.com",
    projectId: "water-reminder-6c09c",
    storageBucket: "water-reminder-6c09c.appspot.com",
    messagingSenderId: "1037491938617",
    appId: "1:1037491938617:web:43b260e5cba394110af4e8",
    measurementId: "G-7D7DG59ZX6"
  })
  } catch (err) {
  // we skip the “already exists” message which is
  // not an actual error when we’re hot-reloading
  if (!/already exists/.test(err.message)) {
  console.error( err.stack)
  }}
  const Firebase= firebase;


export default Firebase
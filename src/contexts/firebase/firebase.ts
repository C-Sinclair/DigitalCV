import 'firebase/storage'
import 'firebase/firestore'
import firebase from 'firebase/app'

export const app = firebase.initializeApp({
  apiKey: "AIzaSyC5aZFF_hFoxdvcOL6bz_f7ca2KY7e_u0g",
  authDomain: "digitalcv-ffb40.firebaseapp.com",
  databaseURL: "https://digitalcv-ffb40.firebaseio.com",
  projectId: "digitalcv-ffb40",
  storageBucket: "digitalcv-ffb40.appspot.com",
  messagingSenderId: "737927325979",
  appId: "1:737927325979:web:b836a1b1dc06a7a29a0bbe",
  measurementId: "G-C9WE1R0HVS"
})

export const firestore = firebase.firestore(app)
export const storage = firebase.storage(app)
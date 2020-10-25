import Firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAT2BAcFJY-cIs9hbXPgFJFr6FlMQ7Wn2Q",
    authDomain: "nutriapp-28da7.firebaseapp.com",
    databaseURL: "https://nutriapp-28da7.firebaseio.com",
    projectId: "nutriapp-28da7",
    storageBucket: "nutriapp-28da7.appspot.com",
    messagingSenderId: "441677560457",
    appId: "1:441677560457:web:112190c6995ceacc7a6458",
    measurementId: "G-M565ZPCF5K"
  };
  // Initialize Firebase
let app = Firebase.initializeApp(firebaseConfig);
export default app;
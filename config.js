export const firebase = require('firebase')

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCzmKEm2VBbYbDh4cEFyc540CjkzG0EWAU',
  authDomain: 'tennisforwomen.firebaseapp.com',
  databaseURL: 'https://tennisforwomen.firebaseio.com',
  projectId: 'tennisforwomen',
  storageBucket: 'tennisforwomen.appspot.com',
  messagingSenderId: '643312473647'
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

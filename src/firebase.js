import firebase from 'firebase/app'

import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'
const config = {
  apiKey: "AIzaSyDl43lb_ehWL9WY8v8Wv9mghsASGjP47GQ",
  authDomain: "csiweb.firebaseapp.com",
  databaseURL: "https://csiweb.firebaseio.com/",
  projectId: "csiweb",
  storageBucket: "csiweb.appspot.com",
  messagingSenderId: "437041594186"
  };

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams=firebaseDB.ref('teams');
const firebasePlayers=firebaseDB.ref('members');
const firebaseMembers=firebaseDB.ref('events');
const firebaseMember = firebaseDB.ref('members');
const firebaseEvents=firebaseDB.ref('events');
export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers,
    firebaseDB,
    firebaseEvents,
    firebaseMembers,
    firebaseMember
}
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import firebaseConfig from '../../config/firebaseConfig';

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
    this.db = app.firestore();
  }

  signUp = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  signIn = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signOut = () => this.auth.signOut();

  addUser = (uid, userData) =>
    this.db
      .collection('users')
      .doc(uid)
      .set(userData);

  getUser = uid =>
    this.db
      .collection('users')
      .doc(uid)
      .get();
}

export default Firebase;

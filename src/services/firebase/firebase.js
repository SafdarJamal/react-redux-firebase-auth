import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import firebaseConfig from './config';

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);

    this.auth = firebase.auth();
    this.firestore = firebase.firestore();

    this.usersCollectionRef = this.firestore.collection('users');
  }

  signUp = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  signIn = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signOut = () => this.auth.signOut();

  sendEmailVerificationLink = () =>
    this.auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_EMAIL_CONFIRMATION_REDIRECT,
    });

  resetPassword = email => this.auth.sendPasswordResetEmail(email);

  updatePassword = password => this.auth.currentUser.updatePassword(password);

  addUser = (uid, data) => this.usersCollectionRef.doc(uid).set(data);

  getUser = uid => this.usersCollectionRef.doc(uid).get();
}

export default Firebase;

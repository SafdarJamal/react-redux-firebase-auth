import firebase from 'firebase/compat/app';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  updatePassword,
} from 'firebase/auth';
import 'firebase/compat/firestore';

import firebaseConfig from './config';

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);

    this.auth = getAuth();
    this.firestore = firebase.firestore();

    this.usersCollectionRef = this.firestore.collection('users');
  }

  signUp = (email, password) =>
    createUserWithEmailAndPassword(this.auth, email, password);

  signIn = (email, password) =>
    signInWithEmailAndPassword(this.auth, email, password);

  signOut = () => signOut(this.auth);

  sendEmailVerificationLink = () =>
    sendEmailVerification(this.auth.currentUser, {
      url: process.env.REACT_APP_EMAIL_CONFIRMATION_REDIRECT,
    });

  resetPassword = email => sendPasswordResetEmail(this.auth, email);

  updatePassword = password => updatePassword(this.auth.currentUser, password);

  addUser = (uid, data) => this.usersCollectionRef.doc(uid).set(data);

  getUser = uid => this.usersCollectionRef.doc(uid).get();
}

export default Firebase;

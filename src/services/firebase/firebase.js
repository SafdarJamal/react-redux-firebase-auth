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

import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

import firebaseConfig from './config';

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);

    this.auth = getAuth();
    this.firestore = getFirestore();
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

  addUser = (uid, data) => setDoc(doc(this.firestore, 'users', uid), data);

  getUser = uid => getDoc(doc(this.firestore, 'users', uid));
}

export default Firebase;

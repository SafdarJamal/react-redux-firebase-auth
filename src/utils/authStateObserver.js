const authStateObserver = (firebase, SignIn) => {
  const unsubscribe = firebase.auth.onAuthStateChanged(user => {
    if (user) {
      unsubscribe();

      firebase
        .getUser(user.uid)
        .then(querySnapshot => {
          const userData = querySnapshot.data();

          SignIn(userData);
        })
        .catch(error => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    } else {
      unsubscribe();
    }
  });
};

export { authStateObserver };

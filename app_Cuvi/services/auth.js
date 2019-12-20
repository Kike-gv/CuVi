import firebase from 'firebase';

function signup(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    console.log("TCL: signup -> error", error);
  });
}

async function login(email, password) {
  const result = await firebase.auth().signInWithEmailAndPassword(email, password);
  return !!result;
}

async function logout() {
  const result = await firebase.auth().signOut();
  return !!result;
}

function registerAuthObserver(callback) {
  return firebase.auth().onAuthStateChanged(callback);
}


export {
  signup,
  logout,
  login,
  registerAuthObserver
}
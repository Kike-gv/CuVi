import firebase from 'firebase';
import uuidv1 from 'uuid/v1';

async function uploadFile(uri, path) {
  console.log("TCL: uploadFile -> uri", uri)
  const response = await fetch(uri);
  console.log("TCL: uploadFile -> response", response)
  const blob = await response.blob();
  console.log("TCL: uploadFile -> blob", blob)
  const ref = firebase.storage().ref().child(`images/${path}`);
  return ref.put(blob);
}

async function getRealUri(path) {
  const storageRef = firebase.storage().ref().child(`images/${path}`);
  let url = await storageRef.getDownloadURL();
  return url;
}

export { uploadFile, getRealUri };

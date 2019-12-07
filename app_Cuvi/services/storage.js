import firebase from 'firebase';
import uuidv1 from 'uuid/v1';

async function uploadFile(uri, path) {
  const response = await fetch(uri);
  const blob = await response.blob();
  const ref = firebase.storage().ref().child(`images/${path}`);
  return ref.put(blob);
}

async function getRealUri(path) {
  const storageRef = firebase.storage().ref().child(`images/${path}`);
  let url = await storageRef.getDownloadURL();
  return url;
}

export { uploadFile, getRealUri };

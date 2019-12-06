import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as firebase from 'firebase';
import '@firebase/firestore';
import config from './config';

import reducers from './redux/reducers';

import AppScreen from './screens/AppScreen';


// Initialize Firebase
firebase.initializeApp(config.firebaseConfig);

// const dbh = firebase.firestore();

// dbh.collection("characters").doc("mario").set({
//     employment: "plumber",
//     outfitColor: "red",
//     specialAttack: "fireball"
// })

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function App() {
  return (
    <Provider store={store}>
      <AppScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

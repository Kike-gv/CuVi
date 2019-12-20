import React, { useState } from 'react';
import renderer from 'react-test-renderer';

import firebase from 'firebase';
import 'firebase/firestore';
import config from '../config';

import {
  signup,
  logout,
  login,
  registerAuthObserver
} from '../services/auth';

firebase.initializeApp(config.firebaseConfig);


describe('Testing del sign up', () => {

  it('Nos logueamos como un usuario', () => {
    const authLogin = login('juan@cuvi.com', 'juancuvi');
    expect(!!authLogin).toBe(true);
  });
  it('Nos deslogueamos como un usuario', () => {
    const authLogout = logout();
    expect(!!authLogout).toBe(true);
  });


});
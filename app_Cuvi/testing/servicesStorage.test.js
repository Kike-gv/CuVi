import React, { useState } from 'react';
import renderer from 'react-test-renderer';

import firebase from 'firebase';
import 'firebase/firestore';
import config from '../config';
import uuidv1 from 'uuid/v1';

import { uploadFile, getRealUri } from '../services/storage';

firebase.initializeApp(config.firebaseConfig);


describe('Testing del upload de una imagen  servidor', () => {


    it('extraemos una imagen de la galeria y la enviamos a una libreria llamada Jest', async () => {
        const absoluteUri = `file://${__dirname}/../icons/logo.png`;
        console.logabsoluteUri
        const uri = absoluteUri;
        const nombreImagen = 'JestTest';
        let imageUpload = await uploadFile(uri, nombreImagen);
        console.log("TCL: imageUpload", imageUpload)
        expect(!!imageUpload).toBe(true);
    });

});
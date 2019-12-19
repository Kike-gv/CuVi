import React, { useState } from 'react';
import renderer from 'react-test-renderer';

import firebase from 'firebase';
import 'firebase/firestore';
import config from '../config';

import {
  getAll,
  getAllFiltered,
  addItem,
  getItem,
  deleteItem,
  addItemWithId
} from '../services/database';

firebase.initializeApp(config.firebaseConfig);

let dbId;

describe('Testing de la base de datos', () => {


  it('Creamos una coleccion y un item', async () => {
    const coleccion = 'Jest';
    const coleccionItem = {
      nombre: 'timon',
      animal: 'suricato',
      afiliacion: 'bueno'
    };
    const dbItem = await addItem(coleccion, coleccionItem);
    dbId = dbItem;
    expect(!!dbItem).toBe(true);
  });

  it('Creamos un item con id custom en una coleccion', async () => {
    const coleccion = 'Jest';
    const coleccionItem = {
      nombre: 'pumba',
      animal: 'jabali',
      afiliacion: 'bueno'
    };
    const id = 'qwertyuiop';
    const dbItem = await addItemWithId(coleccion, coleccionItem, id);
    expect(!!dbItem).toBe(true);
  });

  it('Medimos el tamaño de la coleccion', async () => {
    const coleccion = 'Jest';
    const dbcollection = await getAll(coleccion);
    expect(dbcollection.length).toBe(2);
  });

  it('recibimos un item de la coleccion', async () => {
    const coleccion = 'Jest';
    const dbcollection = await getItem(coleccion,dbId);
    expect(!!dbcollection).toBe(true);
  });

  it('recibimos los items de los personajes buenos', async () => {
    const coleccion = 'Jest';
    const campo = 'afiliacion';
    const value = 'bueno';
    const dbcollection = await getAllFiltered({collection:coleccion,filters: { field: campo, condition: '==', value: value }});
    expect(dbcollection.length).toBe(2);
  });


  it('Borramos un item  de la coleccion', async () => {
    const coleccion = 'Jest';
    const id = 'qwertyuiop';
    const dbItem = await deleteItem(coleccion, dbId);
    const dbItem2 = await deleteItem(coleccion, id);
    expect(!!dbItem).toBe(true);
  });


});
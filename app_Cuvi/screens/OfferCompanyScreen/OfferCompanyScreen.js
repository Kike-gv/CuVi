import React, { useState } from 'react';
import { Text, View, TextInput, ImageBackground, TouchableOpacity, StyleSheet, AsyncStorage, } from 'react-native';

import { connect, useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../redux/actions/userActions';

import { logout } from '../../services/auth';

import CuviButton from '../../components/CuviButton';

const OfferCompanyScreen = ({navigation}) => {
    const state = useSelector(state => state);
    console.log("TCL: AuthLoadingScreen -> state", state)
    const dispatch = useDispatch();

    const signOutAsync = async () => {
        dispatch(setUser(null));
        logout();
        console.log("TCL: AuthLoadingScreen -> state", state)
        navigation.navigate('Auth');
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Hola Business.</Text>
            <CuviButton name='Log out' icon='md-exit' textColor='#383838' bgColor='rgba(199, 128, 33, 0.25)' clickedEvent={signOutAsync} />
        </View>
    );
}

export default OfferCompanyScreen;
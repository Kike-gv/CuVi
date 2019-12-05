import React, { useState } from 'react';
import { Text, View, TextInput, ImageBackground, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import CuviButton from '../../components/CuviButton';
import CuviInput from '../../components/CuviInput';

import * as firebase from 'firebase';
// import '@firebase/firestore';


const LoginScreen = ({ navigation }) => {

    const signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        navigation.navigate('ApplicationScreens');
    };


    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAVOiUAmEuDoBfVdEre6zz6-kivb0rroKI",
        authDomain: "cuvi-d891b.firebaseapp.com",
        databaseURL: "https://cuvi-d891b.firebaseio.com",
        projectId: "cuvi-d891b",
        storageBucket: "cuvi-d891b.appspot.com",
        messagingSenderId: "969461436385",
        appId: "1:969461436385:web:c94de401a6c3a67f474ca0",
        measurementId: "G-T41MWLVTDT"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    return (
        <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' }} style={styles.loginImageContainer}>
            <View style={styles.loginContainer}>

                <CuviInput placeholder='Escribe tu nombre' textColor='#383838' typeInput='text' />

                <CuviInput placeholder='Escribe tu contraseña' textColor='#383838' typeInput='password' />

                <CuviButton name='Accede a tu cuenta' textColor='white' bgColor='#c78021' clickedEvent={signInAsync} />

                <Text style={styles.loginContainer_text}>O</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('SignIn') }}><Text style={styles.loginContainer_text}>Crea tu cuenta</Text></TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    loginImageContainer: {
        width: '100%',
        height: '100%'
    },
    loginContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 32
    },
    loginContainer_text: {
        fontSize: 24,
        color: 'white',
        marginBottom: 16
    },
});

export default LoginScreen;

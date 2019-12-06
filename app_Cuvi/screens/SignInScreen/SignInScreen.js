import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, AsyncStorage } from 'react-native';
import { getItem, getAllRealTime, deleteItem, addItem } from '../../services/database';

import CuviButton from '../../components/CuviButton';
import CuviInput from '../../components/CuviInput';

const SignInScreen = ({ navigation }) => {
    const [appData, setAppData] = useState({
        appName: '',
        appPass: '',
        appEmail: ''
    })

    const signInAsync = async () => {
        console.log("TCL: signInAsync -> appData", appData)
        if (appData.appName !== '' && appData.appPass !== '' && appData.appEmail !== '') {
            console.log('he entrado al caso');
            const result = await addItem('Usuarios',{ appData });
            if (result) {
              console.log('he guardado el user');
              await AsyncStorage.setItem('user', JSON.stringify({appData}));
              navigation.navigate('ApplicationScreens');
            }
        }
    };

    const setValue = (value, id) => {
        setAppData({ ...appData, [id]: value });
    }

    return (
        <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' }} style={styles.signInImageContainer}>
            <View style={styles.signInContainer}>

                <CuviInput placeholder='Nombre Completo' id='appName' textColor='#383838' typeInput='text' inputValue={setValue} />

                <CuviInput placeholder='Escribe tu contraseña' id='appPass' textColor='#383838' typeInput='password' inputValue={setValue} />

                <CuviInput placeholder='Escribe tu correo electrónico' id='appEmail' textColor='#383838' typeInput='email-address' inputValue={setValue} />

                <CuviButton name='Crea tu cuenta' textColor='white' bgColor='#c78021' clickedEvent={signInAsync} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    signInImageContainer: {
        width: '100%',
        height: '100%'
    },
    signInContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 32
    },
    signInContainer_text: {
        fontSize: 24,
        color: 'white',
        marginBottom: 16
    },
});

export default SignInScreen;
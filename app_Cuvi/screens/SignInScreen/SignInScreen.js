import React, { useState, useEffect } from 'react';
import { View, ImageBackground, StyleSheet, AsyncStorage } from 'react-native';
import { getItem, getAllRealTime, deleteItem, addItemWithId } from '../../services/database';
import { signup, registerAuthObserver } from '../../services/auth';

import CuviButton from '../../components/CuviButton';
import CuviInput from '../../components/CuviInput';

let cancelObserver;

const SignInScreen = ({ navigation }) => {
    const [appData, setAppData] = useState({
        appName: '',
        appPass: '',
        appEmail: ''
    })

    useEffect(() => {
        if (cancelObserver) cancelObserver();

        cancelObserver = registerAuthObserver(async (user) => {
            if (user) {
                const profile = await getItem('Usuarios', user.uid);
                if (!profile) {
                    const result = await addItemWithId(
                        'Usuarios',
                        { name: appData.appName, email: appData.appEmail },
                        user.uid
                    );
                    if (result) {
                        navigation.navigate('ApplicationScreens');
                    }
                }
            }
        })

        return () => {
            cancelObserver();
        }
    }, [appData.appName, appData.appEmail])



    const signInAsync = async () => {
        const { appEmail, appPass } = appData;
        if (appPass !== '' && appEmail !== '') {
            signup(appEmail, appPass);
        }
    };


    const setValue = (value, id) => {
        setAppData({ ...appData, [id]: value });
    }

    return (
        <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' }} style={styles.signInImageContainer}>
            <View style={styles.signInContainer}>

                <CuviInput placeholder='Nombre Completo' id='appName' textColor='#383838' typeInput='text' inputValue={setValue} />

                <CuviInput placeholder='Escribe tu correo electrónico' id='appEmail' textColor='#383838' typeInput='email-address' inputValue={setValue} />

                <CuviInput placeholder='Escribe tu contraseña' id='appPass' textColor='#383838' typeInput='password' inputValue={setValue} />


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
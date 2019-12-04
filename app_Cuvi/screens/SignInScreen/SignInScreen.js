import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, AsyncStorage } from 'react-native';
import CuviButton from '../../components/CuviButton';
import CuviInput from '../../components/CuviInput';

const SignInScreen = ({ navigation }) => {
    const signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        navigation.navigate('ApplicationScreens');
    };

    return (
        <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' }} style={styles.signInImageContainer}>
            <View style={styles.signInContainer}>

                <CuviInput placeholder='Nombre Completo' textColor='#383838' typeInput='text' />


                <CuviInput placeholder='Escribe tu contraseña' textColor='#383838' typeInput='password' />


                <CuviInput placeholder='Escribe tu correo electrónico' textColor='#383838' typeInput='email-address' />

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
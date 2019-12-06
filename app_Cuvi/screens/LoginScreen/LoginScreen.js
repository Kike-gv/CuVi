import React, { useState } from 'react';
import { Text, View, TextInput, ImageBackground, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import CuviButton from '../../components/CuviButton';
import CuviInput from '../../components/CuviInput';




const LoginScreen = ({ navigation }) => {

    const signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        navigation.navigate('ApplicationScreens');
    };


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

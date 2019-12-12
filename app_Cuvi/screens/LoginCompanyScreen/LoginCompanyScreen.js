import React, { useState } from 'react';
import { Text, View, TextInput, ImageBackground, TouchableOpacity, StyleSheet, AsyncStorage, } from 'react-native';
import { getItem, getAllRealTime, deleteItem, addItemWithId } from '../../services/database';
import { login } from '../../services/auth';
import CuviButton from '../../components/CuviButton';
import CuviInput from '../../components/CuviInput';




const LoginCompanyScreen = ({ navigation }) => {
    const [loginData, setLoginData] = useState({
        loginEmail: '',
        loginPass: ''
    })

    const signInAsync = async () => {
        const { loginEmail, loginPass } = loginData;
        if (loginEmail !== '' && loginPass !== '') {
            const result = await login(loginEmail, loginPass);
            if (result) {
                navigation.navigate('CompanyScreens');
            }
            else{
                alert('tu correo y/o password son erróneos');
            }
        }
        // await AsyncStorage.setItem('userToken', 'abc');
        // navigation.navigate('ApplicationScreens');
    };

    const setValue = (value, id) => {
        setLoginData({ ...loginData, [id]: value });
    }


    return (
        <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' }} style={styles.loginImageContainer}>
            <View style={styles.loginContainer}>

                <CuviInput placeholder='Escribe tu correo electrónico' id='loginEmail' textColor='#383838' typeInput='email-address' inputValueFunction={setValue} />

                <CuviInput placeholder='Escribe tu contraseña' id='loginPass' textColor='#383838' typeInput='password' inputValueFunction={setValue} />

                <CuviButton name='Accede a tu cuenta' textColor='white' bgColor='#c78021' clickedEvent={signInAsync} />

                <Text style={styles.loginContainer_text}>O</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('SignUpCompany') }}><Text style={styles.loginContainer_text}>Crea tu cuenta</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('Login') }}><Text style={styles.loginContainer_text}>Login para particulares</Text></TouchableOpacity>
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

export default LoginCompanyScreen;

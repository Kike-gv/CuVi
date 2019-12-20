import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, Image, ImageBackground, TouchableOpacity, StyleSheet, Dimensions, } from 'react-native';
import { getItem, getAllRealTime, deleteItem, addItemWithId } from '../../services/database';
import { login } from '../../services/auth';
import CuviButton from '../../components/CuviButton';
import CuviInput from '../../components/CuviInput';


const screenHeight = Math.round(Dimensions.get('window').height);


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
                navigation.navigate('AuthLoading');
            }
            else {
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
            <ScrollView>
                <View style={styles.loginContainer}>

                    <Image style={styles.loginContainer_logo} source={require('../../icons/logo.png')} />

                    <View style={styles.loginContainer_part}>

                        <CuviInput placeholder='Escribe tu correo electrónico' id='loginEmail' textColor='#383838' typeInput='email-address' inputValueFunction={setValue} />

                        <CuviInput placeholder='Escribe tu contraseña' id='loginPass' textColor='#383838' typeInput='password' inputValueFunction={setValue} />

                        <CuviButton name='Accede a tu cuenta' textColor='white' bgColor='#c78021' clickedEvent={signInAsync} />

                        <Text style={styles.loginContainer_text}>O</Text>
                        <TouchableOpacity onPress={() => { navigation.navigate('SignUpCompany') }}><Text style={styles.loginContainer_text}>Crea tu cuenta</Text></TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity onPress={() => { navigation.navigate('Login') }}><Text style={styles.loginContainer_text_little}>Login para particulares</Text></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    loginImageContainer: {
        width: '100%',
        height: '100%'
    },
    loginContainer: {
        height: screenHeight,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 32
    },
    loginContainer_part: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    loginContainer_logo: {
        height: 150,
        width: 150,
        resizeMode: 'contain',
    },
    loginContainer_text: {
        fontSize: 24,
        color: 'white',
        marginBottom: 16
    },
    loginContainer_text_little: {
        fontSize: 16,
        color: 'white',
        marginBottom: 16
    },
});

export default LoginCompanyScreen;

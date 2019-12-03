import React, { useState } from 'react';
import { Text, View, TextInput, Image, ImageBackground, Button, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';

const SignInScreen = ({ navigation }) => {
    const [nameInput, setNameInput] = useState('');
    const [passIgnput, setPassIgnput] = useState('');
    const [emailInput, setEmailInput] = useState('');

    const signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        navigation.navigate('ApplicationScreens');
    };

    return (
        <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' }} style={styles.signInImageContainer}>
            <View style={styles.signInContainer}>
                <TextInput
                    style={styles.signInContainer_input}
                    placeholder="Nombre Completo"
                    onChangeText={() => setNameInput({ nameInput })}
                    value={nameInput}
                    placeholderTextColor={'black'}
                />
                <TextInput
                    style={styles.signInContainer_input}
                    placeholder="Escribe tu contraseña"
                    onChangeText={() => setPassIgnput({ passIgnput })}
                    value={passIgnput}
                    secureTextEntry={true}
                    placeholderTextColor={'black'}
                />
                <TextInput
                    style={styles.signInContainer_input}
                    placeholder="Escribe tu correo electrónico"
                    onChangeText={() => setEmailInput({ emailInput })}
                    value={emailInput}
                    keyboardType={'email-address'}
                    placeholderTextColor={'black'}
                />
                <TouchableOpacity onPress={signInAsync} style={styles.signInContainer_button}><Text style={styles.signInContainer_button_text}>Crea tu cuenta</Text></TouchableOpacity>
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
    signInContainer_input: {
        width: '100%',
        height: 50,
        backgroundColor: 'rgba(255,255,255,0.8)',
        paddingLeft: 16,
        paddingRight: 16,
        fontSize: 16,
        borderRadius: 10,
        color: 'black',
        marginBottom: 16
    },
    signInContainer_button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#c78021',
        height: 50,
        borderRadius: 10,
    },
    signInContainer_button_text: {
        color: 'white',
        fontSize: 16
    }
});

export default SignInScreen;
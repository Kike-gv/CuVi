import React, { useState } from 'react';
import { Text, View, TextInput, ImageBackground, Button, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
// import * as firebase from 'firebase'
// import '@firebase/firestore';


const LoginScreen = ({ navigation }) => {
    const [nameInput, setNameInput] = useState('');
    const [passInput, setPassInput] = useState('');

    return (
        <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' }} style={styles.loginImageContainer}>
            <View style={styles.loginContainer}>
                <TextInput
                    style={styles.loginContainer_input}
                    placeholder="Escribe tu nombre"
                    onChangeText={() => setNameInput({ nameInput })}
                    value={nameInput}
                    placeholderTextColor={'black'}
                />
                <TextInput
                    style={styles.loginContainer_input}
                    placeholder="Escribe tu contraseña"
                    onChangeText={() => setPassInput({ passInput })}
                    value={passInput}
                    secureTextEntry={true}
                    placeholderTextColor={'black'}
                />
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
    loginContainer_input: {
        width: '100%',
        height: 50,
        backgroundColor: 'rgba(255,255,255,0.8)',
        paddingLeft: 16,
        paddingRight: 16,
        fontSize: 16,
        borderRadius: 50,
        color: 'black',
        marginBottom: 16
    }
});

export default LoginScreen;

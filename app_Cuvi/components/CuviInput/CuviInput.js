import React, { useState } from 'react';
import { Text, View, TextInput, ImageBackground, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';


const CuviInput = ({ placeholder, typeInput, textColor }) => {
    const [nameInput, setNameInput] = useState('');

    const styles = StyleSheet.create({
        cuviInput: {
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
    });

    switch (typeInput) {
        case 'password':
            return (
                <TextInput
                    style={styles.cuviInput}
                    placeholder={placeholder}
                    onChangeText={() => setNameInput({ nameInput })}
                    value={nameInput}
                    secureTextEntry={true}
                    placeholderTextColor={textColor}
                />
            );
        case 'email-address':
            return (
                <TextInput
                    style={styles.cuviInput}
                    placeholder={placeholder}
                    onChangeText={() => setNameInput({ nameInput })}
                    value={nameInput}
                    keyboardType={typeInput}
                    placeholderTextColor={textColor}
                />
            );
        default:
            return (
                <TextInput
                    style={styles.cuviInput}
                    placeholder={placeholder}
                    onChangeText={() => setNameInput({ nameInput })}
                    value={nameInput}
                    placeholderTextColor={textColor}
                />
            );

    }


}

export default CuviInput;
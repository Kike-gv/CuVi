import React, { useState } from 'react';
import { Text, View, TextInput, ImageBackground, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';


const CuviInput = ({ placeholder, typeInput, textColor, background }) => {
    const [nameInput, setNameInput] = useState('');

    let styles;

    background !== undefined ?
        styles = StyleSheet.create({
            cuviInput: {
                width: '100%',
                minHeight: 50,
                backgroundColor: 'rgba(255,255,255,0.8)',
                paddingLeft: 16,
                paddingRight: 16,
                fontSize: 16,
                borderRadius: 10,
                color: textColor,
                marginBottom: 16,
                borderWidth: 1,
                borderColor: '#383838'
            },

        })
        :
        styles = StyleSheet.create({
            cuviInput: {
                width: '100%',
                minHeight: 50,
                backgroundColor: 'rgba(255,255,255,0.8)',
                paddingLeft: 16,
                paddingRight: 16,
                fontSize: 16,
                borderRadius: 10,
                color: textColor,
                marginBottom: 16
            },

        })
        ;

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
        case 'multiline':
            return (
                <TextInput
                    style={styles.cuviInput}
                    placeholder={placeholder}
                    onChangeText={() => setNameInput({ nameInput })}
                    multiline
                    numberOfLines={5}
                    value={nameInput}
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
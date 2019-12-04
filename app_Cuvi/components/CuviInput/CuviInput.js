import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';


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
                marginTop: 12,
                borderWidth: 1,
                borderColor: '#383838'
            },
            cuviInput_text: {
                position: 'absolute',
                left: 5,
                color: '#c78021',
                fontSize: 10,
                backgroundColor: 'white',
                padding: 3
            }

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
                marginTop: 12,
                marginBottom: 16
            },
            cuviInput_text: {
                position: 'absolute',
                left: 5,
                color: '#c78021',
                fontSize: 10,
                backgroundColor: 'white',
                padding: 3
            }

        })
        ;

    switch (typeInput) {
        case 'password':
            return (
                <View style={{ position: 'relative' }}>
                    <TextInput
                        style={styles.cuviInput}
                        placeholder={placeholder}
                        onChangeText={() => setNameInput({ nameInput })}
                        value={nameInput}
                        secureTextEntry={true}
                        placeholderTextColor={textColor}
                    />
                    <Text style={styles.cuviInput_text}>{placeholder}</Text>
                </View>
            );
        case 'email-address':
            return (
                <View style={{ position: 'relative' }}>
                    <TextInput
                        style={styles.cuviInput}
                        placeholder={placeholder}
                        onChangeText={() => setNameInput({ nameInput })}
                        value={nameInput}
                        keyboardType={typeInput}
                        placeholderTextColor={textColor}
                    />
                    <Text style={styles.cuviInput_text}>{placeholder}</Text>
                </View>
            );
        case 'multiline':
            return (
                <View style={{ position: 'relative' }}>
                    <TextInput
                        style={styles.cuviInput}
                        placeholder={placeholder}
                        onChangeText={() => setNameInput({ nameInput })}
                        multiline
                        numberOfLines={5}
                        value={nameInput}
                        placeholderTextColor={textColor}
                    />
                    <Text style={styles.cuviInput_text}>{placeholder}</Text>
                </View>
            );
        default:
            return (
                <View style={{ position: 'relative' }}>
                    <TextInput
                        style={styles.cuviInput}
                        placeholder={placeholder}
                        onChangeText={() => setNameInput({ nameInput })}
                        value={nameInput}
                        placeholderTextColor={textColor}
                    />
                    <Text style={styles.cuviInput_text}>{placeholder}</Text>
                </View>
            );

    }


}

export default CuviInput;
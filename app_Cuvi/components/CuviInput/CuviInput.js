import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';


const CuviInput = ({ id, label, placeholder, inputValueFunction, inputValueGet, typeInput, textColor, background, showLabel }) => {



    let styles;
    background !== undefined ?
        styles = StyleSheet.create({
            cuviInput: {
                width: '100%',
                minHeight: 50,
                backgroundColor: 'rgba(255,255,255, 1)',
                paddingLeft: 16,
                paddingRight: 16,
                fontSize: 16,
                borderBottomLeftRadius:10,
                borderBottomRightRadius: 10,
                color: textColor,
                marginBottom: 16,
                marginTop: 12,
            },
            cuviInput_text: {
                width: '100%',
                position: 'absolute',
                left: 0,
                color: '#c78021',
                fontSize: 10,
                backgroundColor: 'white',
                padding: 3,
                paddingLeft: 16,
                borderTopLeftRadius:10,
                borderTopRightRadius: 10,
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
                left: 13,
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
                <View style={{ position: 'relative', width: '100%' }}>
                    <TextInput
                        style={styles.cuviInput}
                        placeholder={placeholder}
                        onChangeText={(text) => {
                            inputValueFunction(text, id);
                        }}
                        value={inputValueGet}
                        secureTextEntry={true}
                        placeholderTextColor={'#949494'}
                    />
                    {showLabel && <Text style={styles.cuviInput_text}>{label}</Text>}
                </View>
            );
        case 'email-address':
            return (
                <View style={{ position: 'relative', width: '100%' }}>
                    <TextInput
                        style={styles.cuviInput}
                        placeholder={placeholder}
                        onChangeText={(text) => {
                            inputValueFunction(text, id);
                        }}
                        value={inputValueGet}
                        keyboardType={typeInput}
                        selectTextOnFocus={true}
                        placeholderTextColor={'#949494'}
                    />
                    {showLabel && <Text style={styles.cuviInput_text}>{label}</Text>}
                </View>
            );
            case 'telephoneNumber':
                return (
                    <View style={{ position: 'relative', width: '100%' }}>
                        <TextInput
                            style={styles.cuviInput}
                            placeholder={placeholder}
                            onChangeText={(text) => {
                                inputValueFunction(text, id);
                            }}
                            value={inputValueGet}
                            textContentType={typeInput}
                            keyboardType={'numeric'}
                            selectTextOnFocus={true}
                            placeholderTextColor={'#949494'}
                        />
                        {showLabel && <Text style={styles.cuviInput_text}>{label}</Text>}
                    </View>
                );
        case 'multiline':
            return (
                <View style={{ position: 'relative', width: '100%' }}>
                    <TextInput
                        style={styles.cuviInput}
                        placeholder={placeholder}
                        onChangeText={(text) => {
                            inputValueFunction(text, id);
                        }}
                        multiline
                        numberOfLines={5}
                        value={inputValueGet}
                        selectTextOnFocus={true}
                        placeholderTextColor={'#949494'}
                    />
                    {showLabel && <Text style={styles.cuviInput_text}>{label}</Text>}
                </View>
            );
        default:
            return (
                <View style={{ position: 'relative', width: '100%' }}>
                    <TextInput
                        style={styles.cuviInput}
                        placeholder={placeholder}
                        onChangeText={(text) => {
                            inputValueFunction(text, id);
                        }}
                        value={inputValueGet}
                        selectTextOnFocus={true}
                        placeholderTextColor={'#949494'}
                    />
                    {showLabel && <Text style={styles.cuviInput_text}>{label}</Text>}
                </View>
            );

    }


}

export default CuviInput;
import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';


const CuviHeader = ({ bgColor, buttonText, textColor, buttonEvent }) => {

    const styles = StyleSheet.create({
        cuviHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            backgroundColor: bgColor,
            height: 75,
            paddingLeft:16,
            paddingRight:16
        },
        cuviHeader_button: {
            color: textColor,
            padding:0,
        },
        cuviHeader_button_text: {
            color: textColor,
            marginBottom:10
        }
    });

    return (
        <View style={styles.cuviHeader}>
            <Text style={styles.cuviHeader_button_text}>texto</Text>
            <TouchableOpacity style={styles.cuviHeader_button} onPress={buttonEvent}>
                <Text style={styles.cuviHeader_button_text}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CuviHeader;
import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';


const CuviHeader = ({ bgButtonColor, buttonText, textColor, buttonEvent }) => {

    const styles = StyleSheet.create({
        cuviHeader: {
            backgroundColor: 'rgba(0,0,0,0.5)',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 48,
            paddingBottom: 16,
            paddingLeft: 16,
            paddingRight: 16
        },
        cuviHeader_button: {
            color: textColor,
            backgroundColor: bgButtonColor,
            padding: 30,
            paddingTop: 5,
            paddingBottom: 5,
        },
        cuviHeader_button_text: {
            color: textColor,
        }
    });

    return (
        <View style={styles.cuviHeader}>
            <View></View>
            <TouchableOpacity style={styles.cuviHeader_button} onPress={buttonEvent}>
                <Text style={styles.cuviHeader_button_text}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CuviHeader;
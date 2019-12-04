import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CuviButton = ({ name, icon, textColor, bgColor, clickedEvent }) => {
    let IconComponent = Ionicons;

    const styles = StyleSheet.create({
        cuviButtonWithIcon: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            backgroundColor: bgColor,
            borderRadius: 10,
            padding: 16,
            marginBottom: 16,
        },
        cuviButtonWithOutIcon: {
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            backgroundColor: bgColor,
            borderRadius: 10,
            padding: 16,
            marginBottom: 16,
        },
        cuviButton_text: {
            fontSize: 16,
            color: textColor,
        },
    });
    

    return icon !== undefined ?
        (
            <TouchableOpacity style={styles.cuviButtonWithIcon} onPress={clickedEvent}>
                <Text style={styles.cuviButton_text}>{name}</Text>
                <IconComponent name={icon} size={25} color={textColor} />
            </TouchableOpacity>
        ) :
        (
            <TouchableOpacity style={styles.cuviButtonWithOutIcon} onPress={clickedEvent}>
                <Text style={styles.cuviButton_text}>{name}</Text>
            </TouchableOpacity>
        );
}


export default CuviButton;
import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, StyleSheet, AsyncStorage } from 'react-native';

import { connect, useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../redux/actions/userActions';

import CuviButton from '../../components/CuviButton';


const CVcard = ({ cvImage, cvText }) => {
    const user = useSelector(state => state.user);
    // console.log("TCL: CVcard -> user", user)
    const dispatch = useDispatch();

    const updateCv = () => {
        navigation.navigate('userCV');
    }


    return (
        <TouchableOpacity style={styles.cvCard}>
            <Image style={styles.cvCard_cvImage} source={{ uri: cvImage }} />
            <Text style={styles.cvCard_cvText}>{cvText}</Text>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    cvCard: {
        width: 207,
        borderRadius: 10,
        backgroundColor: '#000000',
        marginRight: 8,
        marginBottom: 48,
        overflow: 'hidden',
    },
    cvCard_cvImage: {
        width: null,
        height: 300,
        resizeMode: 'cover',
        marginBottom: 8,
    },
    cvCard_cvText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        marginBottom: 8,
    },
});

export default CVcard;
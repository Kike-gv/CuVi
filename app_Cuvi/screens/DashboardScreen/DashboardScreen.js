import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, StyleSheet, AsyncStorage } from 'react-native';

import { connect, useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../redux/actions/userActions';

import CuviButton from '../../components/CuviButton';


const DashboardScreen = ({ navigation }) => {
    const user = useSelector(state => state.user);
    // console.log("TCL: DashboardScreen -> user", user)
    const dispatch = useDispatch();

    const updateCv = () => {
        navigation.navigate('userCV');
    }


    return (
        <ScrollView style={styles.dashboardContainer}>
            <Text style={styles.dashboardContainer_generalTitle}>Hola {user.name && user.name}, este es tu muro.</Text>

            <CuviButton name='Rellena con tus datos' icon='md-image' textColor='#383838' bgColor='rgba(199, 128, 33, 0.25)' clickedEvent={updateCv} />

            <View style={styles.cvContainer_Container}>
                <TouchableOpacity style={styles.cvContainer_cvPreview}>
                    <Image style={styles.cvContainer_cvImage} source={{ uri: 'https://gosumo-cvtemplate.com/wp-content/uploads/2016/09/CV-Template-Zurich-500x722.png' }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.cvContainer_cvPreview}>
                    <Image style={styles.cvContainer_cvImage} source={{ uri: 'https://img.culturacolectiva.com/content/2016/03/formatos-para-curr%C3%ADculum-minimalista-high.jpg' }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.cvContainer_cvPreview}>
                    <Image style={styles.cvContainer_cvImage} source={{ uri: 'https://gosumo-cvtemplate.com/wp-content/uploads/2016/09/CV-Template-Zurich-500x722.png' }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.cvContainer_cvPreview}>
                    <Image style={styles.cvContainer_cvImage} source={{ uri: 'https://img.culturacolectiva.com/content/2016/03/formatos-para-curr%C3%ADculum-minimalista-high.jpg' }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.cvContainer_cvPreview}>
                    <Image style={styles.cvContainer_cvImage} source={{ uri: 'https://gosumo-cvtemplate.com/wp-content/uploads/2016/09/CV-Template-Zurich-500x722.png' }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.cvContainer_cvPreview}>
                    <Image style={styles.cvContainer_cvImage} source={{ uri: 'https://img.culturacolectiva.com/content/2016/03/formatos-para-curr%C3%ADculum-minimalista-high.jpg' }} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    dashboardContainer: {
        width: '100%',
        height: '100%',
        padding: 16,
        paddingTop: 32
    },
    dashboardContainer_generalTitle: {
        fontSize: 48,
        color: '#383838',
        marginTop: 32,
        marginBottom: 32,
    },
    cvContainer_Container: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    cvContainer_cvPreview: {
        width: '47%',
        margin: '1%',
    },
    cvContainer_cvImage: {
        width: '100%',
        height: 250,
        resizeMode: 'contain',
    },
});

export default DashboardScreen;
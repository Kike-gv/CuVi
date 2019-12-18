import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, StyleSheet, AsyncStorage } from 'react-native';

import { connect, useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../redux/actions/userActions';

import CuviButton from '../../components/CuviButton';
import CVcard from '../../components/CVcard';



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

            <CuviButton name='Rellena tu CV con tus datos' icon='md-image' textColor='white' bgColor='rgba(199, 128, 33, 1)' clickedEvent={updateCv} />
            <Image style={styles.dashboardContainer_emptyImage} source={require('../../icons/emptyState.png')} />
            <Text style={styles.dashboardContainer_Text}>Vaya, parece que aún no has escogido ningún modelo de CV.</Text>
            <Text style={styles.dashboardContainer_SubText}>*Proximamente tendremos los siguientes modelos en nuestra galería</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <CVcard cvImage={'https://gosumo-cvtemplate.com/wp-content/uploads/2016/09/CV-Template-Zurich-500x722.png'} cvText={'Arizona'}/>
                <CVcard cvImage={'https://img.culturacolectiva.com/content/2016/03/formatos-para-curr%C3%ADculum-minimalista-high.jpg'} cvText={'Fluid'}/>
                <CVcard cvImage={'https://i.pinimg.com/originals/9f/17/ef/9f17ef8c87626bc8b52a1dab645ed18b.png'} cvText={'Savannah'}/>
                <CVcard cvImage={'https://s.tmimgcdn.com/scr/1600x2400/64800/benjamin-thompson-multipurpose-elegant-resume-template-resume-template_64872-original.jpg'} cvText={'Air'}/>
                <CVcard cvImage={'https://images.template.net/261/Free-Mechanic-Resume-2x.jpg'} cvText={'Tech'}/>
                <CVcard cvImage={'https://i.etsystatic.com/14820047/r/il/9ea6cd/1477997782/il_794xN.1477997782_jxuz.jpg'} cvText={'Glam'}/>
            </ScrollView>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    dashboardContainer: {
        backgroundColor: '#383838',
        width: '100%',
        height: '100%',
        padding: 16,
        paddingTop: 32
    },
    dashboardContainer_generalTitle: {
        fontSize: 48,
        color: '#FFFFFF',
        marginTop: 32,
        marginBottom: 32,
    },
    cvContainer_Container: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    dashboardContainer_emptyImage:{
        width:'90%',
        marginLeft:'10%',
        height:400,
        resizeMode:'contain',
        marginBottom: 16,
    },
    dashboardContainer_Text:{
        fontSize: 20,
        color: '#FFFFFF',
        marginBottom: 16,
    },
    dashboardContainer_SubText:{
        fontSize: 16,
        color: 'rgba(199, 128, 33, 1)',
        marginBottom: 32,},
});

export default DashboardScreen;
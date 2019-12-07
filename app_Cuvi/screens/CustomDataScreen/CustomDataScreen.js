import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

import { connect, useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../redux/actions/userActions';

import { getItem, getAllRealTime, deleteItem, addItemWithId } from '../../services/database';
import { signup, registerAuthObserver } from '../../services/auth';

import CuviHeader from '../../components/CuviHeader';
import CuviButton from '../../components/CuviButton';
import CuviInput from '../../components/CuviInput';
import CuviDatePicker from '../../components/CuviDatePicker';

let cancelObserver;

const CustomDataScreen = ({ navigation }) => {
    const userRedux = useSelector(state => state.user);
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const [cvData, setCvData] = useState({ ...userRedux });


    const setValue = (value, id) => {
        // console.log("TCL: CustomDataScreen -> state", state.user)
        // dispatch(setCV({ ...actualizeCV, [id]: value }));

        setCvData({ ...cvData, [id]: value });
    }

    const CuviHeaderFunction = () => {
        const newUser = { ...userRedux, ...cvData };
        dispatch(setUser(newUser));

        cancelObserver = registerAuthObserver(async (user) => {
            // console.log("TCL: cancelObserver -> user", user)
            if (user) {
                const profile = await getItem('Usuarios', user.uid);
                // console.log("TCL: cancelObserver -> profile", profile)
                await addItemWithId(
                    'Usuarios',
                    { ...profile, ...newUser },
                    user.uid
                );

            }
            else {
                // console.log('no encuentro el user')
            }
        });

    }


    return (

        <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' }} style={styles.dataBgContainer}>
            <CuviHeader bgColor='#383838' buttonText='Actualiza el CV' textColor='white' buttonEvent={CuviHeaderFunction} />
            <ScrollView style={styles.dataContainer}>
                <View style={styles.dataContainer_block}>
                    <Text style={styles.dataContainer_block_title}>Información básica sobre mí</Text>

                    <CuviInput background='noBackground' id='cvName' inputValueFunction={setValue} inputValueGet={cvData.cvName} showLabel label='Nombre Completo' placeholder='John Doe' textColor='#949494' typeInput='text' />

                    <CuviDatePicker placeholder='Fecha de nacimiento' />

                    <CuviInput background='noBackground' id='cvTelephone' inputValueFunction={setValue} inputValueGet={cvData.cvTelephone} showLabel label='Teléfono' placeholder='666777999' textColor='#949494' typeInput='text' />

                    <CuviInput background='noBackground' id='cvEmail' inputValueFunction={setValue} inputValueGet={cvData.cvEmail} showLabel label='Correo electrónico' placeholder='micorreo@ejemplo.com' textColor='#949494' typeInput='email-address' />

                    <CuviInput background='noBackground' id='cvPortfolio' inputValueFunction={setValue} inputValueGet={cvData.cvPortfolio} showLabel label='Porfolio' placeholder='www.portfolio.com' textColor='#949494' typeInput='text' />

                    <CuviInput background='noBackground' id='cvRRSS' inputValueFunction={setValue} inputValueGet={cvData.cvRRSS} showLabel label='Perfil de Linkedin, infojobs...' placeholder='www.linkedin.com/profile...' textColor='#949494' typeInput='text' />
                </View>


                <View style={styles.dataContainer_block}>
                    <Text style={styles.dataContainer_block_title}>Presentación</Text>

                    <CuviInput background='noBackground' id='cvPresentation' inputValueFunction={setValue} inputValueGet={cvData.cvPresentation} showLabel label='Breve resumen' placeholder='Me considero una persona...' textColor='#949494' typeInput='multiline' />
                </View>


                <View style={styles.dataContainer_block}>
                    <Text style={styles.dataContainer_block_title}>Estudios</Text>
                    <View>
                        <CuviInput background='noBackground' id='cvStudyName' inputValueFunction={setValue} inputValueGet={cvData.cvStudyName} showLabel label='Estudios' placeholder='Graduado en medicina' textColor='#949494' typeInput='text' />

                        <CuviInput background='noBackground' id='cvStudyCenter' inputValueFunction={setValue} inputValueGet={cvData.cvStudyCenter} showLabel label='Centro de estudios' placeholder='Universidad de Barcelona' textColor='#949494' typeInput='text' />

                        <CuviDatePicker placeholder='Fecha de inicio' />

                        <CuviDatePicker placeholder='Fecha de finalización' />

                    </View>

                    <CuviButton name='Más estudios' icon='md-add' textColor='white' bgColor='#c78021' clickedEvent={''} />
                </View>


                <View style={styles.dataContainer_block}>
                    <Text style={styles.dataContainer_block_title}>Experiencia laboral</Text>
                    <View>
                        <CuviInput background='noBackground' id='cvJobPosition' inputValueFunction={setValue} inputValueGet={cvData.cvJobPosition} showLabel label='Cargo' placeholder='cirujano general' textColor='#949494' typeInput='text' />

                        <CuviInput background='noBackground' id='cvJobCompany' inputValueFunction={setValue} inputValueGet={cvData.cvJobCompany} showLabel label='Empresa' placeholder='Quirón' textColor='#949494' typeInput='text' />

                        <CuviDatePicker placeholder='Fecha de inicio' />

                        <CuviDatePicker placeholder='Fecha de finalización' />

                    </View>

                    <CuviButton name='Más experiencias laborales' icon='md-add' textColor='white' bgColor='#c78021' clickedEvent={''} />
                </View>


                <View style={styles.dataContainer_block}>
                    <Text style={styles.dataContainer_block_title}>Idiomas</Text>
                    <View>
                        <CuviInput background='noBackground' id='cvLanguage' inputValueFunction={setValue} inputValueGet={cvData.cvLanguage} showLabel label='Idioma' placeholder='Inglés' textColor='#949494' typeInput='text' />
                    </View>

                    <CuviButton name='Más idiomas' icon='md-add' textColor='white' bgColor='#c78021' clickedEvent={''} />
                </View>


                <View style={styles.dataContainer_block}>
                    <Text style={styles.dataContainer_block_title}>Habilidades clave (Máx. 6)</Text>
                    <View>
                        <CuviInput background='noBackground' id='cvSkill' inputValueFunction={setValue} inputValueGet={cvData.cvSkill} showLabel label='Habilidad' placeholder='primeros auxilios' textColor='#949494' typeInput='text' />
                    </View>

                    <CuviButton name='Más habilidades clave' icon='md-add' textColor='white' bgColor='#c78021' clickedEvent={''} />
                </View>


                <View style={styles.dataContainer_block}>
                    <Text style={styles.dataContainer_block_title}>Hobbies (Máx. 6)</Text>
                    <View>
                        <CuviInput background='noBackground' id='cvHobby' inputValueFunction={setValue} inputValueGet={cvData.cvHobby} showLabel label='Hobby' placeholder='Viajar' textColor='#949494' typeInput='text' />
                    </View>

                    <CuviButton name='Más intereses' icon='md-add' textColor='white' bgColor='#c78021' clickedEvent={''} />
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    dataContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 8,
    },
    dataBgContainer: {
        width: '100%',
        height: '100%'
    },
    dataContainer_block: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 8,
        paddingRight: 32,
        marginBottom: 8
    },
    dataContainer_block_title: {
        color: '#383838',
        fontSize: 20,
        marginBottom: 16,
        marginTop: 8
    }
});

export default CustomDataScreen;
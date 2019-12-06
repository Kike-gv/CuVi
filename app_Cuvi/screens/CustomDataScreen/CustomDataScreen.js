import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { getItem, getAllRealTime, deleteItem, addItemWithId } from '../../services/database';
import { signup, registerAuthObserver } from '../../services/auth';
import CuviButton from '../../components/CuviButton';
import CuviInput from '../../components/CuviInput';
import CuviDatePicker from '../../components/CuviDatePicker';

let cancelObserver;

const CustomDataScreen = ({ navigation }) => {
    const [cvData, setCvData] = useState({
        cvName: '',
        cvTelephone: '',
        cvEmail: '',
        cvPortfolio: '',
        cvRRSS: '',
    })

    const setValue = (value, id) => {
        setCvData({ ...cvData, [id]: value });
    }

    useEffect(() => {
    //     if (cancelObserver) cancelObserver();

    //     cancelObserver = registerAuthObserver(async (user) => {
    //         if (user) {
    //             const profile = await getItem('Usuarios', user.uid);
    //             if (!profile) {
    //                 const result = await addItemWithId(
    //                     'Usuarios',
    //                     { name: appData.appName, email: appData.appEmail },
    //                     user.uid
    //                 );
    //                 if (result) {
    //                     navigation.navigate('ApplicationScreens');
    //                 }
    //             }
    //         }
    //     })

    //     return () => {
    //         cancelObserver();
    //     }
    console.log("TCL: CustomDataScreen -> cvData", cvData)
    }, [cvData])

    return (

        <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' }} style={styles.dataBgContainer}>
            <ScrollView style={styles.dataContainer}>
                <View style={styles.dataContainer_block}>
                    <Text style={styles.dataContainer_block_title}>Información básica sobre mí</Text>

                    <CuviInput background='noBackground' id='cvName' inputValue={setValue} showLabel label='Nombre Completo' placeholder='John Doe' textColor='#949494' typeInput='text' />

                    <CuviDatePicker placeholder='Fecha de nacimiento' />

                    <CuviInput background='noBackground' id='cvTelephone' inputValue={setValue} showLabel label='Teléfono' placeholder='666777999' textColor='#949494' typeInput='text' />

                    <CuviInput background='noBackground' id='cvEmail' inputValue={setValue} showLabel label='Correo electrónico' placeholder='micorreo@ejemplo.com' textColor='#949494' typeInput='email-address' />

                    <CuviInput background='noBackground' id='cvPortfolio' inputValue={setValue} showLabel label='Porfolio' placeholder='www.portfolio.com' textColor='#949494' typeInput='text' />

                    <CuviInput background='noBackground' id='cvRRSS' inputValue={setValue} showLabel label='Perfil de Linkedin, infojobs...' placeholder='www.linkedin.com/profile...' textColor='#949494' typeInput='text' />
                </View>


                <View style={styles.dataContainer_block}>
                    <Text style={styles.dataContainer_block_title}>Presentación</Text>

                    <CuviInput background='noBackground' id='cvPresentation' inputValue={setValue} showLabel label='Breve resumen' placeholder='Me considero una persona...' textColor='#949494' typeInput='multiline' />
                </View>


                <View style={styles.dataContainer_block}>
                    <Text style={styles.dataContainer_block_title}>Estudios</Text>
                    <View>
                        <CuviInput background='noBackground' id='cvStudyName' inputValue={setValue} showLabel label='Estudios' placeholder='Graduado en medicina' textColor='#949494' typeInput='text' />

                        <CuviInput background='noBackground' id='cvStudyCenter' inputValue={setValue} showLabel label='Centro de estudios' placeholder='Universidad de Barcelona' textColor='#949494' typeInput='text' />

                        <CuviDatePicker placeholder='Fecha de inicio' />

                        <CuviDatePicker placeholder='Fecha de finalización' />

                    </View>

                    <CuviButton name='Más estudios' icon='md-add' textColor='white' bgColor='#c78021' clickedEvent={''} />
                </View>


                <View style={styles.dataContainer_block}>
                    <Text style={styles.dataContainer_block_title}>Experiencia laboral</Text>
                    <View>
                        <CuviInput background='noBackground' id='cvJobPosition' inputValue={setValue} showLabel label='Cargo' placeholder='cirujano general' textColor='#949494' typeInput='text' />

                        <CuviInput background='noBackground' id='cvJobCompany' inputValue={setValue} showLabel label='Empresa' placeholder='Quirón' textColor='#949494' typeInput='text' />

                        <CuviDatePicker placeholder='Fecha de inicio' />

                        <CuviDatePicker placeholder='Fecha de finalización' />

                    </View>

                    <CuviButton name='Más experiencias laborales' icon='md-add' textColor='white' bgColor='#c78021' clickedEvent={''} />
                </View>


                <View style={styles.dataContainer_block}>
                    <Text style={styles.dataContainer_block_title}>Idiomas</Text>
                    <View>
                        <CuviInput background='noBackground' id='cvLanguage' inputValue={setValue} showLabel label='Idioma' placeholder='Inglés' textColor='#949494' typeInput='text' />
                    </View>

                    <CuviButton name='Más idiomas' icon='md-add' textColor='white' bgColor='#c78021' clickedEvent={''} />
                </View>


                <View style={styles.dataContainer_block}>
                    <Text style={styles.dataContainer_block_title}>Habilidades clave (Máx. 6)</Text>
                    <View>
                        <CuviInput background='noBackground' id='cvSkill' inputValue={setValue} showLabel label='Habilidad' placeholder='primeros auxilios' textColor='#949494' typeInput='text' />
                    </View>

                    <CuviButton name='Más habilidades clave' icon='md-add' textColor='white' bgColor='#c78021' clickedEvent={''} />
                </View>


                <View style={styles.dataContainer_block}>
                    <Text style={styles.dataContainer_block_title}>Hobbies (Máx. 6)</Text>
                    <View>
                        <CuviInput background='noBackground' id='cvHobby' inputValue={setValue} showLabel label='Hobby' placeholder='Viajar' textColor='#949494' typeInput='text' />
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
        paddingRight: 0,
        paddingTop: 32,
        paddingLeft: 32,
        paddingBottom: 0
    },
    dataBgContainer: {
        width: '100%',
        height: '100%'
    },
    dataContainer_block: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
        padding: 8,
        paddingRight: 32,
        marginBottom: 32
    },
    dataContainer_block_title: {
        color: '#383838',
        fontSize: 20,
        marginBottom: 16,
        marginTop: 8
    }
});

export default CustomDataScreen;
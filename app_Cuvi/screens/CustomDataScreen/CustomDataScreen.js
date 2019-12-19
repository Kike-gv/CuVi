import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

import { connect, useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../redux/actions/userActions';

import { getItem, addItemWithId } from '../../services/database';

import CuviHeader from '../../components/CuviHeader';
import CuviButton from '../../components/CuviButton';
import CuviInput from '../../components/CuviInput';
import CuviDatePicker from '../../components/CuviDatePicker';


const CustomDataScreen = ({ navigation }) => {
    const userRedux = useSelector(state => state.user);
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const [cvData, setCvData] = useState({ ...userRedux });

    // useEffect(() => {

    //     console.log("TCL: CustomDataScreen -> cvData.cvEmail", cvData.cvEmail)

    // }, [cvData.cvEmail])

    const setInputValue = (value, id) => {
        setCvData({ ...cvData, [id]: value });
    }

    const CuviHeaderFunction = async () => {
        const newUser = { ...userRedux, ...cvData };
        dispatch(setUser(newUser));

        const profile = await getItem('Usuarios', newUser.id);
        await addItemWithId(
            'Usuarios',
            { ...profile, ...newUser },
            newUser.id
        );
    }


    return (
        <View style={styles.customData}>
            <View style={styles.dataContainer_block}>
                <CuviButton name='Guarda los cambios' icon='md-add' textColor='white' bgColor='#c78021' clickedEvent={CuviHeaderFunction} />
            </View>

            <ScrollView style={styles.dataContainer_scroll}>
                <View style={styles.dataContainer_block}>
                    <Text style={styles.dataContainer_block_title}>Información básica sobre mí</Text>

                    <CuviInput background='noBackground' id='cvName' inputValueFunction={setInputValue} inputValueGet={cvData.cvName} showLabel label='Nombre Completo' placeholder='John Doe' textColor='#383838' typeInput='text' />

                    <CuviDatePicker placeholder='Fecha de nacimiento' id='cvBirthday' datePickerValueFunction={setInputValue} datePickerValueGet={cvData.cvBirthday} />

                    <CuviInput background='noBackground' id='cvTelephone' inputValueFunction={setInputValue} inputValueGet={cvData.cvTelephone} showLabel label='Teléfono' placeholder='666777999' textColor='#383838' typeInput='telephoneNumber' />

                    <CuviInput background='noBackground' id='cvEmail' inputValueFunction={setInputValue} inputValueGet={cvData.cvEmail} showLabel label='Correo electrónico' placeholder='micorreo@ejemplo.com' textColor='#383838' typeInput='email-address' />

                    <CuviInput background='noBackground' id='cvPortfolio' inputValueFunction={setInputValue} inputValueGet={cvData.cvPortfolio} showLabel label='Porfolio' placeholder='www.portfolio.com' textColor='#383838' typeInput='text' />

                    <CuviInput background='noBackground' id='cvRRSS' inputValueFunction={setInputValue} inputValueGet={cvData.cvRRSS} showLabel label='Perfil de Linkedin' placeholder='www.linkedin.com/profile...' textColor='#383838' typeInput='text' />
                </View>


                <View style={styles.dataContainer_block}>
                    <Text style={styles.dataContainer_block_title}>Presentación</Text>

                    <CuviInput background='noBackground' id='cvPresentation' inputValueFunction={setInputValue} inputValueGet={cvData.cvPresentation} showLabel label='Breve resumen' placeholder='Me considero una persona...' textColor='#383838' typeInput='multiline' />
                </View>


                <View style={styles.dataContainer_block}>
                    <Text style={styles.dataContainer_block_title}>Estudios</Text>
                    <View>
                        <CuviInput background='noBackground' id='cvStudyName' inputValueFunction={setInputValue} inputValueGet={cvData.cvStudyName} showLabel label='Estudios' placeholder='Graduado en medicina' textColor='#383838' typeInput='text' />

                        <CuviInput background='noBackground' id='cvStudyCenter' inputValueFunction={setInputValue} inputValueGet={cvData.cvStudyCenter} showLabel label='Centro de estudios' placeholder='Universidad de Barcelona' textColor='#383838' typeInput='text' />

                        <CuviDatePicker placeholder='Fecha de inicio' id='cvStudyBegin' datePickerValueFunction={setInputValue} datePickerValueGet={cvData.cvStudyBegin} />

                        <CuviDatePicker placeholder='Fecha de finalización' id='cvStudyEnd' datePickerValueFunction={setInputValue} datePickerValueGet={cvData.cvStudyEnd} />

                    </View>

                    {/* <CuviButton name='Más estudios' icon='md-add' textColor='white' bgColor='#c78021' clickedEvent={''} /> */}
                </View>


                <View style={styles.dataContainer_block}>
                    <Text style={styles.dataContainer_block_title}>Experiencia laboral</Text>
                    <View>
                        <CuviInput background='noBackground' id='cvJobPosition' inputValueFunction={setInputValue} inputValueGet={cvData.cvJobPosition} showLabel label='Cargo' placeholder='cirujano general' textColor='#383838' typeInput='text' />

                        <CuviInput background='noBackground' id='cvJobCompany' inputValueFunction={setInputValue} inputValueGet={cvData.cvJobCompany} showLabel label='Empresa' placeholder='Quirón' textColor='#383838' typeInput='text' />

                        <CuviDatePicker placeholder='Fecha de inicio' id='cvJobBegin' datePickerValueFunction={setInputValue} datePickerValueGet={cvData.cvJobBegin} />

                        {/* <CuviDatePicker placeholder='Fecha de finalización. Si no tienes, déjalo en blanco' id='cvJobEnd' datePickerValueFunction={setInputValue} datePickerValueGet={cvData.cvJobEnd} /> */}

                    </View>

                    {/* <CuviButton name='Más experiencias laborales' icon='md-add' textColor='white' bgColor='#c78021' clickedEvent={''} /> */}
                </View>


                <View style={styles.dataContainer_block}>
                    <Text style={styles.dataContainer_block_title}>Idiomas</Text>
                    <View>
                        <CuviInput background='noBackground' id='cvLanguage' inputValueFunction={setInputValue} inputValueGet={cvData.cvLanguage} showLabel label='Idioma' placeholder='Inglés' textColor='#383838' typeInput='text' />
                    </View>

                    {/* <CuviButton name='Más idiomas' icon='md-add' textColor='white' bgColor='#c78021' clickedEvent={''} /> */}
                </View>


                <View style={styles.dataContainer_block}>
                    <Text style={styles.dataContainer_block_title}>Habilidades clave</Text>
                    <View>
                        <CuviInput background='noBackground' id='cvSkill' inputValueFunction={setInputValue} inputValueGet={cvData.cvSkill} showLabel label='Habilidad' placeholder='primeros auxilios' textColor='#383838' typeInput='text' />
                        <CuviInput background='noBackground' id='cvSkill2' inputValueFunction={setInputValue} inputValueGet={cvData.cvSkill2} showLabel label='Habilidad' placeholder='primeros auxilios' textColor='#383838' typeInput='text' />
                        <CuviInput background='noBackground' id='cvSkill3' inputValueFunction={setInputValue} inputValueGet={cvData.cvSkill3} showLabel label='Habilidad' placeholder='primeros auxilios' textColor='#383838' typeInput='text' />
                        <CuviInput background='noBackground' id='cvSkill4' inputValueFunction={setInputValue} inputValueGet={cvData.cvSkill4} showLabel label='Habilidad' placeholder='primeros auxilios' textColor='#383838' typeInput='text' />
                        <CuviInput background='noBackground' id='cvSkill5' inputValueFunction={setInputValue} inputValueGet={cvData.cvSkill5} showLabel label='Habilidad' placeholder='primeros auxilios' textColor='#383838' typeInput='text' />
                        <CuviInput background='noBackground' id='cvSkill6' inputValueFunction={setInputValue} inputValueGet={cvData.cvSkill6} showLabel label='Habilidad' placeholder='primeros auxilios' textColor='#383838' typeInput='text' />
                    </View>
                </View>


                <View style={styles.dataContainer_block_final}>
                    <Text style={styles.dataContainer_block_title}>Hobby</Text>
                    <View>
                        <CuviInput background='noBackground' id='cvHobby' inputValueFunction={setInputValue} inputValueGet={cvData.cvHobby} showLabel label='Hobby' placeholder='Viajar' textColor='#383838' typeInput='text' />
                    </View>

                    {/* <CuviButton name='Más intereses' icon='md-add' textColor='white' bgColor='#c78021' clickedEvent={''} /> */}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    customData:{
        backgroundColor: '#383838',},
    dataContainer_scroll: {
        // backgroundColor: 'rgba(0,0,0,0.5)',
        // padding: 8,
        height:'90%',
    },
    dataContainer_block: {
        padding: 8,
        marginBottom: 8
    },
    dataContainer_block_final:{
        padding: 8,
        marginBottom: 48
    },
    dataContainer_block_title: {
        color: 'white',
        fontSize: 24,
        marginBottom: 16,
        marginTop: 8
    },
});

export default CustomDataScreen;
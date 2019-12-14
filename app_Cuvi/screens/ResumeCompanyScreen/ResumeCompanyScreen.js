import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

import { connect, useSelector, useDispatch } from 'react-redux';
import { setJobOffer } from '../../redux/actions/jobOfferActions';

import { getItem, getAllFiltered, addItem, deleteItem, addItemWithId } from '../../services/database';


import { SendEmail } from '../../components/SendEmail/SendEmail';

import CuviInput from '../../components/CuviInput';
import CuviButton from '../../components/CuviButton';

import Ionicons from 'react-native-vector-icons/Ionicons';

const ResumeCompanyScreen = ({ navigation }) => {
    const { job } = navigation.state.params;

    const jobOfferRedux = useSelector(state => state.jobOffer);
    const userRedux = useSelector(state => state.user);
    const dispatch = useDispatch();

    let IconComponent = Ionicons;

    const [jobOfferData, setJobOfferData] = useState({ ...jobOfferRedux });

    useEffect(() => {
        dispatch(setJobOffer(job));
    }, [])


    const setValue = (value, id) => {
        setJobOfferData({ ...jobOfferData, [id]: value });
        dispatch(setJobOffer({ ...jobOfferRedux, [id]: value }));
    }


    const goToCandidates = () => {
        navigation.navigate('CandidatesDetail', { job: jobOfferRedux })
    }

    const updateOffer = async () => {
        if (jobOfferRedux.id) {
            await addItemWithId(
                'Ofertas',
                { ...jobOfferRedux },
                jobOfferRedux.id
            );
        }
        else {
            const idOffer = await addItem('Ofertas', { ...jobOfferRedux, companyId: userRedux.companyId });
            dispatch(setJobOffer({ ...jobOfferRedux, companyId: userRedux.companyId, id: idOffer }));
        }
        // sendEmailToCandidate(userFiltered)
    }

    const sendEmailToCandidate = () => {
        const mailedCandidates = jobOfferRedux.offerCandidates.join(';');
        SendEmail(
            mailedCandidates,
            jobOfferRedux.offerName,
            jobOfferRedux.offerDescription,
            { cc: '' }
        ).then(() => {
            alert('Your message was successfully sent!');
        });
    }

    return (
        <View style={styles.resumeCompany}>
            <CuviInput background='noBackground' id='offerName' inputValueFunction={setValue} inputValueGet={jobOfferRedux.offerName} showLabel label='Título de la oferta' placeholder='CuVi - nueva oferta laboral' textColor='#383838' typeInput='text' />

            <CuviInput background='noBackground' id='offerDescription' inputValueFunction={setValue} inputValueGet={jobOfferRedux.offerDescription} showLabel label='Breve resumen' placeholder='Buenos dias, le escribo para...' textColor='#383838' typeInput='multiline' />

            <View style={styles.resumeCompany_profiles}>
                {jobOfferRedux.offerCandidates !== undefined && jobOfferRedux.offerCandidates.length >= 0 ? <Text style={styles.resumeCompany_profiles_text}>{jobOfferRedux.offerCandidates.length} candidatos seleccionados</Text> : <Text style={styles.resumeCompany_profiles_text}>Selecciona los candidatos</Text>}

                <TouchableOpacity style={styles.resumeCompany_profiles_button} onPress={goToCandidates}>
                    <IconComponent name={`md-people`} size={25} color={'#383838'} />
                </TouchableOpacity>
            </View>

            {jobOfferRedux.offerCandidates !== undefined && jobOfferRedux.offerCandidates.length > 0 && <CuviButton name='Envia la oferta a los candidatos' textColor='#c78021' bgColor='white' clickedEvent={sendEmailToCandidate} />}

            <CuviButton name='Guarda la oferta' textColor='white' bgColor='#c78021' clickedEvent={updateOffer} />
        </View>
    );
}

const styles = StyleSheet.create({
    resumeCompany: {
        padding: 16,
    },
    resumeCompany_profiles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    resumeCompany_profiles_text: {
        textAlign: 'center',
        fontSize: 18,
        color: '#383838',
    },
    resumeCompany_profiles_button: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#cccccc',
        padding: 8,
    },
});

export default ResumeCompanyScreen;
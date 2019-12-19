import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, ImageBackground, TouchableOpacity, Alert, StyleSheet } from 'react-native';

import { connect, useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../redux/actions/userActions';
import { setJobOffer } from '../../redux/actions/jobOfferActions';

import { parseDoc, getItem, getAllFiltered, getAllRealTime, addItem, deleteItem, addItemWithId } from '../../services/database';
import { logout } from '../../services/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CuviButton from '../../components/CuviButton';

let IconComponent = Ionicons;


const CompanyLandingScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const userRedux = useSelector(state => state.user);
    const state = useSelector(state => state);

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        dispatch(setUser({ ...userRedux, companyId: userRedux.id }));
        getAllRealTime({
            collection: 'Ofertas', filters: { field: 'companyId', condition: '==', value: userRedux.id }, callback: (collectionData) => {
                const results = [];
                collectionData.forEach((document) => {
                    results.push(parseDoc(document));
                });
                setJobs(results);
            }
        });
    }, []);

    const newOffer = () => {
        navigation.navigate('JobOffersDetail', { job: {} })
    }
    const goToOffer = (job) => {
        navigation.navigate('JobOffersDetail', { job })
    }

    const signOutAsync = async () => {
        dispatch(setUser(null));
        logout();
        console.log("TCL: AuthLoadingScreen -> state", state)
        navigation.navigate('Auth');
    };

    const deleteJob = (id) => {
        Alert.alert(
            '¿Quieres eliminar esta oferta?',
            'Los cambios serán permanentes',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => deleteItem('Ofertas', id) },
            ],
            { cancelable: false },
        );
    }

    return (
        <ScrollView style={styles.companyLanding}>
            <View style={styles.companyLanding_topButton}>
                <Text style={styles.companyLanding_generalTitle}>Hola {userRedux.name}, publica aquí tus ofertas de trabajo.</Text>
                {jobs.length === 0 && <Image style={styles.companyLanding_emptyImage} source={require('../../icons/emptyState_opt.png')} />}
                {jobs.length === 0 && <Text style={styles.companyLanding_Text}>Vaya, parece que aún no has publicado ninguna oferta de trabajo.</Text>}
                <CuviButton name='Nueva oferta' textColor='white' bgColor='#c78021' clickedEvent={newOffer} />
            </View>
            <View>
                {jobs !== '' && jobs.map(job =>
                    <TouchableOpacity style={styles.companyLanding_offer} key={job.offerName} onPress={() => goToOffer(job)}>
                        <Text style={styles.companyLanding_offer_title}>{job.offerName}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 32 }}>
                            <TouchableOpacity onPress={() => deleteJob(job.id)}><IconComponent name={'md-trash'} size={25} color={'darkred'} /></TouchableOpacity>
                            {job.offerCandidates !== undefined && job.offerCandidates.length >= 0 ? <Text style={styles.companyLanding_offer_candidates}>{job.offerCandidates.length} candidatos seleccionados</Text> : <Text style={styles.companyLanding_offer_candidates}>0 candidatos seleccionados</Text>}
                        </View>
                    </TouchableOpacity>
                )}
            </View>

            <CuviButton name='Log out' icon='md-exit' textColor='white' bgColor='#555555' clickedEvent={signOutAsync} style={styles.companyLanding_bottom} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    companyLanding: {
        padding: 16,
        backgroundColor: '#383838',
    },
    companyLanding_topButton: {
        marginTop: 32,
    },
    companyLanding_generalTitle: {
        fontSize: 48,
        color: '#FFFFFF',
        marginTop: 32,
        marginBottom: 32,
    },
    companyLanding_emptyImage: {
        width: '90%',
        marginLeft: '10%',
        height: 400,
        resizeMode: 'contain',
        marginBottom: 16,
    },
    companyLanding_Text: {
        fontSize: 20,
        color: '#FFFFFF',
        marginBottom: 16,
    },
    companyLanding_offer: {
        padding: 8,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginBottom: 16
    },
    companyLanding_offer_title: {
        fontSize: 20,
        color: '#383838',
        marginBottom: 10,
    },
    companyLanding_offer_candidates: {
        textAlign: 'right',
        fontSize: 12,
        color: '#c78021'
    },
    companyLanding_bottom: {
        marginBottom: 48,
    }
});

export default CompanyLandingScreen;
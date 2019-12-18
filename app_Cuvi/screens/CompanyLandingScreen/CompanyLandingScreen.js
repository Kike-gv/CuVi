import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

import { connect, useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../redux/actions/userActions';
import { setJobOffer } from '../../redux/actions/jobOfferActions';

import { parseDoc, getItem, getAllFiltered, getAllRealTime, addItem, deleteItem, addItemWithId } from '../../services/database';
import { logout } from '../../services/auth';

import CuviButton from '../../components/CuviButton';


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

    return (
        <ScrollView style={styles.companyLanding}>
            <View style={styles.companyLanding_topButton}>
                <CuviButton name='Nueva oferta' textColor='white' bgColor='#c78021' clickedEvent={newOffer} />
            </View>
            <View>
                {jobs !== '' && jobs.map(job =>
                    <TouchableOpacity style={styles.companyLanding_offer} key={job.offerName} onPress={() => goToOffer(job)}>
                        <Text style={styles.companyLanding_offer_title}>{job.offerName}</Text>

                        {job.offerCandidates !== undefined && job.offerCandidates.length >= 0 ? <Text style={styles.companyLanding_offer_candidates}>{job.offerCandidates.length} candidatos seleccionados</Text> : <Text style={styles.companyLanding_offer_candidates}>0 candidatos seleccionados</Text>}
                    </TouchableOpacity>
                )}
            </View>

            <CuviButton name='Log out' icon='md-exit' textColor='white' bgColor='rgba(199, 128, 33, 1)' clickedEvent={signOutAsync} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    companyLanding: {
        padding: 16,
        backgroundColor: '#383838'
    },
    companyLanding_topButton:{
        marginTop: 32,
    },
    companyLanding_offer: {
        padding: 8,
        backgroundColor: '#000000',
        borderRadius: 10,
        marginBottom: 16
    },
    companyLanding_offer_title: {
        fontSize: 20,
        color: 'white',
        marginBottom: 10,
    },
    companyLanding_offer_candidates: {
        textAlign: 'right',
        fontSize: 12,
        color: '#c78021'
    },
});

export default CompanyLandingScreen;
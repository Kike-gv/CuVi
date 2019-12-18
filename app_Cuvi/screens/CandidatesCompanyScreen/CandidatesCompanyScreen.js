import React, { useState, useEffect } from 'react';
import { Text, ScrollView, View, TextInput, ImageBackground, TouchableOpacity, StyleSheet, AsyncStorage, } from 'react-native';
import { CheckBox } from 'react-native-elements'

import { connect, useSelector, useDispatch } from 'react-redux';
import { setJobOffer } from '../../redux/actions/jobOfferActions';

import { getItem, getAll } from '../../services/database';

import CuviButton from '../../components/CuviButton';
import UserCard from '../../components/UserCard';

const CandidatesCompanyScreen = ({ navigation }) => {
    const { job } = navigation.state.params;

    const jobOfferRedux = useSelector(state => state.jobOffer);
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const [filterWord, setFilterWord] = useState('');
    const [chosenUsers, setChosenUsers] = useState('');
    const [selectedUsersCheck, setSelectedUsersCheck] = useState([]);
    const [checked, setChecked] = useState(false);



    const searchResults = async () => {
        const users = await getAll('Usuarios');
        const selectedUsers = [];
        users.map((user) => {
            if (user.cvSkill.toLowerCase() === filterWord.toLowerCase()) {
                selectedUsers.push(user);
            } else if (user.cvSkill2 && user.cvSkill2.toLowerCase() === filterWord.toLowerCase()) {
                selectedUsers.push(user);
            } else if (user.cvSkill3 && user.cvSkill3.toLowerCase() === filterWord.toLowerCase()) {
                selectedUsers.push(user);
            } else if (user.cvSkill4 && user.cvSkill4.toLowerCase() === filterWord.toLowerCase()) {
                selectedUsers.push(user);
            } else if (user.cvSkill5 && user.cvSkill5.toLowerCase() === filterWord.toLowerCase()) {
                selectedUsers.push(user);
            } else if (user.cvSkill6 && user.cvSkill6.toLowerCase() === filterWord.toLowerCase()) {
                selectedUsers.push(user);
            }
        })
        setChosenUsers(selectedUsers);
    };

    const selectUserForJob = (email) => {
        const usersEmailArray = [...selectedUsersCheck];
        setChecked(!checked);
        const userInArray = selectedUsersCheck.indexOf(email);
        if (userInArray >= 0) {
            usersEmailArray.splice(userInArray, 1);
        } else {
            usersEmailArray.push(email);
        }
        setSelectedUsersCheck(usersEmailArray);
    }


    const saveCandidates = () => {
        dispatch(setJobOffer({ ...jobOfferRedux, offerCandidates: selectedUsersCheck }));
    }


    return (
        <ScrollView style={styles.candidatesCompany}>
            <View style={styles.resumeCompany_search}>
                <TextInput style={styles.resumeCompany_profiles_input} placeholder='busca por talento' value={filterWord} onChangeText={(text) => { setFilterWord(text) }} />
                <TouchableOpacity style={styles.resumeCompany_profiles_button} onPress={() => searchResults()}><Text style={styles.resumeCompany_profiles_button_text}>busca</Text></TouchableOpacity>
            </View>

            <View>
                {chosenUsers !== '' && chosenUsers.map((userFiltered) =>
                    <View key={userFiltered.email} style={styles.resumeCompany_person}>
                        <UserCard profileImage={userFiltered.cvPhoto}
                            userCVInfo={userFiltered}
                            bgColor={userFiltered.cvColor}
                        />
                        <CheckBox
                            center
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={selectedUsersCheck.indexOf(userFiltered.email) >= 0}
                            onPress={() => { selectUserForJob(userFiltered.email) }}
                            containerStyle={styles.resumeCompany_person_checkbox}
                            textStyle={styles.resumeCompany_person_checkbox}
                            checkedColor='white'
                        />
                    </View>)
                }
            </View>
            <CuviButton name='Guarda los candidatos' textColor='white' bgColor='#c78021' clickedEvent={saveCandidates} style={styles.resumeCompany_lastItem}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    candidatesCompany: {
        padding: 16,
        backgroundColor: '#383838'
    },
    resumeCompany_search: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    resumeCompany_profiles_input: {
        width: '75%',
        fontSize: 20,
        color: 'white',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        padding: 8,
    },
    resumeCompany_profiles_button: {
        backgroundColor: '#555555',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#555555',
        padding: 8,
    },
    resumeCompany_profiles_button_text: {
        color: 'white',
        fontSize: 20,
    },
    resumeCompany_person: {
        position: 'relative',
    },
    resumeCompany_person_checkbox: {
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 10,
        right: -9,
    },
    resumeCompany_lastItem: {
        marginBottom:48,
    },
});

export default CandidatesCompanyScreen;
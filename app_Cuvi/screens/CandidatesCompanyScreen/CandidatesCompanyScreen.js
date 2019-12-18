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

    // console.log("TCL: OfferCompanyScreen -> chosenUsers", chosenUsers)

    // useEffect(() => {
    //     dispatch(setJobOffer(job));
    //     console.log("TCL: CandidatesCompanyScreen -> jobOfferRedux", jobOfferRedux)
    // }, [])



    const searchResults = async () => {
        const users = await getAll('Usuarios');
        const selectedUsers = [];
        users.map((user) => {
            if (user.cvSkill.toLowerCase() === filterWord.toLowerCase()) {
                selectedUsers.push(user);
            } else if(user.cvSkill2 && user.cvSkill2.toLowerCase() === filterWord.toLowerCase()){
                selectedUsers.push(user);
            } else if(user.cvSkill3 && user.cvSkill3.toLowerCase() === filterWord.toLowerCase()){
                selectedUsers.push(user);
            } else if(user.cvSkill4 && user.cvSkill4.toLowerCase() === filterWord.toLowerCase()){
                selectedUsers.push(user);
            } else if(user.cvSkill5 && user.cvSkill5.toLowerCase() === filterWord.toLowerCase()){
                selectedUsers.push(user);
            } else if(user.cvSkill6 && user.cvSkill6.toLowerCase() === filterWord.toLowerCase()){
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
                <TouchableOpacity onPress={() => searchResults()}><Text>busca</Text></TouchableOpacity>
            </View>

            <View>
                {chosenUsers !== '' && chosenUsers.map((userFiltered) =>
                    <View key={userFiltered.email}>
                        <UserCard profileImage={userFiltered.cvPhoto}
                            userCVInfo={userFiltered}
                            bgColor={userFiltered.cvColor}
                        />
                        <CheckBox
                            center
                            title='Click Here'
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={selectedUsersCheck.indexOf(userFiltered.email) >= 0}
                            onPress={() => { selectUserForJob(userFiltered.email) }}
                        />
                    </View>)
                }
            </View>
            <CuviButton name='Guarda los candidatos' textColor='white' bgColor='#c78021' clickedEvent={saveCandidates} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    candidatesCompany: {
        padding: 16,
    },
    resumeCompany_search: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    resumeCompany_profiles_input: {
        fontSize: 18,
        color: '#383838',
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1
    },
    resumeCompany_profiles_button: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#cccccc',
        padding: 8,
    },
});

export default CandidatesCompanyScreen;
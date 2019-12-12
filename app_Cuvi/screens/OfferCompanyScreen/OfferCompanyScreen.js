import React, { useState } from 'react';
import { Text, ScrollView, View, TextInput, ImageBackground, TouchableOpacity, StyleSheet, AsyncStorage, } from 'react-native';

import { connect, useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../redux/actions/userActions';

import { logout } from '../../services/auth';
import { registerAuthObserver } from '../../services/auth';
import { getItem, getAll } from '../../services/database';

import CuviButton from '../../components/CuviButton';
import UserCard from '../../components/UserCard';

const OfferCompanyScreen = ({ navigation }) => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const [filterWord, setFilterWord] = useState('');
    const [chosenUsers, setChosenUsers] = useState('');
    console.log("TCL: OfferCompanyScreen -> chosenUsers", chosenUsers)

    const signOutAsync = async () => {
        dispatch(setUser(null));
        logout();
        console.log("TCL: AuthLoadingScreen -> state", state)
        navigation.navigate('Auth');
    };

    const searchResults = async () => {
        const users = await getAll('Usuarios');
        const selectedUsers = [];
        users.map((user) => {
            if (user.cvSkill === filterWord) {
                selectedUsers.push(user);
            }
        })
        setChosenUsers(selectedUsers);
    };



    return (
        <ScrollView>
            <CuviButton name='Log out' icon='md-exit' textColor='#383838' bgColor='rgba(199, 128, 33, 0.25)' clickedEvent={signOutAsync} />
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <TextInput placeholder='busca por talento' value={filterWord} onChangeText={(text) => { setFilterWord(text) }} />
                <TouchableOpacity onPress={() => searchResults()}><Text>busca</Text></TouchableOpacity>
            </View>

            <View>
                {chosenUsers !== '' && chosenUsers.map((userFiltered) => <TouchableOpacity key={userFiltered.email}><UserCard profileImage={userFiltered.cvPhoto} userCVInfo={userFiltered} bgColor={userFiltered.cvColor} /></TouchableOpacity>)}
            </View>
        </ScrollView>
    );
}

export default OfferCompanyScreen;
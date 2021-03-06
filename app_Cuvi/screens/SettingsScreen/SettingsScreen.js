import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import UncontrolledColorPicker from '../../components/ColorPicker';

import { connect, useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../redux/actions/userActions';

import { getItem, getAllRealTime, deleteItem, addItemWithId } from '../../services/database';
import { uploadFile, getRealUri } from '../../services/storage';

import { logout } from '../../services/auth';

import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

import UserCard from '../../components/UserCard';
import CuviButton from '../../components/CuviButton';


const SettingsScreen = ({ navigation, }) => {
    const state = useSelector(state => state);
    const userRedux = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [cvData, setCvData] = useState({ ...userRedux });
    const [profileImage, setProfileImage] = useState(userRedux.cvPhoto);

    const signOutAsync = async () => {
        dispatch(setUser(null));
        logout();
        console.log("TCL: AuthLoadingScreen -> state", state)
        navigation.navigate('Auth');
    };

    async function asyncPermissions() {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }

    }
    useEffect(() => {
        asyncPermissions();
    }, []);

    const pickImge = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1
        });

        if (!result.cancelled) {
            const ImgUri = result.uri;
            setProfileImage(ImgUri);
            let imageUpload = await uploadFile(ImgUri, userRedux.email);
            if (imageUpload) {
                const realUri = await getRealUri(userRedux.email);
                const profile = await getItem('Usuarios', userRedux.id);
                await addItemWithId(
                    'Usuarios',
                    { ...profile, cvPhoto: realUri },
                    userRedux.id
                );
            }
        }
    }

    const setcolor = async (color) => {
        setCvData({ ...cvData, cvColor: color });
        const profile = await getItem('Usuarios', userRedux.id);
        await addItemWithId(
            'Usuarios',
            { ...profile, cvColor: color },
            userRedux.id
        );
    }





    return (
        <View style={styles.settingsContainer}>
            <UserCard profileImage={profileImage} userCVInfo={userRedux} bgColor={cvData.cvColor} />

            <UncontrolledColorPicker chosenColor={setcolor} />

            <View style={styles.settingsContainer_buttons}>
                <CuviButton name='Cambia tu foto de perfil' icon='md-image' textColor='white' bgColor='rgba(199, 128, 33, 1)' clickedEvent={pickImge} />

                <CuviButton name='Log out' icon='md-exit' textColor='white' bgColor='rgba(199, 128, 33, 1)' clickedEvent={signOutAsync} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    settingsContainer: {
        backgroundColor: '#383838',
        width: '100%',
        height: '100%',
        padding: 16,
        paddingTop: 32
    },
    settingsContainer_buttons: {
        marginTop: 32,
    },
});

export default SettingsScreen;
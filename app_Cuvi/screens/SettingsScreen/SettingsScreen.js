import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Image, ImageBackground, Button, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import UncontrolledColorPicker from '../../components/ColorPicker';

import Ionicons from 'react-native-vector-icons/Ionicons';

import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
// import { Camera } from 'expo-camera'

import UserCard from '../../components/UserCard'


const SettingsScreen = ({ navigation, }) => {
    // const [hasCameraPermission, setHasCameraPermission] = useState(null);
    // const [type, setType] = useState(Camera.Constants.Type.back);
    const [profileImage, setProfileImage] = useState('https://media.vandalsports.com/i/640x360/10-2019/20191028161434_1.jpg');

    let IconComponent = Ionicons;

    const signOutAsync = async () => {
        await AsyncStorage.clear();
        navigation.navigate('Auth');
    };

    async function asyncPermissions() {
        // const { status } = await Permissions.askAsync(Permissions.CAMERA);
        // setHasCameraPermission(status === 'granted');
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
        }
    }


    return (
        <View style={styles.settingsContainer}>
            <UserCard profileImage={profileImage} />

            <UncontrolledColorPicker />

            <TouchableOpacity style={styles.settingsContainer_userSettings} onPress={pickImge}>
                <Text>Cambia tu foto de perfil</Text>
                <IconComponent name={'md-image'} size={25} color={'#383838'} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingsContainer_userSettings} onPress={signOutAsync}>
                <Text>Log out</Text>
                <IconComponent name={'md-exit'} size={25} color={'#383838'} />
            </TouchableOpacity>
            {/* {hasCameraPermission !== null && hasCameraPermission !== false &&
                <View style={{ flex: 1 }}>
                    <Camera style={{ flex: 1 }} type={type}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                            }}>
                            <TouchableOpacity
                                style={{
                                    flex: 0.1,
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                }}
                                onPress={() => {
                                    setType({type : type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back,});
                                }}>
                                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            } */}
        </View>
    );
}

const styles = StyleSheet.create({
    settingsContainer: {
        width: '100%',
        height: '100%',
        padding: 16,
        paddingTop: 32
    },
    settingsContainer_userSettings: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        borderRadius: 10,
        backgroundColor: 'rgba(199, 128, 33, 0.25)',
        padding: 16,
        marginBottom: 16,
    }
});

export default SettingsScreen;
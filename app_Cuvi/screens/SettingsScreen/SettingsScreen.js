import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import UncontrolledColorPicker from '../../components/ColorPicker';

import Ionicons from 'react-native-vector-icons/Ionicons';

import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
// import { Camera } from 'expo-camera'

import UserCard from '../../components/UserCard';
import CuviButton from '../../components/CuviButton';


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
            
            <CuviButton name='Cambia tu foto de perfil' icon='md-image' textColor='#383838' bgColor='rgba(199, 128, 33, 0.25)' clickedEvent={pickImge}  />

            <CuviButton name='Log out' icon='md-exit' textColor='#383838' bgColor='rgba(199, 128, 33, 0.25)' clickedEvent={signOutAsync}  />

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
});

export default SettingsScreen;
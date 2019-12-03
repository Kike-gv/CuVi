import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Image, ImageBackground, Button, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
// import * as Permissions from 'expo-permissions';
// import { Camera } from 'expo-camera'


const SettingsScreen = ({ navigation, }) => {
    // const [hasCameraPermission, setHasCameraPermission] = useState(null);
    // const [type, setType] = useState(Camera.Constants.Type.back);
    let IconComponent = Ionicons;

    const signOutAsync = async () => {
        await AsyncStorage.clear();
        navigation.navigate('Auth');
    };

    // useEffect(async () => {
    //     const { status } = await Permissions.askAsync(Permissions.CAMERA);
    //     setHasCameraPermission(status === 'granted');
    // }, []);

    return (
        <View style={styles.settingsContainer}>
            <View style={styles.settingsContainer_userContainer}>
                <View style={styles.settingsContainer_userContainer_photoCover}>
                    <Image style={styles.settingsContainer_userContainer_userPhoto} source={{ uri: 'https://media.vandalsports.com/i/640x360/10-2019/20191028161434_1.jpg' }} />
                </View>
                <Text style={styles.settingsContainer_userContainer_userName}>Thor Odjnson</Text>
                <Text style={styles.settingsContainer_userContainer_userJob}>Dios del trueno</Text>
                <Text style={styles.settingsContainer_userContainer_userJob}>Asgard S.A - 4 años</Text>
                <View style={styles.settingsContainer_userContainer_skillsContainer}>
                    <Text style={styles.settingsContainer_userContainer_skillsContainer_skill}>Fuerte</Text>
                    <Text style={styles.settingsContainer_userContainer_skillsContainer_skill}>Resistente</Text>
                    <Text style={styles.settingsContainer_userContainer_skillsContainer_skill}>Buen catador</Text>
                    <Text style={styles.settingsContainer_userContainer_skillsContainer_skill}>Siempre tiene bateria</Text>
                    <Text style={styles.settingsContainer_userContainer_skillsContainer_skill}>React Native</Text>
                    <Text style={styles.settingsContainer_userContainer_skillsContainer_skill}>Coach de La Voz</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.settingsContainer_userSettings}>
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
    settingsContainer_userContainer: {
        alignItems: 'center',
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#c78021',
        padding: 16,
        marginBottom: 16,
    },
    settingsContainer_userContainer_photoCover: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 110,
        height: 110,
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: 110,
        marginTop: 16,
        marginBottom: 12
    },
    settingsContainer_userContainer_userPhoto: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    settingsContainer_userContainer_userName: {
        fontSize: 24,
        color: 'white',
        marginBottom: 8
    },
    settingsContainer_userContainer_userJob: {
        fontSize: 16,
        color: 'white',
        marginBottom: 2
    },
    settingsContainer_userContainer_skillsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: 14,
    },
    settingsContainer_userContainer_skillsContainer_skill: {
        fontSize: 16,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0.25)',
        marginBottom: 5,
        marginRight: 5,
        padding: 10,
        borderRadius: 50
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
import React, { useEffect } from 'react';
import { ActivityIndicator, AsyncStorage, Button, StatusBar, StyleSheet, View } from 'react-native';

const AuthLoadingScreen = ({ navigation }) => {

    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        console.log("TCL: bootstrapAsync -> userToken", userToken)

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        navigation.navigate(userToken ? 'ApplicationScreens' : 'Auth');
    };

    useEffect(() => {
        bootstrapAsync();
    }, []);

    // Render any loading content that you like here
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator />
            <StatusBar barStyle="default" />
        </View>
    );
}


export default AuthLoadingScreen;
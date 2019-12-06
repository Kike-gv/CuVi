import React, { useEffect } from 'react';
import { ActivityIndicator, AsyncStorage, Button, StatusBar, StyleSheet, View } from 'react-native';

import { connect, useSelector, useDispatch } from 'react-redux';
import { actualizeUserValue } from '../../redux/actions/userActions';

import { registerAuthObserver } from '../../services/auth';
import { getItem } from '../../services/database';

const AuthLoadingScreen = ({ navigation }) => {
    const actualizeUserValue = useSelector(state => state.inputState.actualizeUserValue);
    const dispatch = useDispatch();

    // Fetch the token from storage then navigate to our appropriate place
    // const bootstrapAsync = async () => {
    //     const userToken = await AsyncStorage.getItem('userToken');
    //     console.log("TCL: bootstrapAsync -> userToken", userToken)

    //     // This will switch to the App screen or Auth screen and this loading
    //     // screen will be unmounted and thrown away.

    //     // navigation.navigate(userToken ? 'ApplicationScreens' : 'Auth');
    // };

    // useEffect(() => {
    //     bootstrapAsync();
    // }, []);

    useEffect(() => {
        console.log('entro al useEffect auth');
        const cancelObserver = registerAuthObserver(async (user) => {
          console.log("TCL: cancelObserver -> user", user)
          if (user) {
            const profile = await getItem('Usuarios', user.uid);
            console.log("TCL: cancelObserver -> profile", profile)
            if (profile) {
            //   setUserRedux(profile);
              console.log("Estás registrado");
              navigation.navigate('ApplicationScreens');

            } else {
              console.log("todavía se está registrando");
            }
          } else {
            // setUserRedux(null);
          }
        //   setIsLoading(false);
        })
    
        return () => {
            console.log('saliendo de autloadingscreen')
          cancelObserver();
        }
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
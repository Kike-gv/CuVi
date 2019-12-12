import React, { useEffect } from 'react';
import { ActivityIndicator, AsyncStorage, Button, StatusBar, StyleSheet, View } from 'react-native';

import { connect, useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../redux/actions/userActions';

import { registerAuthObserver } from '../../services/auth';
import { getItem } from '../../services/database';

const AuthLoadingScreen = ({ navigation }) => {
    const actualizeUser = useSelector(state => state.inputState.setUser);
    const state = useSelector(state => state);
    // console.log("TCL: AuthLoadingScreen -> state", state)
    const dispatch = useDispatch();


    useEffect(() => {
        console.log('entro al useEffect auth');
        const cancelObserver = registerAuthObserver(async (user) => {
            if (user) {
                // console.log("TCL: cancelObserver -> user", user)
                const profile = await getItem('Usuarios', user.uid);
                const profileCompany = await getItem('Empresas', user.uid);
                // console.log("TCL: cancelObserver -> profile", profile)
                if (profile) {
                    dispatch(setUser(profile));
                    console.log("Estás registrado como usuario");
                    navigation.navigate('ApplicationScreens');

                }else if (profileCompany) {
                    dispatch(setUser(profileCompany));
                    console.log("Estás registrado como empresa");
                    navigation.navigate('CompanyScreens');

                } else {
                    console.log("todavía se está registrando");
                }
            } else {
                dispatch(setUser(null));
                navigation.navigate('Auth');
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
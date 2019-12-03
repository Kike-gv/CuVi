import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Image, ImageBackground, Button, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';

const UserCard = ({profileImage}) => {
    return (
        <View style={styles.userCard}>
            <View style={styles.userCard_photoCover}>
                <Image style={styles.userCard_userPhoto} source={{ uri: profileImage }} />
            </View>
            <Text style={styles.userCard_userName}>Thor Odjnson</Text>
            <Text style={styles.userCard_userJob}>Dios del trueno</Text>
            <Text style={styles.userCard_userJob}>Asgard S.A - 4 años</Text>
            <View style={styles.userCard_skillsContainer}>
                <Text style={styles.userCard_skillsContainer_skill}>Fuerte</Text>
                <Text style={styles.userCard_skillsContainer_skill}>Resistente</Text>
                <Text style={styles.userCard_skillsContainer_skill}>Buen catador</Text>
                <Text style={styles.userCard_skillsContainer_skill}>Siempre tiene bateria</Text>
                <Text style={styles.userCard_skillsContainer_skill}>React Native</Text>
                <Text style={styles.userCard_skillsContainer_skill}>Coach de La Voz</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    userCard: {
        alignItems: 'center',
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#c78021',
        padding: 16,
        marginBottom: 16,
    },
    userCard_photoCover: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 110,
        height: 110,
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: 110,
        marginTop: 16,
        marginBottom: 12
    },
    userCard_userPhoto: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    userCard_userName: {
        fontSize: 24,
        color: 'white',
        marginBottom: 8
    },
    userCard_userJob: {
        fontSize: 16,
        color: 'white',
        marginBottom: 2
    },
    userCard_skillsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: 14,
    },
    userCard_skillsContainer_skill: {
        fontSize: 16,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0.25)',
        marginBottom: 5,
        marginRight: 5,
        padding: 10,
        borderRadius: 50
    },
});

export default UserCard;
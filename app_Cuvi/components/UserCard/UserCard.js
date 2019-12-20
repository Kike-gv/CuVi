import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Image, ImageBackground, Button, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';

import moment from "moment";

const UserCard = ({ profileImage, userCVInfo, bgColor }) => {
    const styles = StyleSheet.create({
        userCard: {
            alignItems: 'center',
            width: '100%',
            borderRadius: 10,
            backgroundColor: bgColor,
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
            borderRadius: 50,
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

    const [timeWorked, SetTimeWorked] = useState('0 years ago')

    useEffect(() => {
        const yearBeginJob = userCVInfo.cvJobBegin;
        yearBeginJob.split('-').join('');
        const totalTimeWorked = moment(yearBeginJob, "DDMMYYYY").fromNow();
        SetTimeWorked(totalTimeWorked);
    }, [])


    return (
        <View style={styles.userCard}>
            <View style={styles.userCard_photoCover}>
                <Image style={styles.userCard_userPhoto} source={{ uri: profileImage }} />
            </View>
            <Text style={styles.userCard_userName}>{userCVInfo.cvName}</Text>
            <Text style={styles.userCard_userJob}>{userCVInfo.cvJobPosition}</Text>
            <Text style={styles.userCard_userJob}>{userCVInfo.cvJobCompany} - {timeWorked}</Text>
            <View style={styles.userCard_skillsContainer}>
                {userCVInfo.cvSkill !== undefined && <Text style={styles.userCard_skillsContainer_skill}>{userCVInfo.cvSkill}</Text>}
                {userCVInfo.cvSkill2 !== undefined && <Text style={styles.userCard_skillsContainer_skill}>{userCVInfo.cvSkill2}</Text>}
                {userCVInfo.cvSkill3 !== undefined && <Text style={styles.userCard_skillsContainer_skill}>{userCVInfo.cvSkill3}</Text>}
                {userCVInfo.cvSkill4 !== undefined && <Text style={styles.userCard_skillsContainer_skill}>{userCVInfo.cvSkill4}</Text>}
                {userCVInfo.cvSkill5 !== undefined && <Text style={styles.userCard_skillsContainer_skill}>{userCVInfo.cvSkill5}</Text>}
                {userCVInfo.cvSkill6 !== undefined && <Text style={styles.userCard_skillsContainer_skill}>{userCVInfo.cvSkill6}</Text>}
            </View>
        </View>
    );
}


export default UserCard;
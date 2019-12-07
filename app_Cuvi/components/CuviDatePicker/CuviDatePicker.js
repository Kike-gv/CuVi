import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import DatePicker from 'react-native-datepicker';

const CuviDatePicker = ({ placeholder, id, datePickerValueFunction, datePickerValueGet }) => {
    const [inputDate, setInputDate] = useState('');

    const styles = StyleSheet.create({
        cuviDatePicker: {
            width: '100%',
            borderWidth: 1,
            borderColor: '#383838',
            borderRadius: 10,
            marginTop: 12,
            marginBottom: 16,
        },
        cuviDatePicker_text: {
            position: 'absolute',
            left: 13,
            color: '#c78021',
            fontSize: 10,
            backgroundColor: 'white',
            padding: 3
        }
    });


    return (
        <View style={{ position: 'relative', width: '100%' }}>
            <DatePicker
                style={styles.cuviDatePicker}
                date={datePickerValueGet}
                mode="date"
                placeholder="Haz click para seleccionar"
                format="YYYY-MM-DD"
                format="DD-MM-YYYY"
                minDate="01-01-1900"
                maxDate="01-01-3000"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                onDateChange={(date) => datePickerValueFunction(date, id)}
                customStyles={{
                    dateInput: {
                        borderColor: 'transparent'
                    }
                    // ... You can check the source to find the other keys.
                }}
            />
            <Text style={styles.cuviDatePicker_text}>{placeholder}</Text>
        </View>
    );

}

export default CuviDatePicker;
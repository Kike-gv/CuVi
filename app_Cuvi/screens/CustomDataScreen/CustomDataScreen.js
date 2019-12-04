import React from 'react';
import { Text, View, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import CuviButton from '../../components/CuviButton';
import CuviInput from '../../components/CuviInput';


const CustomDataScreen = ({ navigation }) => {

    return (
        <ScrollView style={styles.dataContainer}>
            <View style={styles.dataContainer_block}>
                <Text style={styles.dataContainer_block_title}>Información básica sobre mí</Text>

                <CuviInput background='noBackground' showLabel placeholder='Nombre Completo' textColor='#383838' typeInput='text' />

                <CuviInput background='noBackground' showLabel placeholder='Fecha de nacimiento' textColor='#383838' typeInput='text' />

                <CuviInput background='noBackground' showLabel placeholder='Teléfono' textColor='#383838' typeInput='text' />

                <CuviInput background='noBackground' showLabel placeholder='Correo electrónico' textColor='#383838' typeInput='text' />

                <CuviInput background='noBackground' showLabel placeholder='Porfolio' textColor='#383838' typeInput='text' />

                <CuviInput background='noBackground' showLabel placeholder='Perfil de Linkedin, infojobs...' textColor='#383838' typeInput='text' />
            </View>


            <View style={styles.dataContainer_block}>
                <Text style={styles.dataContainer_block_title}>Cómo me presento en 2 frases</Text>

                    <CuviInput background='noBackground' showLabel placeholder='Me considero una persona...' textColor='#383838' typeInput='multiline' />
            </View>


            <View style={styles.dataContainer_block}>
                <Text style={styles.dataContainer_block_title}>Estudios</Text>
                <View>
                    <CuviInput background='noBackground' showLabel placeholder='Estudios' textColor='#383838' typeInput='text' />

                    <CuviInput background='noBackground' showLabel placeholder='Colegio, universidad' textColor='#383838' typeInput='text' />

                    <CuviInput background='noBackground' showLabel placeholder='Fecha de inicio' textColor='#383838' typeInput='text' />

                    <CuviInput background='noBackground' showLabel placeholder='Fecha de finalización' textColor='#383838' typeInput='text' />

                </View>

                <CuviButton name='Más estudios' icon='md-add' textColor='white' bgColor='#c78021' clickedEvent={''} />
            </View>


            <View style={styles.dataContainer_block}>
                <Text style={styles.dataContainer_block_title}>Experiencia laboral</Text>
                <View>
                    <CuviInput background='noBackground' showLabel placeholder='Función desempeñada' textColor='#383838' typeInput='text' />

                    <CuviInput background='noBackground' showLabel placeholder='Empresa' textColor='#383838' typeInput='text' />

                    <CuviInput background='noBackground' showLabel placeholder='Fecha de inicio' textColor='#383838' typeInput='text' />

                    <CuviInput background='noBackground' showLabel placeholder='Fecha de finalización' textColor='#383838' typeInput='text' />

                </View>

                <CuviButton name='Más experiencias laborales' icon='md-add' textColor='white' bgColor='#c78021' clickedEvent={''} />
            </View>


            <View style={styles.dataContainer_block}>
                <Text style={styles.dataContainer_block_title}>Habilidades clave (Hasta 6)</Text>
                <View>
                    <CuviInput background='noBackground' showLabel placeholder='Habilidad' textColor='#383838' typeInput='text' />
                </View>

                <CuviButton name='Más habilidades clave' icon='md-add' textColor='white' bgColor='#c78021' clickedEvent={''} />
            </View>


            <View style={styles.dataContainer_block}>
                <Text style={styles.dataContainer_block_title}>Intereses y hobbies (Hasta 6)</Text>
                <View>
                    <CuviInput background='noBackground' showLabel placeholder='Interés' textColor='#383838' typeInput='text' />
                </View>

                <CuviButton name='Más intereses' icon='md-add' textColor='white' bgColor='#c78021' clickedEvent={''} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    dataContainer: {
        backgroundColor: 'white',
        padding: 16,
        paddingTop: 32,
        paddingBottom: 0
    },
    dataContainer_block: {
        borderRadius: 4,
        padding: 8,
        marginBottom: 16
    },
    dataContainer_block_title: {
        color: '#c78021',
        fontSize: 20,
        marginBottom: 12,
    }
});

export default CustomDataScreen;
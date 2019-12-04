import React from 'react';
import { Text, View, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import CuviButton from '../../components/CuviButton';
import CuviInput from '../../components/CuviInput';


const CustomDataScreen = ({ navigation }) => {

    return (
        <ScrollView style={styles.dataContainer}>
            <View style={styles.dataContainer_block}>
                <Text style={styles.dataContainer_block_title}>Información básica sobre mí</Text>

                <CuviInput placeholder='Nombre Completo' textColor='#383838' typeInput='text' />

                <CuviInput placeholder='Fecha de nacimiento' textColor='#383838' typeInput='text' />

                <CuviInput placeholder='Teléfono' textColor='#383838' typeInput='text' />

                <CuviInput placeholder='Correo electrónico' textColor='#383838' typeInput='text' />

                <CuviInput placeholder='Porfolio' textColor='#383838' typeInput='text' />

                <CuviInput placeholder='Perfil de Linkedin, infojobs...' textColor='#383838' typeInput='text' />
            </View>


            <View style={styles.dataContainer_block}>
                <Text style={styles.dataContainer_block_title}>Cómo me presento en 2 frases</Text>
            </View>


            <View style={styles.dataContainer_block}>
                <Text style={styles.dataContainer_block_title}>Estudios</Text>
                <View>
                    <CuviInput placeholder='Estudios' textColor='#383838' typeInput='text' />

                    <CuviInput placeholder='Colegio, universidad' textColor='#383838' typeInput='text' />

                    <CuviInput placeholder='Fecha de inicio' textColor='#383838' typeInput='text' />

                    <CuviInput placeholder='Fecha de finalización' textColor='#383838' typeInput='text' />

                </View>

                <CuviButton name='Más estudios' icon='md-add' textColor='white' bgColor='#c78021' clickedEvent={''} />
            </View>


            <View style={styles.dataContainer_block}>
                <Text style={styles.dataContainer_block_title}>Experiencia laboral</Text>
                <View>
                    <CuviInput placeholder='Función desempeñada' textColor='#383838' typeInput='text' />

                    <CuviInput placeholder='Empresa' textColor='#383838' typeInput='text' />

                    <CuviInput placeholder='Fecha de inicio' textColor='#383838' typeInput='text' />

                    <CuviInput placeholder='Fecha de finalización' textColor='#383838' typeInput='text' />

                </View>

                <CuviButton name='Más experiencias laborales' icon='md-add' textColor='white' bgColor='#c78021' clickedEvent={''} />
            </View>


            <View style={styles.dataContainer_block}>
                <Text style={styles.dataContainer_block_title}>Habilidades clave (Hasta 6)</Text>
                <View>
                    <CuviInput placeholder='Habilidad' textColor='#383838' typeInput='text' />
                </View>

                <CuviButton name='Más habilidades clave' icon='md-add' textColor='white' bgColor='#c78021' clickedEvent={''} />
            </View>


            <View style={styles.dataContainer_block}>
                <Text style={styles.dataContainer_block_title}>Intereses y hobbies (Hasta 6)</Text>
                <View>
                    <CuviInput placeholder='Interés' textColor='#383838' typeInput='text' />
                </View>

                <CuviButton name='Más intereses' icon='md-add' textColor='white' bgColor='#c78021' clickedEvent={''} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    dataContainer: {
        padding: 32,
        marginBottom: 32
    },
    dataContainer_block: {
        borderColor: '#949494',
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
        marginBottom: 12
    },
    dataContainer_block_title: {
        color: '#c78021',
        fontSize: 20,
        marginBottom: 12,
    }
});

export default CustomDataScreen;
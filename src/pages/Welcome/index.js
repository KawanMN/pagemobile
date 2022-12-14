import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import * as Aanimatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Aanimatable.Image
                    animation="flipInY"
                    style={{ width: '100%', height: '50%' }}
                    source={require('../../assets/login.png')}
                    resizeMode="contain"
                />
            </View>

            <Aanimatable.View delay={600} animation="fadeInUp"
                style={styles.containerForm}>
                <Text style={styles.title}>Bem Vindos!</Text>
                <Text style={styles.text}>Faça login para começar</Text>

                <TouchableOpacity style={styles.button}
                    onPress={ () => navigation.navigate('SignIn')}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Aanimatable.View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',

    },
    containerLogo: {
        flex: 2,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#191970',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        color: '#fff'
    },
    text: {
        color: '#fff'
    },
    button: {
        position: 'absolute',
        backgroundColor: 'black',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
})
import React from 'react';
import {Button, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, View, StyleSheet, Image } from 'react-native';

export default function Login({ navigation }) {
    return (
    <View style={styles.container}>
            
        <Image style={styles.logo} source={require('../assets/logotravessia.png')} />

        <KeyboardAvoidingView style={styles.form}>
            <Text style={styles.label}>E-mail *</Text>
            <TextInput
                style={styles.input}
                placeholder="Seu e-mail"
                placeholderTextColor="#999"
                keyboardType="email-address"
            />

            <Text style={styles.label}>Senha *</Text>
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Senha"
                placeholderTextColor="#999"
                keyboardType="default"
            />

            <TouchableOpacity style={styles.button}>
                 <Button
                    onPress={() => navigation.navigate('Homepage')}
                    title="Fazer Login"
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Button
                    title="Cadastre-se"
                    onPress={() => navigation.navigate('Cadastro')}
                />
            </TouchableOpacity>
        </KeyboardAvoidingView>

    </View>
    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 120,
        height: 120,
        marginTop: 30,
        marginBottom: 30
    },
    logoPrefeitura: {
            width: 283,
            height: 113,
    },
    form: {
    },
    input: {
        borderWidth: 1,
        borderColor: '#444',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    }, 
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
      }
});

import React from 'react';
import {Text, KeyboardAvoidingView, TextInput, TouchableOpacity, View, StyleSheet, Image } from 'react-native';

export default function Cadastro() {
    return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logotravessia.png')} />

        <KeyboardAvoidingView style={styles.form}>
            <Text style={styles.label}>Nome Completo *</Text>
            <TextInput
                style={styles.input}
                placeholder="José da Silva"
                placeholderTextColor="#999"
                keyboardType="default"
            />

            <Text style={styles.label}>Endereço *</Text>
            <TextInput
                style={styles.input}
                placeholder="Avenida Paulista, 1003"
                placeholderTextColor="#999"
                keyboardType="default"
            />

            <Text style={styles.label}>Estado *</Text>
            <TextInput
                style={styles.input}
                placeholder="SP"
                placeholderTextColor="#999"
                keyboardType="default"
            />

            <Text style={styles.label}>Cidade *</Text>
            <TextInput
                style={styles.input}
                placeholder="São Paulo"
                placeholderTextColor="#999"
                keyboardType="default"
            />     

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
                <Text style={styles.buttonText}>Criar Conta</Text>
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
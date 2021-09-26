import React from 'react';
import {Text, KeyboardAvoidingView, TextInput, TouchableOpacity, View, StyleSheet, Image } from 'react-native';

export default function Login() {
    return (
    <View style={styles.container}>
        <Image source={require('../assets/logo.png')} />

        <KeyboardAvoidingView style={styles.form}>
            <Text style={styles.label}>E-MAIL *</Text>
            <TextInput
                style={styles.input}
                placeholder="Seu e-mail"
                placeholderTextColor="#999"
                keyboardType="email-address"
            />

            <Text style={styles.label}>SENHA *</Text>
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Senha"
                placeholderTextColor="#999"
                keyboardType="default"
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Fazer Login</Text>
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
});
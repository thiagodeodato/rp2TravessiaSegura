import React from 'react';
import {Text, KeyboardAvoidingView, TextInput, TouchableOpacity, View, StyleSheet, Image, Button, ScrollView, Input } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default function Cadastro() {
    const selectOneFile = async () => {

        let result = await DocumentPicker.getDocumentAsync({});
        if(result.uri === undefined){
            alert('Não foi possível fazer o envio do documento.')
        } else {
            alert('O documento será analisado e caso seja aprovado será possível solicitar o cartão.')
        }
        console.log(result);
    }

    return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logotravessia.png')} />
            <ScrollView
            
            style = {styles.scrollView}>
            
        <KeyboardAvoidingView style={styles.form}>
            <Text style={styles.label}>Nome Completo *</Text>
            <TextInput
                style={styles.input}
                placeholder="José da Silva"
                placeholderTextColor="#999"
                keyboardType="default"
            />
            
            <Text style={styles.label}> CPF *</Text>
            <TextInput
                style={styles.input}
                placeholder="32673387493"
                placeholderTextColor="#999"
                keyboardType="numeric"
            />

            <Text style={styles.label}> Data de Nascimento *</Text>
            <TextInput
                style={styles.input}
                placeholder="Coloque sua data de nascimento"
                placeholderTextColor="#999"
                keyboardType="numeric"
            />

            <Text style={styles.label}> CEP *</Text>
            <TextInput
                style={styles.input}
                placeholder="02201000"
                placeholderTextColor="#999"
                keyboardType="numeric"
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

            <Text style={styles.label}> Condição de Mobilidade Reduzida *</Text>
            <TextInput
                style={styles.input}
                placeholder="Paralisia na perna direita"
                placeholderTextColor="#999"
                keyboardType="default"
            />


            <Text style={styles.label}>Documento comprovante *</Text>
            <TouchableOpacity style={styles.backgroundColor}>
                <Button style={styles.buttonFile}
                    title="Selecione o Documento"
                    activeOpacity={0.5}
                    onPress={selectOneFile}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Criar Conta</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
            </ScrollView>
    </View>
    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center'
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
    },
    scrollView:{
    marginHorizontal: 20,
}
});

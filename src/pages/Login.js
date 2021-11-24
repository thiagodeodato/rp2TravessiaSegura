import React, {useState} from 'react';
import {Button, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, View, StyleSheet, Image, ScrollView } from 'react-native';
import firebase from '../config/firebaseconfig';


export default function Login({ navigation }) {

    const dbRef = firebase.database().ref();

    
    const [userEmail, setUserEmail] = useState('');
    console.log(userEmail);

    
    function login (){
        if(userEmail && userEmail != ''){
            dbRef.child("clientesCadastro").child(userEmail).get().then((snapshot) => {
                if (snapshot.exists()) {
                    navigation.navigate('Página Inicial', userEmail);
                    console.log(snapshot.val());
                } else {
                    alert('Erro ao fazer Login. Usuario inexistente ou senha incorreta');
                }
            }).catch((error) => {
                console.error(error);
            });
        } else{
            alert('Erro ao fazer Login. Preencha um email válido');
        }
    }
    
    return(
    <View style={styles.container}>
        <ScrollView
        style = {styles.scrollView}>

        <Image style={styles.logo} source={require('../assets/logotravessia.png')} />
        

        <KeyboardAvoidingView style={styles.form}>
            <Text style={styles.label}>E-mail *</Text>
            <TextInput
                style={styles.input}
                placeholder="Seu e-mail"
                placeholderTextColor="#999"
                keyboardType="email-address"
                onChangeText={(value) =>                     
                    setUserEmail(value.substr(0, value.indexOf('@')).toLowerCase())
                }
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
                    onPress={() => login()}
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
        </ScrollView>
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
        width: 150,
        height: 150,
        marginTop: 30,
        marginBottom: 30,
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
        
        padding: 10,
    },
    scrollView:{
        marginHorizontal: 20,
    },
});

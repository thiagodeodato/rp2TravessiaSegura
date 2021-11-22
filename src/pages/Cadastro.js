import React, {useState} from 'react';
import {Text, KeyboardAvoidingView, TextInput, TouchableOpacity, View, StyleSheet, Image, Button, ScrollView, Input } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import RadioButton from '../components/RadioButton';
import firebase from '../config/firebaseconfig';
//import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
//import Checkbox from "./Checkbox";

export default function Cadastro() {
    
    const [person, setPerson] = useState({ email: '', password: ''});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [condition, setCondition] = useState('');


    const clickSaveHandler = () => {
        if(email !== '' && password !== ''){
/*             console.log(email);
            console.log(password); */
            writeUserData(email, password, condition);
        }
    }

    function writeUserData(email, password, condition){
        firebase.database().ref('clientesCadastro/' + email).set({
            password: password,
            condition: condition
        });
    }

    const selectOneFile = async () => {

        let result = await DocumentPicker.getDocumentAsync({});
        if(result.uri === undefined){
            alert('Não foi possível fazer o envio do documento.')
        } else {
            alert('O documento será analisado e caso seja aprovado será possível solicitar o cartão.')
        }
        console.log(result);
    }  
    
    
    const dbRef = firebase.database().ref();
    //console.log(dbRef);

    //TESTE DE CONEXAO PARA O CLIENTE THIAGO


    dbRef.child("clientesCadastro").child('thiago').get().then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });

    /* var radioValue = 0; */

    return (
        <ScrollView
            
            style = {styles.scrollView}>
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
                placeholder="05081999"
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
                onChangeText={(value) =>                     
                    //setPerson({email: value.substr(0, value.indexOf('@')),})
                    setEmail(value.substr(0, value.indexOf('@')),)
                }
            />

            <Text style={styles.label}>Senha *</Text>
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Senha"
                placeholderTextColor="#999"
                keyboardType="default"
                onChangeText={(value) =>                     
                    //setPerson({password: value})
                    setPassword(value)
                }
            />

            <Text style={styles.label}> Condição de Mobilidade Reduzida *</Text>
            <TextInput
                style={styles.input}
                placeholder="Paralisia na perna direita"
                placeholderTextColor="#999"
                keyboardType="default"
                onChangeText={(value) =>                     
                    //setPerson({password: value})
                    setCondition(value)
                }
            />

            
            
            
{/* 
            <RadioButton
                onPress={(value) => { 
                    { 
                        teste = value;
                        console.log
                    }
                    this.setState({value:value})
                    {this.radioValue = value} 
                }}
            /> */}

            

            <RadioButton
                onPress={(value) => {this.setState({value:value})}}
            />

           {/*  { this.radioValue  === 0 && (<Text style={styles.label}> Sugestão de tempo de utilização do cartão </Text>)(
            <TextInput
                style={styles.input}
                placeholder="3 meses"
                placeholderTextColor="#999"
                keyboardType="numeric"
            />)} */}

            <Text style={styles.label}>Documento comprovante *</Text>
            <TouchableOpacity style={styles.buttonFile}>
                <Button style={styles.buttonFile}
                    title="Selecione o Documento"
                    activeOpacity={0.5}
                    onPress={selectOneFile}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}
                onPress={() =>
                    {
                        clickSaveHandler();
                    }
                }
                >Criar Conta</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
            
    </View>
    </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        

    },
    logo: {
        width: 120,
        height: 120,
        marginTop: 30,
        marginBottom: 30
    },
    logoPrefeitura: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 283,
        height: 113,
    },
    form: {
        marginBottom:30
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
        backgroundColor: '#73D602',
        padding: 10,
        margin: 20
    },
    scrollView:{
    marginHorizontal: 10,
},
    buttonFile:{
    marginTop: 5
    }
});

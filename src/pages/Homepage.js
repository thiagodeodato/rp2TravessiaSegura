import React from 'react';
import {Text, KeyboardAvoidingView, TextInput, TouchableOpacity, View, StyleSheet, Image, Button, FlatList, Dimensions, ScrollView, Platform, Alert, ListItem, Icon,SafeAreaView} from 'react-native';
import Slider from '../components/Slider';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';


const images = [
    'https://s2.glbimg.com/RPyiMXN59PgbLde0Qsvsh15jadk=/0x0:1203x804/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/O/p/SLel3bQ2ycJRRQyzttkg/capa-lei-municipal-garante-acessibilidade-das-pessoas-com-deficiencia-ou-com-mobilidade-reduzida.png',
    'https://i.calameoassets.com/210901164246-e6b48ead2c5c8c124c996b493296d380/large.jpg'
]

const Message = () => 
    Alert.alert (
                "Seu pedido foi enviado a prefeitura",
                "Para mais detalhes acompanhe o avanço, através do seu email cadastrado",
                [
                { text: "OK!", onPress: () => console.log("OK Pressed") }
                ]   
                );

const { width, height } = Dimensions.get('screen');

export default function Homepage() {

    return (
    <View style= {styles.container}> 
    {   
    Platform.OS === 'web' ? 
    
        <ScrollView
        style = {styles.scrollView}>
        <View style={styles.container}>
        <View>
        <Text style = {styles.Hello}> 
        Olá, João
        </Text>
        </View>

        <TouchableOpacity style={styles.button}>
                <Button style={styles.button}
                title="Peça seu cartão para travessia"
                activeOpacity={0.5}
                color = "##1E3CFF"
                onPress={Message}
                />
            </TouchableOpacity>
                <View style={styles.events}>
                    <Text style={styles.carouselText}>Principais notícias da sua cidade</Text>
                    <Slider images = {images}/>
                </View>
                    <View style= {styles.form}>
                </View>            
            </View>
        </ScrollView> 
    :  
    
        <View style={styles.container}>

        <View>
        <Text style = {styles.Hello}> 
        Olá, João
        </Text>
        </View>


      


        <View style = {styles.board}>
        
        <Image
        source={require('../assets/Travessia II.png')}
        fadeDuration={1}
        style={{ width: 50, height: 50 }}
        />
        <Text style = {styles.textBoard}> 
        Seu tempo de travessia é:
        </Text>

        </View>

        <TouchableOpacity style={styles.buttonCell}>
                <Button style={styles.buttonCell}
                title="Peça seu cartão para travessia"
                color = "#1E3CFF"
                activeOpacity={0.5}
                onPress={Message}
                />
        </TouchableOpacity>

            <View style={styles.events}>
                <Text style={styles.carouselText}>Principais notícias da sua cidade</Text>
                <Slider images = {images}/>
            </View>
                <View style= {styles.form}>
            </View>            
        </View> 
        
        }
    </View>
        );
}

const styles = StyleSheet.create({
    board:{
        margin: 20,
        padding: 30,
        flex:0.5,
        flexDirection: 'row',

    },
    
    
    button:{
        alignItems: 'center',
        padding: 10,
        margin: 20
    },

    buttonCell:{
        marginTop: 10,
        backgroundColor: '#FFC478',
        
    },

    container: {
        alignItems: 'center',
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20
        },

    events:{
        flex: 1,
        alignItems: 'center',
        margin: 10
    },

    carouselText: {
        fontSize: 16,
        padding: 10,
        alignItems: 'center',
        fontWeight: 'bold',

        },

    logo: {
        width: 120,
        height: 120,
        marginTop: 30,
        marginBottom: 30
        },

    fileLabel: {
        margin: 15,
        fontSize: 20,
        },

    form: {
        flex: 1,
        alignItems: 'center',
        margin: 10
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
    
    iconboard:{

    },

    Hello: {
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        marginBottom: 5
    },

    textBoard:{
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:15,
        fontSize: 15,
        color:'#1E3CFF',   

    },



    background: {
    backgroundColor:
        "radial-gradient(ellipse at left bottom,    rgb(163, 237, 255) 0%,    rgba(57, 232, 255, 0.9) 59%,    rgba(48, 223, 214, 0.9) 100% )",
        },

    file: {
    color: "black",
    marginHorizontal: 145,
        },

    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    },
});
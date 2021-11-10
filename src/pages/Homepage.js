import React from 'react';
import {Text, KeyboardAvoidingView, TextInput, TouchableOpacity, View, StyleSheet, Image, Button, FlatList, Dimensions, ScrollView, Platform} from 'react-native';
import Slider from '../components/Slider'
;

const images = [
    'https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/saude/capa%20Horizontal%20para%20site5-01%20(1).png',
    'https://s2.glbimg.com/qXpd31eHORSQrRVijS2j-HgXYAM=/53x10:1870x1000/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/K/b/iGU8Z0T1yEQJ3oghuOpw/acervo-bdsp-bdbr-limpo-20210615-0545-frame-214119.jpeg',
    'https://i.ytimg.com/vi/2fSsGH8eBYM/maxresdefault.jpg'
]

const news = [
    'https://itu.sp.gov.br/wp-content/uploads/2020/03/BOLETIM.jpg',
    'https://itu.sp.gov.br/wp-content/uploads/2021/11/boletim411-site-novo.jpg'

]

const { width, height } = Dimensions.get('screen');

export default function Homepage() {

    return (
    <View style= {styles.container}> 
    {   Platform.OS === 'web' ? 
        <ScrollView
            style = {styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.events}>
                    <Text style={styles.carouselText}>Fique por dentro dos eventos da prefeitura</Text>
                    <Slider images = {images}/>
                </View>
                    <View style= {styles.form}>
                    <Text style={styles.carouselText}>Últimas notícias em sua região</Text>
                <Slider images = {news}/>
                </View>            
            </View>
        </ScrollView> 
    :  
        <View style={styles.container}>
            <View style={styles.events}>
                <Text style={styles.carouselText}>Fique por dentro dos eventos da prefeitura</Text>
                <Slider images = {images}/>
            </View>
                <View style= {styles.form}>
                <Text style={styles.carouselText}>Últimas notícias em sua região</Text>
            <Slider images = {news}/>
            </View>            
        </View> }
    
        
    </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    logoPrefeitura: {
        width: 283,
        height: 113,
        }  ,
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
    buttonFile: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        },
    background: {
    backgroundColor:
        "radial-gradient(ellipse at left bottom,    rgb(163, 237, 255) 0%,    rgba(57, 232, 255, 0.9) 59%,    rgba(48, 223, 214, 0.9) 100% )",
        },
    file: {
    color: "black",
    marginHorizontal: 145,
        },
    button: {
        marginHorizontal: 60,
        },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    },
});
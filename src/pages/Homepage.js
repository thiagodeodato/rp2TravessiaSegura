import React from 'react';
import {Text, KeyboardAvoidingView, TextInput, TouchableOpacity, View, StyleSheet, Image, Button, FlatList, Dimensions, ScrollView} from 'react-native';
import Slider from '../components/Slider';

const images = [
    'https://exame.com/wp-content/uploads/2017/05/thinkstockphotos-512729096-e1493815119644.jpg',
    'https://exame.com/wp-content/uploads/2017/05/thinkstockphotos-512729096-e1493815119644.jpg'
]

const { width, height } = Dimensions.get('screen');

/* const imageW = width * 0.7;
const ImageH = imageW * 1.54;
 */
export default function Homepage() {
  
    return (
    <View style={styles.container}>
        <View style={styles.container}>
            <Slider images = {images}/>
        </View>


        {/* CARROUSEL COMPLEXO */}
        {/* <View style={StyleSheet.absoluteFillObject}>
            {data.map((image, index) => {
                return <Image
                    key={`image-${index}`}
                    source={{uri: image}}
                    style={[
                        StyleSheet.absoluteFillObject
                    ]}
                    blurRadius={50}
                    />
            })}
        </View>
        <FlatList
            data={data}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            pagingEnabled
            renderItem={({item}) => {
                return <View style={{width, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={{uri: item}} style={{
                        width: imageW,
                        height: imageH,
                        resizeMode: 'cover',
                        borderRadius: 16
                    }}/>
                    </View>
            }}
        /> */}

    </View>
    
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        width,
        height
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
    }
});
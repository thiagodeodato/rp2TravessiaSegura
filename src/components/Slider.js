import React from 'react';
import {Text, KeyboardAvoidingView, TextInput, TouchableOpacity, View, StyleSheet, Image, Button, FlatList, Dimensions, ScrollView} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { render } from 'react-dom';

const { width, height } = Dimensions.get('screen');

const imageW = width * 0.7;
const ImageH = imageW * 1.54;

export default class Slider extends React.Component {
    state = {
        active: 0
    }

    change = ({nativeEvent}) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if(slide !== this.state.active){
            this.setState({active: slide});
        }
    }
    render(){
        return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logotravessia.png')} />

            <View style={styles.container}>
                <ScrollView
                    pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    onScroll={this.change}
                >
                    {
                        this.props.images.map((image, index) => (
                            <Image
                                key={index}
                                source={{ uri: image }}
                                style={styles.image}
                            />
                        ))
                    }
                </ScrollView>
                <View style={styles.pagination}>
                    {
                        this.props.images.map((i, k) => 
                            <Text key={k} style={k==this.state.active ? styles.pagingActiveText : styles.pagingText}>◯</Text>
                            )
                    }
                </View>
            </View>
        </View>
        )
    };
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
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    },
    pagingText :{
        color: '#888',
        margin: 3  
    },
    pagingActiveText: {
        color: '#fff',
        margin: 3
    }
});
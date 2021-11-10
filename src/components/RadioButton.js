import React from 'react';
import {Text, KeyboardAvoidingView, TextInput, TouchableOpacity, View, StyleSheet, Image, Button, ScrollView, Input } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
 
 
var radio_props = [
    {label: 'Temporária', value: 0 },
    {label: 'Permanente', value: 1 }
];
 
export default class Slider extends React.Component {
    state = {
        active: 0
    }
    
  getInitialState() {
    return {
      value: 0,
    }
  };
  render() {
    return (
      <View>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {this.setState({value:value})}}
        />
      </View>
    );
  }
}
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import Homepage from './src/pages/Homepage';
import ActionBarImage from './src/pages/Icon_Perfil';
import Notification_bell from './src/pages/Icon_Notification';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator 
      initialRouteName="Login"
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: '20', //Impacta na execucao do android mas nao no iphone
          alignItems: 'center',
          justifyContent: 'center'
        },
        headerTintColor: 'black',
        headerStyle: { backgroundColor: '#d8d8d8'},
        }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen 
          name="Página Inicial" 
          component={Homepage}
          options={{
            title: 'Página Inicial',
            headerRight: () => <ActionBarImage/>,
            headerBackVisible: true, // tirar na apresentação 
            headerLeft: () => <Notification_bell/>
          }}/>
    </Stack.Navigator>
  </NavigationContainer>
    /* <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button
        title="Go to Login"
        onPress={
          () => this.props.navigation.navigate('Login')
        }
      />
      <StatusBar style="auto" />
    </View> */
  );
}



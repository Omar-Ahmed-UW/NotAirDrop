import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import FileUploadScreen from './screens/FileUploadScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home" 
        screenOptions={{
            headerStyle: {
              backgroundColor: '#62a193',
            },
            headerTintColor: '#fff',
          }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{title: "My Home"}}
          />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen}
          options={{title: "Details"}}
           />
         <Stack.Screen 
          name="FileUpload" 
          component={FileUploadScreen}
          options={{title: "File Upload"}}
           />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  systemId: {
    fontSize: 20,
    color: '#484a49',
    bottom: -100, /*Hardcode for now*/
  },
  inputSystemId: {
    borderWidth: 1,
    borderColor: '#484a49',
    borderRadius: 5,
    width: 200,
    margin: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});

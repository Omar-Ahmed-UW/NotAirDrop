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
            headerBackTitle: "",
          }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{title: "NotAirDrop"}}
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


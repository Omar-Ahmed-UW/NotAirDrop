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
import SearchingScreen from './screens/SearchingScreen';
import DownloadScreen from './screens/DownloadScreen';

const Stack = createNativeStackNavigator();

import { AsyncStorage } from '@aws-amplify/core';

import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

import { API, graphqlOperation } from 'aws-amplify';

import { createUIDS, updateUIDS, deleteUIDS } from './src/graphql/mutations';
import { listUIDS } from './src/graphql/queries';

import * as queries from './src/graphql/queries';
import * as mutations from './src/graphql/mutations';

import {useEffect} from 'react';

export default function App() {

  // only runs on first launch
  useEffect(() => {
  // checks for a localUID
  const fetchUID = async () => {
    const debug = false;
    console.log('Debugging: ' + debug);
    if(!AsyncStorage.getItem('localUID') || debug) {
      setUID();
    }
    // query UID from database
    let filter = {
      uid: {
        eq: AsyncStorage.getItem('localUID')
      }
    }  
    try {
      const validUID = await API.graphql({ query: queries.getUIDS, variables: { filter: filter }}) ;
      console.log("found: " + validUID);
    }
    catch (err) {
    // if UID does not exist create entry 
      console.log("add: " + AsyncStorage.getItem('localUID'));  
      const newUID = { uid: AsyncStorage.getItem('localUID') };
      API.graphql(graphqlOperation(createUIDS, {input: newUID}));
    }
  } 
  const setUID = async() => {
    try {
      AsyncStorage.setItem('localUID', Math.random().toString(36).slice(2, 6));
      console.log("new UID: " + AsyncStorage.getItem('localUID'));
    } catch (err) {
      alert(err)
    }
  }
  console.log("Mounted");
  fetchUID();
  console.log("UID Fetched");
  console.log(AsyncStorage.getItem('localUID'));
  const allUIDS = API.graphql({ query: queries.listUIDS });
  console.log(allUIDS);
}, [])


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
          <Stack.Screen
            name="Searching"
            component={SearchingScreen}
            options={{title: "Searching"}}
          />
          <Stack.Screen
            name="Download"
            component={DownloadScreen}
            options={{title: "Download"}}
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
});


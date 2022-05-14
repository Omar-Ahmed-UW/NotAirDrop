import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { AsyncStorage } from '@aws-amplify/core';

import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

import { API, graphqlOperation } from 'aws-amplify';
import { createUIDS, updateUIDS, deleteUIDS } from './src/graphql/mutations';
import { listUIDS } from './graphql/queries';

import React, {useEffect} from 'react';

export default function App() {

  // only runs on first launch
  useEffect(() => {
  // checks for a localUID
  const fetchUID = async () => {
    if(!AsyncStorage.getItem('localUID')) {
      setUID();
    }
    // query UID from database
    const validUIDS = await DataStore.query(UIDS, c => c.uid("eq", AsyncStorage.getItem('localUID')));
    console.log(validUIDS);
    if(!userID) return;
    // if UID does not exist create entry 
    await DataStore.save(
      new UIDS({
        uid: AsyncStorage.getItem('localUID')
      })
    );
  } 
  const setUID = async() => {
    try {
      await AsyncStorage.setItem("localUID", Math.random().toString(36).slice(4));
    } catch (err) {
      alert(err)
    }
  }
  console.log("Mounted");
  fetchUID();
  console.log(AsyncStorage.getItem('localUID'));
}, [])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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


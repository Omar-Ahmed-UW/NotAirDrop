import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { AsyncStorage } from '@aws-amplify/core';

import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

import { API, graphqlOperation } from 'aws-amplify';

import * as queries from './src/graphql/queries';
import * as mutations from './src/graphql/mutations';

import React, {useEffect} from 'react';

export default function App() {

  // only runs on first launch
  useEffect(() => {
  // checks for a localUID
  const fetchUID = async () => {
    const debug = true;
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
    const validUID = API.graphql({ query: queries.getUIDS, variables: { filter: filter }});
    console.log("found: " + validUID);
    if(!validUID) return;
    // if UID does not exist create entry 
    console.log("Adding entry: " + AsyncStorage.getItem('localUID'));
    const UIDDetails = {
      uid: AsyncStorage.getItem('localUID')
    };
    const result = API.graphql(graphqlOperation(mutations.createUIDS, { input: UIDDetails }));
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


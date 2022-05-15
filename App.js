import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { AsyncStorage } from '@aws-amplify/core';

import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

import { API, graphqlOperation } from 'aws-amplify';
import { createUIDS, updateUIDS, deleteUIDS } from './src/graphql/mutations';
import { listUIDS } from './src/graphql/queries';

// import * as queries from './src/graphql/queries';
// import * as mutations from './src/graphql/mutations';

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
    // const validUID = await API.graphql({ query: queries.getUIDS, variables: { filter: filter }});
    // console.log("found: " + validUID);
    // if(!validUID) return;
    // if UID does not exist create entry 
    console.log("Adding entry: " + AsyncStorage.getItem('localUID'));
    (async () => {
      const result = await client.mutate({
        mutation: gql(createUIDS),
        variables: {
          input: {
            uid: AsyncStorage.getItem('localUID')
          }
        }
      });
      console.log(result.data.createUID);
    })();
  } 
  const setUID = async() => {
    try {
      await AsyncStorage.setItem('localUID', Math.random().toString(36).slice(2, 6));
      console.log("new UID: " + AsyncStorage.getItem('localUID'));
    } catch (err) {
      alert(err)
    }
  }
  console.log("Mounted");
  fetchUID();
  console.log("UID Fetched");
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


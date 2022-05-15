import * as React from 'react';
import { Image, StyleSheet, Button, Text, TextInput, TouchableOpacity, View, Pressable } from 'react-native';
import { Amplify } from 'aws-amplify';
import { AsyncStorage } from '@aws-amplify/core';

export default function DownloadingScreen({ navigation }) {
  let fileName = "tempFile.txt"
  let localUserId = AsyncStorage.getItem('localUID');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.titleText}>File Found:</Text>
      <Text style={styles.titleText}>File Name: {fileName}</Text>

      <View style={styles.container}>
        <View style={styles.buttonAlign}>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Accept</Text>
          </Pressable>
          <Text style={styles.spacer}> </Text>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Decline</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.bottomView}>
        <Text style={styles.textStyle}>System ID: {localUserId}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    color: '#6e6d6d',
    paddingBottom: 30,
  },
  bottomView: {
    fontSize: 20,
    color: '#a19f9f',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  textStyle: {
    fontSize: 20,
    color: '#8c8b8b',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#62a193',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  buttonAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  spacer: {
    width: 30,
  },
});
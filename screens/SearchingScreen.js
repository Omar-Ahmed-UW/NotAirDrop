import * as React from 'react';
import { Image, StyleSheet, Button, Text, TextInput, TouchableOpacity, View, Pressable } from 'react-native';

export default function SearchingScreen({ navigation }) {
  let fileFound = true;
  
  if(fileFound) {
    navigation.navigate('Download')
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.titleText}>Searching for file</Text>
      <View style={styles.bottomView}>
        <Text style={styles.textStyle}>System ID: 1234</Text>
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
});
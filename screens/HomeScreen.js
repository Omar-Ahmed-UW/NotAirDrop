import * as React from 'react';
import { Image, StyleSheet, Button, Text, TextInput, TouchableOpacity, View, Pressable } from 'react-native';


export default function HomeScreen({ navigation }) {
  return (
    /*<Image source={require('./my-icon.png')} /> */
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Details')}>
          <Text style={styles.buttonText}>Send File</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Details')}>
          <Text style={styles.buttonText}>Download File</Text>
        </Pressable>
      </View>
      <View style={styles.bottomView}>
          <Text style={styles.textStyle}>System ID: 1234</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomView: {
    fontSize: 20,
    color: '#a19f9f',
    width: '100%',
    height: 40,
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
});
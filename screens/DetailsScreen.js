import * as React from 'react';
import { Image, StyleSheet, Button, Text, TextInput, TouchableOpacity, View, Pressable } from 'react-native';

export default function DetailsScreen({ navigation }) {
  const [receivingSystemId, setReceivingSystemId] = React.useState(''); 
  let systemId = 1234;
  let validId = false;

  /*
  state = {
    textValue: 'Send To:',
  }
  changeTitle = () => {
    systemId = 1111;
  
    this.setState({
      textValue: 'System ID Not Found',
      
    })
    */

  if(receivingSystemId == ''){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.titleText}>Send To:</Text>
        <TextInput 
          keyboardType='numeric'
          maxLength={4}
          style={styles.inputSystemId}
          placeholder="Recipient ID:  eg.`0000`" 
          placeholderTextColor="#6e6d6d" 
          mode="flat"
          onChangeText={text => setReceivingSystemId(text)}
        />
          <Pressable style={styles.button} onPress={() => systemId = 1111}>
              <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
        
        <View style={styles.bottomView}>
            <Text style={styles.textStyle}>System ID: {systemId}</Text>
        </View>
      </View>
    );
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/*
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      */}
      <Text style={styles.titleText}>Send To:</Text>
      <TextInput 
        keyboardType='numeric'
        maxLength={4}
        style={styles.inputSystemId}
        placeholder="Recipient ID:  eg.`0000`" 
        placeholderTextColor="#6e6d6d" 
        mode="flat"
        onChangeText={text => setReceivingSystemId(text)}
      />
        <Pressable style={styles.button} onPress={() => navigation.navigate('FileUpload', {receivingSystemId: receivingSystemId})}>
            <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
      
      <View style={styles.bottomView}>
          <Text style={styles.textStyle}>System ID: {systemId}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    color: '#6e6d6d',
  },
  inputSystemId: {
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: '#c7c7c7',
    width: 200,
    margin: 10,
    textAlign: 'center',
    padding: 10,
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
});
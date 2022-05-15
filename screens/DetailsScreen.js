import * as React from 'react';
import { Image, StyleSheet, Button, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function DetailsScreen({ navigation }) {
  const [receivingSystemId, setReceivingSystemId] = React.useState(''); 
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
      <Text>Send To:</Text>
      <TextInput 
        keyboardType='numeric'
        maxLength={4}
        style={styles.inputSystemId}
        placeholder="System ID: eg.`1234`"  
        onChangeText={text => setReceivingSystemId(text)}
      />
      <Button onPress={() => navigation.navigate('FileUpload', {receivingSystemId: receivingSystemId})} title="Submit" />

      <Text style={styles.systemId}>System ID: 1234</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
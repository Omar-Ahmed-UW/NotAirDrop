import * as React from 'react';
import { Image, StyleSheet, Button, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Send a File"
        onPress={() => navigation.navigate('Details')}
      />
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
});
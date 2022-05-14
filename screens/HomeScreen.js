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
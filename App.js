import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SystemIdForm from './SystemIdForm';
import * as ImagePicker from 'expo-image-picker';


function HomeScreen({ navigation }) {
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

function DetailsScreen({ navigation }) {
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

function FileUploadScreen({ route, navigation }) {
  let [selectedImage, setSelectedImage] = React.useState(null);
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
      </View>
    );
  }
  const { receivingSystemId } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sending to: {receivingSystemId}</Text>
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button below!
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Choose a photo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Choose a File</Text>
      </TouchableOpacity>

      <Text style={styles.systemId}>System ID: 1234</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerStyle: {
            backgroundColor: '#62a193',
          },
          headerTintColor: '#fff',
        }}>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{title: "My Home"}}
          />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen}
          options={{title: "Details"}}
           />
         <Stack.Screen 
          name="FileUpload" 
          component={FileUploadScreen}
          options={{title: "File Upload"}}
           />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});

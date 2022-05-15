import * as React from 'react';
import { Image, StyleSheet, Button, Text, TextInput, TouchableOpacity, View, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import { Amplify } from 'aws-amplify';
import { AsyncStorage } from '@aws-amplify/core';

export default function FileUploadScreen({ route, navigation }) {
  let [selectedImage, setSelectedImage] = React.useState(null);
  let [singleFile, setSingleFile] = React.useState(null);
  const { receivingSystemId } = route.params;
  let localUserId = AsyncStorage.getItem('localUID');

  const openImagePickerAsync = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setSelectedImage({ localUri: result.uri });
    }
  };
  
  let pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log(result);
    }
/*
  if (singleFile !== null) {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    );
  }
*/
  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
        <View style={styles.buttonAlign}>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Send</Text>
          </Pressable>
          <Text style={styles.spacer}> </Text>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Details')}>
              <Text style={styles.buttonText}>Cancel</Text>
          </Pressable>
        </View>
        {console.log(selectedImage.uri)}
      </View>
    );
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.titleText}>Sending to: {receivingSystemId}</Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Select Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pickDocument} style={styles.button}>
        <Text style={styles.buttonText}>Select Document</Text>
      </TouchableOpacity>
      

      <View style={styles.bottomView}>
          <Text style={styles.textStyle}>System ID: {localUserId}</Text>
      </View>
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
  titleText: {
    fontSize: 20,
    color: '#6e6d6d',
    paddingBottom: 30,
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
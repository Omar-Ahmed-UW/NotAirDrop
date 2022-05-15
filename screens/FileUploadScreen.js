import * as React from 'react';
import { Image, StyleSheet, Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';

export default function FileUploadScreen({ route, navigation }) {
  let [selectedImage, setSelectedImage] = React.useState(null);
  let [singleFile, setSingleFile] = React.useState(null);
  const { receivingSystemId } = route.params;

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
        <Image source={{ uri: singleFile.localUri }} style={styles.thumbnail} />
      </View>
    );
  }
*/
  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sending to: {receivingSystemId}</Text>
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button below!
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Select Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pickDocument} style={styles.button}>
        <Text style={styles.buttonText}>Select Document</Text>
      </TouchableOpacity>
      

      <Text style={styles.systemId}>System ID: 1234</Text>
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
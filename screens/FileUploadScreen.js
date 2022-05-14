import * as React from 'react';
import { Image, StyleSheet, Button, Text, TextInput, TouchableOpacity, View } from 'react-native';

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
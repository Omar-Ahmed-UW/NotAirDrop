import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { RNS3 } from 'react-native-aws3';

export default function App() {
  takePic();{
    ImagePicker.showImagePicker({}, (response)=>{
      console.log(response);
    })
  }
  return (
    <View style={styles.container}>
      <Text>welcome to aws s3 uploader</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={this.takePic.bind(this)}>
        <Text>Upload Image</Text>
      </TouchableOpacity>
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
});

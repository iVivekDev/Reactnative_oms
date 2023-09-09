import {Button, StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const ImageCapture = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  // Function to open the camera and capture an image
  const openCamera = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.uri};
        setSelectedImage(source);
        console.log(selectedImage.uri);
      }
    });
  };

  // Function to handle form submission
  const onSignInPressed = () => {
    console.log('Quantity:', quantity);
    console.log('Price:', price);
    if (selectedImage) {
      console.log('Selected Image:', selectedImage);
    }
  };
  return (
    <View>
      <Button title="Open Camera" onPress={openCamera} />
      {selectedImage && <Image source={selectedImage} style={styles.image} />}
    </View>
  );
};

export default ImageCapture;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
});

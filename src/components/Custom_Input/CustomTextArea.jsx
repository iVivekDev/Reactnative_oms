import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const CustomTextArea = ({value, setValue, placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textarea}
        multiline
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        placeholderTextColor="#3C3934"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
  },
  textarea: {
    padding: 5,
    fontSize: 16,
    height: 150,
    alignItems: 'flex-start',
    color: '#000',
  },
});

export default CustomTextArea;

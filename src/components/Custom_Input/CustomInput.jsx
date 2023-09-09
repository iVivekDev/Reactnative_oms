import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const CustomInput = ({value, setValue, placeholder, secureTextEntryType}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntryType}
        placeholderTextColor="#3C3934"
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  input: {
    color: '#000',
  },
});

import {StyleSheet, Text, View, Platform} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const CustomSelect = ({placeholder, data}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState();

  return (
    <View style={{marginVertical: 10}}>
      <DropDownPicker
        items={data}
        open={isOpen}
        value={currentValue}
        setOpen={setIsOpen}
        setValue={setCurrentValue}
        zIndex={Platform.OS === 'android' ? 5000 : undefined}
        maxHeight={200}
        autoScroll
        placeholder={placeholder}
        style={{zIndex: 1000}} 
      />
    </View>
  );
};

export default CustomSelect;

const styles = StyleSheet.create({});

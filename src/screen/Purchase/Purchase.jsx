import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CustomInput from '../../components/Custom_Input/CustomInput';
import CustomBtn from '../../components/Custom_Btn/CustomBtn';
import CustomSelect from '../../components/Custom_Input/CustomSelect';

const Purchase = () => {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  const onSignInPressed = () => {
    navigation.navigate('Dashboard');
  };

  const Flowers = [
    {label: 'Arali Kadambam', value: 'Arali Kadambam'},
    {label: 'Jasmine String', value: 'Jasmine String'},
    {label: 'Button Rose', value: 'Button Rose'},
    {label: 'Jevanthi', value: 'Jevanthi'},
    {label: 'Lotus', value: 'Lotus'},
    {label: 'Lilly loose', value: 'Lilly loose'},
    {label: 'Arali loose', value: 'Arali loose'},
  ];

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Purchase Form</Text>
      <CustomSelect data={Flowers} placeholder="Select Shop" />
      <CustomSelect data={Flowers} placeholder="Select Supplier" />
      <CustomSelect data={Flowers} placeholder="Select Flower" />

      <CustomInput
        placeholder="Quantity"
        value={Password}
        setValue={setPassword}
      />
      <CustomInput
        placeholder="Price"
        value={Password}
        setValue={setPassword}
      />
      <View style={styles.btnDesign}>
        <CustomBtn text="Save" onPress={onSignInPressed} />
      </View>
    </View>
  );
};

export default Purchase;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 25,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxheight: 200,
  },
  AddBtn: {
    width: '50%',
    alignSelf: 'flex-end',
    paddingRight: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  btnDesign: {
    width: '100%',
  },
});

import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Text,
} from 'react-native';
import CustomInput from '../../components/Custom_Input/CustomInput';
import CustomBtn from '../../components/Custom_Btn/CustomBtn';
import CustomTextArea from '../../components/Custom_Input/CustomTextArea';
import CustomSelect from '../../components/Custom_Input/CustomSelect';

const Packing = () => {
  const [Username, setUsername] = useState('');
  const [BoxNo, setBoxNo] = useState('');
  const [FlowerNo, setFlowerNo] = useState('');
  const [Quantity, setQuantity] = useState('');
  const [Caption, setCaption] = useState('');

  const {height} = useWindowDimensions();

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
    // <ScrollView
    //   showsVerticalScrollIndicator={false}
    //   contentContainerStyle={styles.root}>
    <View style={styles.root}>
      <Text style={styles.title}>Packing From</Text>
      <CustomSelect data={Flowers} placeholder="Select Airport" />
      <CustomSelect data={Flowers} placeholder="Box No." />
      <CustomInput
        placeholder="Flower No."
        value={FlowerNo}
        setValue={setFlowerNo}
      />
      <CustomInput
        placeholder="Quantity"
        value={Quantity}
        setValue={setQuantity}
      />
      <CustomTextArea
        placeholder="Remark"
        value={Caption}
        setValue={setCaption}
      />
      <CustomBtn text="Save" onPress={onSignInPressed} />
    </View>
    // </ScrollView>
  );
};

export default Packing;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 25,
    marginTop: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxheight: 200,
  },
  AddBtn: {
    width: '25%',
    alignSelf: 'flex-end',
    paddingRight: 20,
  },
  selectContainer: {
    marginVertical: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
    alignSelf: 'center',
  },
});

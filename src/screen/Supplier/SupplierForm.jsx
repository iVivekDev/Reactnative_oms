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

const SupplierForm = ({navigation}) => {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Add Supplier</Text>
        <CustomInput
          placeholder="Shop Name"
          value={Username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Name"
          value={Username}
          setValue={setUsername}
        />

        <CustomInput
          placeholder="Phone"
          value={Username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Email"
          value={Username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Address"
          value={Password}
          setValue={setPassword}
        />

        <CustomBtn text="Save" onPress={onSignInPressed} />
      </View>
    </ScrollView>
  );
};

export default SupplierForm;

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
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
    alignSelf: 'center',
  },
});

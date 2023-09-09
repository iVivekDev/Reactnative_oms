import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/img/logo.png';
import CustomInput from '../../components/Custom_Input/CustomInput';
import CustomBtn from '../../components/Custom_Btn/CustomBtn';

const SignIn = ({navigation}) => {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    navigation.navigate('Dashboard');
  };
  const onForgetpassPressed = () => {
    console.warn('Forget Password');
  };
  const onFacebookPressed = () => {
    console.warn('Facebook');
  };
  const onGooglePressed = () => {
    console.warn('Google');
  };
  const onApplePressed = () => {
    console.warn('Apple');
  };

  const dontHaveAccount = () => {
    navigation.navigate('Signup');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="Username"
          value={Username}
          setValue={setUsername}
          secureTextEntryType={false}
        />
        <CustomInput
          placeholder="Password"
          value={Password}
          setValue={setPassword}
          secureTextEntryType={true}
        />
        <CustomBtn text="Submit" onPress={onSignInPressed} />
        <CustomBtn
          text="Froget Password"
          onPress={onForgetpassPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 25,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
  },
});
export default SignIn;

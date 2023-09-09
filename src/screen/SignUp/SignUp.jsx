import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Logo from '../../../assets/img/logo.png';
import CustomInput from '../../components/Custom_Input/CustomInput';
import CustomBtn from '../../components/Custom_Btn/CustomBtn';

const SignUp = ({navigation}) => {
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [RepeatPassword, setRepeatPassword] = useState('');

  const onSignInPressed = () => {
    console.warn('Sign In');
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
  const haveAnAccout = () => {
    navigation.navigate('Signin');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          placeholder="Username"
          value={Username}
          setValue={setUsername}
          secureTextEntryType={false}
        />
        <CustomInput
          placeholder="Email"
          value={Email}
          setValue={setEmail}
          secureTextEntryType={false}
        />
        <CustomInput
          placeholder="Password"
          value={Password}
          setValue={setPassword}
          secureTextEntryType={true}
        />
        <CustomInput
          placeholder="Repeat Password"
          value={RepeatPassword}
          setValue={setRepeatPassword}
          secureTextEntryType={true}
        />
        <CustomBtn text="Register" onPress={onSignInPressed} />

        <Text style={styles.text}>
          By registering, you confirm that you accept our{''}
          <Text style={styles.link}>Terms of Use</Text> and{''}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>
        <CustomBtn
          text="Froget Password"
          onPress={onForgetpassPressed}
          type="TERTIARY"
        />
        <CustomBtn
          text="Sign In with Facebook"
          onPress={onFacebookPressed}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomBtn
          text="Sign In with Google"
          onPress={onGooglePressed}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomBtn
          text="Sign In with Apple"
          onPress={onApplePressed}
          bgColor="#e3e3e3"
          fgColor="#363636"
        />

        <CustomBtn
          text="Have an account ? Sign In"
          onPress={haveAnAccout}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 30,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxheight: 200,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});
export default SignUp;

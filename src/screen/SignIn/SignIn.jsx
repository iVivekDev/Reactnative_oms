import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Logo from '../../../assets/img/logo.png';
import CustomInput from '../../components/Custom_Input/CustomInput';
import CustomBtn from '../../components/Custom_Btn/CustomBtn';
import {AuthApi} from '../../redux/AuthSlice';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state);
  console.log('auth', auth);
  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    const userData = {email, password};
    console.log(userData);
    dispatch(AuthApi(userData));
  };

  const onForgetPasswordPressed = () => {
    console.warn('Forget Password');
  };

  const navigateToSignUp = () => {
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
          value={email}
          setValue={setEmail}
          secureTextEntryType={false}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntryType={true}
        />
        <CustomBtn text="Submit" onPress={onSignInPressed} />
        <CustomBtn
          text="Forget Password"
          onPress={onForgetPasswordPressed}
          type="TERTIARY"
        />
        <CustomBtn
          text="Don't have an account? Sign up"
          onPress={navigateToSignUp}
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

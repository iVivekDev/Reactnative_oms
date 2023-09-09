import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import SignIn from './src/screen/SignIn/SignIn';
import SignUp from './src/screen/SignUp/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './src/screen/Dashboard/Dashboard';
import SupplierForm from './src/screen/Supplier/SupplierForm';
import {MenuProvider} from 'react-native-popup-menu';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.root}>
          <Stack.Navigator>
            <Stack.Screen
              name="Signin"
              component={SignIn}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Signup"
              component={SignUp}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{headerShown: false}}
            />
            <Stack.Screen name="SupplierForm" component={SupplierForm} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;

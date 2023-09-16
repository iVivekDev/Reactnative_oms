import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MenuProvider} from 'react-native-popup-menu';
import {Provider} from 'react-redux';

import SignIn from './src/screen/SignIn/SignIn';
import SignUp from './src/screen/SignUp/SignUp';
import Dashboard from './src/screen/Dashboard/Dashboard';
import SupplierForm from './src/screen/Supplier/SupplierForm';
import store from './src/redux/store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <MenuProvider>
        <NavigationContainer>
          <SafeAreaView style={styles.root}>
            <Stack.Navigator>
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="SupplierForm"
                component={SupplierForm}
                // You can add navigation options for this screen if needed
              />
            </Stack.Navigator>
          </SafeAreaView>
        </NavigationContainer>
      </MenuProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;

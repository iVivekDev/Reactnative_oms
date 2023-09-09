import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DataList from '../Purchase/PurchaseList';
import Profile from '../Profile/Profile';
import PurchaseScreen from '../Purchase/Purchase';
import PackingScreen from '../Packing/Packing';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SupplierForm from '../Supplier/SupplierForm';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SupplietList from '../Supplier/SupplietList';
import PackingList from '../Packing/PackingList';
import PurchaseList from '../Purchase/PurchaseList';

const Tab = createBottomTabNavigator();
const NestedTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();

const Dashboard = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: () => null,
        headerStyle: {
          backgroundColor: '#21372B',
        },
        headerTitleStyle: {
          color: '#fff',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={'#21372B'}
              size={35}
            />
          ),
          title: 'Dashboard',
        }}
      />

      <Tab.Screen
        name="airPortFrom"
        component={NestedTabsComponent}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
              name={focused ? 'add-circle-sharp' : 'add-circle-outline'}
              color={'#21372B'}
              size={35}
            />
          ),
          title: 'Basic Details',
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
              name={focused ? 'settings' : 'settings-outline'}
              color={'#21372B'}
              size={35}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const NestedTabsComponent = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTitleStyle: {
          color: '#fff',
        },
      }}>
      <TopTab.Screen name="Purchase" component={PurchaseScreen} />
      <TopTab.Screen name="Add Supplier" component={SupplierForm} />
      <TopTab.Screen name="Packing" component={PackingScreen} />
    </TopTab.Navigator>
  );
};

const HomeStack = () => (
  <TopTab.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTitleStyle: {
        color: '#fff',
      },
    }}>
    <TopTab.Screen name="Purchase" component={PurchaseList} />
    <TopTab.Screen name="Supplier" component={SupplietList} />
    <TopTab.Screen name="Packing" component={PackingList} />
  </TopTab.Navigator>
);

export default Dashboard;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  btn: {
    width: '20%',
    alignSelf: 'flex-end',
    paddingRight: 20,
  },
});

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Entypo from 'react-native-vector-icons/Entypo';

const PopUpBtn = () => {
  return (
    <View>
      <Menu>
        <MenuTrigger >
          <Entypo name="dots-three-vertical" size={24} color="#21372B" />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption onSelect={() => alert(`Edit`)}>
            <Text style={{color: '#21372B'}}>Edit</Text>
          </MenuOption>
          <MenuOption onSelect={() => alert(`Delete`)}>
            <Text style={{color: 'red'}}>Delete</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};



export default PopUpBtn;

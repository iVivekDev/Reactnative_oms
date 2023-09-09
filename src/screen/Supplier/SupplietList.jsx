import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TableData from '../../components/Tables/TableData';
import CustomBtn from '../../components/Custom_Btn/CustomBtn';
import {useNavigation} from '@react-navigation/native';

const SupplietList = () => {
  const data = [
    {
      id: 1,
      Supplier_name: 'Jone Dev',
      flower_name: 'Arali Kadambam',
      quantity: 30,
      price: 450,
    },
    {
      id: 2,
      Supplier_name: 'Jone Dev',
      flower_name: 'Jasmine String',
      quantity: 90,
      price: 550,
    },
    {
      id: 3,
      Supplier_name: 'Garry',
      flower_name: 'Button Rose',
      quantity: 110,
      price: 600,
    },
    // Add more data as needed
  ];

  return (
    <View style={styles.root}>
      <TableData data={data} />
    </View>
  );
};

export default SupplietList;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  btn: {
    width: '20%',
    alignSelf: 'flex-end',
    paddingRight: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
    alignSelf: 'center',
  },
});

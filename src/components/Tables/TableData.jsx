import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import PopUpBtn from '../PopUpButton/PopUpBtn';

const TableData = ({data, onEditPress, onDeletePress}) => {
  const [showActions, setShowActions] = useState(false);

  const toggleActions = () => {
    setShowActions(!showActions);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Supplier Name</Text>
        <Text style={styles.text}>{data.Supplier_name}</Text>
        <Text style={styles.title}>Flower Name</Text>
        <Text style={styles.text}>{data.flower_name}</Text>
        <Text style={styles.title}>Quantity</Text>
        <Text style={styles.text}>{data.quantity}</Text>
        <Text style={styles.title}>Price</Text>
        <Text style={styles.text}>{data.price}</Text>
        <Text style={styles.title}>Status</Text>
        <Text style={styles.text}>{data.status}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <PopUpBtn />
      </View>
    </View>
  );
};

export default TableData;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
    elevation: 4,
  },
  box: {
    flex: 1,
    padding: 15,
  },
  title: {
    color: '#333',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    color: '#555',
    fontSize: 16,
  },
  buttonContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 15,
  },
  toggleButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  editButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 10,
  },
  deleteButton: {
    backgroundColor: '#ff0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

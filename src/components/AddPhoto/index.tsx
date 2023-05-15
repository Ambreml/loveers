//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../styles';

import {styles} from './style';

// create a component
const AddPhoto = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons name="add" color={colors.WHITE} size={30} />
    </TouchableOpacity>
  );
};

//make this component available to the app
export default AddPhoto;

//import liraries
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './style';

// create a component
const Button = ({text, onPress}: any) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text_btn}>{text}</Text>
    </TouchableOpacity>
  );
};

//make this component available to the app
export default Button;

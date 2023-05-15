//import liraries
import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

import {styles} from './style';

// create a component
const Input = ({label, onChangeText}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label_wrapper}>{label}</Text>
      <TextInput onChangeText={onChangeText} style={styles.input_wrapper} />
    </View>
  );
};

//make this component available to the app
export default Input;

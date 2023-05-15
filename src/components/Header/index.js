//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {styles} from './style';
import {colors} from '../../styles';
import { useNavigation } from '@react-navigation/native';

// create a component
const Header = ({title}) => {
const navigation =useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn_back} onPress={()=>navigation.goBack()}>
        <Ionicons name="chevron-back" color={colors.WHITE} size = {20} />
      </TouchableOpacity>
      <Text style={styles.title_wrapper}>{title}</Text>
    </View>
  );
};

//make this component available to the app
export default Header;

//import libraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {styles} from './style';
import Header from '../../components/Header';
import Input from '../../components/common/Input';
import {colors} from '../../styles';
import Button from '../../components/common/Button';
import {ADD_PHOTO} from '../../config/routes';

// create a component
const RegisterScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Rempli tes informations" />
      <ScrollView
        style={styles.content}
        contentContainerStyle={{paddingBottom: 40}}>
        <View style={styles.row}>
          <View style={styles.photo_wrapper}>
            <Ionicons name="add" color={colors.WHITE} size={30} />
            <TouchableOpacity style={styles.add_photo}>
              <Ionicons name="camera-outline" color={colors.BLACK} />
            </TouchableOpacity>
          </View>
          <View style={styles.input_wrapper}>
            <Input label="Nom" />
          </View>
        </View>
        <Input label="Email" />
        <Input label="Téléphone" />
        <Input label="Age" />
        <Input label="Pays" />
        <Button text="Suivant" onPress={() => navigation.navigate(ADD_PHOTO)} />
      </ScrollView>
    </View>
  );
};

//make this component available to the app
export default RegisterScreen;

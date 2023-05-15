//import libraries
import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import AddPhoto from '../../components/AddPhoto';
import Button from '../../components/common/Button';
import Header from '../../components/Header';
import {HOME} from '../../config/routes';

import {styles} from './style';

// create a component
const AddPhotoScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Ajoute tes photos" />
      <Text style={styles.title}>
        Ajoute tes meilleures photos pour trouver un plus grand nombre de match
        au quotidien.
      </Text>
      <ScrollView
        style={styles.content}
        contentContainerStyle={{paddingBottom: 40}}>
        <View style={styles.row}>
          <AddPhoto />
          <AddPhoto />
        </View>
        <View style={styles.row}>
          <AddPhoto />
          <AddPhoto />
        </View>
        <View style={styles.row}>
          <AddPhoto />
          <AddPhoto />
        </View>
        <View style={styles.btn_wrapper}>
          <Button text="Suivant" onPress={() => navigation.navigate(HOME)} />
        </View>
      </ScrollView>
    </View>
  );
};

//make this component available to the app
export default AddPhotoScreen;

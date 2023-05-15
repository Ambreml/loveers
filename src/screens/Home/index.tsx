//import libraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Button from '../../components/common/Button';
import Header from '../../components/Header';

import {styles} from './style';

// create a component
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Ton match idéal" />
      <Text style={styles.title_wrapper}>
        Qu'espères-tu trouver sur cette application de rencontre ?
      </Text>
      <View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.card_wrapper}>
            <Text style={styles.card_title}>Amour</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card_wrapper}>
            <Text style={styles.card_title}>Amitié</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.card_wrapper}>
            <Text style={styles.card_title}>Joker</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card_wrapper}>
            <Text style={styles.card_title}>Flirt</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.subtitle_wrapper}>
        Tu pourras, une fois ton profil crée, préciser tes critères de
        recherche.
      </Text>
      <View style={styles.btn_wrapper}>
        <Button text="Suivant" />
      </View>
    </View>
  );
};

//make this component available to the app
export default HomeScreen;

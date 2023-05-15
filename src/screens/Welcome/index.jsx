//import libraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselItem from '../../components/CarouselItem';
import Button from '../../components/common/Button';
import { REGISTER } from '../../config/routes';
import { data_entries } from '../../constants/carousel.entries';
import { colors } from '../../styles';

import {styles} from './style';

const sliderWidth = Dimensions.get('screen').width
const itemWidth = Dimensions.get('screen').width - 100

// create a component
const WelcomeScreen = ({navigation}) => {

  const [index, setIndex] = useState(1)

  return (
    <View style={styles.container}>
      <Text style={styles.logo_wrapper}>Logo</Text>
      <Carousel
        data={data_entries}
        renderItem={CarouselItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        firstItem = {1}
        enableMomentum={true}
        onSnapToItem={setIndex}
      />
      <Pagination 
        dotsLength = {data_entries.length} 
        activeDotIndex={index} 
        containerStyle={styles.paginationStyle}
        dotStyle={styles.dotStyle}
      />
      <View style={styles.btn_wrapper}>
        <Button text="Suivant" onPress = {() => navigation.navigate(REGISTER)} />
      </View>
    </View>
  );
};

//make this component available to the app
export default WelcomeScreen;

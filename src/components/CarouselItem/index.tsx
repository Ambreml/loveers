//import liraries
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './style';

// create a component
const CarouselItem = ({item, index}: any) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image_wrapper} />
      <Text style={styles.title_wrapper}>{item.title}</Text>
    </View>
  );
};

//make this component available to the app
export default CarouselItem;

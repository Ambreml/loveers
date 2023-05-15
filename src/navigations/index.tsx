// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import {ADD_PHOTO, HOME, LOGIN, REGISTER, WELCOME} from '../config/routes';
import WelcomeScreen from '../screens/Welcome';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import AddPhotoScreen from '../screens/AddPhoto';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_bottom'}}>
      <Stack.Screen name={WELCOME} component={WelcomeScreen} />
      <Stack.Screen name={HOME} component={HomeScreen} />
      <Stack.Screen name={LOGIN} component={LoginScreen} />
      <Stack.Screen name={REGISTER} component={RegisterScreen} />
      <Stack.Screen name={ADD_PHOTO} component={AddPhotoScreen} />
    </Stack.Navigator>
  );
}

export default Router;

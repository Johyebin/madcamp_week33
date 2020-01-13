import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';
import SendListScreen from './screens/SendListScreen';
import FriendsScreen from './screens/FriendsScreen';
import DatePickerScreen from './screens/DatePickerScreen';


const AppStackNavigator = createStackNavigator({
  Main:{
    screen: MainScreen // MainScreen 컴포넌트를 네비게이터에 등록
  }
});

const MainNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  SendList : {screen: SendListScreen},
  Friends : {screen: FriendsScreen},
  DatePicker : {screen: DatePickerScreen},
});

export default createAppContainer(AppStackNavigator);

import React, { Component } from 'react';
import { StyleSheet, Platform, Image } from 'react-native';
import { Icon } from 'native-base'; // 추가된 코드
import { createAppContainer } from 'react-navigation'; 
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'; 
import { Ionicons } from '@expo/vector-icons'

import CalendarTab from '../AppTabNavigator/CalendarTab'
import MeetMeetTab from '../AppTabNavigator/MeetMeetTab'
import ProfileTab from '../AppTabNavigator/ProfileTab'
import SendListTab from '../AppTabNavigator/SendListTab'
import FriendsTab from '../AppTabNavigator/FriendsTab'
import { HeaderTitle } from 'react-navigation-stack';
import DatePickerScreen from './DatePickerScreen';

// 하단 탭 네비게이터 생성
const AppTabNavigator = createMaterialTopTabNavigator({
  Calendar:{ screen: CalendarTab },
  MeetMeet:{ screen: MeetMeetTab },
  Profile:{ screen: ProfileTab },
  SendList:{ screen: SendListTab },
  Friends:{ screen: FriendsTab },
  // DatePicker: {screen: DatePickerScreen}
}, {
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: "bottom",
  tabBarOptions: {
    style: {
      ...Platform.select({
        ios:{
          backgroundColor:'white',
        }
      })
    },
    iconStyle: { height: 40 },
    activeTintColor: '#be1323',
    inactiveTintColor: '#d1cece',
    upperCaseLabel: false,
    showLabel: false,
    showIcon: true,
  }
});

const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {
     // navigationOptions 코드 추가
  static navigationOptions = {
    headerLeft: <Ionicons name={'ios-contacts'} style={{ fontSize:30, paddingLeft:10}} />,
    headerTitle: (
      <Image style={{width:80,height:20,alignSelf: 'center'}} source={require('../assets/images/title.png')}/>
    ),
    headerRight: <Ionicons name={'ios-home'} style={{ fontSize:30, paddingRight:10 }}/>,
    // headerTitleStyle : {
    //   fontFamily:'billabong', color:'#be1323'
    // }
  }

  render() {
    return <AppTabContainet/>; // AppTabContainet 컴포넌트를 리턴한다.
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //paddingBottom: -10
  },
});
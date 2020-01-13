import React, { Component } from "react";
import { Platform, Image, TouchableOpacity, Text, View, StyleSheet, Button } from "react-native";
import { Container, Header, Body, CheckBox,Title,Subtitle, Card, CardItem,
    Left,Right, Icon,Content,Thumbnail, Grid,Col } from "native-base";

export default class MyFriendElements extends Component {
    render(){
        return (
            <View style={styles.elem}>
            <View style={styles.userInfo}>
              <View style={styles.profile} />
              <Text style={styles.name}>{this.props.username}</Text>
            </View>
            <View style={styles.userComment}>
              <Text>{this.props.statusLine}</Text>
            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      height:60,
      backgroundColor:'green',
    },
    footer: {
      height:60,
      backgroundColor:'green',
    },
    content: {
      flex:1,
    },
  
    elem: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderColor:'#eee',
      borderBottomWidth:0.5,
      padding: 5,
    },
    userInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    userComment: {
      padding:8,
      backgroundColor:'yellow',
      borderRadius:5,
    },
    profile: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: 'yellow',
    },
    name: {
      paddingLeft: 10,
    }
  });
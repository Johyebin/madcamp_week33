import React, { Component } from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons'

export default class ProfileTab extends Component {
    
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <AntDesign name={'person'} style={{ color: tintColor }} />
        )
    }

    render() {
      return (
        <View style={styles.container}>
          <Text> Profile Screen </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {/* Welcome, {this.props.navigation.getParam("username")} */}
            Welcome, username
          </Text>
          <Button
            title="Sign out"
            // onPress={() => this.props.navigation.navigate("Login")}
          />
           {/* <Button title="Start" onPress={() => this.props.navigation.navigate("Home")} />
            <Button  title="MeetMeet" onPress={() => this.props.navigation.navigate("MeetMeet")}/> */}
            <Button title="Friends" onPress={() => this.props.navigation.navigate("Friends")}/>
            <Button  title="SendList" onPress={() => this.props.navigation.navigate("SendList")}/>
            {/* // 전환하면서 친구 리스트를 받아와야 함
          /> */}
           {/* <Button
            title="MeetMeet"
            onPress={() => this.props.navigation.navigate("MeetMeet")} 
          /> */}
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
      },
      image:{
        width:200,
        height:200,
        alignItems:'center',
        justifyContent:'center',
        resizeMode:'contain'
      }
});
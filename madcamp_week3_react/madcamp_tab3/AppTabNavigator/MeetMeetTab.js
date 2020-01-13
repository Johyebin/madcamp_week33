import React, { Component } from "react";
import { Platform, Image, TouchableOpacity, Text, View, StyleSheet, Button } from "react-native";
import { Container, Header, Body, CheckBox,Title,Subtitle, Card, CardItem, Top,Bottom, Content,Thumbnail, Grid,Col } from "native-base";
import { AntDesign } from '@expo/vector-icons'


    
let friends = new Array(); // 선택된 친구들을 저장하기 위한 배열 추후에 문자열로 이어붙일 것임


export default class MeetMeetTab extends Component {
    
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <AntDesign name={'heart'} style={{ color: tintColor }} />
        )
    }

    render() {
        return (
          <Container style={{backgroundColor: '#efefef'}}>
             <Header style={{backgroundColor: 'red'}}>
             {/* <Button Title="Back" onPress={() => this.props.navigation.navigate("Home")}></Button> */}
             <Text>>MEETMEET</Text>
             {/* <Button Title="Home" onPress={() => this.props.navigation.navigate("Home")}></Button> */}
               </Header>
          <Content>
            <View style={styles.row}>
              {/* 누르면 친구리스트 보여주기 */}
            {/* <MyQuestion
            title="who?"
            result="Jane,Hyebin"
            onPress={() => this.props.navigation.navigate("Friends")}
            />
           <MyQuestion
            title="when?"
            result=""
            />
            <MyQuestion
            title="where?"
            result=""
            /> */}
              <Card style={{alignItems: 'center'}}>
                 <CardItem button onPress={() => this.props.navigation.navigate("Friends")}>
                     <Title>Who?</Title>
                 </CardItem>
             </Card>
             <Card style={{alignItems: 'center'}}>
            <CardItem button onPress={() => this.props.navigation.navigate("DatePicker")}>
                     <Title>When?</Title>
              </CardItem>
             </Card>
             <Card style={{alignItems: 'center'}}>
                 <CardItem button>
                     <Title>Where?</Title>
                 </CardItem>
             </Card>
             </View>
            <View style={styles.row}>
            <Card style={{alignItems: 'center'}}>
                 <CardItem button>
                     <Title>What?</Title>
                 </CardItem>
             </Card>
             <Card style={{alignItems: 'center'}}>
                 <CardItem button>
                     <Title>Memo</Title>
                 </CardItem>
             </Card>
             <Card style={{alignItems: 'center'}}>
                 <CardItem button>
                     <Title>P.S</Title>
                 </CardItem>
             </Card>
            {/* <MyQuestion
            title="what?"
            result=""
            />
            <MyQuestion
            title="memo?"
            result=""
            />
            <MyQuestion
            title="p.s"
            result=""
            /> */}
            </View>
          </Content>
          </Container>
        );
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 20,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
      },
      row: {
        alignItems: "center",
        backgroundColor: "#efefef",
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
      title:{
        flex: 1,
        fontSize: 15,
        fontWeight: 'bold',
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
      }
});
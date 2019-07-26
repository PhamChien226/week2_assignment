import React, { Component } from 'react';
import { Alert,StyleSheet, Text, View, Image, TouchableOpacity,ScrollView } from 'react-native';
import {
  FontAwesome,
  Feather,
  MaterialIcons,
  AntDesign
} from "@expo/vector-icons";
const POLO_BLUE_COLOR = "rgb(51,60,87)";
const FOLLOW_COLOR = "rgb(71,113,246)";
const SEND_MESSAGE_COLOR = "rgb(120,213,250)";



export default class UserGroup extends Component {
  render() {
    return (
      <View style={styles.userGroup}>
        <View style={styles.UserAvatar}>
          <Image
            source={require("../assets/nar.jpg")}
            style={styles.imgAvatar}
          />
        </View>
        <View style={styles.UserInfoGroup}>
          <Text style={styles.TextName}>Pham Chien</Text>
          <Text style={styles.TextJob}>Student</Text>
          <View style={styles.button}>
            <TouchableOpacity style={styles.FollowButton} onPress={this.onPressFollow}>
              <Text style={styles.TextButton}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SendButton} onPress={this.onPressSendMessage}>
              <FontAwesome name="send-o" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  onPressFollow = () => {
    Alert.alert(
      '',
      'You Followed!',
      [
        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );
  };
  onPressSendMessage = () => {
    Alert.alert(
      '',
      'You Followed!',
      [
        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );
  };
 
};
const styles= StyleSheet.create({
 userGroup: {
    flex: 0.25,
    flexDirection: "row"
  },
  UserAvatar: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center"
  },
  imgAvatar:{
    height: 100,
    width: 100,
    borderRadius: 50,
    margin: "auto"
  },
  UserInfoGroup: {
    flex: 0.6,
    justifyContent: "center"
  },
  TextName: {
    fontFamily: "segoe ui",
    color: "black",
    fontWeight: "bold",
    fontSize: 20
  },
  TextJob: {
    fontFamily: "segoe ui",
    color: "gray",
    fontSize: 13,
    paddingBottom: 10
  },

  button: {
    flexDirection: "row"
  },
  SendButton: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: SEND_MESSAGE_COLOR,
    padding: 10,
    width: 40,
    height: 30
  },
  FollowButton: {
    flex: 0.6,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: FOLLOW_COLOR,
    padding: 10,
    width: 80,
    height: 30,
    marginRight: 5
  },
  TextButton: {
    fontFamily: "segoe ui light",
    fontWeight: "bold",
    fontSize: 10,
    justifyContent: "center",
    alignItems: "center"
  },
});
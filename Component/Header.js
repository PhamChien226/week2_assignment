
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView } from 'react-native';
import {
  FontAwesome,
  Feather,
  MaterialIcons,
  AntDesign
} from "@expo/vector-icons";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={{ 
          marginLeft: 15 
          }}>
          <MaterialIcons name="arrow-back" size={30} color="gray" />
        </View>
        <View style={{
          marginRight: 15
        }}>
          <Feather name="more-horizontal" size={30} color="gray" />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    header: {
    flex: 0.15,
    borderBottomColor: "#000",
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-between'
  },
  arrowBackIcon: {},
});
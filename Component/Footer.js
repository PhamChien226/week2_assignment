import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView } from 'react-native';
import {
  FontAwesome,
  Feather,
  MaterialIcons,
  AntDesign
} from "@expo/vector-icons";

export default class Footer extends Component{
    render(){
        return (
          <View style={styles.footer}>
            <View style={styles.centerFooter}>
              <AntDesign name="pluscircleo" size={25} color="gray" />
              <MaterialIcons name="home" size={25} color="gray" />
              <Feather name="user" size={25} color="gray" />
            </View>
          </View>
        );
    }
}
const styles = StyleSheet.create({
  footer: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center"
  },
  centerFooter: {
    width: 180,
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
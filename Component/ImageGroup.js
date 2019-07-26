
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView } from 'react-native';
import {
  FontAwesome,
  Feather,
  MaterialIcons,
  AntDesign
} from "@expo/vector-icons";

export default class ImageGroup extends Component{
    render(){
        return (
          <ScrollView style={styles.contentContainer}>
            <View style={styles.ImageGroup}>
              <View style={{ flex: 0.5, flexDirection: "column" }}>
                {imgData.slice(0, centerImgData).map(item => {
                  return (
                    <Image
                      source={item.imgSource}
                      style={styles.image}
                    />
                  );
                })}
              </View>
              <View style={{ flex: 0.5, flexDirection: "column" }}>
                {imgData.slice(centerImgData).map(item => {
                  return (
                    <Image
                      source={item.imgSource}
                      style={styles.image}
                    />
                  );
                })}
              </View>
            </View>
          </ScrollView>
        );
    }
}

const imgData = [
  { id: 1, imgSource: require("../assets/1.jpg") },
  { id: 2, imgSource: require("../assets/2.jpg") },
  { id: 3, imgSource: require("../assets/3.jpg") },
  { id: 4, imgSource: require("../assets/4.jpg") },
  { id: 5, imgSource: require("../assets/5.jpg") },
  { id: 6, imgSource: require("../assets/6.jpg") },
  { id: 7, imgSource: require("../assets/7.jpg") }
];
const centerImgData = Math.floor(imgData.length / 2);

const styles = StyleSheet.create({
  contentContainer: {
    flex: 0.4
  },
  ImageGroup: {
    flexDirection: "row"
  },
  image: {
    width: 170,
    height: 150,
    marginTop: 10,
    marginLeft: 10
  }
});
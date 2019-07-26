
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView } from 'react-native';
import {
  FontAwesome,
  Feather,
  MaterialIcons,
  AntDesign
} from "@expo/vector-icons";
export default class CountGroup extends Component {
  render() {
    return (
      <View style={styles.CountGroup}>
        <View style={styles.PhotoWrapper}>
          <Text h1 style={styles.countLike}>
            1
          </Text>
          <Text style={styles.countText}>Photos</Text>
        </View>
        <View style={styles.FollowwWrapper}>
          <Text style={styles.countLike}>1</Text>
          <Text style={styles.countText}>Follow</Text>
        </View>
        <View style={styles.FollowingWrapper}>
          <Text style={styles.countLike}>1</Text>
          <Text style={styles.countText}>Following</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  CountGroup: {
    flex: 0.15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  PhotoWrapper: {
    flex: 0.3333
  },
  FollowwWrapper: {
    flex: 0.3333
  },
  FollowingWrapper: {
    flex: 0.3333
  },
  countLike: {
    fontFamily: "segoe",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 5
  },
  countText: {
    fontFamily: "segoe",
    fontSize: 15,
    textAlign: "center"
  }
});
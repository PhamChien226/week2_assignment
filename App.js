import React, { Component } from 'react';
import { StyleSheet, View,  } from 'react-native';

import Header from './Component/Header';
import UserGroup from "./Component/UserGroup";
import CountGroup from "./Component/CountGroup";
import ImageGroup from "./Component/ImageGroup";
import Footer from "./Component/Footer";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignSelf: "stretch",
          textAlign: "center",
        }}
      >
        <Header />
        {/* chua thong tin User */}
        <UserGroup />
        {/* chua thong tin like,follow */}
        <CountGroup />
        {/* chua nhung tam anh cua user */}
        <ImageGroup />
        <Footer />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
});

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const BrainsOut = () => {
  return (
    <>
      <LinearGradient
        style={[styles.topView]}
        start={[0.5, 0]}
        end={[0.5, 0.8]}
        colors={["#495057", "#0D1517"]}
      >
        <Text style={styles.text}>Coming Soon</Text>
      </LinearGradient>
    </>
  );
};
const styles = StyleSheet.create({
  topView: {
    height: "100%",
    // paddingTop: 10,
  },
  text: {
    color: "#6EECB3",
    fontWeight: "bold",
    fontSize: 50,
    fontFamily: "sans-serif-thin",
    alignSelf: "center",
    textAlignVertical: "center",
    borderColor: "#6EECB3",
    height: "100%",
  },
});
export default BrainsOut;

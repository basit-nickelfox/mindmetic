import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Level = ({ getVal }) => {
  const [levelVal, setLevelVal] = useState("Easy");
  return (
    <View style={styles.topView}>
      <TouchableOpacity
        style={
          levelVal === "Easy"
            ? [styles.opacity, { backgroundColor: "#6EECB3" }]
            : styles.opacity
        }
        onPress={() => {
          setLevelVal("Easy");
          getVal(0);
        }}
      >
        <Text style={styles.text}>Easy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          levelVal === "Medium"
            ? [styles.opacity, { backgroundColor: "#6EECB3" }]
            : styles.opacity
        }
        onPress={() => {
          setLevelVal("Medium");
          getVal(1);
        }}
      >
        <Text style={styles.text}>Medium</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          levelVal === "Hard"
            ? [styles.opacity, { backgroundColor: "#6EECB3" }]
            : styles.opacity
        }
        onPress={() => {
          setLevelVal("Hard");
          getVal(2);
        }}
      >
        <Text style={styles.text}>Hard</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  topView: {
    paddingTop: 18,
    paddingBottom: 10,
    flexDirection: "row",
    // borderWidth: 1,
    // borderColor: "orange",
    justifyContent: "space-around",
    marginHorizontal: 10,
  },
  opacity: {
    borderWidth: 1,
    borderColor: "#6EECB3",
    marginHorizontal: 2,
    paddingVertical: 5,
    // backgroundColor: "red",
    borderRadius: 50,
    width: "32%",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
    fontFamily: "sans-serif-thin",
    alignSelf: "center",
    textAlignVertical: "center",
    borderColor: "#6EECB3",
  },
});
export default Level;

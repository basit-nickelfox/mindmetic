import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Level from "../components/level";
const MathsOptions = ({ route, navigation }) => {
  var { operation } = route.params;
  const [levelValue, setLevelValue] = useState(0);

  switch (operation) {
    case "ADDITION":
      operation = "plus";
      break;
    case "SUBTRACTION":
      operation = "minus";
      break;
    case "MULTIPLICATION":
      operation = "multiplication";
      break;
    default:
      operation = "division";
  }
  const selectLevel = (val) => {
    setLevelValue(val);
  };

  return (
    // <View style={styles.topView}>
    <>
      <LinearGradient
        style={[styles.topView]}
        start={[0.5, 0]}
        end={[0.5, 0.8]}
        colors={["#495057", "#0D1517"]}
      >
        <Image
          style={styles.image}
          source={require("../../assets/select2.jpg")}
        />
        <Level getVal={selectLevel} />

        <View style={styles.display}>
          <View style={styles.display1}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("PlayMaths", {
                  digits: 1,
                  icon: operation,
                  level: levelValue,
                })
              }
            >
              <Text style={styles.innerText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("PlayMaths", {
                  icon: operation,
                  digits: 2,
                  level: levelValue,
                })
              }
            >
              <Text style={styles.innerText}>2</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.details}>
            <Text style={[styles.text, { color: "white", marginBottom: 8 }]}>
              SELECT DIGITS LEVEL
            </Text>
          </View>
          <View style={styles.display2}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("PlayMaths", {
                  icon: operation,
                  digits: 3,
                  level: levelValue,
                })
              }
            >
              <Text style={styles.innerText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("PlayMaths", {
                  icon: operation,
                  digits: 4,
                  level: levelValue,
                })
              }
            >
              <Text style={styles.innerText}>4</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </>
  );
};
const styles = StyleSheet.create({
  display: {},
  display1: {
    // borderColor: "orange",
    // borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  display2: {
    // flexDirection: "column",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  innerText: {
    backgroundColor: "#6EECB3",
    color: "white",
    fontSize: 45,
    // width: 100,
    // height: 100,
    margin: 15,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 60,
    paddingVertical: 27,
    paddingHorizontal: 40,
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    color: "#6EECB3",
    fontSize: 20,
    marginTop: 8,
    fontWeight: "bold",
    // borderColor: "orange",
    // borderWidth: 1,
  },
  details: {
    color: "white",
    alignSelf: "center",
  },
  topView: {
    // backgroundColor: "black",
    height: "100%",
  },
  image: {
    height: "47%",
    width: "100%",
    borderBottomLeftRadius: 250,
    borderBottomRightRadius: 250,
  },
});
export default MathsOptions;

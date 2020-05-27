import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Box = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[
        styles.outline,
        props.border === false ? { borderTopWidth: 0 } : { borderTopWidth: 1 },
      ]}
      onPress={() => navigation.navigate(props.move)}
    >
      <View>
        <FontAwesome5
          style={{ marginHorizontal: 5, color: "#6EECB3" }}
          name={props.icon}
          size={100}
        />
        <Text style={styles.text}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  outline: {
    color: "white",
    borderColor: "#44484a",
    borderTopWidth: 1,
    alignItems: "stretch",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    margin: 30,
    // height: Dimensions.get("screen").height / 2,
  },
  text: {
    color: "#FAFEFF",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 12,
    fontFamily: "sans-serif-thin",
    marginTop: 10,
    // borderColor: "red",
    // borderWidth: 1,
  },
});
export default Box;

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const MathsOptions = ({ route }) => {
  const { operation } = route.params;
  return (
    <View>
      <Image style={styles.image} source={require("../../assets/select.jpg")} />
      <Text>This is {operation}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: "65%",
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
export default MathsOptions;

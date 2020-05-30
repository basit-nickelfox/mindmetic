import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "../components/card";

const MentalMath = () => {
  return (
    <>
      {/* <View style={{ marginTop: 3 }}> */}
      <Card
        color1="#a2e882"
        color2="#379e3e"
        bgColor="black"
        name="ADDITION"
        underText="12 + 45 = 57"
        icon="plus-box"
      />
      <Card
        color1="#eb5552"
        color2="#bf1c0a"
        bgColor="black"
        name="SUBTRACTION"
        underText="43 - 21 = 22"
        icon="minus-box"
      />
      <Card
        color1="#f2c84e"
        color2="#ba8707"
        bgColor="black"
        name="MULTIPLICATION"
        underText="2 * 8 = 16"
        icon="multiplication-box"
      />
      <Card
        color1="#5f8fed"
        color2="#0e38b0"
        bgColor="black"
        name="DIVISION"
        underText="32 / 8 = 4"
        icon="division-box"
      />
      <Card
        color1="#5f8fed"
        color2="#0e38b0"
        bgColor="black"
        name="SQUARE ROOT"
        underText="√25 = 5"
        icon="square-root-box"
      />
      <Card
        color1="#5f8fed"
        color2="#0e38b0"
        bgColor="black"
        name="CUBE ROOT"
        underText="∛27 = 3"
        icon="alpha-c-box"
      />
      {/* </View> */}
    </>
  );
};
const styles = StyleSheet.create({});
export default MentalMath;

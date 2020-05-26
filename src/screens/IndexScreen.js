import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Box from "../components/box";
import { Dimensions, ScrollView } from "react-native";

const IndexScreen = () => {
  return (
    <ScrollView style={styles.page}>
      <LinearGradient
        start={[0.9, 0.9]}
        end={[0.8, 0.4]}
        colors={["#2E3841", "#0D1517"]}
      >
        <Text style={[styles.text, { fontWeight: "100" }]}>WELCOME</Text>
        <Text style={styles.smallText}>TO MINDMETIC</Text>
        <View>
          <View style={styles.display}>
            <Box name="MENTAL MATHS" icon="user-cog" move="MentalMaths" />

            <View style={styles.middle}></View>

            <Box name="BRAIN TEASERS" icon="gripfire" move="BrainTeasers" />
          </View>

          <View style={styles.display}>
            <Box name="TIPS n TRICKS" icon="magic" move="TipsnTricks" />

            <View style={styles.middle}></View>

            <Box name="BRAINS OUT" icon="brain" move="BrainsOut" />
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  middle: {
    borderColor: "#44484a",
    borderWidth: 1,
    height: "80%",
  },
  page: {
    backgroundColor: "#0D1517",
    height: "100%",
  },
  text: {
    color: "#FAFEFF",
    alignSelf: "center",
    fontSize: 50,
    fontFamily: "sans-serif-thin",
    marginTop: 30,
  },
  smallText: {
    color: "#FAFEFF",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  display: {
    flexDirection: "row",
    // borderColor: "red",
    // borderWidth: 1,
    height: Dimensions.get("window").height / 2 - 53,
    alignItems: "center",
  },
});
export default IndexScreen;

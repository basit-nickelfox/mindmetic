import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Box from "../components/box";

const IndexScreen = () => {
  return (
    <>
      <View style={styles.page}>
        <LinearGradient
          start={[0.5, 0]}
          end={[0.5, 0.5]}
          colors={["#495057", "#0D1517"]}
        >
          <Text style={[styles.text, { fontWeight: "100" }]}>WELCOME</Text>
          <Text style={styles.smallText}>TO MINDMETIC</Text>
          <View>
            <View style={styles.display}>
              <Box
                name="MENTAL MATHS"
                icon="user-cog"
                move="MentalMaths"
                border={false}
              />

              <View style={styles.middle}></View>

              <Box
                name="BRAIN TEASERS"
                icon="gripfire"
                move="BrainTeasers"
                border={false}
              />
            </View>

            <View style={styles.display}>
              <Box name="TIPS n TRICKS" icon="magic" move="TipsnTricks" />

              <View style={styles.middle}></View>

              <Box name="BRAINS OUT" icon="brain" move="BrainsOut" />
            </View>
          </View>
        </LinearGradient>
      </View>
      <StatusBar backgroundColor="#495057" />
    </>
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
    color: "#6EECB3",
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

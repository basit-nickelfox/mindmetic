import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Card = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.topView, { backgroundColor: props.bgColor }]}
      onPress={() =>
        navigation.navigate("MathsOptions", {
          operation: props.name,
        })
      }
    >
      <View style={{ height: "100%" }}>
        <LinearGradient
          style={[styles.card]}
          start={[0.5, 0]}
          end={[0.5, 0.8]}
          colors={["#495057", "#0D1517"]}
        >
          <View style={styles.insideCard}>
            <View style={[styles.insideCardText, { marginRight: 30 }]}>
              <MaterialCommunityIcons
                style={{ color: "#6EECB3" }}
                name={props.icon}
                size={120}
              />
            </View>
            <View style={styles.insideCardText}>
              <Text style={styles.text}>{props.name}</Text>

              <Text style={styles.textUnder}>{props.underText}</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  textUnder: {
    color: "#6EECB3",
    fontSize: 20,
    marginTop: 5,
  },
  insideCardText: {
    flexDirection: "column",
    // borderColor: "orange",
    // borderWidth: 1,
  },
  insideCard: {
    flexDirection: "row",
    marginLeft: 20,
    height: "100%",
    alignItems: "center",
    // borderColor: "orange",
    // borderWidth: 1,
  },
  topView: {
    flex: 4,
    height: "100%",
  },
  text: {
    color: "#FAFEFF",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 30,
    fontFamily: "sans-serif-thin",
    marginTop: 10,
    alignSelf: "flex-end",

    // borderColor: "red",
    // borderWidth: 1,
  },
  card: {
    // backgroundColor: "red",
    // borderColor: "black",
    // borderWidth: 1,

    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
export default Card;

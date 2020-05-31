import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Card = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[
        styles.topView,
        {
          backgroundColor: props.bgColor,
          height: Dimensions.get("window").height / 6,
        },
      ]}
      onPress={() =>
        navigation.navigate("MathsOptions", {
          operation: props.name,
        })
      }
    >
      <View>
        <LinearGradient
          style={[styles.card, { height: Dimensions.get("window").height / 6 }]}
          start={[0.5, 0]}
          end={[0.5, 0.8]}
          colors={["#495057", "#0D1517"]}
        >
          <View style={styles.insideCard}>
            <View style={[styles.insideCardText]}>
              <MaterialCommunityIcons
                style={{ color: "#6EECB3" }}
                name={props.icon}
                size={100}
              />
            </View>
            <View
              style={[
                styles.insideCardText,
                { alignItems: "center", width: "59%" },
              ]}
            >
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
    fontSize: 13,
    marginTop: 5,
  },
  insideCardText: {
    flexDirection: "column",

    // borderColor: "orange",
    // borderWidth: 1,
  },
  insideCard: {
    flexDirection: "row",

    // marginLeft: 10,
    // height: "100%",
    alignItems: "center",

    justifyContent: "space-around",
  },
  topView: {
    flex: 1,
    // height: "100%",
  },
  text: {
    color: "#FAFEFF",
    // alignSelf: "flex-start",
    fontWeight: "bold",
    fontSize: 23,
    fontFamily: "sans-serif-thin",
    marginTop: 10,

    // alignSelf: "flex-start",

    // borderColor: "red",
    // borderWidth: 1,
  },
  card: {
    // borderColor: "orange",
    // borderWidth: 1,
    // backgroundColor: "red",
    // borderColor: "black",
    // borderWidth: 1,
    // alignItems:'center',

    justifyContent: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
export default Card;

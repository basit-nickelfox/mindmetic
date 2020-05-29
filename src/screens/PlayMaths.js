import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Vibration,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Audio } from "expo-av";

const PlayMaths = ({ route, navigation }) => {
  const [resultVal, setResult] = useState(null);
  navigation.setOptions({
    headerStyle:
      resultVal === "Correct" || resultVal === null
        ? { backgroundColor: "#93f5a6" }
        : { backgroundColor: "#f27272" },
  });
  // navigation.setParams({ headerColor: "green" });
  // const [submitVal, setSubmitVal] = useState(null);
  // resultVal === "Correct" || resultVal === null
  //   ? navigation.setParams({ headerColor: "green" })
  //   : null;
  console.log(navigation);
  const input = useRef(null);
  const soundClean = useRef(true);
  const [endResult, setEndResult] = useState(null);
  const { icon, digits } = route.params;

  console.log("this is render");
  // console.log(digits);
  let digit1;
  let digit2;
  let result;
  let copy1;
  let copy2;

  useEffect(() => {
    soundClean.current = true;
    return () => {
      copy1 = digit1;
      copy2 = digit2;
      soundClean.current = false;
      console.log(digit1, digit2);
      console.log(soundClean.current);

      // soundObject.unloadAsync();
      // soundObject = new Audio.Sound();
    };
  });
  //  useEffect(() => {
  //   console.log("in Use Effect");
  switch (digits) {
    case 1:
      digit1 = getRndInteger(1, 9);
      digit2 = getRndInteger(1, 9);
      break;
    case 2:
      digit1 = getRndInteger(10, 99);
      digit2 = getRndInteger(10, 99);
      break;
    case 3:
      digit1 = getRndInteger(100, 999);
      digit2 = getRndInteger(100, 999);
      break;
    default:
      digit1 = getRndInteger(1000, 9999);
      digit2 = getRndInteger(1000, 9999);
  }
  //  useEffect(() => {
  //   console.log("in Use Effect");
  switch (icon) {
    case "plus":
      result = digit1 + digit2;
      break;
    case "minus":
      result = digit1 - digit2;
      break;
    case "multiplication":
      result = digit1 * digit2;
      break;
    default:
      result = digit1 / digit2;
  }
  // }, []);
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handelSubmit = async (e) => {
    console.log(result);
    console.log(e.nativeEvent.text);
    console.log(digit1);
    console.log(digit2);
    const soundObject = new Audio.Sound();

    if (result == e.nativeEvent.text) {
      try {
        // await Audio.setIsEnabledAsync(true);
        if (soundClean.current) {
          await soundObject.loadAsync(require("../../assets/right.mp3"));
          const status = await soundObject.playAsync();
          // console.log(status);
          setTimeout(() => {
            soundObject.unloadAsync();
          }, status.durationMillis);
        }
      } catch (err) {
        console.warn("Couldn't Play audio", err);
      }

      setResult("Correct");
    } else {
      try {
        // await Audio.setIsEnabledAsync(true);
        if (soundClean.current) {
          await soundObject.loadAsync(require("../../assets/wrong.mp3"));
          const status = await soundObject.playAsync();
          // console.log(status);
          setTimeout(() => {
            soundObject.unloadAsync();
          }, status.durationMillis);
        }
      } catch (err) {
        console.warn("Couldn't Play audio", err);
      }

      Vibration.vibrate(500);

      setResult("Wrong");
    }
    // soundObject.stopAsync();
    if (input.current) {
      input.current.clear();
      // input.current.focus();
    }
    setEndResult(result);
    // setTerm(null);
  };

  return (
    <>
      <LinearGradient
        style={[styles.topView]}
        start={[0.5, 0]}
        end={[0.5, 0.8]}
        colors={["#495057", "#0D1517"]}
      >
        <View style={styles.main}>
          <MaterialCommunityIcons
            style={{ color: "#6EECB3", alignSelf: "center" }}
            name={icon}
            size={150}
          />
          <View style={styles.innerMain}>
            <Text style={styles.text}>{digit1}</Text>
            <Text style={[styles.text, { borderBottomWidth: 1 }]}>
              {digit2}
            </Text>
            {/* <Text style={styles.result}>{result}</Text> */}
            <TextInput
              ref={input}
              style={styles.result}
              placeholder="***"
              keyboardType="numeric"
              autoFocus={true}
              blurOnSubmit={false}
              // value={term}
              // onChangeText={handelTerm}
              onSubmitEditing={(e) => handelSubmit(e)}
            />
          </View>
        </View>
        {/* <TouchableOpacity onPress={() => calculate()}> */}
        <Text
          style={[
            styles.resultCheck,
            resultVal === "Correct" || resultVal === null
              ? { backgroundColor: "#93f5a6" }
              : { backgroundColor: "#f27272" },
          ]}
        >
          {resultVal}
        </Text>
        {/* </TouchableOpacity> */}
      </LinearGradient>
    </>
  );
};
const styles = StyleSheet.create({
  resultCheck: {
    // backgroundColor: "#6EECB3",
    color: "white",
    textAlign: "center",
    // width: ,
    // alignSelf: "center",
    // borderRadius: 12,
    fontSize: 30,
    // paddingVertical: 5,
  },
  result: {
    color: "#6EECB3",
    fontWeight: "bold",
    fontSize: 40,
    fontFamily: "sans-serif-thin",
    marginRight: 10,
    // borderColor: "orange",
    // borderWidth: 1,
  },
  text: {
    color: "#FAFEFF",
    fontWeight: "bold",
    fontSize: 130,
    fontFamily: "sans-serif-thin",
    justifyContent: "space-around",
    borderColor: "#6EECB3",
  },
  innerMain: {
    flexDirection: "column",
    // borderColor: "orange",
    // borderWidth: 1,
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: 20,

    // fontSize: 15,
    // color: "#6EECB3",
  },
  main: {
    flexDirection: "row",

    height: "60%",
    flex: 1,
  },
  topView: {
    height: "100%",
    // paddingTop: 10,
  },
});
export default PlayMaths;

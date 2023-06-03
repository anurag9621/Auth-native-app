import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Pressable,
} from "react-native";
import React from "react";

const CustomButton = ({ onPress, text, type="PRIMARY" }) => {
  const { height } = useWindowDimensions();
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        { height: height * 0.056 },
        styles[`container_${type}`],
      ]}
    >
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    maxHeight: 100,
    marginTop: 10,
  },
  container_PRIMARY: {
    backgroundColor: "black",
  },
  container_TERTIARY: {
    backgroundColor: "white",
  },
  text: {
    fontWeight: "bold",
  },
  text_PRIMARY: { color: "white" },
  text_TERTIARY: { color: "black" },
});
export default CustomButton;

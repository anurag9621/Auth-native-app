import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import React, { useState } from "react";
import CustomInput from "../../components/cuntominput/CustomInput";
import CustomButton from "../../components/customeButton/CustomButton";
const ConfirmEmail = () => {
  const Navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");


  const onSignInPressed = () => {
    Navigation.navigate("SignIn");


  };
  const onConfirmPressed = () => {
    Navigation.navigate("Home");

  };
  const onReSendCodePressed = () => {
    console.warn("onReSendCodePressed");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm Sign Up</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setvalue={setUsername}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Code"
          value={code}
          setvalue={setCode}
          secureTextEntry={false}
        />

        <CustomButton text="Confirm" onPress={onConfirmPressed} />

        <CustomButton
          text="Resend code "
          onPress={onReSendCodePressed}
          type="SECONDRY"
        />
        <CustomButton
          text="Back to Sign In "
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: "3%",
    
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    margin: 10,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },
});

export default ConfirmEmail;

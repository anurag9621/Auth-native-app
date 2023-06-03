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
const NewPassword = () => {
  const Navigation = useNavigation();

  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const onSignInPressed = () => {
    Navigation.navigate("SignIn");


  };
  const onSubmitPressed = () => {
    Navigation.navigate("Home");

  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput
          placeholder="Code"
          value={code}
          setvalue={setCode}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="New Password"
          value={newPassword}
          setvalue={setNewPassword}
          secureTextEntry={false}
        />
        <CustomButton text="Submit" onPress={onSubmitPressed} />

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

export default NewPassword;

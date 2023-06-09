import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Logo from "../../../assets/logo.png";
import CustomInput from "../../components/cuntominput/CustomInput";
import CustomButton from "../../components/customeButton/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButton/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
const Signin = () => {
  const Navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();
  const onSignInPressed = () => {
    Navigation.navigate("Home");
  };
  const onForgotPasswordPressed = () => {
    Navigation.navigate("ForgotPasword");

  };

  const onSignUpPressed = () => {
    Navigation.navigate("SignUp");

  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.4 }]}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="Username"
          value={username}
          setvalue={setUsername}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setvalue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton text="Sign In" onPress={onSignInPressed} />
        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <SocialSignInButtons />
        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPressed}
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
  logo: {
    width: "60%",
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default Signin;

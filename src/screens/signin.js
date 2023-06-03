import {
  View,
  Text,
  Image,
  StyleSheet,
    useWindowDimensions,
  ScrollView
} from "react-native";
import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import CustomInput from "../components/cuntominput/CustomInput";
import CustomButton from "../components/customeButton/CustomButton";
const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();
  const onSignInPressed = () => {
    console.warn("sing in");
  };
  const onForgotPasswordPressed = () => {
    console.warn("Forgot password");
  };
  const onSignInWithFacebookPressed = () => {
    console.warn("sing in with facebook");
  };
  const onSignInWithGooglePressed = () => {
    console.warn("sing in with google");
  };
  const onSignInWithApplePressed = () => {
    console.warn("sing in with apple");
  };
    const onSignUpPressed = () => {
      console.warn("onSignUpPressed");
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
          <CustomButton
            text="Sign In with Facebook"
            onPress={onSignInWithFacebookPressed}
            bgColor="#E7EAF4"
            fgColor="#4765A9"
          />
          <CustomButton
            text="Sign In with google"
            onPress={onSignInWithGooglePressed}
            bgColor="#FAE9EA"
            fgColor="#DD4D44"
          />
          <CustomButton
            text="Sign In with Apple"
            onPress={onSignInWithApplePressed}
            bgColor="#e3e3e3"
            fgColor="#363636"
          />
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

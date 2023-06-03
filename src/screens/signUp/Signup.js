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
import SocialSignInButtons from "../../components/SocialSignInButton/SocialSignInButtons";
const SignUp = () => {
  const Navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const { height } = useWindowDimensions();
  const onSignInPressed = () => {
    Navigation.navigate("SignIn");

  };
  const onRegisterPressed = () => {
    Navigation.navigate("ConfirmEmail");

  };
  const onTearmOfUsePressed = () => {
    console.warn("onTearmOfUsePressed");
  };
  const onPrivacyPolicyPressed = () => {
    console.warn("onPrivacyPolicyPressed");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an Account</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setvalue={setUsername}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Email"
          value={email}
          setvalue={setEmail}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setvalue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Conform Password"
          value={passwordRepeat}
          setvalue={setPasswordRepeat}
          secureTextEntry={true}
        />
        <CustomButton text="Register" onPress={onRegisterPressed} />
        <Text style={styles.text}>
          By registering , you confirm that you accept out{" "}
          <Text style={styles.link} onPress={onTearmOfUsePressed} > Term of Use</Text> and
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}> Privacy Policy</Text>
        </Text>
        <SocialSignInButtons/>
        <CustomButton
          text="Have an account? Sign In "
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
    marginVertical:10,
  },
  link: {
    color:"#FDB075"
  }
});

export default SignUp;

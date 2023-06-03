import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React,{useState} from "react";
import Logo from "../../assets/logo.png";
import CustomInput from "../components/cuntominput/CustomInput";
import CustomButton from "../components/customeButton/CustomButton";
const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { height } = useWindowDimensions();
    const onSignInPressed = () => {
        console.warn("sing in")
    }
    const onForgotPasswordPressed = () => {
      console.warn("Forgot password");
    };
  return (
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
      <CustomButton text="Sign In" onPress={onSignInPressed} />
      <CustomButton text="Sign In" onPress={onSignInPressed} />
      <CustomButton text="Sign In" onPress={onSignInPressed} />
    </View>
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

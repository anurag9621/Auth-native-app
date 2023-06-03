import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Signin from "../screens/SignIn/signin";
import SignUp from "../screens/signUp/Signup";
import ForgotPasword from "../screens/ForgotPassword/ForgotPassword";
import ConfirmEmail from "../screens/confirmemail/ConfirmEmail";
import NewPassword from "../screens/NewPassword/NewPassword";
import Home from "../screens/Home";
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={Signin} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPasword" component={ForgotPasword} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

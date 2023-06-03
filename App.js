import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Signin from "./src/screens/SignIn/";
import SignUp from "./src/screens/signUp/";
import ConfirmEmail from "./src/screens/confirmemail/";
import ForgotPasword from "./src/screens/ForgotPassword/";
import NewPassword from "./src/screens/NewPassword/NewPassword";
import * as React from "react";

import Navigation from "./src/navigation";

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
  
 
      <Navigation/>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});

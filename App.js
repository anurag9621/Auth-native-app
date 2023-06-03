
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Signin from "./src/screens/signin";
export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Signin/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC"
  },
});

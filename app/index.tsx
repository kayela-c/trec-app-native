import { Text, View, ScrollView, StyleSheet } from "react-native";

//screens
import Login from "../screens/Login";
import Signup from "../screens/Signup";

export default function Index() {
  return (
    //  import login screen here
    <ScrollView>
      <Login />
    </ScrollView>
  );
}

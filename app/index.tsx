import { Text, View, ScrollView, StyleSheet } from "react-native";

//screens
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Dashboard from "../screens/Dashboard";

export default function Index() {
  return (
    //  import login screen here
    <ScrollView>
      <Dashboard />
    </ScrollView>
  );
}

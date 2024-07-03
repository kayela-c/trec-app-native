import { Stack } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
// import { store } from "../redux/store";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}

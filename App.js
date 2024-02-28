import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from "react-native";
import Auth from "./Auth";

export default function App() {
  return <Auth />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

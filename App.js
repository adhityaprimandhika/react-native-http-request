import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const getAccount = () => {
    fetch("https://private-anon-e86cbded7b-itodpbni.apiary-mock.com/account")
      .then((response) => response.json())
      .then((data) => console.log("Response Get Account", data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title={"Get Account"} onPress={getAccount} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

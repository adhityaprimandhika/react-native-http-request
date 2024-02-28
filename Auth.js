import { useState } from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import axios from "axios";

export default function Auth() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState();

  const authLogin = () => {
    setLoading(true);
    axios
      .post("https://dummyjson.com/auth/login", {
        username: userName,
        password: password,
      })
      .then((response) => {
        console.log("Response Post Login Axios", response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getAccount = () => {
    setLoading(true);

    // username: 'kminchelle',
    // password: '0lelplR',

    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response Get Account", data);
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error", error);
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textInputLabel}>Username</Text>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Username"
        value={userName}
        onChangeText={setUserName}
      />
      <Text style={styles.textInputLabel}>Password</Text>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button title="Login" onPress={authLogin} />
      )}
      {user && (
        <View>
          <Text style={styles.textToken}>Token :</Text>
          <Text>{user.token}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  textInputStyle: {
    padding: 16,
    fontSize: 20,
    borderRadius: 10,
    borderWidth: 0.8,
    width: 300,
    marginBottom: 12,
  },
  textToken: {
    marginTop: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  textInputLabel: {
    textAlign: "left",
    alignSelf: "flex-start",
    fontWeight: "bold",
    fontSize: 18,
    paddingHorizontal: 46,
    marginBottom: 4,
  },
});

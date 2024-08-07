import { useState } from "react";
import { Text, View, Button, Pressable, StyleSheet } from "react-native";
import { login } from "../../logics/gameAPI";

export const AuthPage = () => {
  const [tab, setTab] = useState("login");
  const tabColor = (text) => (tab == text ? "#056133" : "#CCCCCC");

  return (
    <View style={styles.container}>
      <Text>Please login!</Text>
      <Button
        title="Login"
        onPress={() =>
          login({
            email: "anggoraniwari@gmail.com",
            password: "user1234",
          })
        }
      />
      <View style={styles.tabChanger}>
        <Pressable onPress={() => setTab("login")}>
          <Text style={{ color: tabColor("login") }}>Login</Text>
        </Pressable>
        <Pressable onPress={() => setTab("register")}>
          <Text style={{ color: tabColor("register") }}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D4F7E5",
    alignItems: "center",
    justifyContent: "center",
  },
  tabChanger: {
    flexDirection: "row",
    gap: 10,
  },
});

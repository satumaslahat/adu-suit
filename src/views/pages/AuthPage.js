import { useState } from "react";
import {
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import AuthLoginLayout from "../layouts/AuthLoginLayout";
import AuthRegisterLayout from "../layouts/AuthRegisterLayout";
import LogoImage from "../components/LogoImage";
import { themes } from "../../utils/themes";

export const AuthPage = () => {
  const [tab, setTab] = useState("login");
  const tabColor = (text) => (tab == text ? "#056133" : "#CCCCCC");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <LogoImage />
      {tab == "login" ? (
        <AuthLoginLayout
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      ) : (
        <AuthRegisterLayout
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      )}
      <View style={styles.authTab}>
        <Pressable
          onPress={() => {
            setTab("login");
            setName("");
            setEmail("");
            setPassword("");
          }}
        >
          <Text
            style={{
              color: tabColor("login"),
              fontSize: themes.text.small,
              fontFamily: "OpenSans_400Regular",
            }}
          >
            Login
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setTab("register");
            setName("");
            setEmail("");
            setPassword("");
          }}
        >
          <Text
            style={{
              color: tabColor("register"),
              fontSize: themes.text.small,
              fontFamily: "OpenSans_400Regular",
            }}
          >
            Register
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.lightGreen,
    justifyContent: "start",
  },
  authTab: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 8,
    gap: 16,
  },
});

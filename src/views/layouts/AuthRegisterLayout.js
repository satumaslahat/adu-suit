import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { signup } from "../../logics/gameAPI";
import PrimaryButton from "../components/PrimaryButton";
import { themes } from "../../utils/themes";

export default function AuthRegisterLayout({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
}) {
  return (
    <View style={styles.form}>
      <View>
        <Text style={styles.heading}>Welcome!</Text>
        <Text style={styles.body}>
          You don’t have an account. Register here!
        </Text>
      </View>
      <TextInput
        textColor={themes.colors.black}
        outlineColor={themes.colors.darkGreen}
        activeOutlineColor={themes.colors.darkGreen}
        mode="outlined"
        autoCapitalize="none"
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        textColor={themes.colors.black}
        outlineColor={themes.colors.darkGreen}
        activeOutlineColor={themes.colors.darkGreen}
        mode="outlined"
        autoCapitalize="none"
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        textColor={themes.colors.black}
        outlineColor={themes.colors.darkGreen}
        activeOutlineColor={themes.colors.darkGreen}
        mode="outlined"
        secureTextEntry={true}
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <PrimaryButton
        title="Register"
        onPress={() => signup({ name, email, password })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: { gap: 8, marginHorizontal: 20 },
  heading: {
    fontSize: themes.text.large,
    fontFamily: "Bangers_400Regular",
    color: themes.colors.darkGreen,
  },
  body: {
    fontSize: themes.text.medium,
    fontFamily: "OpenSans_400Regular",
    color: themes.colors.darkGreen,
  },
});

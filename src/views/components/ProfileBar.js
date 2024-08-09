import { Fontisto } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { themes } from "../../utils/themes";

export default function ProfileBar({ user }) {
  return (
    <View style={styles.bar}>
      <Fontisto name="smiley" size={24} color="#056133" />
      <Text style={styles.text}>{user ? `Hi, ${user.displayName}!` : ""}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: { alignItems: "center", gap: 4, marginBottom: 16 },
  text: {
    fontSize: themes.text.medium,
    fontFamily: "Bangers_400Regular",
    color: themes.colors.darkGreen,
  },
});

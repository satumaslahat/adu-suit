import { View, Text, Button, StyleSheet } from "react-native";
import { logout } from "../../logics/gameAPI";
import { useNavigation } from "@react-navigation/native";

export const HomePage = ({ user }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Welcome {user ? user.displayName : "No user"}</Text>
      <Button title="Start Game" onPress={() => navigation.navigate("Game")} />
      <Button title="Log Out" onPress={() => logout()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

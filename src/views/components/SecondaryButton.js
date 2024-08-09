import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { themes } from "../../utils/themes";

export default function SecondaryButton({ title, onPress }) {
  return (
    <Button
      mode="outlined"
      textColor="#056133"
      labelStyle={{
        fontFamily: "OpenSans_700Bold",
        fontSize: themes.text.small,
      }}
      style={styles.button}
      onPress={onPress}
    >
      {title}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: themes.colors.darkGreen,
  },
});

import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { themes } from "../../utils/themes";

export default function PrimaryButton({ title, onPress }) {
  return (
    <Button
      mode="contained"
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
    color: themes.colors.white,
    borderRadius: 8,
    backgroundColor: themes.colors.darkGreen,
  },
});

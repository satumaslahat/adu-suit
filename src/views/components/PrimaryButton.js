import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { themes } from "../../utils/themes";

export default function PrimaryButton({ title, onPress }) {
  return (
    <Button
      mode="contained"
      buttonColor={themes.colors.darkGreen}
      labelStyle={styles.label}
      style={{ borderRadius: 8 }}
      onPress={onPress}
    >
      {title}
    </Button>
  );
}

const styles = StyleSheet.create({
  label: {
    color: themes.colors.white,
    fontFamily: "OpenSans_700Bold",
    fontSize: themes.text.small,
  },
});

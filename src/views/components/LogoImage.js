import { Image, StyleSheet } from "react-native";

export default function LogoImage() {
  return (
    <Image
      style={styles.image}
      source={require("../../../assets/images/logo.png")}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    marginBottom: 24,
    alignSelf: "center",
  },
});

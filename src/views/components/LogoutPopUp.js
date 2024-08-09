import { Image, StyleSheet, View } from "react-native";
import { Modal, Text, Button } from "react-native-paper";
import { logout } from "../../logics/gameAPI";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { themes } from "../../utils/themes";

export default function LogoutPopUp({ visible, setVisible }) {
  return (
    <Modal visible={visible} contentContainerStyle={styles.modal}>
      <Image
        style={styles.image}
        source={require("../../../assets/images/leave.png")}
      />
      <Text style={styles.text}>Oh no! You’re leaving...</Text>
      <Text style={styles.text}>Are you sure?</Text>
      <View style={styles.buttonGroup}>
        <PrimaryButton title="No" onPress={() => setVisible(false)} />
        <SecondaryButton
          title="Yes"
          onPress={async () => {
            setVisible(false);
            await logout();
          }}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: themes.colors.white,
    alignSelf: "center",
    alignItems: "center",
    width: "80%",
    padding: 16,
    borderRadius: 20,
    gap: 16,
  },
  image: { width: 100, height: 100 },
  text: { fontFamily: "OpenSans_400Regular" },
  buttonGroup: { flexDirection: "row", gap: 16 },
});

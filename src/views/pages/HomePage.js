import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Fontisto } from "@expo/vector-icons";
import { Text, View, Image, StyleSheet, SafeAreaView } from "react-native";
import { Button, Card, Portal } from "react-native-paper";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import LogoutPopUp from "../components/LogoutPopUp";
import { getGameHistory } from "../../logics/gameAPI";
import { startGameAction } from "../../logics/gameRedux";
import { themes } from "../../utils/themes";
import LogoImage from "../components/LogoImage";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import ProfileBar from "../components/ProfileBar";
import UserHistory from "../components/UserHistory";

export default function HomePage({ user }) {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [visibleModal, setVisibleModal] = useState(false);
  const [history, setHistory] = useState({ win: 0, lose: 0 });

  useEffect(() => {
    isFocused &&
      getGameHistory(user.uid).then((data) => {
        setHistory(data);
      });
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <Portal>
        <LogoutPopUp visible={visibleModal} setVisible={setVisibleModal} />
      </Portal>
      <LogoImage />
      <ProfileBar user={user} />
      <UserHistory history={history} />
      <Image
        style={styles.image}
        source={require("../../../assets/images/play.png")}
      />
      <View style={styles.buttonGroup}>
        <PrimaryButton
          title={"Start game"}
          onPress={() => {
            dispatch(startGameAction(user.uid));
            navigation.navigate("Game");
          }}
        />
        <SecondaryButton
          title={"Log out"}
          onPress={() => setVisibleModal(true)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.lightGreen,
    alignItems: "center",
    justifyContent: "start",
    gap: 8,
  },
  image: { width: 150, height: 150 },
  buttonGroup: { gap: 8 },
});

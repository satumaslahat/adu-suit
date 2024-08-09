import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, SafeAreaView, StyleSheet } from "react-native";
import GameAnswerLayout from "../layouts/GameAnswerLayout";
import GameResultLayout from "../layouts/GameResultLayout";
import LogoImage from "../components/LogoImage";
import { themes } from "../../utils/themes";

export const GamePage = () => {
  const navigation = useNavigation();
  const [isAnswered, setIsAnswered] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <LogoImage />
      {isAnswered ? (
        <GameResultLayout
          navigation={navigation}
          setIsAnswered={setIsAnswered}
        />
      ) : (
        <GameAnswerLayout setIsAnswered={setIsAnswered} />
      )}
      <View />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.lightGreen,
    justifyContent: "space-between",
  },
});

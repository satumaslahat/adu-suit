import { Image, Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { choiceAssets } from "../../utils/choiceAssets";
import { getGameHistory } from "../../logics/gameAPI";
import { useSelector, useDispatch } from "react-redux";
import { startGameAction } from "../../logics/gameRedux";
import AnswerGroup from "../components/AnswerGroup";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import { themes } from "../../utils/themes";

export default function ({ navigation, setIsAnswered }) {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  return (
    <View style={styles.layout}>
      <View style={styles.arena}>
        <AnswerGroup name="Robsu!t" answer={game.computerAnswer} />
        <Text style={styles.result}>
          {game?.status ? `YOU ${game?.status.toUpperCase()}!` : ""}
        </Text>
        <AnswerGroup name="Player" answer={game.playerAnswer} />
      </View>
      <View style={styles.buttonGroup}>
        <PrimaryButton
          title="Play again"
          onPress={() => {
            dispatch(startGameAction(game?.userID));
            setIsAnswered(false);
          }}
        />
        <SecondaryButton
          title="Quit"
          onPress={async () => {
            await getGameHistory(game?.userID);
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: { gap: 40, marginHorizontal: 20 },
  arena: { gap: 24 },
  result: {
    fontSize: themes.text.large,
    fontFamily: "Bangers_400Regular",
    alignSelf: "center",
    color: themes.colors.yellow,
    textShadowColor: themes.colors.darkYellow,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
  },
  buttonGroup: { gap: 16, alignItems: "center" },
});

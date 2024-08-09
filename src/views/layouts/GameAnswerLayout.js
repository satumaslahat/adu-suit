import { View, Text, Image, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { TouchableRipple } from "react-native-paper";
import { choiceAssets } from "../../utils/choiceAssets";
import { checkTruthAction } from "../../logics/gameRedux";
import { useSelector } from "react-redux";
import { themes } from "../../utils/themes";

export default function GameAnswerLayout({ setIsAnswered }) {
  const game = useSelector((state) => state.game);
  const dispatch = useDispatch();
  return (
    <View style={styles.layout}>
      <Text style={styles.instruction}>SHOW YOUR HAND</Text>
      <View style={styles.choiceButtonGroup}>
        {["rock", "paper", "scissors"].map((hand, i) => (
          <TouchableRipple
            key={i}
            borderless={true}
            style={styles.choiceButton}
            rippleColor="rgba(230, 179, 25, .50)"
            onPress={() => {
              dispatch(
                checkTruthAction({ gameID: game.id, playerAnswer: hand })
              );
              setIsAnswered(true);
            }}
          >
            <Image style={styles.choiceImage} source={choiceAssets[hand]} />
          </TouchableRipple>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: { gap: 16 },
  instruction: {
    fontSize: themes.text.large,
    fontFamily: "Bangers_400Regular",
    textAlign: "center",
    color: themes.colors.yellow,
    textShadowColor: themes.colors.darkYellow,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
  },
  choiceButtonGroup: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
  choiceButton: {
    backgroundColor: themes.colors.white,
    padding: 16,
    borderRadius: 16,
  },
  choiceImage: { width: 36, height: 36 },
});

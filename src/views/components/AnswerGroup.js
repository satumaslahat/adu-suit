import { Image, StyleSheet, Text, View } from "react-native";
import { choiceAssets } from "../../utils/choiceAssets";
import { themes } from "../../utils/themes";

export default function AnswerGroup({ name, answer }) {
  return (
    <View
      style={{
        alignSelf: name == "Robsu!t" ? "flex-end" : "flex-start",
        alignItems: "center",
        gap: 8,
      }}
    >
      <Image style={styles.image} source={choiceAssets[answer]} />
      <View style={styles.label}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 48,
    height: 48,
    shadowRadius: 1,
    shadowOpacity: 0.5,
    shadowOffset: { width: 2, height: 2 },
  },
  label: {
    backgroundColor: themes.colors.green,
    padding: 8,
    borderRadius: 10,
  },
  text: {
    fontSize: themes.text.medium,
    fontFamily: "OpenSans_700Bold",
    color: themes.colors.darkGreen,
  },
});

import { Card } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { themes } from "../../utils/themes";

export default function UserHistory({ history }) {
  return (
    <Card style={styles.card}>
      <Card.Title title="Your History" titleStyle={styles.title} />
      <Card.Content style={styles.content}>
        <View style={styles.label}>
          <Text style={styles.text}>win: {history.win}</Text>
        </View>
        <View style={styles.label}>
          <Text style={styles.text}>lose: {history.lose}</Text>
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: themes.colors.white,
    borderColor: themes.colors.darkGreen,
    borderWidth: 2,
    shadowColor: "transparent",
  },
  title: {
    fontSize: themes.text.medium,
    fontFamily: "OpenSans_700Bold",
    textAlign: "center",
    color: themes.colors.darkGreen,
  },
  content: { flexDirection: "row", justifyContent: "space-between", gap: 48 },
  label: {
    backgroundColor: themes.colors.green,
    padding: 8,
    borderRadius: 8,
  },
  text: {
    fontSize: themes.text.small,
    fontFamily: "OpenSans_400Regular",
    color: themes.colors.darkGreen,
  },
});

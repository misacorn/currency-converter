import EStyleSheet from "react-native-extended-stylesheet";
import { StyleSheet } from "react-native";

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
  container: {
    backgroundColor: "$white",
    width: "90%",
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    flexDirection: "row",
    marginVertical: 11,
    alignItems: "center"
  },
  containerDisabled: {
    backgroundColor: "$disabled"
  },
  buttonContainer: {
    height: INPUT_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
    backgroundColor: "$white"
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 20,
    color: "$primaryColor",
    paddingHorizontal: 16
  },
  input: {
    height: INPUT_HEIGHT,
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 8,
    color: "$inputText"
  },
  border: {
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
    backgroundColor: "$border"
  }
});

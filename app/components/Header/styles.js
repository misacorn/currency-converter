import EStyleSheet from "react-native-extended-stylesheet";
import { StatusBar } from "react-native";

export default EStyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    "@media ios": {
      paddingTop: 30
    },
    "@media android": {
      paddingTop: StatusBar.currentHeight
    }
  },
  button: {
    alignSelf: "flex-end",
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  icon: {
    width: 20
  }
});

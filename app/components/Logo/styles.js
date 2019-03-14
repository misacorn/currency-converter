import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const imageWidth = Dimensions.get("window").width / 2;

export default EStyleSheet.create({
  $largeImageSize: imageWidth,
  $smallImageSize: imageWidth / 2,
  container: {
    alignItems: "center"
  },
  containerImg: {
    alignItems: "center",
    justifyContent: "center",
    width: "$largeImageSize",
    height: "$largeImageSize"
  },
  logo: {
    width: "$largeImageSize"
  },
  text: {
    fontWeight: "600",
    fontSize: 30,
    marginBottom: 15,
    letterSpacing: -0.5,
    color: "$white"
  }
});

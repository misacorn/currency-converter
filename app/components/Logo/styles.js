import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const imageWidth = (Dimensions.get("window").width * 2) / 3;

export default EStyleSheet.create({
  $largeImageSize: imageWidth,
  $smallImageSize: (imageWidth * 2) / 3,
  container: {
    alignItems: "center"
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
    width: "$largeImageSize",
    height: "$largeImageSize"
  },
  text: {
    fontWeight: "600",
    fontSize: 30,
    marginBottom: 15,
    letterSpacing: -0.5,
    color: "$white"
  }
});

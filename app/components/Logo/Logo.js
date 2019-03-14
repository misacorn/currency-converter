import React, { Component } from "react";
import { View, Text, Keyboard, Animated } from "react-native";
import styles from "./styles";

const ANIMATION_DURATION = 250;

class Logo extends Component {
  constructor(props) {
    super(props);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }
  componentDidMount() {
    this.keyboardShowListener = Keyboard.addListener(
      "keyboardWillShow",
      this.keyboardShow
    );
    this.keyboardHideListerner = Keyboard.addListener(
      "keyboardWillHide",
      this.keyboardHide
    );
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListerner.remove();
  }

  keyboardShow = () => {
    Animated.timing(this.imageWidth, {
      toValue: styles.$smallImageSize,
      duration: ANIMATION_DURATION
    }).start();
  };

  keyboardHide = () => {
    Animated.timing(this.imageWidth, {
      toValue: styles.$largeImageSize,
      duration: ANIMATION_DURATION
    }).start();
  };

  render() {
    const imageStyle = [
      styles.logo,
      { width: this.imageWidth, height: this.imageWidth }
    ];

    return (
      <View style={styles.container}>
        <Animated.Image
          style={imageStyle}
          // resizeModel="contain"
          source={require("./image/logo.png")}
        />
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;

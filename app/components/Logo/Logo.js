import React, { Component } from "react";
import { View, Text, Image, Keyboard } from "react-native";
import styles from "./styles";

class Logo extends Component {
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
    console.log("keyboard did show");
  };

  keyboardHide = () => {
    console.log("keyboard did hide");
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.containerImg}
          // resizeModel="contain"
          source={require("./image/logo.png")}
        />
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;

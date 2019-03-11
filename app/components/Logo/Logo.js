import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const Logo = () => (
  <View style={styles.container}>
    <Image
      style={styles.containerImg}
      // resizeModel="contain"
      source={require("./image/logo.png")}
    />
    <Text style={styles.text}>Currency Converter</Text>
  </View>
);

export default Logo;

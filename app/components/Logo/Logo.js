import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const Logo = () => (
  <View style={styles.container}>
    <Image
      style={styles.containerImg}
      // style={{ width: 250, height: 250 }}
      source={require("./image/logo.png")}
    />
    <Text>Currency Converter</Text>
  </View>
);

export default Logo;

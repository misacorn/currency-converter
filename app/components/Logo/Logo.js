import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const Logo = () => (
  <View style={styles.container}>
    <Image source={require("./image/logo.png")} />
    <Text>Currency Converter</Text>
  </View>
);

export default Logo;

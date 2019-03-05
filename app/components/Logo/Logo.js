import React from "react";
import { View, Text, Image } from "react-native";

const Logo = () => (
  <View>
    <Image source={require("./image/logo.png")} />
    <Text>Currency Converter</Text>
  </View>
);

export default Logo;

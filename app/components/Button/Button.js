import React from "react";
import propTypes from "prop-types";
import { TouchableOpacity, View, Text, Image } from "react-native";

import styles from "./styles";

const Button = props => {
  const { onPress, text } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapper}>
        <Image
          resizeMode="contain"
          style={styles.icon}
          source={require("./image/icon.png")}
        />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: propTypes.func,
  text: propTypes.string
};

export default Button;

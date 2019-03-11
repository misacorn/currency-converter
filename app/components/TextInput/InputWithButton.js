import React from "react";
import propTypes from "prop-types";
import { View, Text, TextInput, TouchableHighlight } from "react-native";

import styles from "./styles";

const InputWithButton = ({ buttonText, onPress, editable = true }) => (
  <View style={styles.container}>
    <TouchableHighlight style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableHighlight>
    <View style={styles.border} />
    <TextInput style={styles.input} keyboardType="numeric" />
  </View>
);

InputWithButton.propTypes = {
  onPress: propTypes.func,
  buttonText: propTypes.string,
  editable: propTypes.bool
};

export default InputWithButton;

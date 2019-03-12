import React from "react";
import propTypes from "prop-types";
import { View, Text, TextInput, TouchableHighlight } from "react-native";

import styles from "./styles";

const InputWithButton = props => {
  const { buttonText, onPress, editable = true } = props;
  const containerStyles = [styles.container];
  !editable && containerStyles.push(styles.containerDisabled);

  return (
    <View style={containerStyles}>
      <TouchableHighlight style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        {...props}
      />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: propTypes.func,
  buttonText: propTypes.string,
  editable: propTypes.bool
};

export default InputWithButton;

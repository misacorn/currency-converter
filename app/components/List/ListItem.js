import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import propTypes from "prop-types";

import styles from "./styles";
import Icon from "./Icon";

const ListItem = ({
  text,
  selected = false,
  onPress,
  checkmark = true,
  visible = true
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected ? <Icon checkmark={checkmark} visible={visible} /> : <Icon />}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  onPress: propTypes.func,
  text: propTypes.string,
  selected: propTypes.bool,
  checkmark: propTypes.bool,
  visible: propTypes.bool
};

export default ListItem;

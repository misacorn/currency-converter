import propTypes from "prop-types";
import React from "react";
import { View, Text, TouchableHighlight } from "react-native";

import styles from "./styles";
import Icon from "./Icon";

const ListItem = ({
  text,
  onPress,
  checkmark = true,
  selected = false,
  visible = true,
  customIcon = null,
  iconBackground
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected ? (
        <Icon
          visible={visible}
          checkmark={checkmark}
          iconBackground={iconBackground}
        />
      ) : (
        <Icon />
      )}
      {customIcon}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: propTypes.string,
  onPress: propTypes.func,
  checkmark: propTypes.bool,
  selected: propTypes.bool,
  visible: propTypes.bool,
  customIcon: propTypes.element,
  iconBackground: propTypes.string
};

export default ListItem;

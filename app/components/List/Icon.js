import React from "react";
import propTypes from "prop-types";
import { View, Image } from "react-native";

import styles from "./styles";

const Icon = ({ checkmark, visible }) => {
  const iconStyles = [styles.icon];
  visible && iconStyles.push(styles.iconVisible);

  return (
    <View style={iconStyles}>
      {checkmark && (
        <Image
          style={styles.checkIcon}
          resizeMode="contain"
          source={require("./image/check.png")}
        />
      )}
    </View>
  );
};

Icon.propTypes = {
  checkmark: propTypes.bool,
  visible: propTypes.bool
};

export default Icon;

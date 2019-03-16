import React from "react";
import propTypes from "prop-types";
import { View, Image } from "react-native";

import styles from "./styles";

const Icon = ({ visible, checkmark, iconBackground }) => {
  const iconStyles = [styles.icon];
  visible && iconStyles.push(styles.iconVisible);
  iconBackground && iconStyles.push({ backgroundColor: iconBackground });

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
  visible: propTypes.bool,
  iconBackground: propTypes.string
};

export default Icon;

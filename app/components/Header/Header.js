import React from "react";
import propTypes from "prop-types";
import { Image, View, TouchableOpacity } from "react-native";

import styles from "./styles";

const Header = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        resizeMode="contain"
        style={styles.icon}
        source={require("./image/gear.png")}
      />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  onPress: propTypes.func
};

export default Header;

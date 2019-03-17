import React from "react";
import propTypes from "prop-types";
import { View } from "react-native";
import styles from "./styles";

const Container = ({ children, backgroundColor }) => {
  const containerStyles = [styles.container];
  backgroundColor && containerStyles.push({ backgroundColor });

  return <View style={containerStyles}>{children}</View>;
};

Container.propTypes = {
  children: propTypes.arrayOf(propTypes.element)
};

export default Container;

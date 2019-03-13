import React from "react";
import propTypes from "prop-types";
import { Text } from "react-native";
import moment from "moment";

import styles from "./styles";

const ConvertRate = ({ base, conversionRate, date, quote }) => (
  <Text style={styles.container}>
    1 {base} = {conversionRate} {quote} as of{" "}
    {moment(date).format("DD MMMM YYYY")}
  </Text>
);

ConvertRate.propTypes = {
  date: propTypes.object,
  base: propTypes.string,
  quote: propTypes.string,
  conversionRate: propTypes.number
};

export default ConvertRate;

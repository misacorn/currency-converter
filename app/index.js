import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { Provider } from "react-redux";

import Navigator from "./config/routes";
import AlertProvider from "./components/Alert/AlertProvider";

EStyleSheet.build({
  $primaryColor: "#a537fd",
  $white: "#fff",
  $border: "#E2E2E2",
  $inputText: "#797979",
  $disabled: "#F0F0F0",
  $darkText: "#343434",
  $primaryOrange: "#ff7400",
  $primaryGreen: "#329932"

  // $outline: 1
});

export default () => (
  <AlertProvider>
    <Navigator />
  </AlertProvider>
);

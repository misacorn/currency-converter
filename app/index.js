import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

// import Home from "./screens/Home";
import CurrencyList from "./screens/CurrencyList";

EStyleSheet.build({
  $primaryColor: "#a537fd",
  $white: "#fff",
  $border: "#E2E2E2",
  $inputText: "#797979",
  $disabled: "#F0F0F0",
  $darkText: "#343434"

  // $outline: 1
});

export default () => <CurrencyList />;

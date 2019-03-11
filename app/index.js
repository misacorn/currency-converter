import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

import Home from "./screens/Home";

EStyleSheet.build({
  $primaryColor: "#a537fd",
  $white: "#fff",
  $border: "#E2E2E2",
  $inputText: "#797979"
});

export default () => <Home />;

import React from "react";
import { StatusBar } from "react-native";

import Container from "../components/Container/Container";
import Logo from "../components/Logo/Logo";

export default () => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <Logo />
  </Container>
);

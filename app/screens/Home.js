import React, { Component } from "react";
import { StatusBar } from "react-native";

import Container from "../components/Container/Container";
import Logo from "../components/Logo/Logo";
import InputWithButton from "../components/TextInput/InputWithButton";

class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton />
        <InputWithButton editable={false} />
      </Container>
    );
  }
}

export default Home;

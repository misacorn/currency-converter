import React, { Component } from "react";
import { StatusBar } from "react-native";

import Container from "../components/Container/Container";
import Logo from "../components/Logo/Logo";
import InputWithButton from "../components/TextInput/InputWithButton";

const TEMP_BASE_CURRENCY = "EUR";
const TEMP_QUOTE_CURRENCY = "USD";
const TEMP_BASE_PRICE = "1";
const TEMP_QUOTE_PRICE = "1.12";

class Home extends Component {
  handleBaseCurrency = () => {
    console.log("base");
  };

  handleQuoteCurrency = () => {
    console.log("quote");
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handleBaseCurrency}
        />
        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.handleQuoteCurrency}
          editable={false}
        />
      </Container>
    );
  }
}

export default Home;

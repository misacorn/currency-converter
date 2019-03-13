import React, { Component } from "react";
import { StatusBar } from "react-native";

import Container from "../components/Container/Container";
import Logo from "../components/Logo/Logo";
import InputWithButton from "../components/TextInput/InputWithButton";
import ClearButton from "../components/Button/ClearButton";

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

  handleChangeText = text => {
    console.log("change text");
  };

  handleReverse = () => {
    console.log("reverse currencies");
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handleBaseCurrency}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChangeText={this.handleChangeText}
        />
        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.handleQuoteCurrency}
          value={TEMP_QUOTE_PRICE}
          editable={false}
        />
        <ClearButton text="Reverse Currencies" onPress={this.handleReverse} />
      </Container>
    );
  }
}

export default Home;

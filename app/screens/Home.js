import React, { Component } from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";

import Container from "../components/Container/Container";
import Logo from "../components/Logo/Logo";
import InputWithButton from "../components/TextInput/InputWithButton";
import Button from "../components/Button/Button";
import ConvertRate from "../components/ConvertRate/ConvertRate";
import Header from "../components/Header/Header";

const TEMP_BASE_CURRENCY = "EUR";
const TEMP_QUOTE_CURRENCY = "USD";
const TEMP_BASE_PRICE = "1";
const TEMP_QUOTE_PRICE = "1.12";
const TEMP_CONVERSION_RATE = 1.12;
const TEMP_CONVERSION_DATE = new Date();

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

  handleOptionPress = () => {
    console.log("press option");
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionPress} />
        <KeyboardAvoidingView behavior="padding">
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
          <ConvertRate
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            date={TEMP_CONVERSION_DATE}
            conversionRate={TEMP_CONVERSION_RATE}
          />
          <Button text="Reverse Currencies" onPress={this.handleReverse} />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;

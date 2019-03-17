import React, { Component } from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import propTypes from "prop-types";
import { connect } from "react-redux";

import Container from "../components/Container/Container";
import Logo from "../components/Logo/Logo";
import InputWithButton from "../components/TextInput/InputWithButton";
import Button from "../components/Button/Button";
import ConvertRate from "../components/ConvertRate/ConvertRate";
import Header from "../components/Header/Header";

import { changeCurrencyAmount, swapCurrency } from "../actions/currencies";

class Home extends Component {
  static propTypes = {
    navigation: propTypes.object,
    dispatch: propTypes.func,
    baseCurrency: propTypes.string,
    quoteCurrency: propTypes.string,
    amount: propTypes.number,
    conversionRate: propTypes.number,
    isFetching: propTypes.bool,
    conversionDate: propTypes.object
  };

  handleChangeText = text => {
    const { dispatch } = this.props;
    dispatch(changeCurrencyAmount(text));
  };

  handleBaseCurrency = () => {
    const { navigation } = this.props;
    navigation.navigate("CurrencyList", { title: "Base Currency" });
  };

  handleQuoteCurrency = () => {
    const { navigation } = this.props;
    navigation.navigate("CurrencyList", { title: "Quote Currency" });
  };

  handleSwap = () => {
    this.props.dispatch(swapCurrency());
  };

  handleOptionPress = () => {
    this.props.navigation.navigate("Options");
  };

  render() {
    const {
      isFetching,
      amount,
      conversionRate,
      baseCurrency,
      quoteCurrency,
      conversionDate
    } = this.props;

    let quotePrice = "...";
    if (!isFetching) {
      quotePrice = (amount * conversionRate).toFixed(2);
    }

    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={baseCurrency}
            onPress={this.handleBaseCurrency}
            defaultValue={amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleChangeText}
          />
          <InputWithButton
            buttonText={quoteCurrency}
            onPress={this.handleQuoteCurrency}
            value={quotePrice}
            editable={false}
          />
          <ConvertRate
            base={baseCurrency}
            quote={quoteCurrency}
            date={conversionDate}
            conversionRate={conversionRate}
          />
          <Button text="Reverse Currencies" onPress={this.handleSwap} />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = state.currencies.rates || {};
  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching: conversionSelector.isFetching,
    conversionDate: conversionSelector.date
      ? new Date(conversionSelector.date)
      : new Date()
  };
};

export default connect(mapStateToProps)(Home);

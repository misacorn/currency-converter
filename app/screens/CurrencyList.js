import React, { Component } from "react";
import { FlatList, View, StatusBar } from "react-native";
import propTypes from "prop-types";
import { connect } from "react-redux";

import currencies from "../components/data/currencies";
import ListItem from "../components/List/ListItem";
import Separator from "../components/List/Separator";
import { changeBaseCurrency, changeQuoteCurrency } from "../actions/currencies";

class CurrencyList extends Component {
  static propTypes = {
    navigation: propTypes.object,
    dispatch: propTypes.func,
    baseCurrency: propTypes.string,
    quoteCurrency: propTypes.string,
    primaryColor: propTypes.string
  };

  currencySelect = currency => {
    const { navigation, dispatch } = this.props;
    const { type } = navigation.state.params;
    if (type === "base") {
      dispatch(changeBaseCurrency(currency));
    } else if (type === "quote") {
      dispatch(changeQuoteCurrency(currency));
    }

    navigation.goBack(null);
  };

  render() {
    const {
      baseCurrency,
      quoteCurrency,
      navigation,
      primaryColor
    } = this.props;
    let comparisonCurrency = baseCurrency;
    if (navigation.state.params.type === "quote") {
      comparisonCurrency = quoteCurrency;
    }

    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="light-content" />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === comparisonCurrency}
              onPress={() => this.currencySelect(item)}
              iconBackground={primaryColor}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  baseCurrency: state.currencies.baseCurrency,
  quoteCurrency: state.currencies.quoteCurrency,
  primaryColor: state.theme.primaryColor
});

export default connect(mapStateToProps)(CurrencyList);

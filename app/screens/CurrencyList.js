import React, { Component } from "react";
import { FlatList, View, StatusBar } from "react-native";
import propTypes from "prop-types";
import { connect } from "react-redux";

import currencies from "../components/data/currencies";
import ListItem from "../components/List/ListItem";
import Separator from "../components/List/Separator";
import { changeBaseCurrency, changeQuoteCurrency } from "../actions/currencies";

const TEMP_CURRENT_CURRENCY = "AUD";

class CurrencyList extends Component {
  static propTypes = {
    navigation: propTypes.object,
    dispatch: propTypes.func,
    baseCurrency: propTypes.string,
    quoteCurrency: propTypes.string
  };

  currencySelect = currency => {
    const { type } = this.props.navigation.state.params;
    type === "base"
      ? this.props.dispatch(changeBaseCurrency(currency))
      : type === "quote"
      ? this.props.dispatch(changeQuoteCurrency(currency))
      : null;
    const { navigation } = this.props;
    navigation.goBack(null);
  };

  render() {
    const compareCurrency = this.props.baseCurrency;
    this.props.navigation.state.params.type == "quote" &&
      compareCurrency == this.props.quoteCurrency;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="light-content" />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === compareCurrency}
              onPress={() => this.currencySelect(item)}
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
  quoteCurrency: state.currencies.quoteCurrency
});

export default connect(mapStateToProps)(CurrencyList);

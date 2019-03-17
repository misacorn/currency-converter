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
    dispatch: propTypes.func
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
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="light-content" />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENT_CURRENCY}
              onPress={() => this.currencySelect(currency)}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default connect()(CurrencyList);

import React, { Component } from "react";
import { FlatList, View, StatusBar } from "react-native";
import propTypes from "prop-types";

import currencies from "../components/data/currencies";
import ListItem from "../components/List/ListItem";
import Separator from "../components/List/Separator";

const TEMP_CURRENT_CURRENCY = "AUD";

class CurrencyList extends Component {
  static propTypes = {
    navigation: propTypes.object
  };

  currencySelect = () => {
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
              onPress={this.currencySelect}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default CurrencyList;

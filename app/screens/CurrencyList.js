import React, { Component } from "react";
import { FlatList, View, StatusBar } from "react-native";

import currencies from "../components/data/currencies";
import ListItem from "../components/List/ListItem";
import Separator from "../components/List/Separator";

const TEMP_CURRENT_CURRENCY = "EUR";

class CurrencyList extends Component {
  currencySelect = () => console.log("currency selected");

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
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

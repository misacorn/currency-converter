import propTypes from "prop-types";
import React, { Component } from "react";
import { ScrollView, StatusBar } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import ListItem from "../components/List/ListItem";
import Separator from "../components/List/Separator";

const styles = EStyleSheet.create({
  $purple: "$primaryColor",
  $orange: "$primaryOrange",
  $green: "$primaryGreen"
});

class Themes extends Component {
  static propTypes = {
    navigation: propTypes.object
  };

  handlePressTheme = color => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Purple"
          onPress={() => this.handlePressTheme(styles.$purple)}
          selected
          checkmark={false}
          iconBackground={styles.$purple}
        />
        <Separator />
        <ListItem
          text="Orange"
          onPress={() => this.handlePressTheme(styles.$orange)}
          selected
          checkmark={false}
          iconBackground={styles.$orange}
        />
        <Separator />
        <ListItem
          text="Green"
          onPress={() => this.handlePressTheme(styles.$green)}
          selected
          checkmark={false}
          iconBackground={styles.$green}
        />
        <Separator />
      </ScrollView>
    );
  }
}
export default Themes;

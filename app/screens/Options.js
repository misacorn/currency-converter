import PropTypes from "prop-types";
import React, { Component } from "react";
import { ScrollView, StatusBar, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ICON_SIZE = 23;

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };
  handlePressThemes = () => {
    console.log("press themes");
    const { navigation } = this.props;
    navigation.navigate("Themes");
  };

  handlePressSite = () => {
    console.log("press site");
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handlePressThemes}
          customIcon={
            <Ionicons
              name={`${ICON_PREFIX}-arrow-forward`}
              size={ICON_SIZE}
              color={ICON_COLOR}
            />
          }
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handlePressSite}
          customIcon={
            <Ionicons
              name={`${ICON_PREFIX}-link`}
              size={ICON_SIZE}
              color={ICON_COLOR}
            />
          }
        />
        <Separator />
      </ScrollView>
    );
  }
}
export default Options;

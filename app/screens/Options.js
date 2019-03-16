import propTypes from "prop-types";
import React, { Component } from "react";
import { ScrollView, StatusBar, Platform, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import ListItem from "../components/List/ListItem";
import Separator from "../components/List/Separator";
import connectAlert from "../components/Alert/connectAlert";

const ICON_PREFIX = Platform.OS === "ios" ? "ios" : "md";
const ICON_COLOR = "#868686";
const ICON_SIZE = 23;

class Options extends Component {
  static propTypes = {
    navigation: propTypes.object,
    alertWithType: propTypes.func
  };
  handlePressThemes = () => {
    const { navigation } = this.props;
    navigation.navigate("Themes");
  };

  handlePressSite = () => {
    Linking.openURL("http://fixer.io").catch(() =>
      this.props.alertWithType("error", "Sorry!", "An error has occured.")
    );
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
export default connectAlert(Options);

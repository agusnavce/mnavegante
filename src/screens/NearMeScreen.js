import React from "react";
import { View } from "react-native";

import Cards from "../components/Cards";
export default class NearMeScreen extends React.Component {
  static navigationOptions = {
    title: "Cerca de mi"
  };

  render() {
    return (
      <View>
        <Cards />
      </View>
    );
  }
}

import React from "react";
import { View } from "react-native";
import Cards from "../components/Cards";

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: "Buscar"
  };

  render() {
    return (
      <View>
        <Cards />
      </View>
    );
  }
}

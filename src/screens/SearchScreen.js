import React from "react";
import { View } from "react-native";
import Cards from "../components/Cards";
import SearchBar from "../components/SearchBar";

import { LIGHT_GRAY } from "../styles";

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={{ backgroundColor: LIGHT_GRAY, marginTop: 26 }}>
        <SearchBar />
        <Cards />
      </View>
    );
  }
}

import React from "react";
import { View } from "react-native";
import Cards from "../components/Cards";
import SearchBar from "../components/SearchBar";
export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: "Buscar"
  };

  render() {
    return (
      <View style={{ backgroundColor: "#DCDCDC" }}>
        <SearchBar />
        <Cards />
      </View>
    );
  }
}

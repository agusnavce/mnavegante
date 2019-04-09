import React from "react";
import { View, Button } from "react-native";

import Cards from "../components/BigCards";
export default class NearMeScreen extends React.Component {
  static navigationOptions = {
    title: "Cerca de mi"
  };

  render() {
    return (
      <View>
        <Button title={"Holas"} />
        <Cards />
      </View>
    );
  }
}

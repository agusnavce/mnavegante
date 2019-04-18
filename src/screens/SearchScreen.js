import React from "react";
import { View, Dimensions, StyleSheet, Image } from "react-native";
import Cards from "../components/Cards";
import SearchBar from "../components/SearchBar";


export default class SearchScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  state = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  };
  render() {
    return (
      <View>
        <View style={styles.backgroundImageContainer}>
          <Image
            style={{ width: this.state.width, height: this.state.height }}
            resizeMode={"cover"}
            source={require("../components/images/picasso_3.png")}
          />
        </View>
        <View style={{ marginTop: 26, marginBottom: 26 }}>
          <SearchBar />
          <Cards />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImageContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});

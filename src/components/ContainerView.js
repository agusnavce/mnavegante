import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";

const Screen = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height
};

export default class ContainerView extends React.Component {
  render() {
    return (
      <View style={styles.backgroundImageContainer}>
        <Image
          style={{ width: Screen.width, height: Screen.height }}
          resizeMode={"cover"}
          source={require("../../assets/images/welcome.jpg")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 0.5,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});

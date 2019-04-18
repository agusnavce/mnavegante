import React from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";

import Cards from "../components/BigCards";
import { LIGHT_GRAY, OFF_BLACK, OFF_WHITE } from "../styles";

export default class NearMeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  };

  render() {
    return (
      <View style={{ backgroundColor: LIGHT_GRAY }}>
        <View style={styles.backgroundImageContainer}>
          <Image
            style={{ width: this.state.width, height: this.state.height }}
            resizeMode={"cover"}
            source={{
              uri: "https://www.slobidka.com/images/picasso/Picasso-4.jpg"
            }}
          />
        </View>
        <View style={{ marginTop: 26 }}>
          <Text style={styles.nameText}>Pablo</Text>
          <Text style={styles.nameText}>Picasso</Text>
          <Text style={styles.datesText}>30 Oct 1881 - 8 abr 1973 </Text>
          <Text style={styles.description}>
            Pablo Picasso es uno de los pintores más famosos del mundo y uno de
            los artistas modernos más importantes gracias a su influencia
            fundamental en las vanguardias artísticas del siglo XX.{" "}
          </Text>
        </View>
        <View style={styles.cards}>
          <Text style={styles.titleText}> Pinturas cerca de mi</Text>
          <Cards />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  nameText: {
    backgroundColor: "transparent",
    color: "white",
    opacity: 0.9,
    fontSize: 56,
    fontWeight: "300"
  },
  datesText: {
    backgroundColor: "transparent",
    color: "white",
    opacity: 0.9,
    fontSize: 26,
    fontWeight: "200"
  },
  description: {
    backgroundColor: "transparent",
    color: OFF_BLACK,
    opacity: 0.9,
    fontSize: 16,
    fontWeight: "200"
  },
  titleText: {
    backgroundColor: LIGHT_GRAY,
    opacity: 0.3,
    color: OFF_BLACK,
    fontSize: 26,
    fontWeight: "300"
  },
  cards: { top: 70 },
  backgroundImageContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});

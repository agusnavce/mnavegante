import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";

export default class BlindAudioGuide extends React.Component {
  static navigationOptions = {
    header: null
  };
  state = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  };

  render() {
    return (
      <View style={styles.viewStyle}>
        <View style={styles.backgroundImageContainer}>
          <Image
            style={{ width: this.state.width, height: this.state.height }}
            resizeMode={"cover"}
            source={require("../components/images/picasso_2.png")}
          />
        </View>
        <Text style={styles.textStyle}>
          {"Bienvenido al recorrido a ciegas!"}
        </Text>
        <Text style={styles.text2Style}>
          {"Usted está escuchando audio de "}
        </Text>
        <Text style={styles.text2Style}>
          {
            "A medida que avance en la muestra se le desplegaran los audios de las obras"
          }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    display: "flex"
  },
  textStyle: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginTop: "10%"
  },
  text2Style: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    margin: 5
  },
  backgroundImageContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});

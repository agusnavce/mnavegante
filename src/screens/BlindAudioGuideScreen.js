import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default class BlindAudioGuide extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>
          {"Bienvenido al recorrido a ciegas!"}
        </Text>
        <Text style={styles.text2Style}>
          {"Usted está escuchando audio de "}
        </Text>
        <Image
          style={styles.image}
          source={{
            uri: "https://s3-sa-east-1.amazonaws.com/posifi-app/placeholder.jpg"
          }}
        />
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
    fontSize: 20,
    textAlign: "center",
    marginTop: "10%"
  },
  text2Style: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    margin: 5
  }
});

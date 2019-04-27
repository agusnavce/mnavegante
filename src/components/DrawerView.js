import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import AudioPlayer from "../components/AudioPlayer";
const Screen = {
  height: Dimensions.get("window").height
};
export default class DrawerView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View
            style={{ width: "90%", alignSelf: "center", alignItems: "center" }}
          >
            <AudioPlayer title={"Es una obra"} subtitle={"Hola2"} />
          </View>
          <Text style={styles.title}>Descripcion</Text>
          <Text>{this.props.text}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Screen.height * 0.5,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  title: {
    color: "black",
    fontSize: 26,
    fontWeight: "200",
    fontFamily: "free-sans",
    marginLeft: 33,
    marginTop: 5
  }
});

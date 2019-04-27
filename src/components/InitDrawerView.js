import React from "react";
import { View, StyleSheet, Image, Dimensions, Text } from "react-native";
import { OFF_BLACK } from "../styles";

const Screen = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height
};

var InitDrawerView = () => (
  <View
    style={{
      backgroundColor: "white",
      height: 120,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8
    }}
  >
    <Image
      style={styles.icon}
      source={require("../../assets/images/icon_claw.png")}
    />
    <View style={{ alignItems: "center" }}>
      <Text style={styles.title}>Estilado</Text>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          marginLeft: 26
        }}
      >
        <View style={{ width: 60 }}>
          <Text style={{ fontWeight: "bold" }}>Año</Text>
          <Text>1987</Text>
        </View>
        <View style={{ width: 60 }}>
          <Text style={{ fontWeight: "bold" }}>Medio</Text>
          <Text>Oleo</Text>
        </View>
        <View style={{ width: 100 }}>
          <Text style={{ fontWeight: "bold" }}>Dimensiones</Text>
          <Text>74 x 32</Text>
        </View>
      </View>
    </View>
  </View>
);

export default InitDrawerView;

const styles = StyleSheet.create({
  icon: {
    tintColor: OFF_BLACK,
    position: "absolute",
    top: 5,
    bottom: 0,
    left: Screen.width / 2 - 16,
    right: Screen.width / 2 - 16,
    width: 32,
    height: 6
  },
  title: {
    color: "black",
    fontSize: 36,
    fontWeight: "300",
    fontFamily: "free-sans",
    marginTop: 10
  }
});

import React, { Component } from "react";
import { TextInput, View, StyleSheet, Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default class SearchBar extends Component {
  render() {
    return (
      <View style={styles.searchInput}>
        <MaterialIcons
          name="search"
          size={22}
          style={styles.searchIcon}
          color="#bbb"
        />
        <TextInput
          style={styles.inputText}
          placeholder={"Buscar Obra..."}
          placeholderTextColor={"#999"}
          underlineColorAndroid={"#fff"}
          autoCorrect={false}
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: "white",
    borderRadius: 3,
    height: 45,
    marginTop: 3,
    marginLeft: 10,
    marginRight: 10
  },
  searchIcon: {
    position: "absolute",
    left: 13,
    top: 12
  },
  inputText: {
    ...Platform.select({
      android: {
        marginTop: 9
      },
      ios: {
        marginTop: 13
      }
    }),
    marginLeft: 43,
    fontSize: 15,
    color: "#999"
  }
});

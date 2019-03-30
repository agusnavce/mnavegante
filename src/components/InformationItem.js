import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { OFF_BLACK } from "../styles";
import { Ionicons } from "@expo/vector-icons";

const InformationItem = ({ information, border }) => {
  var { description, title, icon } = information;
  return (
    <View style={[styles.container, border ? styles.borderStyle : {}]}>
      <Ionicons name="md-add-circle" size={32}  />
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.amenityTitle,
            styles.body,
            description === "" ? { marginBottom: 0 } : { marginBottom: 10 }
          ]}
        >
          {title}
        </Text>
        {description !== "" && (
          <Text style={[styles.amenityDescription, styles.body]}>
            {description}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    fontSize: 16,
    color: OFF_BLACK
  },
  container: {
    flexDirection: "row",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16
  },
  image: {
    width: 30,
    height: 30
  },
  textContainer: {
    flexDirection: "column",
    flex: 1,
    paddingLeft: 10
  },
  amenityTitle: {
    marginBottom: 10,
    fontWeight: "500"
  },
  borderStyle: {
    borderBottomWidth: 1,
    borderColor: "#CCCCCC",
    borderStyle: "solid"
  }
});

export default InformationItem;

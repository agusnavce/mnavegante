import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import { withNavigation } from "react-navigation";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.7;
const slideWidth = wp(40);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;



var BigCardItem = ({ data: { illustration, title, id = 1 }, navigation }) => {
  const uppercaseTitle = title ? (
    <Text style={styles.title} numberOfLines={2}>
      {title.toUpperCase()}
    </Text>
  ) : (
    false
  );

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.slideInnerContainer}
      onPress={() => {
        navigation.navigate("Painting", { id });
      }}
    >
      <View style={styles.shadow} />

      <View style={styles.textContainer}>
        <Image
          source={{
            uri: illustration
          }}
          style={styles.image}
        />
        <View style={styles.titleContainer}>{uppercaseTitle}</View>
      </View>
    </TouchableOpacity>
  );
};

export default withNavigation(BigCardItem);

const entryBorderRadius = 8;
export const colors = {
  black: "#1a1917",
  gray: "#888888",
  background1: "#B721FF",
  background2: "#21D4FD"
};

var styles = StyleSheet.create({
  slideInnerContainer: {
    width: itemWidth,
    height: slideHeight,
    paddingHorizontal: itemHorizontalMargin,
    paddingBottom: 18 // needed for shadow
  },
  shadow: {
    position: "absolute",
    top: 0,
    left: itemHorizontalMargin,
    right: itemHorizontalMargin,
    bottom: 18,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    borderRadius: entryBorderRadius
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "flex-end"
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
    borderRadius: 0,
    borderRadius: entryBorderRadius
    // width: 60,
    // height: 60
  },
  // image's border radius is buggy on iOS; let's hack it!
  radiusMask: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: entryBorderRadius,
    backgroundColor: "white"
  },
  textContainer: {
    justifyContent: "center",
    paddingTop: 20 - entryBorderRadius,
    paddingBottom: 20,
    paddingHorizontal: 16,
    backgroundColor: "black",
    borderRadius: entryBorderRadius,
    display: "flex",
    flexDirection: "row",
    height: 220
  },
  title: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 0.5
  },
  subtitle: {
    marginTop: 6,
    color: colors.gray,
    fontSize: 12,
    fontStyle: "italic"
  }
});

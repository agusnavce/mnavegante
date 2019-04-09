import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

var CardItem = ({ data: { illustration, title, subtitle } }) => {
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
        alert(`You've clicked '${title}'`);
      }}
    >
      <View style={styles.shadow} />
      {/* <View style={styles.imageContainer}>
        <ImageBackground
          source={{
            uri: illustration
          }}
          style={styles.image}
        />
        <View style={styles.radiusMask} />
        </View> */}
      <View style={styles.textContainer}>
        <Image
          source={{
            uri: illustration
          }}
          style={styles.image}
        />
        <View style={styles.titleContainer}>
          {uppercaseTitle}
          <Text style={styles.subtitle} numberOfLines={2}>
            {subtitle}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardItem;

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
  titleContainer:{
    width: '80%',
    marginLeft: 10
  },
  imageContainer: {
    flex: 1,
    marginBottom: -1, // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius
  },
  image: {
    // ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
    borderRadius: 0,
    borderRadius: entryBorderRadius,
    width: 60,
    height: 60
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
    backgroundColor: "white",
    // borderBottomLeftRadius: entryBorderRadius,
    borderRadius: entryBorderRadius,
    display: "flex",
    flexDirection: "row",
  },
  title: {
    color: colors.black,
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

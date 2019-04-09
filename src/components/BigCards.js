import React from "react";

import Carousel from "react-native-snap-carousel";
import { Dimensions, StyleSheet } from "react-native";

import CardItem from "./BigCardItem";

ENTRIES2 = [
  {
    title: "Beautiful and dramatic Antelope Canyon",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "https://i.imgur.com/UYiroysl.jpg"
  },
  {
    title: "Earlier this morning, NYC",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://i.imgur.com/UPrs1EWl.jpg"
  }
];

const { width: viewportWidth } = Dimensions.get("window");

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

function renderItem({ item, index }) {
  return <CardItem data={item} even={(index + 1) % 2 === 0} />;
}

export default function Cards() {
  return (
    <Carousel
      data={ENTRIES2}
      renderItem={renderItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      // sliderHeight={sliderWidth + 250}
      itemHeight={300}
      inactiveSlideScale={0.95}
      inactiveSlideOpacity={1}
      enableMomentum={true}
      activeSlideAlignment={"start"}
      containerCustomStyle={styles.slider}
      activeAnimationType={"spring"}
      activeAnimationOptions={{
        friction: 4,
        tension: 40
      }}
      // vertical={true}
      windowSize={1}
    />
  );
}

const styles = StyleSheet.create({
  slider: {
    marginTop: 15
  }
});

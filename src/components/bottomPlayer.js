import React, { Component } from "react";
import ClosePlayerView from './closePlayerView';

class BottomPlayer extends Component {
  render() {
    <View
      style={[
        styles.bottomBar,
        {
          width,
          height: BOTTOMPLAYERHEIGHT,
          bottom: BOTTOMBARHEIGHT,
          backgroundColor: OFF_BLACK
        }
      ]}
    >
      <ClosePlayerView
        stopTitle={stopTitle}
        closePlayer={() => {}}
        navToTourStop={() => {}}
      />
    </View>;
  }
}

const styles = StyleSheet.create({
  bottomBar: {
    position: "absolute"
  }
});

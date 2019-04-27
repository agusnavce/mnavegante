import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image
} from "react-native";
import { Svg } from "expo";
import AudioPlayer from "react-native-play-audio";
const { Path } = Svg;

const { width: viewportWidth } = Dimensions.get("window");

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideWidth = wp(10);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth;

class CustomAudioPlayer extends React.Component {
  state = {
    width: undefined,
    height: undefined
  };
  _audioPlay = url => {
    var id = setInterval(() => {
      AudioPlayer.getCurrentTime(currentTime => {
        this.props.audioCurrentTime(currentTime);
      });
    }, 1000);

    this.setState({
      id
    });

    if (this.props.isPlaying === false && this.props.isPaused === false) {
      AudioPlayer.prepare(url, () => {
        this.props.audioPlaying(true);
        AudioPlayer.play();

        AudioPlayer.getDuration(duration => {
          this.props.audioTime(duration);
        });
      });
    } else {
      this.props.audioPlaying(true);
      AudioPlayer.play();
    }
  };

  _audioPause = () => {
    clearInterval(this.state.id);
    this.props.audioPlaying(false);
    this.props.audioPaused(true);
    AudioPlayer.pause();
  };

  audioPlayPauseToggle = url => {
    if (this.props.isPlaying === true && this.props.isPaused === false) {
      return (
        <TouchableOpacity
          style={styles.audioBtn}
          onPress={() => this._audioPause(url)}
        >
          <Svg height={32} width={32}>
            <Path
              d="M4 4h10v24h-10zM18 4h10v24h-10z"
              fill="#FFFFFF"
              stroke="#FFFFFF"
            />
          </Svg>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.audioBtn}
          onPress={() => this._audioPlay(url)}
        >
          <Svg height={32} width={32}>
            <Path d="M6 4l20 12-20 12z" fill="#FFFFFF" stroke="#FFFFFF" />
          </Svg>
        </TouchableOpacity>
      );
    }
  };

  componentWillUnmount = () => {
    this.props.audioCurrentTime(0);
    this.props.audioPlaying(false);
    this.props.audioPaused(false);
    this.props.audioSetTime(0);
    this.props.audioTime(0);
    AudioPlayer.stop();
  };

  render() {
    const url = this.props.url;
    const uppercaseTitle = this.props.title ? (
      <Text style={styles.title} numberOfLines={2}>
        {this.props.title.toUpperCase()}
      </Text>
    ) : (
      false
    );
    return (
      <View
        onLayout={event => {
          var { width, height } = event.nativeEvent.layout;
          this.setState({
            width,
            height
          });
        }}
      >
        <View style={styles.backgroundImageContainer}>
          <Image
            style={{ width: this.state.width, height: this.state.height }}
            resizeMode={"cover"}
            source={require("../../assets/images/picasso_1.png")}
          />
        </View>
        <View style={styles.shadow} />
        <View style={[styles.textContainer]}>
          <View style={styles.image}>{this.audioPlayPauseToggle(url)}</View>
          <View style={styles.titleContainer}>
            {uppercaseTitle}
            <Text style={styles.subtitle} numberOfLines={2}>
              {this.props.subtitle}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default CustomAudioPlayer;

const entryBorderRadius = 6;

export const colors = {
  black: "#1a1917"
};

var styles = StyleSheet.create({
  backgroundImageContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius
  },
  slideInnerContainer: {
    width: itemWidth,
    // height: slideHeight,
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
    width: "80%",
    marginLeft: 10
  },
  audioBtn: {
    marginTop: 3
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
    width: 40,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    alignItems: "center",
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    marginTop: 10
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
    borderRadius: entryBorderRadius,
    display: "flex",
    flexDirection: "row"
  },
  title: {
    color: "white",
    fontSize: 15,
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

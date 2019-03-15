import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TouchableOpacity
} from "react-native";
import { OFF_BLACK, ACTION, LIGHT_BLUE, LIGHT_GRAY } from "../styles";

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundImageContainer}>
          <Image
            style={{ width: this.state.width, height: this.state.height }}
            resizeMode={"cover"}
            source={{
              uri:
                "https://66.media.tumblr.com/1c4f8ff1a94297e1c4cc74c45a7f359a/tumblr_o3qg7z3XYi1sp9j33o1_400.jpg"
            }}
          />
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>{"Bienvenido"}</Text>
            <View>
              <TouchableOpacity
                style={[
                  styles.playAllButton,
                  { width: 0.65 * this.state.width }
                ]}
                onPress={this._showMoreApp}
              >
                <Text style={styles.playAllButtonText}>{"Comenzar"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate("Main");
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImageContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  contentContainer: {
    flex: 1
  },
  welcomeContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  welcomeText: {
    backgroundColor: "transparent",
    color: OFF_BLACK,
    opacity: 0.9,
    fontSize: 36,
    fontWeight: "600"
  },
  playAllButton: {
    backgroundColor: ACTION,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    borderRadius: 9,
    marginVertical: 35,
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: LIGHT_GRAY,
    opacity: 0.5,
    elevation: 2, // Android
    height: 50,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  playAllButtonText: {
    color: OFF_BLACK,
    fontSize: 16,
    fontWeight: "600"
  }
});

import React from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";
import { connect } from "react-redux";

import Cards from "../components/BigCards";
import { LIGHT_GRAY, OFF_BLACK, OFF_WHITE } from "../styles";

class NearMeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  };

  render() {
    return (
      <View style={{ backgroundColor: LIGHT_GRAY }}>
        <View style={styles.backgroundImageContainer}>
          <Image
            style={{ width: this.state.width, height: this.state.height }}
            resizeMode={"cover"}
            source={require("../components/images/picasso_1.png")}
          />
        </View>
        <View style={styles.mainTextContainer}>
          <Text style={styles.nameText}>Pablo</Text>
          <Text style={styles.nameText}>Picasso</Text>
          <Text style={styles.datesText}>30 Oct 1881 - 8 abr 1973 </Text>
          <Text style={styles.description}>
            Pablo Picasso es uno de los pintores más famosos del mundo y uno de
            los artistas modernos más importantes gracias a su influencia
            fundamental en las vanguardias artísticas del siglo XX.{" "}
          </Text>
        </View>
        <View style={styles.cards}>
          <Text style={styles.titleText}> Pinturas cerca de mi</Text>
          <Cards />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.data.fetching,
    fetched: state.data.fetched,
    error: state.data.error,
    bestPrediction: state.predictions.bestPrediction,
    data: state.data.data,
    info: state.data.info,
    loading: state.data.loading
  };
};

export default connect(
  mapStateToProps,
  { fetchData, fetchPredictions, sendWifiSignals, step }
)(NearMeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  mainTextContainer: {
    marginTop: 24
  },
  nameText: {
    backgroundColor: "transparent",
    color: "white",
    opacity: 0.9,
    fontSize: 56,
    fontWeight: "300"
  },
  datesText: {
    backgroundColor: "transparent",
    color: "white",
    opacity: 0.9,
    fontSize: 26,
    fontWeight: "200"
  },
  description: {
    backgroundColor: "transparent",
    color: OFF_WHITE,
    opacity: 0.9,
    fontSize: 16,
    fontWeight: "200"
  },
  titleText: {
    color: OFF_WHITE,
    fontSize: 26,
    fontWeight: "300"
  },
  cards: { top: 70 },
  backgroundImageContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});

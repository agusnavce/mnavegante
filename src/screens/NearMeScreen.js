import React from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";
import { connect } from "react-redux";

import Cards from "../components/BigCards";
import { LIGHT_GRAY, OFF_WHITE } from "../styles";
import { fetchData, fetchPredictions, sendWifiSignals } from "../actions";

class NearMeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  };
  // checkNearZone = () => {
  //   this.setState({
  //     loading: false
  //   });
  //   this.props.sendWifiSignals();

  //   this.props.fetchPredictions();

  //   // Enqueue the new element

  //   var next = this.state.head + 1;

  //   if (next >= this.state.capacity) next = 0;

  //   var buffer = this.state.buffer;

  //   var prediction = this.props.bestPrediction;

  //   buffer[this.state.head] = prediction;

  //   this.setState({
  //     buffer,
  //     head: next
  //   });

  //   var actualPrediction = this.getBest(buffer);

  //   if (actualPrediction !== this.state.previousPrediction) {
  //     this.props.fetchData(actualPrediction);
  //     this.setState({ previousPrediction: actualPrediction });
  //   }
  // };

  // getBest = array => {
  //   var result = {};
  //   array.map(locationArray => {
  //     if (locationArray !== undefined && locationArray.map !== undefined) {
  //       return locationArray.map(elem => {
  //         if (result[elem.location] !== undefined) {
  //           result[elem.location] = result[elem.location] + elem.probability;
  //         } else {
  //           result[elem.location] = elem.probability;
  //         }
  //       });
  //     }
  //   });

  //   var bestLocation = {
  //     location: null,
  //     probability: 0
  //   };
  //   Object.keys(result).map(key => {
  //     if (result[key] > bestLocation.probability) {
  //       bestLocation.location = key;
  //       bestLocation.probability = result[key];
  //     }
  //   });
  //   return bestLocation.location;
  // };

  // componentWillMount() {
  //   this.setState({
  //     loading: true,
  //     buffer: new Array(10),
  //     capacity: 10,
  //     head: 0,
  //     previousPrediction: ""
  //   });

  //   this.props.sendWifiSignals();

  //   this.props.fetchPredictions();

  //   var predictionIntervalId = setInterval(() => {
  //     this.checkNearZone();
  //   }, 1000);

  //   this.setState({
  //     predictionIntervalId
  //   });
  // }
  // componentWillUnmount() {
  //   clearInterval(this.state.predictionIntervalId);
  // }

  render() {
    return (
      <View style={{ backgroundColor: LIGHT_GRAY }}>
        <View style={styles.backgroundImageContainer}>
          <Image
            style={{ width: this.state.width, height: this.state.height }}
            resizeMode={"cover"}
            source={require("../../assets/images/picasso_1.png")}
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
  { fetchData, fetchPredictions, sendWifiSignals }
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
    fontWeight: "300",
    fontFamily: "free-sans"
  },
  datesText: {
    backgroundColor: "transparent",
    color: "white",
    opacity: 0.9,
    fontSize: 26,
    fontWeight: "200",
    fontFamily: "free-sans"
  },
  description: {
    backgroundColor: "transparent",
    color: OFF_WHITE,
    opacity: 0.9,
    fontSize: 16,
    fontWeight: "200",
    fontFamily: "free-sans"
  },
  titleText: {
    color: OFF_WHITE,
    fontSize: 26,
    fontWeight: "300",
    fontFamily: "free-sans"
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

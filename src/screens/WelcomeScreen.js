import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Bienvenido" onPress={this._showMoreApp} />
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
  }
});

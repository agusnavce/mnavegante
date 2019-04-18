import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import AppNavigator from "./src/navigation/AppNavigator";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import ReduxThunk from "redux-thunk";
import { reactotronRedux } from "reactotron-redux";
import Reactotron from "reactotron-react-native";
import { PermissionsAndroid } from "react-native";

let store;

if (__DEV__) {
  const reactotron = Reactotron.configure({ port: 9090 })
    .useReactNative() //  <- here i am!
    .use(reactotronRedux())
    .connect(); //Don't forget about me!
  store = createStore(
    (state = {}, action) => state,
    compose(
      applyMiddleware(ReduxThunk),
      reactotron.createEnhancer()
    )
  );
} else {
  store = createStore(
    (state = {}, action) => state,
    applyMiddleware(ReduxThunk)
  );
}

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };
  // async askForUserPermissions() {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       {
  //         title: "Wifi networks",
  //         message: "We need your permission in order to find wifi networks"
  //       }
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log("Thank you for your permission! :)");
  //     } else {
  //       console.log(
  //         "You will not able to retrieve wifi available networks list"
  //       );
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // }
  componentDidMount() {
    this.askForUserPermissions();
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <View style={styles.container}>
            {Platform.OS === "ios" && <StatusBar barStyle="default" />}
            <AppNavigator />
          </View>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/robot-dev.png"),
        require("./assets/images/robot-prod.png")
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
      })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

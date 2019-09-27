import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import AppNavigator from "./src/navigation/AppNavigator";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import ReduxThunk from "redux-thunk";
import { reactotronRedux } from "reactotron-redux";
import Reactotron from "reactotron-react-native";
import reducers from "./src/reducers";

let store;

if (__DEV__) {
  const reactotron = Reactotron.configure({ port: 9090 })
    .useReactNative() //  <- here i am!
    .use(reactotronRedux())
    .connect(); //Don't forget about me!
  store = createStore(
    reducers,
    compose(
      applyMiddleware(ReduxThunk),
      reactotron.createEnhancer()
    )
  );
} else {
  store = createStore(reducers, applyMiddleware(ReduxThunk));
}

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

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
        require("./assets/images/picasso.png"),
        require("./assets/images/picasso_1.png"),
        require("./assets/images/picasso_2.png"),
        require("./assets/images/picasso_3.png"),
        require("./assets/images/museo.jpg"),
        require("./assets/images/mapa.jpg"),
        require("./assets/images/welcome.jpg")
      ]),

      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        "free-sans": require("./assets/fonts/Museum.ttf"),
        "free-sans-bold": require("./assets/fonts/FreeSansBold.ttf")
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

import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import Drawer from "../components/DragableDrawer";
import ContainerView from "../components/ContainerView";
import DrawerView from "../components/DrawerView";
import InitDrawerView from "../components/InitDrawerView";

export default class PaintingScreen extends React.Component {
  static navigationOptions = {
    headerTransparent: true
  };

  render() {
    const itemId = this.props.navigation.getParam("id", "NO-ID");
    return (
      <View style={styles.container}>
        <Drawer
          initialDrawerSize={0.15}
          renderContainerView={() => <ContainerView />}
          renderDrawerView={() => <DrawerView />}
          renderInitDrawerView={InitDrawerView}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Animated
} from "react-native";

import { Icon } from "expo";
import { LIGHT_GRAY } from "../styles";

class Panels extends React.Component {
  constructor(props) {
    super(props);

    this.icons = {
      up: "chevron-thin-up",
      down: "chevron-thin-down"
    };

    this.state = {
      title: props.title,
      expanded: false,
      animation: new Animated.Value()
    };
  }

  toggle() {
    let initialValue = this.state.expanded
        ? this.state.maxHeight + this.state.minHeight
        : this.state.minHeight,
      finalValue = this.state.expanded
        ? this.state.minHeight
        : this.state.maxHeight + this.state.minHeight;

    this.setState({
      expanded: !this.state.expanded
    });

    this.state.animation.setValue(initialValue);
    Animated.spring(this.state.animation, {
      toValue: finalValue
    }).start();
  }

  _setMaxHeight(event) {
    if (!this.state.maxHeight) {
      this.setState({
        maxHeight: event.nativeEvent.layout.height
      });
    }
  }

  _setMinHeight(event) {
    if (!this.state.minHeight) {
      this.setState({
        minHeight: event.nativeEvent.layout.height,
        animation: new Animated.Value(event.nativeEvent.layout.height)
      });
    }
  }

  render() {
    let icon = this.icons["down"];

    if (this.state.expanded) {
      icon = this.icons["up"];
    }

    return (
      <Animated.View
        style={[styles.container, { height: this.state.animation }]}
      >
        <View
          style={styles.titleContainer}
          onLayout={this._setMinHeight.bind(this)}
        >
          <Text style={styles.title}>{this.state.title}</Text>
          <TouchableHighlight
            style={styles.button}
            onPress={this.toggle.bind(this)}
            underlayColor="#f1f1f1"
          >
            <Icon.Entypo
              name={icon}
              size={20}
              style={{ marginTop: 20, marginRight: 10 }}
            />
          </TouchableHighlight>
        </View>

        <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
          {this.props.children}
        </View>
      </Animated.View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: LIGHT_GRAY,
    margin: 10,
    overflow: "hidden",
    borderRadius: 8
  },
  titleContainer: {
    flexDirection: "row",
    height: 60
  },
  title: {
    flex: 1,
    padding: 10,
    color: "#2a2f43",
    fontWeight: "bold",
    marginTop: 15
  },
  body: {
    paddingTop: 0
  }
});

export default Panels;

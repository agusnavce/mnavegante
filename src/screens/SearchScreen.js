import React from "react";
import { View, Dimensions, StyleSheet, Image } from "react-native";
import Cards from "../components/Cards";
import SearchBar from "../components/SearchBar";
import { filter } from "fuzzaldrin-plus";
import { NavigationEvents } from "react-navigation";
import { fetchAllData } from "../actions";
import { connect } from "react-redux";
import Spinner from "../components/Spinner";

class SearchScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  state = {
    search: "",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  };

  renderCards = () => {
    let spin = this.props.loading || false;
    let items = this.props.data;
    if (spin === true) {
      return <Spinner />;
    } else {
      return (
        <Cards
          items={items.filter(paint => {
            if (this.state.search.length === 0) return true;
            const name = filter([paint.title], this.state.search);
            return name.length === 1;
          })}
        />
      );
    }
  };

  searchFilter(text) {
    this.setState({ search: text });
  }
  componentWillMount() {
    this.props.fetchAllData();
  }
  render() {
    return (
      <View>
        <NavigationEvents
          onWillBlur={() => {
            this.setState({ search: "" });
          }}
        />
        <View style={styles.backgroundImageContainer}>
          <Image
            style={{ width: this.state.width, height: this.state.height }}
            resizeMode={"cover"}
            source={require("../../assets/images/picasso_3.png")}
          />
        </View>
        <View style={{ marginTop: 26, marginBottom: 26 }}>
          <SearchBar onChangeText={text => this.searchFilter(text)} />
          {this.renderCards()}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data.all || [],
    loading: state.data.loading
  };
};

export default connect(
  mapStateToProps,
  { fetchAllData }
)(SearchScreen);

const styles = StyleSheet.create({
  backgroundImageContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});

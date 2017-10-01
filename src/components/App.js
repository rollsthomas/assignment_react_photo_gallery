import React, { Component } from "react";
import "../reset.css";
import "../App.css";
import Search from "./Search";
import Photos from "./Photos";
import Footer from "./Footer";
import Filter from "./Filter";
import Sort from "./Sort";
import InstagramResponse from "../photos";

var data = InstagramResponse.data;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photosArray: data
    };
  }

  handleFilter = filter_name => {
    let newArray = [];
    if (filter_name === "all") {
      this.setState({
        photosArray: data
      });
    } else {
      newArray = data
        .map(card => {
          if (card.filter === filter_name) {
            return card;
          }
        })
        .filter(item => {
          return typeof item === "object";
        });
      this.setState({
        photosArray: newArray
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Instagram Viewer</h1>
        <Search />
        <div id="filter-wrapper">
          <Filter filterSelected={this.handleFilter} />
          <Sort />
        </div>
        <Photos
          data={this.state.photosArray}
          filter={this.state.filter_selected}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
